import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {gender} = repositoryDetails
  return (
    <li>
      <div className="details-container">
        <img
          src="https://randomuser.me/api/portraits/women/88.jpg"
          alt="profile"
          className="profile-img"
        />

        <div className="person-details">
          <p className="name">First Name Last Name</p>
          <p className="gender-phone">{gender}</p>
          <p className="gender-phone">Phone Number</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
