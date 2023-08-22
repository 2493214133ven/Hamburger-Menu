// Write your code here
import {Link} from 'react-router-dom'
import Popup from 'reactjs-popup'

import 'reactjs-popup/dist/index.css'

import {GiHamburgerMenu} from 'react-icons/gi'
import {IoMdClose} from 'react-icons/io'
import {AiFillHome} from 'react-icons/ai'
import {BsInfoCircleFill} from 'react-icons/bs'

import {Component} from 'react'

import './index.css'

class Header extends Component {
  render() {
    return (
      <>
        <Popup
          modal
          trigger={
            <div className="web-site-logo-react-icon-hamburger-container">
              <Link to="/">
                <img
                  className="website-logo"
                  src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
                  alt="website logo"
                />
              </Link>
              <button
                data-testid="hamburgerIconButton"
                type="button"
                className="hamburger-menu-btn"
              >
                <GiHamburgerMenu />
              </button>
            </div>
          }
          className="popup-content"
        >
          {close => (
            <div className="close-container">
              <div className="close-btn-card">
                <button
                  data-testid="closeButton"
                  type="button"
                  onClick={() => close()}
                  className="close-icon-btn"
                >
                  <IoMdClose />
                </button>
              </div>

              <ul className="link-p-ele-container">
                <li className="list">
                  <Link to="/" className="re-icon-card" onClick={() => close()}>
                    <AiFillHome className="icons" />
                    <p className="link-titles">Home</p>
                  </Link>
                </li>
                <li className="list">
                  <Link
                    to="/about"
                    className="re-icon-card"
                    onClick={() => close()}
                  >
                    <BsInfoCircleFill className="icons" />
                    <p className="link-titles">About</p>
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </Popup>
      </>
    )
  }
}

export default Header
