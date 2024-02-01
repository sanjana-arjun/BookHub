import {Link, withRouter} from 'react-router-dom'
import './index.css'

const NotFound = props => {
  const onClickBack = () => {
    const {history} = props
    history.replace('/')
  }

  return (
    <div className="container">
      <img
        src="https://res.cloudinary.com/dwtsapuyn/image/upload/v1645183805/Notfound_2_lyiwc7.png"
        alt="not found"
        className="image"
      />
      <h1 className="header">Page Not Found</h1>
      <p className="para">
        we are sorry, the page you requested could not be found, please go back
        to the homepage
      </p>
      <Link to="/">
        <button type="button" onClick={onClickBack} className="button">
          Go Back to Home
        </button>
      </Link>
    </div>
  )
}

export default withRouter(NotFound)
