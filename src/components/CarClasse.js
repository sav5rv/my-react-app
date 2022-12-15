import React from 'react';
import ReactDOM from 'react-dom/client';


class CarClasse extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        brand: "Ford",
        model: "Mustang",
        color: "red",
        year: 1964
      };
    }
    changeColor = () => {
      this.setState({color: " blue "});
      this.setState({brand: " Chevrolet "});
    }
    render() {
      return (
        <div>
          <h1>My {this.state.brand}</h1>
          
          <p>
            It is a { this.state.color }
            { this.state.model }
            from { this.state.year}.
          </p>

          <button
            type="button"
            onClick={this.changeColor}
          >Change color</button>
        </div>
      );
    }
}

export default CarClasse;