import React from 'react';
import ReactDOM from 'react-dom/client';
import Car from './components/Car.js';
import CarClasse from './components/CarClasse.js';

const myFirstElement = <h1>Hello React!</h1>

const x =  (
  <div>
    <table>
    <tr>
      <th>Name</th>
    </tr>
    <tr>
      <td>John</td>
    </tr>
    <tr>
      <td><h1>React is {5 + 5} times better with JSX</h1></td>
    </tr>
  </table><ul>
      <li>Apples</li>
      <li>Bananas</li>
      <li>Cherries</li>
    </ul>
    
  </div>
);
function Car2(props) {
  return <h2>Hi, I am a Car {props.color} --5!</h2>;
}

class Car3 extends React.Component {
  render() {
    return <h2>Hi, I am a Car - 11!</h2>;
  }
}

function Garage() {
  return (
    <>
      <h1>Who lives in my Garage?</h1>
      <Car />
    </>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<CarClasse />);
