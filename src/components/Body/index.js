import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeft, showRight} = value
      return (
        <div className="body-container">
          {showLeft ? (
            <div className="left-bar">
              <h1 className="left-heading">Left Navbar Menu</h1>
              <ul className="list-items">
                <li className="each-item">Item 1</li>
                <li className="each-item">Item 2</li>
                <li className="each-item">Item 3</li>
                <li className="each-item">Item 4</li>
              </ul>
            </div>
          ) : null}
          {showContent ? (
            <div className="content-container">
              <h1 className="content-heading">Content</h1>
              <p className="content-para">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                elusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim venlam.
              </p>
            </div>
          ) : null}
          {showRight ? (
            <div className="right-bar">
              <h1 className="right-heading">Right Navbar</h1>
              <div className="box-container">
                <p className="box">Ad 1</p>
                <p className="box">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)
export default Body
