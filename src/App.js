import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import PreQuestions from './components/PreQuestions';
import MapView from './components/Map';
import Reservation from './components/Reservation';
import Loader from 'react-loader-spinner'
import ReactDOM from 'react-dom';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      data : {},
      view : "init", 
      pos:[],
      selectedRest:-1,
      loading:false
    }
    this.mapRef = React.createRef();
    this.mapViewRef = React.createRef();
    this.reserveRef = React.createRef();

    this.onDataChange = (data, view, pos)=>{
      console.log(view);
      this.setState({
        data: data,
         view:view,
         pos:pos
        });
      if(view === "map"){
        window.scrollTo(0, this.mapViewRef.current.offsetTop);
      }else if(view === "reservation"){
        window.scrollTo(0, this.reserveRef.current.offsetTop);
      }
    };
    this.onReserveChange= (index) =>{
      console.log(index);
      this.setState({
        selectedRest: index
      })
    };
    this.onSetLoading=(bool)=>{
      console.log(bool);
      this.setState({loading:bool});
    };
    
  }

  render() {
    return (
      <React.Fragment>
      <header>
      <NavBar />
      </header>
      <main>
      <div id="overlay" className={this.state.loading?"d-block":"d-none"}><div style={{
            margin:((window.innerHeight - 240) /2.0)+"px 0 0 "+((window.innerWidth - 240) /2.0)+"px"
            }} >
        <Loader type="Puff"
        color="#b2cfff" height="240"	width="240" 
        /></div></div>
      <div class="container-fluid" role="main">
      <PreQuestions data={this.state.data} onDataChange={this.onDataChange.bind(this)} onSetLoading={this.onSetLoading.bind(this)}/>
      <hr ref={this.mapViewRef}/>
      {this.state.view === "map" ||this.state.view ==='reservation' ?
          <MapView ref={this.mapRef} data={this.state.data} pos={this.state.pos} 
            onDataChange={this.onDataChange.bind(this)} 
            onReserveChange={this.onReserveChange.bind(this)}/>:<></>}
      <hr ref={this.reserveRef}/>
      {this.state.view === "reservation"?
            <Reservation data={this.state.data}
                  onDataChange={this.onDataChange.bind(this)} /> :<></>}
      </div>
      </main>
      <footer>
      <Footer />
      </footer>
     </React.Fragment>
    );
  }
}
