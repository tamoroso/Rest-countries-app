import { Component } from "react"
import { withRouter } from "react-router"
import { Link } from "react-router-dom"
import Banner from "../components/Banner"
import { ApiContext } from "../context/ApiContext"
import styled, { ThemeProvider } from "styled-components"
import { lightTheme, darkTheme } from "../utils/style/Themes"
import { GlobalStyle } from "../utils/style/GlobalStyle"
import { beautyfiedNumber } from "../utils/functions/beautyfiedNumber"
import { buttonStyle } from "../utils/style/atoms"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons"
import { device } from "../utils/style/device"

library.add(faArrowLeft)

const CountrySection = styled.section`
  padding: 0px 80px;

  @media ${device.tablet} {
    padding: 0px 20px;
  }
`

const ReturnLink = styled(Link)`
  text-decoration: none;
  margin: 50px 0px;
  display: inline-block;
  & button {
    min-width: 100px;
    padding: 6px 10px;
    ${buttonStyle}
  }
`

const ArrowIcon = styled(FontAwesomeIcon)`
  padding-right: 10px;
`

const CountryWrapper = styled.div`
  display: flex;

  @media ${device.tablet} {
    flex-direction: column;
  }
`

const Flag = styled.img`
  width: 50%;
  heigth: auto;

  @media ${device.tablet} {
    width: 100%;
    height: auto;
  }
`

const DetailsWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  & ul {
    list-style: none;
    margin: 0;
    padding: 0px 10px 0px 0px;
    & li {
      padding: 5px 0px;
    }
  }

  @media ${device.tablet} {
    flex-direction: column;

    & ul {
      padding: 0px 0px 30px 0px;
    }
  }
`

const CountryDetails = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 50%;
  padding: 50px 0px 50px 8vw;
  & h1 {
    margin: 0;
    padding: 20px 0px;
  }

  @media ${device.tablet} {
    padding: 30px 0px;
    width: 100%;

    & h1 {
      font-size: 1.5rem;
    }
  }
`

const BordersWrapper = styled.div`
  padding: 20px 0px;
  & button {
    min-width: 100px;
    padding: 3px 10px;
    margin: 3px 3px;
    ${buttonStyle}
  }

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    width : 100%;
    flex-grow : wrap;
    & div {
      margin-top : 20px;
      display : flex;
      flex-wrap : wrap;
      column-gap : 10px;
      row-gap : 10px;
    }
    & button{
      margin : 0px;
    }
  }
`

class Country extends Component {
  constructor(props) {
    super(props)
    this.state = {
      theme: "",
    }
  }
  static contextType = ApiContext

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

  getBorderDetails = (borderArray) => {
    if (borderArray) {
      let borderDetails = {}
      borderDetails = borderArray.map((cca3) =>
        this.context.items.filter((item) => item.cca3 === cca3)
      )
      this.setState({ borderDetails })
    }
  }

  render() {
    const { items, currentCountry, setCurrentCountry,  } = this.context
    const details = items.filter(
      (item) => item.cca3 === currentCountry
    )
    const getLanguages = (object) => {
      const languagesArray = Object.values(object)
      return languagesArray.join(", ")
    }
    function getNativeName(object) {
      for (const [key, value] of Object.entries(object)) {
        if (key !== "eng") {
          for (const [key2, value2] of Object.entries(value))
            if (key2 === "common") {
              return value2
            }
        }
      }
    }
    function getCurrencies(object) {
      for (const value of Object.values(object)) {
        return value.name
      }
    }
    function getBorders(countries, border) {
      let borderName = countries.filter((country) => country.cca3 === border)
      return borderName[0].name.common
    }
    return (
      <ThemeProvider
        theme={this.state.theme === "light" ? lightTheme : darkTheme}
      >
        <GlobalStyle />
        <>
          <Banner themeToggler={this.themeToggler} theme={this.state.theme} />
          {details.map((country) => (
            <CountrySection key={country.cca3}>
              <ReturnLink to={"/"}>
                <button>
                  <ArrowIcon icon={"arrow-left"} />
                  Retour
                </button>
              </ReturnLink>
              <CountryWrapper>
                <Flag
                  src={`${country.flags.svg}`}
                  alt={`${country.name.common} flag`}
                />
                <CountryDetails>
                  <h1>{country.name.common}</h1>
                  <DetailsWrapper>
                    <ul>
                      <li>
                        <strong>Native Name: </strong>
                        {getNativeName(country.name.nativeName)}
                      </li>
                      <li>
                        <strong>Population: </strong>
                        {beautyfiedNumber(country.population)}
                      </li>
                      <li>
                        <strong>Region: </strong>
                        {country.region}
                      </li>
                      <li>
                        <strong>Sub Region: </strong>
                        {country.capital}
                      </li>
                    </ul>
                    <ul>
                      <li>
                        <strong>Top Level Domain: </strong>
                        {country.tld}
                      </li>
                      <li>
                        <strong>Currencies: </strong>
                        {getCurrencies(country.currencies)}
                      </li>
                      <li>
                        <strong>Languages: </strong>
                        {getLanguages(country.languages)}
                      </li>
                    </ul>
                  </DetailsWrapper>
                  <BordersWrapper>
                    <strong>Border Countries: </strong>
                    <div>
                      {details[0].borders &&
                        details[0].borders.map((border) => (
                          <Link
                            key={border}
                            to={`/country/${border}`}
                            onClick={setCurrentCountry.bind(
                              this,
                              border
                            )}
                          >
                            <button>
                              {getBorders(items, border)}
                            </button>
                          </Link>
                        ))}
                    </div>
                  </BordersWrapper>
                </CountryDetails>
              </CountryWrapper>
            </CountrySection>
          ))}
        </>
      </ThemeProvider>
    )
  }
}

export default withRouter(Country)
