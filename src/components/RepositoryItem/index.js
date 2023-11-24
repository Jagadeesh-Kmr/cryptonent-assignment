import './index.css'

const RepositoryItem = props => {
  const {repositoryDetails} = props
  const {name, gender, phone, picture} = repositoryDetails
  return (
    <li>
      <div className="details-container">
        <img src={picture.large} alt="profile-lg" className="profile-img-lg" />
        <img src={picture.medium} alt="profile-md" className="profile-img-md" />

        <div className="person-details">
          <p className="name">
            {name.first} {name.last}
          </p>
          <p className="gender-phone">{gender}</p>
          <p className="gender-phone">{phone}</p>
        </div>
      </div>
    </li>
  )
}

export default RepositoryItem
