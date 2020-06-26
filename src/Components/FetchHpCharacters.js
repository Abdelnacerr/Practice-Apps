import React from "react";

export default class FetchHpCharacters extends React.Component {
  state = {
    loading: true,
    characters: null,
    search: "",
  };

  async componentDidMount() {
    const url = "http://hp-api.herokuapp.com/api/characters";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({ characters: data, loading: false });
  }
  render() {

    if (this.state.loading) {
      return <div>loading...</div>;
    }
    if (!this.state.characters) {
      return <div>Characters not found</div>;
    }
   

    return (
      <>
          {this.state.characters.map((character) => {
            return (
              <ul id="charactersList">
                <li className="character">
                  <h2>{character.name}</h2>
                  <h6>House: {character.house}</h6>
                  <img src={character.image} alt="..."></img>
                </li>
              </ul>
            );
          })}
          
      </>
    );
  }
}
