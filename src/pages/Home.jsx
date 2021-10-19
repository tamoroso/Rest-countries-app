import { Component } from "react"
import styled from "styled-components"
import Banner from "../components/Banner"
import CountryCards from "../components/CountryCards"
import NavBar from "../components/NavBar"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../utils/style/Themes"
import { GlobalStyle } from "../utils/style/GlobalStyle"

const StyledHome = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.body};
`

const CountryCardsWrapper = styled.section`
  padding: 0px 80px;
`

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = { theme: 'light' }
  }

  themeToggler = () => {
    if (this.state.theme === "light") {
      this.setState({ theme: "dark" })
    } else {
      this.setState({ theme: "light" })
    }
  }

  componentDidMount() {
    let theme = JSON.parse(localStorage.getItem('theme'))
    if (theme) {
      this.setState({theme})
    }
  }

  componentDidUpdate(prevProps, prevStates) {
    const json = JSON.stringify(this.state.theme)
    localStorage.setItem('theme', json)
  }


  render() {
    return (
      <ThemeProvider
        theme={this.state.theme === "light" ? lightTheme : darkTheme}
      >
        <>
          <GlobalStyle />
          <StyledHome>
            <Banner themeToggler={this.themeToggler} theme={this.state.theme} />
            <NavBar theme={this.state.theme} />
            <CountryCardsWrapper>
              <CountryCards theme={this.state.theme} />
            </CountryCardsWrapper>
          </StyledHome>
        </>
      </ThemeProvider>
    )
  }
}
