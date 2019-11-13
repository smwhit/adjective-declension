import React from "react";
import './App.css';
import { Case, Gender,Selections, Signal, calculate } from "./Grammar";

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { gender: Selections.gender.name,
                   case: Selections.case.name,
                   signal: Selections.signal,
                   ending: Selections.ending};
  }

  handleSignalChange = (event) => {
    this.setState({signal: event.target.value});
  }

  handleGenderChange = (event) => {
    this.setState({gender: event.target.value});
  }

  handleCaseChange = (event) => {
    this.setState({case: event.target.value});
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            <div className="option">
            <span className="question">Does it have an article with a case signal?</span>
            <span>
              <select value={this.state.signal} onChange={this.handleSignalChange}>
                { Object.keys(Signal).map(x => 
                  <option value={x}>{x}</option>
                )}
            </select>
            </span>
            </div>
            <div className="option">
            <span className="question">What is the gender of the noun?</span>
            <span>
              <select value={this.state.gender} onChange={this.handleGenderChange}>
                { Object.keys(Gender).map(x => 
                  <option value={x.name}>{Gender[x].name}</option>
                )}
              </select>
            </span>
            </div>
            <div className="option">
              <span className="question">What is the case?</span>
              <span>
                <select value={this.state.case} onChange={this.handleCaseChange}>
                { Object.keys(Case).map(x => 
                  <option value={x.name}>{Case[x].name}</option>
                )}
                </select>
              </span>
            </div>
            <hr/>
            <div>Adjective should end with: <strong>{ calculate(this.state) }</strong> </div>
          </p>
            {/* <div><span>{this.state.signal}</span>/<span>{this.state.gender}</span>/<span>{this.state.case}</span> </div>*/}
        </header>
      </div>
    );
  }
}

//ReactDOM.render(<App/>, document.getElementById('root'))