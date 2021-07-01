import "./Section.css"
import moviesList from "./../../moviesList.json"

const Section = ({category, images})=>{
    
    const altMovies = (str)=>{
        let array = str.split("/");
        let altStr = array[array.length-1];
        return altStr;
    }

    return(
        <div className="container-section">
        <h1>{category}</h1>
        <div>
        {/* <img src={moviesList[0].images[0]} alt="movies"/>
        <img src={moviesList[0].images[1]} alt="movies"/>
        <img src={moviesList[0].images[2]} alt="movies"/> */}

        {images.map((image, index) => {
           return(
                <img key={index} src={image} alt={altMovies(image)} />
                );
        })};

        </div>
   
        </div>

    )
}

export default Section