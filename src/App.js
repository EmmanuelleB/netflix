import "./App.css";
import moviesList from "./moviesList.json"
import Header from "./components/header/Header";
import Section from "./components/section/Section";


function App() {
  return (
    <div >   
      <Header />
      {/* <Section category={moviesList[0].category} images={moviesList[0].images} />
      <Section category={moviesList[1].category} images={moviesList[1].images} />
      <Section category={moviesList[2].category} images={moviesList[2].images} />
      <Section category={moviesList[3].category} images={moviesList[3].images} /> */}
      
      {moviesList.map((item,index)=>{
        return (
          <Section key={index} category={item.category} images={item.images} />
        )
        
      })}
      
    </div>
  );
}

export default App;
