import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import DemoClass from './components/DemoClass';
import EnquiryForm from './components/EnquiryForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <DemoClass />
      <EnquiryForm />
      <Footer />
    </div>
  );
}

export default App;
