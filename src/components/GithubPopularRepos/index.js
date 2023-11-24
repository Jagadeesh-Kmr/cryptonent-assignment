import {Component} from 'react'
import Loader from 'react-loader-spinner'

import RepositoryItem from '../RepositoryItem'

import './index.css'

const apiStatusConstants = {
  initial: 'Initial',
  pending: 'pending',
  success: 'Success',
  failure: 'failure',
}

class GithubPopularRepos extends Component {
  state = {
    apiStatus: apiStatusConstants.initial,
    reposData: [],
  }

  componentDidMount() {
    this.getUrlData()
  }

  getUrlData = async () => {
    this.setState({
      apiStatus: apiStatusConstants.pending,
    })

    const url = 'https://randomuser.me/api/?page=1&results=1&seed=abc'
    const response = await fetch(url)

    if (response.ok === true) {
      const fetchedData = await response.json()

      const updatedOtherDetails = fetchedData.results.map(eachData => ({
        id: eachData.id,
        name: eachData.name,
        gender: eachData.gender,
        phone: eachData.phone,
        picture: eachData.picture,
      }))

      this.setState({
        apiStatus: apiStatusConstants.success,
        reposData: updatedOtherDetails,
      })
    } else {
      this.setState({
        apiStatus: apiStatusConstants.failure,
      })
    }
  }

  renderLoadingView = () => (
    <div data-testid="loader">
      <Loader color="#0284c7" height={80} type="ThreeDots" width={80} />
    </div>
  )

  renderFailureView = () => (
    <div className="failure-view-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png"
        alt="failure view"
        className="failure-view-image"
      />
      <h1 className="error-message">Something Went Wrong</h1>
    </div>
  )

  renderSuccessView = () => {
    const {reposData} = this.state

    return (
      <ul className="repositories-ul-list">
        {reposData.map(eachData => (
          <RepositoryItem key={eachData.id} repositoryDetails={eachData} />
        ))}
      </ul>
    )
  }

  renderApiCall = () => {
    const {apiStatus} = this.state

    switch (apiStatus) {
      case apiStatusConstants.success:
        return this.renderSuccessView()
      case apiStatusConstants.failure:
        return this.renderFailureView()
      case apiStatusConstants.pending:
        return this.renderLoadingView()
      default:
        return null
    }
  }

  render() {
    return (
      <div className="app-container">
        <div className="responsive-container">{this.renderApiCall()}</div>
      </div>
    )
  }
}

export default GithubPopularRepos
