import "./App.css";
import moviesList from "./moviesList.json"
import Header from "./components/header/Header";
import Section from "./components/section/Section";


function App() {
  return (
    <div className="container">   
      <Header />
      
      {moviesList.map((item,index)=>{
        return (
          <Section key={index} category={item.category} images={item.images} />
        )
        
      })}
      
    </div>
  );
}

export default App;
