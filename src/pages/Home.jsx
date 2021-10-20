import { Component } from "react"
import styled from "styled-components"
import Banner from "../components/Banner"
import CountryCards from "../components/CountryCards"
import NavBar from "../components/NavBar"
import { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../utils/style/Themes"
import { GlobalStyle } from "../utils/style/GlobalStyle"
const API_URL = "https://restcountries.com/v3.1/all"

const StyledHome = styled.div`
  min-height: 100vh;
  background: ${({ theme }) => theme.body};
`

const CountryCardsWrapper = styled.section`
  padding: 0px 80px;
  display : flex;
  flex-wrap : wrap;
  column-gap : 80px;
  row-gap : 80px
`

export default class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: "light",
      error: null,
      isLoaded: false,
      items: [],
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

    //fetch API data
    fetch(API_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          console.log(result)
          const countries = result
          console.log(
            countries.map((country) => {
              return country.flags.png
            })
          )
          this.setState({
            isLoaded: true,
            items: countries,
          })
          localStorage.setItem("countries", JSON.stringify(countries))
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          })
        }
      )
  }

  componentDidUpdate(prevProps, prevStates) {
    const json = JSON.stringify(this.state.theme)
    localStorage.setItem("theme", json)
  }

  render() {
    const countries = this.state.items
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
              {countries.map((country) => {
                return (
                  <CountryCards
                    name={country.name.common}
                    flag={country.flags.png}
                    region={country.region}
                    capital={country.capital}
                    population={country.population}
                    key={country.cca3}
                  />
                )
              })}
              {/* <CountryCards theme={this.state.theme} /> */}
            </CountryCardsWrapper>
          </StyledHome>
        </>
      </ThemeProvider>
    )
  }
}
