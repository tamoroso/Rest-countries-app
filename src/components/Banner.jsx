import { Component } from "react"
import NightMode from "./NightModeSwitcher"
import styled from "styled-components"

const Header = styled.header`
    background : white ;
    display : flex;
    padding : 20px 80px;
    justify-content : space-between;
    align-items : center;
    box-shadow : 0px 3px 5px lightgrey;
`

export default class Banner extends Component {
  render() {
    return (
      <Header>
        <h1>Where in the world?</h1>
        <NightMode />
      </Header>
    )
  }
}
