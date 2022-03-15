import React, { Component } from "react";
import { CardList } from "./component/card-list/card-list";
import "./App.css";
import Search from "./component/search-box/search";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ monsters: users }));
  }
  render() {
    const { monsters, searchField } = this.state;
    // this above is equivalent to
    // const monsters = this.state.monsters;
    // const searchField = this.state.searchField;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase()),
    );

    return (
      <div className="App">
        <h1>Monsters Roledex</h1>
        <Search
          placeholder="Search Monsters"
          handleChange={(e) => {
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state),
            );
          }}
        />
        <CardList monsters={filteredMonsters}></CardList>
      </div>
    );
  }
}

export default App;
