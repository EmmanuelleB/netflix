import "./App.css";
import moviesList from "./moviesList.json";
import Header from "./components/header/Header";
import Section from "./components/section/Section";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faChevronRight, faChevronLeft } from "@fortawesome/free-solid-svg-icons";
library.add(faChevronRight, faChevronLeft);

function App() {
  return (
    <div>
      <Header />

      {moviesList.map((item, index) => {
        return <Section key={index} category={item.category} images={item.images} />;
      })}
    </div>
  );
}

export default App;
