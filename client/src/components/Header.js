import avatar from '../images/avatar.jpg'
import logo from '../images/logo_2.png'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header>
            <div className="header-container">
                <div className="header-item-container">
                    <Link to={'/'} ><img className="logo" src={logo} alt="ready-to-fly logo" />
                    
                    </Link>
                    <p className="logo-text">ready_to_fly</p>
                </div>
                <div className="header-item-container">
                    <p>log out</p>
                    <p>language</p>
                    <img className="avatar" src={avatar} alt="user avatar" />
                </div>
            </div>
        </header>
    )
}
export default Header