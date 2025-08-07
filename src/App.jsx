import About from "./Component/About";
import Contact from "./Component/Contact";
import Header from "./Component/Header";
import Projects from "./Component/Projects";
import Testimonails from "./Component/Testimonails";

const App = () => {
  return (
    <div className="w-full overflow-hidden">
      <Header />
      <About />
      <Projects />
      <Testimonails />
      <Contact />
    </div>
  );
};

export default App;
