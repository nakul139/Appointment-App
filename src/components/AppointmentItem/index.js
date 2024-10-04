import './index.css'

const AppointmentItem = props => {
  const {appointmentDetails, toggledIsStarred} = props
  const {id, title, date, isStarred} = appointmentDetails
  const imgUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  const onClickStar = () => {
    toggledIsStarred(id)
  }
  return (
    <li className="appointment-item">
      <div className="header-container">
        <p className="heading">{title}</p>
        <button
          className="button"
          type="button"
          onClick={onClickStar}
          data-testid="star"
        >
          <img src={imgUrl} className="star" alt="star" />
        </button>
      </div>
      <p className="date">{date}</p>
    </li>
  )
}

export default AppointmentItem
