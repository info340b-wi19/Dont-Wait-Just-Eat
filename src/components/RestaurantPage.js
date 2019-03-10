import React, { Component } from 'react';
import Loader from 'react-loader-spinner';

export default class ResutrantPage extends Component{
    constructor(props){
        super(props);
        this.state = {
            restID:this.props.match.match.params.id,
            data: undefined
        }
        this.apikey="0LKzxfI8zGQo_E4vxANgZOo6ybyHbiJrWlz_p13-MWWL1ONkjODBDTPTry3uzntUrh6nDB7H5wsZlp7DzFXh4lWbiFvdXYpm5uITu9MK-RoJD-doRfbBav7qhBhrXHYx"
        this.DataHandler(this.state.restID);
    }


    DataHandler(id){
        let url = "https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/"+this.state.restID;
        //Because Yelp API blocked the CORS from front end directly, has to use this trick to call this api from front-end
        fetch(url, {
            headers:{
                "Authorization": "Bearer " + this.apikey
              },
            method:"GET",
            redirect: "follow", 
            credentials: 'same-origin'
            }).then(async (response)=>{
                let res = await response.json();
                console.log(res);
                this.setState({data:res});
                //this.props.onSetLoading(false);
            }, function(e){
               console.log(e);
                //this.props.onSetLoading(false);
            } );
        
    }

    render(){
        return(
            this.state.data ===undefined?<div id="overlay" className={this.state.loading?"d-block":"d-none"}><div style={{
                margin:((window.innerHeight - 240) /2.0)+"px 0 0 "+((window.innerWidth - 240) /2.0)+"px"
                }} >
            <Loader className="loader" type="Puff"
            color="#b2cfff" height="240"	width="240" 
            /></div></div>:

            <div>
            <h2> {this.state.data.name}</h2>
            <p>Here is some information about us. Lorem ipsum dolor sit amet, consectetur adipisicing.</p>
            <blockquote>Curabitur blandit tempus porttitor. <strong>Nullam quis risus eget urna mollis</strong> ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</blockquote>
            <p>Veniam dolorem cupiditate tenetur placeat nulla repellat dicta maxime architecto blanditiis non facere nesciunt quae animi quam quidem ullam, suscipit nisi ipsam voluptatem accusamus necessitatibus itaque autem in, sunt similique.</p>
            <p>In mollitia cumque sapiente ducimus quo labore magni qui quas aperiam, voluptatibus nesciunt dicta enim dignissimos doloribus tempora iusto commodi alias recusandae tempore beatae atque? Totam cum et, perferendis itaque.</p>
            <p>Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras mattis consectetur purus sit amet fermentum. Aenean lacinia bibendum nulla sed consectetur.</p>
        </div>
        )
    }
}