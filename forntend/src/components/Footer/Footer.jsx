import { assets } from '../../assets/assets'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className='footer-content'>
    <div className='footer-content-left'>
    <img src={assets.logo} alt="/"/>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
    <div className='footer-social-icons'>
      <img src={assets.facebook_icon} alt=''/>
      <img src={assets.twitter_icon} alt=''/>
      <img src={assets.linkedin_icon} alt=''/>

    </div>
    </div>
    <div className="footer-content-center">
    <h2>FoodPanda</h2>
    <ul>
    <li>Home</li>
    <li>About us</li>
    <li>Delivery</li>
    <li>Privacy policy</li>
    </ul>
    </div>
    <div className='footer-content-right'>
    <h2>GET IN TOUCH</h2>
    <ul>
    <li>+1-234578909</li>
    <li>contact@foodpanda.com</li>
    </ul>
    </div>
    
    </div>
    <hr/>
    <p className='footer-copyright'>CopyRight 2024 © FoodPanda.com - All Right Reserved</p>
      
    </div>
  )
}

export default Footer
