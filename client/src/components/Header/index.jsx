import './style.css'
import logo from '../../assets/logo.png';

const Header = () => {
    return (
        <div className='header'>
            <div className='header__logo'>
                <img src={logo} alt="logo" />
            </div>
            <button>Sign Up Free</button> 

        </div>
    )
}

export default Header;