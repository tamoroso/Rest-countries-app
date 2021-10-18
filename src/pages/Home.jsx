import { Component } from "react"
import styled from "styled-components"
import Banner from "../components/Banner"
import CountryCards from "../components/CountryCards"
import NavBar from "../components/NavBar"
import colors from "../utils/style/Colors"

const StyledHome = styled.div`
  min-height: 100vh;
  background: ${colors.backgroundLight};
`

const CountryCardsWrapper = styled.section`
    padding : 0px 80px;
`

export default class Home extends Component {
  render() {
    return (
      <StyledHome>
        <Banner />
        <NavBar />
        <CountryCardsWrapper>
          <CountryCards />
        </CountryCardsWrapper>
      </StyledHome>
    )
  }
}
