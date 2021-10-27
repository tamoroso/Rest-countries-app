import { Component } from "react"
import styled from "styled-components"
import { navBarStyle, navBarShadow } from "../utils/style/atoms"
import { beautyfiedNumber } from "../utils/functions/beautyfiedNumber"
import { Link } from "react-router-dom"

const CardWrapper = styled.div`
  position: relative;
  min-width: 260px;
  height: 350px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  ${navBarShadow}
  ${navBarStyle}
  background-color : ${({ theme }) => theme.elements}
`

const Flag = styled.img`
  position: absolute;
  top: 0;
  width: 260px;
  height: 150px;
  // clip-path: fill-box;
`

const DescriptionWrapper = styled.div`
  position: absolute;
  bottom: 0;
  height: 50%;
  padding: 0px 25px;
  & h2 {
    margin: 10px 0px;
  }
`

const DescriptionDetailsWrapper = styled.div`
  padding-bottom: 25px;
  padding-top: 10px;
`

const DescriptionDetails = styled.li`
  list-style: none;
  & h3 {
    margin: 8px 0px;
  }
  & h3 span {
    font-weight: 300;
    font-size: 0.875rem;
  }
`

const CountryLink = styled(Link)`
  text-decoration: none;
  color: ${({ theme }) => theme.text};
`

export default class CountryCards extends Component {
  render() {
    const countryFlag = this.props.flag
    const countryName = this.props.name
    const countryPopulation = this.props.population
    const countryRegion = this.props.region
    const countryCapital = this.props.capital
    const setCurrentCountry = this.props.setCurrentCountry
    const countryCode = this.props.countryCode
    return (
      <CountryLink
        key={countryCode}
        to={`/country/${countryCode}`}
        onClick={setCurrentCountry.bind(this, countryCode)}
      >
        <CardWrapper>
          <div>
            <Flag src={countryFlag} alt={`${countryName} flag`} />
          </div>
          <DescriptionWrapper>
            <h2>{countryName}</h2>
            <DescriptionDetailsWrapper>
              <DescriptionDetails>
                <h3>
                  Population :{" "}
                  <span>{beautyfiedNumber(countryPopulation)}</span>
                </h3>
              </DescriptionDetails>
              <DescriptionDetails>
                <h3>
                  Region : <span>{countryRegion}</span>
                </h3>
              </DescriptionDetails>
              <DescriptionDetails>
                <h3>
                  Capital : <span>{countryCapital}</span>
                </h3>
              </DescriptionDetails>
            </DescriptionDetailsWrapper>
          </DescriptionWrapper>
        </CardWrapper>
      </CountryLink>
    )
  }
}
