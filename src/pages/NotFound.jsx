import { Component } from "react"
import { Link } from "react-router-dom"
import Logo404 from "../assets/sailing.png"
import styled, { ThemeProvider } from "styled-components"
import { GlobalStyle } from "../utils/style/GlobalStyle"
import { lightTheme } from "../utils/style/Themes"

const NotFoundWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: "Nunito Sans", sans-serif;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 0px;
  margin: 0px;
  text-align: center;
  & img {
    width: 200px;
    heigth: auto;
  }
`

const GoBackLink = styled(Link)`
  font-weight: 800;
  text-decoration: none;
  border: solid 2px red;
  color: red;
  padding: 5px 30px;
  border-radius: 10px;
  transition : color 200ms ease-in;
  &:hover {
    color: #0492c2;
    border-color : #0492c2;
  }
`

export default class NotFound extends Component {
  render() {
    return (
      <>
        <ThemeProvider theme={lightTheme}>
          <GlobalStyle />
          <NotFoundWrapper>
            <img src={Logo404} alt="Error 404 Logo" />
            <h1>Error 404 : Page not found</h1>
            <p>
              It seems you are in the international water ! There is no country
              there !
            </p>
            <GoBackLink to="/">Go back to firm ground</GoBackLink>
          </NotFoundWrapper>
        </ThemeProvider>
      </>
    )
  }
}
