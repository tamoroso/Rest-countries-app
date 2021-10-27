import { Component, createContext } from "react"
const API_URL = "https://restcountries.com/v3.1/all"

export const ApiContext = createContext()

export default class ApiContextProvider extends Component {
  state = {
    error: null,
    isLoaded: false,
    items: [],
    filterItems: [],
    currentCountry: [],
    currentBorders: [],
  }

  componentDidMount() {
    const countries = JSON.parse(localStorage.getItem("countries"))
    if (countries) {
      this.setState({
        items: countries,
        filterItems: countries,
      })
    } else {
      this.loadRessource()
    }
  }

  loadRessource() {
    //fetch API data
    fetch(API_URL)
      .then((res) => res.json())
      .then(
        (result) => {
          const countries = result
          this.setState({
            isLoaded: true,
            items: countries,
            filterItems: countries,
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

  handleClick = (region) => {
    let filterItems = []
    filterItems = this.state.items.filter((item) => item.region === region)
    this.setState({ filterItems })
  }

  handleChange = (e) => {
    let searchItems = []
    searchItems = this.state.items.filter((item) =>
      item.name.common.toUpperCase().includes(e.target.value.toUpperCase())
    )
    this.setState({ filterItems: searchItems })
  }

  setCurrentCountry = (country) => {
    this.setState({ currentCountry : country })
  }

  render() {
    const {
      filterItems,
      isLoaded,
      error,
      items,
      currentCountry,
      currentBorders,
    } = this.state
    const { handleClick, handleChange, setCurrentCountry } = this
    return (
      <ApiContext.Provider
        value={{
          filterItems,
          isLoaded,
          error,
          items,
          currentBorders,
          currentCountry,
          handleChange,
          handleClick,
          setCurrentCountry,
        }}
      >
        {this.props.children}
      </ApiContext.Provider>
    )
  }
}
