import About from "./Component/About";
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
    </div>
  );
};

export default App;
