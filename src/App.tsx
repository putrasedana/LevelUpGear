import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./contexts/AuthContext";
import { ToastProvider } from "./contexts/ToastContext";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import Reviews from "./pages/Reviews";
import About from "./pages/About";
import Contact from "./pages/Contact";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import Disclaimer from "./pages/Disclaimer";
import ProductDetail from "./pages/ProductDetail";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import AddProduct from "./pages/AddProduct";
import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  return (
    <AuthProvider>
      <ToastProvider>
        <Router>
          <ScrollToTop />
          <Routes>
            {/* Auth pages without Header/Footer */}
            <Route
              path="/signin"
              element={
                <div className="min-h-screen bg-gray-900 text-white">
                  <SignIn />
                </div>
              }
            />
            <Route
              path="/signup"
              element={
                <div className="min-h-screen bg-gray-900 text-white">
                  <SignUp />
                </div>
              }
            />
            {/* Admin pages without Header/Footer */}
            <Route
              path="/admin"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <Admin />
                </ProtectedRoute>
              }
            />
            <Route
              path="/admin/add-product"
              element={
                <ProtectedRoute requireAdmin={true}>
                  <AddProduct />
                </ProtectedRoute>
              }
            />
            {/* All other pages with Header/Footer */}
            <Route
              path="*"
              element={
                <div className="min-h-screen bg-gray-900 text-white">
                  <Header />
                  <main>
                    <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/reviews" element={<Reviews />} />
                      <Route path="/about" element={<About />} />
                      <Route path="/contact" element={<Contact />} />
                      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                      <Route
                        path="/terms-of-service"
                        element={<TermsOfService />}
                      />
                      <Route path="/disclaimer" element={<Disclaimer />} />
                      <Route path="/product/:id" element={<ProductDetail />} />
                    </Routes>
                  </main>
                  <Footer />
                </div>
              }
            />
          </Routes>
        </Router>
      </ToastProvider>
    </AuthProvider>
  );
}

export default App;
