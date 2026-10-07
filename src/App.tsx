import React, { useState, Suspense, lazy } from 'react';
import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import { CustomCursor } from './components/CustomCursor';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { BackToTop } from './components/BackToTop';
import { EligibilityModal } from './components/EligibilityModal';
import { ScrollToTop } from './components/ScrollToTop';
import { getFirstUser } from "./services/userService";// new import for userService
import AdminLoginPage from "./pages/AdminLoginPage";// new import for AdminLoginPage
import AdminDashboardPage from "./pages/AdminDashboardPage";
import { ProtectedAdminRoute } from "./components/ProtectedAdminRoute";
// Eagerly loaded HomePage for instant FCP and LCP
import { HomePage } from './pages/HomePage';

// Lazy-loaded subpages for code-splitting and Core Web Vitals optimization
const AboutPage = lazy(() => import('./pages/AboutPage').then(m => ({ default: m.AboutPage })));
const ServicesPage = lazy(() => import('./pages/ServicesPage').then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = lazy(() => import('./pages/ServiceDetailPage').then(m => ({ default: m.ServiceDetailPage })));
const CountriesPage = lazy(() => import('./pages/CountriesPage').then(m => ({ default: m.CountriesPage })));
const ProcessPage = lazy(() => import('./pages/ProcessPage').then(m => ({ default: m.ProcessPage })));
const TestimonialsPage = lazy(() => import('./pages/TestimonialsPage').then(m => ({ default: m.TestimonialsPage })));
const FAQPage = lazy(() => import('./pages/FAQPage').then(m => ({ default: m.FAQPage })));
const ContactPage = lazy(() => import('./pages/ContactPage').then(m => ({ default: m.ContactPage })));
const PrivacyPage = lazy(() => import('./pages/PrivacyPage').then(m => ({ default: m.PrivacyPage })));
const TermsPage = lazy(() => import('./pages/TermsPage').then(m => ({ default: m.TermsPage })));

export function App() {
  useEffect(() => {
    const loadUser = async () => {
      try{
        const user=await getFirstUser();
        console.log("Firestore user:", user);
      }
      catch(error){
        console.error("Failed to load user:", error);
      }
  }
    loadUser();
}, []);
  const [isAssessmentOpen, setIsAssessmentOpen] = useState(false);
  const [assessmentService, setAssessmentService] = useState('Profile Assessment');
  const [assessmentCountry, setAssessmentCountry] = useState('Canada');

  const handleOpenAssessment = (service?: string, country?: string) => {
    if (service) setAssessmentService(service);
    if (country) setAssessmentCountry(country);
    setIsAssessmentOpen(true);
  };

  const handleSelectCountry = (countryName: string) => {
    setAssessmentCountry(countryName);
    setIsAssessmentOpen(true);
  };

  return (
    <ThemeProvider>
      <Router>
        <ScrollToTop />
        {/* Subtle Luxury Cursor */}
        <CustomCursor />

        <div className="flex flex-col min-h-screen bg-[var(--bg-canvas)] text-[var(--text-primary)] transition-colors duration-400">
          {/* Sticky Luxury Navbar */}
          <Navbar onOpenAssessment={() => handleOpenAssessment()} />

          {/* Main Routed Content */}
          <main id="main-content" className="flex-1">
            <Suspense fallback={<div className="min-h-[50vh] bg-[var(--bg-canvas)]" />}>
              <Routes>
                <Route
                  path="/"
                  element={
                    <HomePage
                      onOpenAssessment={() => handleOpenAssessment()}
                    onSelectCountry={handleSelectCountry}
                  />
                }
              />
              <Route
                path="/about"
                element={<AboutPage onOpenAssessment={() => handleOpenAssessment()} />}
              />
              <Route
                path="/services"
                element={<ServicesPage onOpenAssessment={() => handleOpenAssessment()} />}
              />
              <Route
                path="/services/:slug"
                element={<ServiceDetailPage onOpenAssessment={() => handleOpenAssessment()} />}
              />
              {/* Alias routes from original reference site for seamless backward compatibility */}
              <Route
                path="/pr"
                element={<Navigate to="/services/pr" replace />}
              />
              <Route
                path="/migration"
                element={<Navigate to="/services" replace />}
              />
              <Route
                path="/about-us"
                element={<Navigate to="/about" replace />}
              />
              <Route
                path="/contact-us"
                element={<Navigate to="/contact" replace />}
              />
              <Route
                path="/countries"
                element={
                  <CountriesPage
                    onSelectCountry={handleSelectCountry}
                    onOpenAssessment={() => handleOpenAssessment()}
                  />
                }
              />
                <Route
                  path="/admin"
                  element={<Navigate to="/admin/dashboard" replace />}
                />
                <Route
                  path="/admin/login"
                  element={<AdminLoginPage />}
                />
                <Route
                  path="/admin/dashboard"
                  element={
                    <ProtectedAdminRoute>
                      <AdminDashboardPage />
                    </ProtectedAdminRoute>
                  }
                />
              <Route
                path="/process"
                element={<ProcessPage onOpenAssessment={() => handleOpenAssessment()} />}
              />
              <Route
                path="/testimonials"
                element={<TestimonialsPage onOpenAssessment={() => handleOpenAssessment()} />}
              />
              <Route
                path="/reviews"
                element={<Navigate to="/testimonials" replace />}
              />
              <Route
                path="/faq"
                element={<FAQPage onOpenAssessment={() => handleOpenAssessment()} />}
              />
              <Route
                path="/contact"
                element={<ContactPage />}
              />
              <Route
                path="/privacy"
                element={<PrivacyPage />}
              />
              <Route
                path="/terms"
                element={<TermsPage />}
              />
              {/* Catch-all redirect to Home */}
              <Route
                path="*"
                element={<Navigate to="/" replace />}
              />
            </Routes>
          </Suspense>
        </main>

          {/* Global Floating Elements */}
          <BackToTop />

          {/* Global Assessment Modal */}
          <EligibilityModal
            isOpen={isAssessmentOpen}
            onClose={() => setIsAssessmentOpen(false)}
            defaultService={assessmentService}
            defaultCountry={assessmentCountry}
          />

          {/* Luxury Footer */}
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
