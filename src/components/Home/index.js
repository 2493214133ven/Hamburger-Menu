// Write your code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div className="home-container">
    <Header />
    <div className="home-logo-container">
      <img
        className="home-sm-logo"
        src="https://assets.ccbp.in/frontend/react-js/home-sm-img.png "
        alt="home"
      />
      <img
        className="home-lg-logo"
        src="https://assets.ccbp.in/frontend/react-js/home-lg-img.png"
        alt="home"
      />
    </div>
  </div>
)

export default Home
