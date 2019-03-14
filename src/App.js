import React, { Component } from 'react';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import PreQuestions from './components/PreQuestions';
import MapView from './components/Map';
import ReservationPage from './reservationPage';
import AboutPage from './About';
import RestaurantPage from './RestaurantPage';
import Loader from 'react-loader-spinner';
import {Route, Switch, Redirect} from 'react-router-dom';
import SignForm from './components/Sign';
import firebase from 'firebase/app';

export default class App extends Component {
  constructor(){
    super();
    this.state={
      data : {},
      view : "init", 
      pos:[],
      selectedRest:undefined,
      loading:false, 
      popUp:false,
      user:undefined
    }
    this.mapRef = React.createRef();
    this.mapViewRef = React.createRef();
    this.reserveRef = React.createRef();
    this.resetSelected=()=>{
      this.setState({selectedRest:undefined})
    };
    this.onDataChange = (data, view, pos)=>{
      this.setState({
        data: data,
         view:view,
         pos:pos
        });
      if(view === "map"){
        window.scrollTo(0, this.mapViewRef.current.offsetTop);
      }
    };
    this.onReserveChange= (index) =>{
      this.setState({
        selectedRest: index
      });

    };
    this.onSetLoading=(bool)=>{
      this.setState({loading:bool});
    };

  }
  togglePopup() {
    this.setState({
      popUp: !this.state.popUp
    });
  }

  updateUser(user){
    this.setState({
      user:user
    });
  }

  componentDidMount(){
    this.authUnRegFunc = firebase.auth().onAuthStateChanged((user)=>{
      if (user) {
        // User is signed in.
        this.setState({loading:false,user:user,popUp:false,view:"init"});
      } else{
        this.setState({loading:false,user:undefined,popUp:false,view:"init"});
      }
    });
  }

  componentWillUnmount(){
    this.authUnRegFunc();
  }

  render() {

    return (
      <React.Fragment>
      <header>
      <NavBar togglePopup={this.togglePopup.bind(this)} user={this.state.user}/>
      { this.state.popUp?<SignForm togglePopup={this.togglePopup.bind(this)} updateUser={this.updateUser.bind(this)}/>:null}
      </header>
      <Switch>
        <Route path="/" exact render={()=>{
          return(
            this.state.selectedRest===undefined?
           <main>
           <div id="overlay" className={this.state.loading?"d-block":"d-none"}><div style={{
                 margin:((window.innerHeight - 240) /2.0)+"px 0 0 "+((window.innerWidth - 240) /2.0)+"px"
                 }} >
             <Loader className="loader" type="Puff"
             color="#b2cfff" height="240"	width="240" 
             /></div></div>
            
           <div className="container-fluid" id="main_wrapper">
           <PreQuestions data={this.state.data} onDataChange={this.onDataChange.bind(this)} onSetLoading={this.onSetLoading.bind(this)}/>
           <hr ref={this.mapViewRef}/>
           {this.state.view === "map" ||this.state.view ==='reservation' ?
           <>
               <MapView ref={this.mapRef} data={this.state.data} pos={this.state.pos} 
                 onDataChange={this.onDataChange.bind(this)} 
                 onReserveChange={this.onReserveChange.bind(this)} user={this.state.user}/>

                 {this.state.user===undefined? <button className="btn btn-dark mt-4 btn-primary" onClick={this.togglePopup.bind(this)}>Please sign in to view restaurant information</button>
                 :null}
                 </>
                 :null}
     
           </div>
           
           </main>:<Redirect from="/" push to={"/restaurant/"+this.state.selectedRest}></Redirect>
        )}} />
        <Route path="/aboutUs" component={AboutPage} />
        <Route path="/reservation" render={()=>{return <ReservationPage user={this.state.user}/>}} />
        {this.state.selectedRest && this.state.user!==undefined?
        <Route path="/restaurant/:id" component={(match)=>{return(
          <RestaurantPage updateUser={this.updateUser.bind(this)} user={this.state.user} match={match} restData={this.state.data} onSetLoading={this.onSetLoading.bind(this)} onDataChange={this.onDataChange.bind(this)} resetSelected={this.resetSelected.bind(this)}/>
         )}} />:null}
        <Redirect to="/"></Redirect>
      </Switch>
     
      <footer>
      <Footer />
      </footer>
     </React.Fragment>
    );
  }
}


