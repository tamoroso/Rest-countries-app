import { Component } from "react"
import styled from "styled-components"
import Banner from "../components/Banner"
import CountryCards from "../components/CountryCards"
import NavBar from "../components/NavBar"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../utils/style/Themes"
import { GlobalStyle } from "../utils/style/GlobalStyle"
import { ApiContext } from "../context/ApiContext"

const StyledHome = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.body};
`

const CountryCardsWrapper = styled.section`
  padding: 0px 80px;
  display: flex;
  flex-wrap: wrap;
  column-gap: 80px;
  row-gap: 80px;
`

export default class Home extends Component {
  static contextType = ApiContext
  constructor(props) {
    super(props)
    this.state = {
      theme: "light",
    }
  }

  themeToggler = () => {
    if (this.state.theme === "light") {
      this.setState({ theme: "dark" })
    } else {
      this.setState({ theme: "light" })
    }
  }

  componentDidMount() {
    let theme = JSON.parse(localStorage.getItem("theme"))
    if (theme) {
      this.setState({ theme: theme })
    }
  }

  componentDidUpdate(prevProps, prevStates) {
    const json = JSON.stringify(this.state.theme)
    localStorage.setItem("theme", json)
  }

  render() {
    const { filterItems, handleChange, handleClick, setCurrentCountry } =
      this.context
    console.log(this.context)
    return (
      <ThemeProvider
        theme={this.state.theme === "light" ? lightTheme : darkTheme}
      >
        <>
          <GlobalStyle />
          <StyledHome>
            <Banner themeToggler={this.themeToggler} theme={this.state.theme} />
            <NavBar
              theme={this.state.theme}
              handleClick={handleClick}
              handleChange={handleChange}
            />
            <CountryCardsWrapper>
              {filterItems.map((country) => {
                return (
                  <CountryCards
                    name={country.name.common}
                    flag={country.flags.png}
                    region={country.region}
                    capital={country.capital}
                    population={country.population}
                    key={country.cca3}
                    countryCode={country.cca3}
                    setCurrentCountry={setCurrentCountry}
                  />
                )
              })}
            </CountryCardsWrapper>
          </StyledHome>
        </>
      </ThemeProvider>
    )
  }
}
