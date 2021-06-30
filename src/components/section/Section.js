import "./Section.css"
import moviesList from "./../../moviesList.json"

const Section = ({category, images})=>{
    return(
        <div className="container-section">
        <h1>{category}</h1>
        <div>

        {images.map((image, index) => {
           return(
                <img key={index} src={image} alt="movies" />
                );
        })};

        </div>
   
        </div>

    )
}

export default Section