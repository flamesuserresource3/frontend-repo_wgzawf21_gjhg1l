import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ClientsMarquee from './components/ClientsMarquee';
import Features from './components/Features';

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Hero />
      <ClientsMarquee />
      <Features />
    </div>
  );
}

export default App;
