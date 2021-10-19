import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMoon as farMoon } from "@fortawesome/free-regular-svg-icons"
import { faMoon as fasMoon } from "@fortawesome/free-solid-svg-icons"
import { Component } from "react"
import { library } from "@fortawesome/fontawesome-svg-core"
import styled from "styled-components"

//Creating Icon library
library.add(farMoon, fasMoon)

const Button = styled.button`
  background: transparent;
  color : ${({ theme }) => theme.text};
  padding: 5px 10px;
  display : flex;
  align-items : center;
  justify-content : space-between;
  width : 100px;
  border : none;
  cursor : pointer;
  border-radius : 20px;
  transition : ease-in-out 200ms;
  &:hover{
      background : ${({theme})=>theme.body};
      color : ${({theme})=>theme.text};
  }
`



export default class NightMode extends Component {
  render() {
    return (
      <Button onClick={this.props.themeToggler} theme={this.props.theme}>
          <FontAwesomeIcon icon={["far", "moon"]} />       
        <span> Dark Mode</span>
      </Button>
    )
  }
}
