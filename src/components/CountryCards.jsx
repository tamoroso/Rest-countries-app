import { Component } from "react"
import styled from "styled-components"
import { ReactComponent as GermanySvg } from "../assets/Flag_of_Germany.svg"
import { navBarStyle, navBarShadow } from "../utils/style/atoms"
import { beautyfiedNumber } from "../utils/functions/beautytiedNumber"

const apiResponse = [
  {
    name: "Germany",
    topLevelDomain: [".de"],
    alpha2Code: "DE",
    alpha3Code: "DEU",
    callingCodes: ["49"],
    capital: "Berlin",
    altSpellings: [
      "DE",
      "Federal Republic of Germany",
      "Bundesrepublik Deutschland",
    ],
    region: "Europe",
    subregion: "Western Europe",
    population: 81770900,
    latlng: [51, 9],
    demonym: "German",
    area: 357114,
    gini: 28.3,
    timezones: ["UTC+01:00"],
    borders: ["AUT", "BEL", "CZE", "DNK", "FRA", "LUX", "NLD", "POL", "CHE"],
    nativeName: "Deutschland",
    numericCode: "276",
    currencies: [
      {
        code: "EUR",
        name: "Euro",
        symbol: "€",
      },
    ],
    languages: [
      {
        iso639_1: "de",
        iso639_2: "deu",
        name: "German",
        nativeName: "Deutsch",
      },
    ],
    translations: {
      br: "Alemanha",
      de: "Deutschland",
      es: "Alemania",
      fa: "آلمان",
      fr: "Allemagne",
      hr: "Njemačka",
      it: "Germania",
      ja: "ドイツ",
      nl: "Duitsland",
      pt: "Alemanha",
    },
    flag: "https://restcountries.eu/data/deu.svg",
    regionalBlocs: [
      {
        acronym: "EU",
        name: "European Union",
      },
    ],
    cioc: "GER",
  },
]

const CardWrapper = styled.div`
  width: 250px;
  //   height: 350px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${navBarShadow}
  ${navBarStyle}
`

const GermanyFlag = styled(GermanySvg)`
  width: 250px;
  height: 100%;
  clip-path: fill-box;
`

const DescriptionWrapper = styled.div`
  padding: 0px 20px;
  & h2 {
    margin: 25px 0px;
  }
`

const DescriptionDetailsWrapper = styled.div`
  padding-bottom: 25px;
`

const DescriptionDetails = styled.li`
  list-style: none;
  & h3 {
    margin: 8px 0px;
  }
  & h3 span {
    font-weight: 300;
  }
`

export default class CountryCards extends Component {
  render() {
    return (
      <CardWrapper>
        <div>
          <GermanyFlag />
        </div>
        <DescriptionWrapper>
          <h2>{apiResponse[0].name}</h2>
          <DescriptionDetailsWrapper>
            <DescriptionDetails>
              <h3>
                Population :{" "}
                <span>{beautyfiedNumber(apiResponse[0].population)}</span>
              </h3>
            </DescriptionDetails>
            <DescriptionDetails>
              <h3>
                Region : <span>{apiResponse[0].region}</span>
              </h3>
            </DescriptionDetails>
            <DescriptionDetails>
              <h3>
                Capital : <span>{apiResponse[0].capital}</span>
              </h3>
            </DescriptionDetails>
          </DescriptionDetailsWrapper>
        </DescriptionWrapper>
      </CardWrapper>
    )
  }
}
