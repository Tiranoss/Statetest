import React, { Component, useState } from 'react';
import './App.css';
import Person from './Component/Person';
import photo from './image.jpg'
import photo1 from './Bio1.jpg'


class App extends Component {
    state = {
    titre: "Welcome into my Biography",
    name: "BILEL KANOUN",
    image: photo,
    bio: photo1,

}

  render(){

  return (
    <div className="App">
            <Person title={this.state.titre} name={this.state.name} image={this.state.image} bio={this.state.bio} />
    </div>
  );
}
}

export default App;
