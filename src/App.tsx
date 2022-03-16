import Build from "./components/builds/Build";
import Footer from "./components/footer/Footer";
import Gallery from "./components/gallery/Gallery";
import Hero from "./components/hero/Hero";
import Info from "./components/info/Info";
import Navbar from "./components/navbar/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Info />
      <Build />
      <Gallery />
      <Footer />
    </div>
  );
};

export default App;
