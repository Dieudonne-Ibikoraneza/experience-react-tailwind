import Plan from './components/Plan';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Offers from './components/Offers';
import Rooms from './components/Rooms';
import ImageSlider from './components/ImageSlider';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Offers />
      <Plan />
      <Rooms />
      <ImageSlider />
      <Footer />
    </div>
  );
}

export default App;
