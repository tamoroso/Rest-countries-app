import React, { Component } from "react"
import styled from "styled-components"
import DropDownFilter from "./DropDownFilter"
import { navBarShadow, navBarStyle } from "../utils/style/atoms"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import {device} from '../utils/style/device'

library.add(faSearch)

const NavBarWrapper = styled.div`
  padding: 50px 80px;
  display: flex;
  justify-content: space-between;

  @media ${device.tablet}{
    flex-direction : column;
    padding : 20px 20px;
  }
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


    @media ${device.tablet}{
      padding : 20px 30px;
      margin : 10px 0px 40px 0px; 
    }

    @media ${device.laptop}{
      width : 300px;
    }
  }
`
const SearchIcon = styled(FontAwesomeIcon)`
  color: ${({ theme }) => theme.text};
  position: absolute;
  left: 0;
  padding: 0px 10px;

  @media ${device.tablet}{
    bottom : 50%;
    transform : translate(0px, -50%);
  }
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
