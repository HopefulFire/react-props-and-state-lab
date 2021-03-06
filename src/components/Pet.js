import React from 'react'

class Pet extends React.Component {
  render() {
    const {name, age, weight, gender, isAdopted, id} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <button className="header">
            {gender === "female" ? "♀" : "♂"}
            {name}
          </button>
          <div className="meta">
            <span className="date">{this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted ? (
            <button className="ui disabled button">Already adopted</button>
          ) : (
            <button
              className="ui primary button"
              onClick={() => this.props.onAdoptPet(id)}
            >
              Adopt pet
            </button>
          )}
        </div>
      </div>
    )
  }
}

export default Pet
