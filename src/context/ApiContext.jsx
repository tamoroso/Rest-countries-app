import { Component, createContext} from "react"
import {
  fetchData,
  getDataFromLocalStorage,
} from "../utils/functions/apiFunctions"
import { countryReducer } from "./countryReducer"
const API_URL = "https://restcountries.com/v3.1/all"

export const ApiContext = createContext()

export default class ApiContextProvider extends Component {
  state = {
    error: null,
    isLoaded: false,
    countries: [],
    initialState: null,
  }


  reducer(action) {
    this.setState(countryReducer(this.state, action))
  }

  componentDidMount() {
    //fetch API data

      const loadState = () => {
      const localStorageData = getDataFromLocalStorage()
      if (!localStorageData) {
          const data = () => { fetchData(API_URL) }
        this.setState(data)
        localStorage.setItem("countries", JSON.stringify(data))
        return
      }
      this.setState(localStorageData)
    }

    loadState()
  }

  render() {
    return (
      <ApiContext.Provider
        value={{
          countries: !this.countries ? this.initialState : this.countries,
        }}
        dispatch={(action) => void this.reducer(action)}
      >
        {this.props.children}
      </ApiContext.Provider>
    )
  }
}
