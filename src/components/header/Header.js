import "./Header.css"
import Logo from "./../../images/netflix.png"

const Header =()=>{
    return(
        <div className="header-container">
            <img src={Logo} alt="logo" />
        </div>
    )
}

export default Header