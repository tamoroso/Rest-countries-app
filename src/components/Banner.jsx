import { Component } from "react"
import NightMode from "./NightModeSwitcher"
import styled from "styled-components"
import { device } from "../utils/style/device"

const Header = styled.header`
  background: ${({ theme }) => theme.elements};
  display: flex;
  padding: 20px 80px;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0px 3px 5px ${({ theme }) => theme.shadow};

  @media ${device.tablet}{
    padding : 20px; 
  }
`

export default class Banner extends Component {
  render() {
    return (
      <Header theme={this.theme}>
        <h1>Where in the world?</h1>
        <NightMode themeToggler={this.props.themeToggler} />
      </Header>
    )
  }
}
