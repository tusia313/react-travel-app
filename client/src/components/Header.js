import logo from '../images/icon_black.png'
import avatar from '../images/logo.jpg'
import {Link} from 'react-router-dom'
const Header = () => {
    return(
        <header>
            <div className = "header-container">
                <div className = "header-item-container">
                    <Link to = {'/'}><img className = "logo" src = {logo} alt = "Holy adventure"></img></Link>
                </div>
                <div className = "header-item-container">
                    <p>⌽ Log out</p>
                    <p>Language</p>
                    <img className = "avatar" src = {avatar} alt = "User picture"></img>
                </div>
            </div>
        </header>
    )
}

export default Header