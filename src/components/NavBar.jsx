import React, { Component } from "react"
import styled from "styled-components"
import DropDownFilter from "./DropDownFilter"
import { navBarShadow, navBarStyle } from "../utils/style/atoms"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSearch } from "@fortawesome/free-solid-svg-icons"

library.add(faSearch)

const NavBarWrapper = styled.div`
  padding: 50px 80px;
  display: flex;
  justify-content: space-between;
`

const SearchWrapper = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  & input[type="text"] {
    color: ${({ theme }) => theme.text};
    background-color: ${({ theme }) => theme.elements};
    ${navBarStyle};
    ${navBarShadow};
    border: none;
    width: 400px;
    height: 100%;
    padding: 0px 30px;
  }
`
const SearchIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.text};
  position: absolute;
  left: 0;
  padding: 10px;
`

export default class NavBar extends Component {
  render() {
    return (
      <NavBarWrapper>
        <SearchWrapper>
          <input
            theme={this.props.theme}
            type="text"
            placeholder="Search for a country..."
            onChange={this.props.handleChange}
          ></input>
          <SearchIcon icon={"search"} />
        </SearchWrapper>
        <DropDownFilter theme={this.props.theme} handleClick={ this.props.handleClick}/>
      </NavBarWrapper>
    )
  }
}
