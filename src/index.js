import React from "react"
import ReactDOM from "react-dom"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import ApiContextProvider from "./context/ApiContext"
import Country from "./pages/Country"
import Home from "./pages/Home"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <ApiContextProvider>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/country/:name">
            <Country />
          </Route>
        </ApiContextProvider>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
