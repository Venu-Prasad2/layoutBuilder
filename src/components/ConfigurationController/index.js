import ConfigurationContext from '../../context/ConfigurationContext'
import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeft,
        showRight,
        onToggleShowContent,
        onToggleShowLeft,
        onToggleShowRight,
      } = value

      const onChangeContent = () => {
        onToggleShowContent()
      }

      const onChangeLeft = event => {
        onToggleShowLeft(event.target.value)
      }

      const onChangeRight = event => {
        onToggleShowRight(event.target.value)
      }

      return (
        <div className="c-c-container">
          <div className="text">
            <h1 className="c-c-heading">Layout</h1>
            <div className="checkbox-group">
              <div className="each-checkbox">
                <input
                  type="checkbox"
                  onChange={onChangeContent}
                  checked={showContent}
                  id="content"
                />
                <label className="label" htmlFor="content">
                  Content
                </label>
              </div>
              <div className="each-checkbox">
                <input
                  type="checkbox"
                  onChange={onChangeLeft}
                  checked={showLeft}
                  id="left"
                />
                <label className="label" htmlFor="left">
                  Left Navbar
                </label>
              </div>
              <div className="each-checkbox">
                <input
                  type="checkbox"
                  onChange={onChangeRight}
                  checked={showRight}
                  id="right-box"
                />
                <label className="label" htmlFor="right-box">
                  Right Navbar
                </label>
              </div>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
