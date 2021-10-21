import { Component } from "react"
import { withRouter } from "react-router"

class Country extends Component {
  constructor(props) {
    super(props)
    this.state = { country: [] }
  }

  fetchCountryData = (name) => {
    
    this.country = JSON.parse(localStorage.getItem("countries")).filter(
      (item) => item.name.common === name
    )
    this.setState({ country:this.country })
    }
    
    componentDidMount () {
        let name = this.props.match.params.id
        this.fetchCountryData(name)
    }

  render() {
    console.log(this.state.country)
    return (
      <div>
        <h1>OK</h1>
      </div>
    )
  }
}

export default withRouter(Country)
