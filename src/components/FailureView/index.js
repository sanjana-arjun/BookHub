import './index.css'

const FailureView = props => {
  const {onClickTryAgin} = props

  const onClickTry = () => {
    onClickTryAgin()
  }
  return (
    <div className="container">
      <img
        src="https://res.cloudinary.com/df6fuyaqf/image/upload/v1706612091/Group_7522failureview_jeugx5.png"
        alt="failure view"
        className="image"
      />
      <p className="Para">Something went wrong, Please try again.</p>
      <button type="button" onClick={onClickTry} className="button">
        Try Again
      </button>
    </div>
  )
}

export default FailureView
