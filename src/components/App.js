import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {

  state = {
    pets: [],
    filters: {
      type: 'all'
    }
  }

  fetchPets = () => {
    let endPoint = "/api/pets"
    if (this.state.filters.type !== "all") {
      endPoint += `?type=${this.state.filters.type}`
    }

    fetch(endPoint).then((response) => {
      return response.json()
    }).then((pets) => {
      this.setState({pets: pets})
    })
  }

  onChangeType = ({target: { value }}) => {
    this.setState((state) => {
      return {
        filters: {
          ...state.filters,
          type: value
        }
      }
    })
  }

  onAdoptPet = (petId) => {
    this.setState((state) => {
      const pets = state.pets.map((pet) => {
        return pet.id === petId ? { ...pet, isAdopted: true } : pet
      })
      return {
        pets: pets
      }
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
