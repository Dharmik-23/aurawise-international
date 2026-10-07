import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  subscribeToEnquiries,
  getEnquiries,
  formatEnquiryDate,
  type Enquiry,
} from "../services/enquiryService";

export default function AdminDashboardPage() {
  const navigate = useNavigate();

  const [enquiries, setEnquiries] = useState<Enquiry[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [expandedMessages, setExpandedMessages] = useState<Record<string, boolean>>({});

  const toggleMessage = (id: string) => {
    setExpandedMessages((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  useEffect(() => {
    // Set up real-time listener using onSnapshot
    const unsubscribe = subscribeToEnquiries(
      (data) => {
        setEnquiries(data);
        setLoading(false);
        setError(null);
      },
      (err) => {
        console.error("Enquiries real-time subscription error:", err);
        setError(err.message || "Failed to load enquiries from Firestore.");
        setLoading(false);
      }
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const handleManualRefresh = async () => {
    try {
      setRefreshing(true);
      setError(null);
      const data = await getEnquiries();
      setEnquiries(data);
    } catch (err: any) {
      console.error("Manual refresh error:", err);
      setError(err?.message || "Failed to refresh enquiries.");
    } finally {
      setRefreshing(false);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("adminLoggedIn");
    navigate("/admin/login");
  };

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)]">
      {/* Header */}
      <header className="border-b border-white/10 px-6 py-5 sticky top-0 bg-[var(--bg-canvas)]/95 backdrop-blur-md z-30">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full border border-[var(--accent-gold)] flex items-center justify-center">
              <span className="font-serif text-[var(--accent-gold)] text-lg">A</span>
            </div>
            <div>
              <h1 className="text-xl sm:text-2xl font-serif tracking-wide">
                AURAWISE
              </h1>
              <p className="text-[10px] uppercase tracking-[0.25em] opacity-50">
                Admin Panel
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleLogout}
              className="rounded-lg border border-white/15 px-5 py-2 text-sm transition hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)]"
            >
              Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-10">
        {/* Welcome Section */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-serif">
              Welcome, Admin
            </h2>
            <p className="mt-1 text-sm sm:text-base opacity-60">
              Manage your AURAWISE International customer enquiries and website.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs border border-emerald-500/30 bg-emerald-500/10 text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Live Real-Time
            </span>

            <button
              onClick={handleManualRefresh}
              disabled={refreshing}
              className="rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-xs transition hover:border-[var(--accent-gold)] hover:text-[var(--accent-gold)] disabled:opacity-50"
            >
              {refreshing ? "Refreshing..." : "Refresh"}
            </button>
          </div>
        </div>

        {/* Dashboard Stat Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-10">
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-wider opacity-50 font-mono">
              Total Enquiries
            </div>
            <div className="mt-2 text-3xl font-serif text-[var(--accent-gold)]">
              {loading ? "..." : enquiries.length}
            </div>
            <p className="mt-1 text-xs opacity-50">
              Live from Firestore
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-wider opacity-50 font-mono">
              Database
            </div>
            <div className="mt-2 text-2xl font-serif">
              Firestore
            </div>
            <p className="mt-1 text-xs opacity-50">
              Collection: enquiries
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-wider opacity-50 font-mono">
              Website
            </div>
            <div className="mt-2 text-2xl font-serif">
              AURAWISE
            </div>
            <p className="mt-1 text-xs opacity-50">
              International
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
            <div className="text-xs uppercase tracking-wider opacity-50 font-mono">
              Admin Status
            </div>
            <div className="mt-2 text-2xl font-serif text-emerald-400">
              Active
            </div>
            <p className="mt-1 text-xs opacity-50">
              Logged in as admin
            </p>
          </div>
        </div>

        {/* Error Alert */}
        {error && (
          <div
            role="alert"
            className="mb-8 rounded-xl border border-red-500/30 bg-red-500/10 p-4 text-sm text-red-300"
          >
            <div className="font-semibold mb-1">Firestore Connection Notice:</div>
            <div>{error}</div>
          </div>
        )}

        {/* Enquiries Section */}
        <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6 sm:p-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-white/10 gap-3">
            <div>
              <h3 className="text-2xl font-serif">
                Customer Enquiries
              </h3>
              <p className="text-sm opacity-60 mt-0.5">
                Real-time enquiries submitted from the public website
              </p>
            </div>
            <div className="text-xs font-mono text-[var(--accent-gold)]">
              {enquiries.length} {enquiries.length === 1 ? "Record" : "Records"}
            </div>
          </div>

          {/* Enquiries Content */}
          <div className="mt-6">
            {loading ? (
              <div className="py-16 text-center">
                <div className="w-10 h-10 border-2 border-[var(--accent-gold)] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-sm opacity-60">Loading enquiries from Firestore...</p>
              </div>
            ) : enquiries.length === 0 ? (
              <div className="py-16 text-center">
                <div className="w-14 h-14 rounded-full border border-white/15 bg-white/5 flex items-center justify-center mx-auto mb-4 text-2xl opacity-40">
                  ✉
                </div>
                <p className="text-lg font-serif opacity-80">No enquiries found.</p>
                <p className="text-xs opacity-50 mt-1 max-w-sm mx-auto">
                  Enquiries submitted through the contact and assessment forms will automatically appear here.
                </p>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {enquiries.map((enquiry, idx) => (
                  <div
                    key={enquiry.id || idx}
                    className="rounded-xl border border-white/10 bg-black/25 p-5 sm:p-6 transition hover:border-[var(--accent-gold)]/60 hover:shadow-lg flex flex-col justify-between"
                  >
                    <div className="space-y-3">
                      {/* Card Header: Service badge & Date */}
                      <div className="flex items-start justify-between gap-3 border-b border-white/10 pb-3">
                        <span className="px-2.5 py-1 text-[11px] font-mono uppercase tracking-wider rounded border border-[var(--accent-gold)]/40 bg-[var(--accent-gold)]/10 text-[var(--accent-gold)] font-medium">
                          {enquiry.service || "General Inquiry"}
                        </span>
                        <span className="text-xs font-mono opacity-50 shrink-0">
                          {formatEnquiryDate(enquiry.createdAt)}
                        </span>
                      </div>

                      {/* Fields */}
                      <div className="space-y-2 text-sm pt-1">
                        <div>
                          <span className="text-xs uppercase tracking-wider opacity-50 font-mono block">
                            Name
                          </span>
                          <span className="font-medium text-base text-[var(--text-primary)]">
                            {enquiry.name || "—"}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <div>
                            <span className="text-xs uppercase tracking-wider opacity-50 font-mono block">
                              Email
                            </span>
                            <a
                              href={`mailto:${enquiry.email}`}
                              className="text-xs text-[var(--accent-gold)] hover:underline break-all"
                            >
                              {enquiry.email || "—"}
                            </a>
                          </div>

                          <div>
                            <span className="text-xs uppercase tracking-wider opacity-50 font-mono block">
                              Phone
                            </span>
                            <a
                              href={`tel:${enquiry.phone}`}
                              className="text-xs font-mono text-[var(--text-primary)] hover:text-[var(--accent-gold)]"
                            >
                              {enquiry.phone || "—"}
                            </a>
                          </div>
                        </div>

                        {enquiry.country && (
                          <div>
                            <span className="text-xs uppercase tracking-wider opacity-50 font-mono block">
                              Target Destination
                            </span>
                            <span className="text-xs text-[var(--text-primary)]">
                              {enquiry.country}
                            </span>
                          </div>
                        )}

                        <div>
                          <span className="text-xs uppercase tracking-wider opacity-50 font-mono block">
                            Message
                          </span>
                          {(() => {
                            const isExpanded = !!expandedMessages[enquiry.id];
                            const messageText = enquiry.message || "";
                            const isLongMessage = messageText.length > 120 || messageText.split("\n").length > 2;

                            return (
                              <div className="mt-1">
                                <div
                                  className={`text-xs sm:text-sm text-[var(--text-primary)]/85 bg-white/[0.02] border border-white/5 rounded-lg p-3 whitespace-pre-wrap leading-relaxed transition-all [scrollbar-width:thin] [scrollbar-color:rgba(201,164,92,0.4)_transparent] [&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-white/5 [&::-webkit-scrollbar-thumb]:bg-[var(--accent-gold)]/40 [&::-webkit-scrollbar-thumb]:rounded-full hover:[&::-webkit-scrollbar-thumb]:bg-[var(--accent-gold)]/70 ${
                                    isExpanded
                                      ? "max-h-60 overflow-y-auto pr-2"
                                      : isLongMessage
                                      ? "line-clamp-3 max-h-[4.75rem] overflow-hidden"
                                      : ""
                                  }`}
                                >
                                  {messageText || "No message provided."}
                                </div>

                                {isLongMessage && (
                                  <button
                                    type="button"
                                    onClick={() => toggleMessage(enquiry.id)}
                                    className="text-[11px] font-medium text-[var(--accent-gold)] hover:underline mt-1.5 inline-flex items-center gap-1 transition-colors cursor-pointer"
                                  >
                                    {isExpanded ? "View Less ▲" : "View More ▼"}
                                  </button>
                                )}
                              </div>
                            );
                          })()}
                        </div>
                      </div>
                    </div>

                    {/* Footer Quick Actions */}
                    <div className="pt-4 mt-4 border-t border-white/10 flex items-center justify-between text-xs opacity-60">
                      <span className="font-mono text-[10px] opacity-50">
                        ID: {enquiry.id.slice(0, 8)}...
                      </span>
                      <div className="flex gap-3">
                        <a
                          href={`mailto:${enquiry.email}`}
                          className="text-[var(--accent-gold)] hover:underline"
                        >
                          Email Client
                        </a>
                        <span>·</span>
                        <a
                          href={`tel:${enquiry.phone}`}
                          className="text-[var(--accent-gold)] hover:underline"
                        >
                          Call Client
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}