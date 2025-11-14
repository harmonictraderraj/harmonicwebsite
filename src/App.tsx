import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Loading from './components/Loading';
import ScrollToTop from './components/ScrollToTop';

// Lazy load all page components for code splitting
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const DemoClass = lazy(() => import('./pages/DemoClass'));
const Contact = lazy(() => import('./pages/Contact'));
const GetStarted = lazy(() => import('./pages/GetStarted'));
const PrivacyPolicy = lazy(() => import('./pages/PrivacyPolicy'));
const TermsOfService = lazy(() => import('./pages/TermsOfService'));

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/about"
          element={
            <Layout>
              <About />
            </Layout>
          }
        />
        <Route
          path="/services"
          element={
            <Layout>
              <Services />
            </Layout>
          }
        />
        <Route
          path="/demo-class"
          element={
            <Layout>
              <DemoClass />
            </Layout>
          }
        />
        <Route
          path="/contact"
          element={
            <Layout>
              <Contact />
            </Layout>
          }
        />
        <Route
          path="/get-started"
          element={
            <Layout>
              <GetStarted />
            </Layout>
          }
        />
        <Route
          path="/privacy-policy"
          element={
            <Layout>
              <PrivacyPolicy />
            </Layout>
          }
        />
        <Route
          path="/terms-of-service"
          element={
            <Layout>
              <TermsOfService />
            </Layout>
          }
        />
      </Routes>
    </Suspense>
    </>
  );
}

export default App;
