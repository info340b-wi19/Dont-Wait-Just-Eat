import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import PreQuestions from './components/PreQuestions';
import MapView from './components/Map';
import Reservation from './components/Reservation';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      data : {},
      view : "init", 
      pos:[],
      selectedRest:-1
    }
    this.mapRef = React.createRef();
    this.onDataChange = (data, view, pos)=>{
      console.log(view);
      this.setState({
        data: data,
         view:view,
         pos:pos
        });
    };
    this.onReserveChange= (index) =>{
      this.setState({
        selectedRest: index
      })
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
      {this.state.view === "map" ||this.state.view ==='reservation' ?<MapView ref={this.mapRef} data={this.state.data} pos={this.state.pos} 
            onDataChange={this.onDataChange.bind(this)} 
            onReserveChange={this.onReserveChange.bind(this)}/>:<></>}
      {this.state.view === "reservation"?<Reservation data={this.state.data} selectedRest={this.state.selectedRest} onDataChange={this.onDataChange.bind(this)}/> :<></>}
      </div>
      </main>
      <footer>
      <Footer />
      </footer>
     </React.Fragment>
    );
  }
}
