import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import PreQuestions from './components/PreQuestions';
import Map from './components/Map';
import Reservation from './components/Reservation';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      data : {}
    }
    this.onDataChange = (data)=>{
      console.log(data);
      this.setState({data: data});
    }

  }
  render() {
    return (
      <React.Fragment>
      <header>
      <NavBar />
      </header>
      <main>
      <div id="overlay"><div id="indicatorContainer"></div></div>
      <div class="container-fluid" role="main">
      <PreQuestions data={this.state.data} onDataChange={this.onDataChange.bind(this)}/>
      <hr />
      <Map data={this.state.data} onDataChange={this.onDataChange.bind(this)}/>
      <Reservation data={this.state.data} onDataChange={this.onDataChange.bind(this)}/>
      </div>
      </main>
      <footer>
      <Footer />
      </footer>
     </React.Fragment>
    );
  }
}
