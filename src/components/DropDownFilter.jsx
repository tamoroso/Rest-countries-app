import { Component } from "react"
import styled, { css } from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { library } from "@fortawesome/fontawesome-svg-core"
import { navBarStyle, navBarShadow } from "../utils/style/atoms"
import { device } from "../utils/style/device"

library.add(faAngleDown)

const dropDownWidth = css`
  width: 200px;
`

const options = ["Africa", "Americas", "Asia", "Europe", "Oceania"]

const DropDownWrapper = styled.div`
  position: relative;
  display: inline-block;
  ${dropDownWidth};
  @media ${device.tablet}{
    margin-bottom : 30px;
  }
`
const DropDownContent = styled.div`
  position: absolute;
  ${dropDownWidth};
  ${navBarStyle};
  ${navBarShadow};
  z-index: 1;
  margin-top: 3px;
`

const DropDownItems = styled.li`
  list-style: none;
  margin: 6px 20px;
  padding: 6px 0px;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
`

const DropDownButton = styled.button`
  ${dropDownWidth};
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: left;
  padding: 20px 30px;
  border: none;
  cursor: pointer;
  color: ${({ theme }) => theme.text};
  ${navBarStyle};
  ${navBarShadow};
`

export default class DropDownFilter extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isOpen: false,
    }
  }

  toggleDropDown = (e) => {
    this.setState((prevState) => ({ isOpen: !prevState.isOpen }))
  }

  render() {
    const isOpen = this.state.isOpen
    return (
      <DropDownWrapper>
        <DropDownButton onClick={this.toggleDropDown}>
          Filter by Region
          <FontAwesomeIcon icon={"angle-down"} />
        </DropDownButton>
        {isOpen ? (
          <DropDownContent>
            {options.map((country) => (
              <DropDownItems
                key={options.indexOf(country)}
                onClick={this.props.handleClick.bind(this, country)}
              >
                {country} {this.props.filter}
              </DropDownItems>
            ))}
          </DropDownContent>
        ) : null}
      </DropDownWrapper>
    )
  }
}
