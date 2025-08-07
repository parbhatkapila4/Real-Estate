import About from "./Component/About";
import Contact from "./Component/Contact";
import Footer from "./Component/Footer";
import Header from "./Component/Header";
import Projects from "./Component/Projects";
import Testimonails from "./Component/Testimonails";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <ToastContainer />
      <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
