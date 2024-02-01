import {FaGoogle, FaInstagram, FaTwitter, FaYoutube} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="container">
    <div>
      <FaGoogle className="icon" />
      <FaInstagram className="icon" />
      <FaTwitter className="icon" />
      <FaYoutube className="icon" />
    </div>
    <p className="para">Contact us</p>
  </div>
)
export default Footer
