import React from 'react'

import PropTypes from 'prop-types'

const Navbar = (props) => {
  return (
    <>
      <header className="navbar-container">
        <header data-thq="thq-navbar" className="navbar-navbar-interactive">
          <img
            alt={props.logoAlt}
            src={props.logoSrc}
            className="navbar-image1"
          />
          <div data-thq="thq-navbar-nav" className="navbar-desktop-menu">
            <nav className="navbar-links">
              <span className="thq-body-small thq-link">{props.link1}</span>
              <span className="thq-body-small thq-link">{props.link2}</span>
              <span className="thq-body-small thq-link">{props.link3}</span>
              <span className="thq-body-small thq-link">{props.link4}</span>
              <span className="thq-body-small thq-link">{props.link5}</span>
            </nav>
            <div className="navbar-buttons">
              <button className="navbar-action1 thq-button-animated thq-button-filled">
                <span className="thq-body-small">Action 1</span>
              </button>
              <button className="navbar-action2 thq-button-animated thq-button-outline">
                <span className="thq-body-small">Action 2</span>
              </button>
            </div>
          </div>
          <div data-thq="thq-burger-menu" className="navbar-burger-menu">
            <svg viewBox="0 0 1024 1024" className="navbar-icon">
              <path d="M128 554.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 298.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667zM128 810.667h768c23.552 0 42.667-19.115 42.667-42.667s-19.115-42.667-42.667-42.667h-768c-23.552 0-42.667 19.115-42.667 42.667s19.115 42.667 42.667 42.667z"></path>
            </svg>
          </div>
          <div data-thq="thq-mobile-menu" className="navbar-mobile-menu">
            <div className="navbar-nav">
              <div className="navbar-top">
                <img
                  alt={props.logoAlt}
                  src={props.logoSrc}
                  className="navbar-logo"
                />
                <div data-thq="thq-close-menu" className="navbar-close-menu">
                  <svg viewBox="0 0 1024 1024" className="navbar-icon2">
                    <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
                  </svg>
                </div>
              </div>
              <nav className="navbar-links1">
                <span className="thq-body-small thq-link">{props.link1}</span>
                <span className="thq-body-small thq-link">{props.link2}</span>
                <span className="thq-body-small thq-link">{props.link3}</span>
                <span className="thq-body-small thq-link">{props.link4}</span>
                <span className="thq-body-small thq-link">{props.link5}</span>
              </nav>
            </div>
            <div className="navbar-buttons1">
              <button className="thq-button-filled">Login</button>
              <button className="thq-button-outline">Register</button>
            </div>
          </div>
        </header>
      </header>
      <style jsx>
        {`
          .navbar-container {
            width: 100%;
            display: flex;
            position: relative;
            justify-content: center;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-navbar-interactive {
            width: 100%;
            display: flex;
            max-width: var(--dl-size-size-maxwidth);
            align-items: center;
            padding-top: var(--dl-space-space-twounits);
            padding-left: var(--dl-space-space-threeunits);
            padding-right: var(--dl-space-space-threeunits);
            padding-bottom: var(--dl-space-space-twounits);
            justify-content: space-between;
          }
          .navbar-image1 {
            height: 3rem;
          }
          .navbar-desktop-menu {
            flex: 1;
            display: flex;
            justify-content: space-between;
          }
          .navbar-links {
            gap: var(--dl-space-space-twounits);
            flex: 1;
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
            flex-direction: row;
            justify-content: flex-start;
          }
          .navbar-buttons {
            gap: var(--dl-space-space-twounits);
            display: flex;
            align-items: center;
            margin-left: var(--dl-space-space-twounits);
          }
          .navbar-action1 {
            display: flex;
            flex-direction: row;
          }
          .navbar-action2 {
            display: flex;
            flex-direction: row;
          }
          .navbar-burger-menu {
            display: none;
          }
          .navbar-icon {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-mobile-menu {
            top: 0px;
            left: 0px;
            width: 100%;
            height: 100vh;
            display: none;
            padding: var(--dl-space-space-twounits);
            z-index: 100;
            position: absolute;
            flex-direction: column;
            background-color: var(--dl-color-theme-neutral-light);
          }
          .navbar-nav {
            display: flex;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-top {
            width: 100%;
            display: flex;
            align-items: center;
            margin-bottom: var(--dl-space-space-threeunits);
            justify-content: space-between;
          }
          .navbar-logo {
            height: 3rem;
          }
          .navbar-close-menu {
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .navbar-icon2 {
            width: var(--dl-size-size-xsmall);
            height: var(--dl-size-size-xsmall);
          }
          .navbar-links1 {
            gap: var(--dl-space-space-unit);
            flex: 0 0 auto;
            display: flex;
            align-self: flex-start;
            align-items: flex-start;
            flex-direction: column;
          }
          .navbar-buttons1 {
            gap: var(--dl-space-space-twounits);
            display: flex;
            margin-top: var(--dl-space-space-twounits);
            align-items: center;
          }
          @media (max-width: 767px) {
            .navbar-navbar-interactive {
              padding-left: var(--dl-space-space-twounits);
              padding-right: var(--dl-space-space-twounits);
            }
            .navbar-desktop-menu {
              display: none;
            }
            .navbar-burger-menu {
              display: flex;
              align-items: center;
              justify-content: center;
            }
          }
          @media (max-width: 479px) {
            .navbar-navbar-interactive {
              padding: var(--dl-space-space-unit);
            }
            .navbar-mobile-menu {
              padding: var(--dl-space-space-unit);
            }
          }
        `}
      </style>
    </>
  )
}

Navbar.defaultProps = {
  logoSrc:
    'https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/84ec08e8-34e9-42c7-9445-d2806d156403/fac575ac-7a41-484f-b7ac-875042de11f8?org_if_sml=1&force_format=original',
  logoAlt: 'Data Recovery Service',
  link1: 'Home',
  link4: 'Contact',
  link5: 'Link5',
  action1: 'Get Started',
  link3: 'About Us',
  link2: 'Services',
  action2: 'Learn More',
}

Navbar.propTypes = {
  logoSrc: PropTypes.string,
  logoAlt: PropTypes.string,
  link1: PropTypes.string,
  link4: PropTypes.string,
  link5: PropTypes.string,
  action1: PropTypes.string,
  link3: PropTypes.string,
  link2: PropTypes.string,
  action2: PropTypes.string,
}

export default Navbar
