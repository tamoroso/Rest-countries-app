import React from "react"
import ReactDOM from "react-dom"
import { Route, BrowserRouter as Router, Switch } from "react-router-dom"
import ApiContextProvider from "./context/ApiContext"
import NotFound from "./pages/NotFound"
import Country from "./pages/Country"
import Home from "./pages/Home"

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <ApiContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/country/:name" component={Country} />
          <Route component={NotFound} />
        </Switch>
      </ApiContextProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
)
