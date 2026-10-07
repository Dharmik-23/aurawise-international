import { FormEvent, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { loginWithFirestore } from "../services/userService";

export default function AdminLoginPage() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    if (sessionStorage.getItem("adminLoggedIn") === "true") {
      navigate("/admin/dashboard", { replace: true });
    }
  }, [navigate]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!username.trim() || !password) {
      setError("Please enter your username and password.");
      return;
    }

    try {
      setLoading(true);
      const success = await loginWithFirestore(username.trim(), password);

      if (!success) {
        setError("Invalid username or password.");
        return;
      }

      sessionStorage.setItem("adminLoggedIn", "true");
      navigate("/admin/dashboard");
    } catch (err: any) {
      console.error("Admin login error:", err);
      setError("Unable to login. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] flex items-center justify-center px-6 py-12">
      <div className="w-full max-w-md">
        {/* Branding */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full border border-[var(--accent-gold)] flex items-center justify-center">
              <span className="text-2xl font-serif text-[var(--accent-gold)]">
                A
              </span>
            </div>
          </div>

          <h1 className="text-3xl md:text-4xl font-serif tracking-wide">
            AURAWISE
          </h1>

          <p className="mt-2 text-sm tracking-[0.25em] uppercase opacity-70">
            International
          </p>
        </div>

        {/* Login Card */}
        <div className="rounded-2xl border border-white/10 bg-black/20 backdrop-blur-md p-8 shadow-2xl">
          <div className="mb-8">
            <h2 className="text-2xl font-serif">
              Admin Login
            </h2>

            <p className="mt-2 text-sm opacity-60">
              Sign in to access the AURAWISE administration panel.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Username */}
            <div>
              <label
                htmlFor="admin-username"
                className="block text-sm mb-2 opacity-80"
              >
                Username
              </label>

              <input
                id="admin-username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                autoComplete="username"
                disabled={loading}
                className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 outline-none transition focus:border-[var(--accent-gold)] disabled:opacity-50"
              />
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="admin-password"
                className="block text-sm mb-2 opacity-80"
              >
                Password
              </label>

              <div className="relative">
                <input
                  id="admin-password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  disabled={loading}
                  className="w-full rounded-lg border border-white/15 bg-white/5 px-4 py-3 pr-20 outline-none transition focus:border-[var(--accent-gold)] disabled:opacity-50"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  disabled={loading}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-xs uppercase tracking-wide opacity-60 hover:opacity-100"
                >
                  {showPassword ? "Hide" : "Show"}
                </button>
              </div>
            </div>

            {/* Error */}
            {error && (
              <div
                role="alert"
                className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-300"
              >
                {error}
              </div>
            )}

            {/* Login Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-lg bg-[var(--accent-gold)] px-5 py-3 font-medium tracking-wide text-black transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        </div>

        {/* Footer */}
        <p className="mt-6 text-center text-xs opacity-40">
          AURAWISE International · Admin Portal
        </p>
      </div>
    </div>
  );
}