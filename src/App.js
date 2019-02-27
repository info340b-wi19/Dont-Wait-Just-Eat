import React, { Component } from 'react';
import './style.css';

class App extends Component {
  render() {
    return (
      <div class="title row">
            <div class="jumbotron col-12">
                <h1 class="display-6">
                    <span class="fas fa-utensils"></span><br/>
                    Only Food<br/> <span class="fas fa-clock"></span><br/> No Wait</h1>
                <p class="lead">Let's help you to enjoy food sooner!</p>
            </div>
            <hr class="my-1"/>
        </div>
    );
  }
}

export default App;
