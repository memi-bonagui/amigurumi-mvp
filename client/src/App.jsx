import Banner from "./components/Banner";
import Menu from "./components/Menu";
import Form from "./components/Form";
import PatternCard from "./components/PatternCard";
import PatternGallery from "./components/PatternGallery";
import "./App.css";

function App() {
  return (
    <div>
      <Banner />
      <Menu />
      <Form />
      <PatternCard />
      <PatternGallery />
    </div>
  );
}

export default App;
