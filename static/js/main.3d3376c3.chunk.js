(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{30:function(e,t,a){e.exports=a(68)},67:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(18),s=a.n(r),o=(a(35),a(6)),c=a(5),i=a(9),m=a(7),u=a(8),h=a(2),p=a(11),d=a(14),v=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={collapse:!0},a.isClick=a.isClick.bind(Object(h.a)(Object(h.a)(a))),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"isClick",value:function(){this.setState({collapse:!this.state.collapse})}},{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-light bg-light navbar-default fixed-top"},l.a.createElement("div",{className:"container-fluid",id:"container_top"},l.a.createElement("a",{className:"navbar-brand",href:"#container_top"},l.a.createElement("img",{src:"favicon.png",className:"d-inline-block align-top",alt:"Icon"}),"Only Food No Wait"),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":".navbar-collapse","aria-label":"Toggle Navigation Bar ",onClick:this.isClick},l.a.createElement(p.a,{icon:d.a})),l.a.createElement("div",{className:this.state.collapse?"collapse navbar-collapse":"collapse navbar-collapse show",id:"phoneNav"},l.a.createElement("ul",{className:"navbar-nav nav navbar-right"},l.a.createElement("li",{className:"nav-item active"},l.a.createElement("a",{className:"nav-link",href:"#main_wrapper"},"Home ",l.a.createElement("span",{className:"sr-only"},"(current)"))),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#location"},"Where are you?")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#map"},"What do you want eat?")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#reservation"},"Reserve a Table"))))))}}]),t}(n.Component),E=a(17),f=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"container mt-5"},l.a.createElement("div",{className:"copyright pt-3 row"},l.a.createElement("ul",{className:"col-12 mt-1"},l.a.createElement("li",null,l.a.createElement("a",{href:"twitter.com","aria-label":"Twitter"}," ",l.a.createElement(p.a,{icon:E.d}))),l.a.createElement("li",null,l.a.createElement("a",{href:"facebook.com","aria-label":"Facebook"}," ",l.a.createElement(p.a,{icon:E.a}))),l.a.createElement("li",null,l.a.createElement("a",{href:"google.com","aria-label":"Google Plus"}," ",l.a.createElement(p.a,{icon:E.b}))),l.a.createElement("li",null,l.a.createElement("a",{href:"instgram.com","aria-label":"Instgram"}," ",l.a.createElement(p.a,{icon:E.c})))),l.a.createElement("div",null),l.a.createElement("div",{className:"w-100 my-1"}),l.a.createElement("p",{className:"col-12"}," \xa9 Copyright 2019 Yiren Qu & Xifei Wang"),l.a.createElement("p",{className:"col-12 pb-3"},"All Rights Reserved. Data is from ",l.a.createElement("a",{href:"yelp.com",style:{color:"white"}},"Yelp.com"))))}}]),t}(n.Component),b=a(15),g=a.n(b),N=a(23),w=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={data:a.props.data},a.onDataChange=function(e,t,n){a.props.onDataChange(e,t,n)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(y,null),l.a.createElement(k,{data:this.state.data,onDataChange:this.onDataChange.bind(this),onSetLoading:this.props.onSetLoading}))}}]),t}(n.Component),y=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"title row"},l.a.createElement("div",{className:"jumbotron col-12"},l.a.createElement("h1",{className:"display-6"},l.a.createElement(p.a,{icon:d.c}),l.a.createElement("br",null),"Only Food",l.a.createElement("br",null),l.a.createElement(p.a,{icon:d.b}),l.a.createElement("br",null)," No Wait"),l.a.createElement("p",{className:"lead"},"Let's help you to enjoy food sooner!")),l.a.createElement("hr",{className:"my-1"}))}}]),t}(n.Component),k=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).change=function(e){a.setState({selectedIndex:e})},a.apiKey="pk.eyJ1IjoicmFtb25xdSIsImEiOiJjamU4M3l1dWYwOWQ4MnlvMXZ1NTQ4c21oIn0.ael5riwgSHwAvbLZaYps0A",a.apikey2="0LKzxfI8zGQo_E4vxANgZOo6ybyHbiJrWlz_p13-MWWL1ONkjODBDTPTry3uzntUrh6nDB7H5wsZlp7DzFXh4lWbiFvdXYpm5uITu9MK-RoJD-doRfbBav7qhBhrXHYx",a.state={error:"",lat:47.65671,long:-122.308914,searchLocation:"",locateme:!1,selectedIndex:-1,data:a.props.data,view:"init",autocomplete:[]},a.onDataChange=function(e,t,n){a.setState({autocomplete:[]}),a.props.onDataChange(e,t,n)},navigator.geolocation?navigator.geolocation.getCurrentPosition(function(e){a.setState({lat:e.coords.latitude,long:e.coords.longitude,locateme:!0}),a.onDataChange(a.state.data,a.state.view,[a.state.lat,a.state.long,a.state.searchLocation])},function(){a.setState({locateme:!1})}):a.setState({locateme:!1}),a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"TextOnChange",value:function(e){var t=this;this.setState({searchLocation:e.target.value}),fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+e.target.value+".json?access_token="+this.apiKey).then(function(){var e=Object(N.a)(g.a.mark(function e(a){var n;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,a.json();case 2:void 0!==(n=e.sent).features&&n.features.length>0?t.setState({autocomplete:n.features}):t.setState({autocomplete:[]});case 4:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}())}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"loc mt-4",id:"location"},l.a.createElement("div",{className:"wrapper py-5 row"},l.a.createElement("h4",{className:"control-label col-md-6 col-sm-10 ml-4 mr-4 section-title col-lg-12",htmlFor:"waitLimit"},"How long can you wait?"),l.a.createElement("div",{className:"button-group"},l.a.createElement(C,{selectedIndex:this.state.selectedIndex,onChange:this.change.bind(this)})),l.a.createElement("div",{className:"w-100"},l.a.createElement("hr",{className:"my-2"})),l.a.createElement("h4",{id:"button_error"},this.state.error),l.a.createElement("a",{href:"#location",className:this.state.locateme?"btn btn-success text-light btn-lg col-md-5 m-4 col-sm-10 .d-block":"btn btn-success text-light btn-lg col-md-5 m-4 col-sm-10 .d-none",id:"locateme",onClick:function(){return e.locateme(e)}},"Locate Me"),l.a.createElement("div",{className:"w-100"}),l.a.createElement("input",{className:"form-control col-md-6 col-sm-5 mx-4 ml-4",type:"search",placeholder:"Where do you want to eat?","aria-label":"Search",id:"search_place",value:this.state.searchLocation,onChange:function(t){e.TextOnChange(t)}}),l.a.createElement("button",{className:"btn btn-primary col-md-4 mx-4 btn-lg col-sm-4",id:"searchLoc",onClick:function(){return e.searchloc(e)}},"Start Search"),l.a.createElement("ul",{className:"col-md-6 col-sm-5 mx-4 ml-4 autocomplete".concat(0===this.state.autocomplete.length?"collapse":"")},l.a.createElement(j,{data:this.state.autocomplete,callback:function(t){e.setState({searchLocation:t,autocomplete:[]})}}))))}},{key:"searchloc",value:function(){var e=this;if(this.props.onSetLoading(!0),-1===this.state.selectedIndex)this.setState({error:"Please select a wait time."}),this.props.onSetLoading(!1);else try{fetch("https://api.mapbox.com/geocoding/v5/mapbox.places/"+this.state.searchLocation+".json?access_token="+this.apiKey).then(function(){var t=Object(N.a)(g.a.mark(function t(a){var n;return g.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,a.json();case 2:void 0===(n=t.sent).features||0===n.features.length?(e.setState({error:"Please Try Another Location, Please."}),e.props.onSetLoading(!1)):(e.setState({lat:n.features[0].center[1],long:n.features[0].center[0],locateme:!1}),e.onDataChange(e.state.data,e.state.view,[n.features[0].center[1],n.features[0].center[0],e.state.searchLocation]),e.getYelpData());case 4:case"end":return t.stop()}},t)}));return function(e){return t.apply(this,arguments)}}(),function(t){e.setState({error:"Please Try Another Location, Please."}),e.props.onSetLoading(!1)})}catch(t){this.setState({error:"Please Enter a Valid Location."}),this.props.onSetLoading(!1)}}},{key:"locateme",value:function(){var e=this;this.props.onSetLoading(!0),-1===this.state.selectedIndex?this.setState({error:"Please select a wait time."}):navigator.geolocation?navigator.geolocation.getCurrentPosition(function(t){e.setState({lat:t.coords.latitude,long:t.coords.longitude,locateme:!0}),e.onDataChange(e.state.data,e.state.view,[e.state.lat,e.state.long,e.state.searchLocation]),e.getYelpData()},function(){e.setState({locateme:!1}),e.props.onSetLoading(!1)}):(this.setState({locateme:!1}),this.props.onSetLoading(!1))}},{key:"successCallback",value:function(){var e=Object(N.a)(g.a.mark(function e(t){var a,n,l,r,s=this;return g.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.json();case 2:if(0===(a=e.sent).businesses.length)this.setState({error:"No Restaurant Found, Pleace check another location."}),this.props.onSetLoading(!1);else{for(n=0;n<a.businesses.length;n++)l=Math.floor(2*Math.random()*60)+1,l=Math.round(l/120*5).toString(),a.businesses[n].wait=l;r=a.businesses.filter(function(e){return parseInt(e.wait)<=s.state.selectedIndex}),a.businesses=r,0===a.businesses.length?(this.setState({error:"No Restaurant Found, Pleace change search query."}),this.props.onSetLoading(!1)):(this.setState({error:"",data:a,view:"map"}),this.onDataChange(a,"map",[this.state.lat,this.state.long,this.state.searchLocation]))}this.props.onSetLoading(!1);case 5:case"end":return e.stop()}},e,this)}));return function(t){return e.apply(this,arguments)}}()},{key:"getYelpData",value:function(){var e=this;void 0!==this.state.lat&&void 0!==this.state.long||this.setState({error:"Please Enter an Valid Location."});var t="https://cors-anywhere.herokuapp.com/http://api.yelp.com/v3/businesses/search?open_now=true&term=restaurant";t+="&latitude="+this.state.lat+"&longitude="+this.state.long,fetch(t,{headers:{Authorization:"Bearer "+this.apikey2},method:"GET",redirect:"follow",credentials:"same-origin"}).then(function(t){e.successCallback(t)},function(e){this.setState({error:"Please Try Again Later."}),this.props.onSetLoading(!1)})}}]),t}(n.Component),C=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={selectedIndex:a.props.selectedIndex,onChange:a.props.onChange},a.updateIndex=function(e){a.state.onChange(e),a.setState({selectedIndex:e})},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"item",value:function(e,t,a){var n=this;return l.a.createElement("li",{className:this.state.selectedIndex===a?"btn btn-select m-2 selected":"btn btn-select m-2 not-selected",onClick:function(){return n.updateIndex(a)}},Array(e).fill(0).map(function(e){return l.a.createElement(p.a,{key:a+t+Math.random(),icon:d.b,className:"mr-2"})}),l.a.createElement("br",null),t)}},{key:"render",value:function(){return l.a.createElement("ul",null,this.item(1,"Less than 10 minutes",1),this.item(2,"Less than 30 minutes",2),this.item(3,"Less than 45 minutes",3),this.item(4,"Less than 1 hour",4),this.item(5,"I have enough patience today.",5))}}]),t}(n.Component),j=function(e){function t(){return Object(o.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this,t=this.props.data;return t=t.map(function(t){return l.a.createElement("li",{key:t.place_name+Math.random(),onClick:function(){return e.props.callback(t.place_name)}},t.place_name)})}}]),t}(n.Component),O=a(70),S=a(73),L=a(71),x=a(72),R=a(26),I=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).apiKey="pk.eyJ1IjoicmFtb25xdSIsImEiOiJjamU4M3l1dWYwOWQ4MnlvMXZ1NTQ4c21oIn0.ael5riwgSHwAvbLZaYps0A",void 0===a.props.pos[0]||void 0===a.props.pos[1]?a.state={pos:[47.65671,-122.308914,"University_of_Washington"],data:a.props.data,localView:"map"}:a.state={pos:a.props.pos,data:a.props.data,localView:"map"},a.onDataChange=function(e,t,n){a.props.onDataChange(e,t,n)},a.onReserveChange=function(e){a.props.onReserveChange(e)},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.pos===this.state.pos&&e.data===this.state.data||this.setState({pos:e.pos,data:e.data})}},{key:"onSelected",value:function(e){this.onDataChange(this.state.data,"reservation",this.state.pos),this.onReserveChange(e)}},{key:"genIcons",value:function(e){return l.a.createElement(l.a.Fragment,null,Array(parseInt(e)).fill(0).map(function(e){return l.a.createElement(p.a,{key:"clock"+Math.random(),icon:d.b,className:"mr-1"})}),Array(5-parseInt(e)).fill(0).map(function(e){return l.a.createElement(p.a,{key:"clock1"+Math.random(),icon:R.a,className:"mr-1"})}))}},{key:"genRestLayer",value:function(){var e=this;return this.state.data.businesses.map(function(t){return l.a.createElement(O.a,{key:t.name+Math.random(),position:[t.coordinates.latitude,t.coordinates.longitude]},l.a.createElement(S.a,null,l.a.createElement("div",{onClick:function(){return e.onSelected(t.id)}},l.a.createElement("h4",{className:"mapMarker"},t.name),l.a.createElement("img",{src:t.image_url,style:{height:"100px",width:"100px"},alt:t.name}),l.a.createElement("br",null),"Rating ",t.rating," / 5.",l.a.createElement("br",null),void 0!==t.price?l.a.createElement(l.a.Fragment,null,"Price ",t.price,l.a.createElement("br",null)):l.a.createElement("br",null),"Wait Time: ",e.genIcons(t.wait),l.a.createElement("br",null))))})}},{key:"formWaitTimeList",value:function(){var e=this;return this.state.data.businesses.map(function(t){return l.a.createElement("tr",{key:t.name+Math.random(),className:"marker",onClick:function(){return e.onSelected(t.id)}},l.a.createElement("td",null,t.name),l.a.createElement("td",null," ",e.genIcons(t.wait)))})}},{key:"onChangeView",value:function(e){this.setState({localView:e})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",{className:"row map",id:"map"},l.a.createElement("div",{className:"col"},l.a.createElement("h4",{className:" section-title"},"Restaurant Around You")),l.a.createElement("div",{className:"w-100"}),l.a.createElement("div",{className:"col"},l.a.createElement("div",{className:"row",id:"nav-map"},l.a.createElement("button",{className:"btn btn-light col",id:"showmap",onClick:function(){return e.onChangeView("map")}},l.a.createElement("span",{className:"fa fa-map-marked-alt mr-2"}),"Map View"),l.a.createElement("button",{className:"btn btn-dark col",id:"showwait",onClick:function(){return e.onChangeView("table")}},l.a.createElement("span",{className:"far fa-clock mr-2"}),"Waittime"))),l.a.createElement("div",{className:"w-100"}),l.a.createElement("div",{className:"col",id:"restaurant"},l.a.createElement("div",{className:"row outter-wrap"},l.a.createElement("div",{className:"col-md-12 ".concat("map"===this.state.localView?"":"collapse"),id:"mapView","data-parent":"#restaurant"},l.a.createElement("div",{className:"card card-body",id:"MapWrapper"},l.a.createElement("div",{id:"mainMap",className:"mapBox"},l.a.createElement(L.a,{center:[this.state.pos[0],this.state.pos[1]],zoom:13},l.a.createElement(x.a,{url:"https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token="+this.apiKey,attribution:"",maxZoom:18,minZoom:10,id:"mapbox.light"}),this.genRestLayer())))),l.a.createElement("div",{className:"col-md-12 overlay col-lg-5 col-lg-offset-5 ".concat("table"===this.state.localView?"":"collapse"),id:"waitView","data-parent":"#restaurant"},l.a.createElement("div",{className:"card card-body"},l.a.createElement("table",{className:"waitTimeTable table table-striped",id:"waitTimeTable"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",{key:"name"},"Restaurant Name"),l.a.createElement("th",{key:"waittime_title"},"Current Wait time"))),l.a.createElement("tbody",null,this.formWaitTimeList())))))))}}]),t}(n.Component),P=a(28),M=a.n(P),T=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).state={success:!1},a}return Object(u.a)(t,e),Object(c.a)(t,[{key:"update",value:function(){this.setState({success:!0})}},{key:"componentWillReceiveProps",value:function(e){e.selectedRest!==this.props.selectedRest&&this.setState({success:!1})}},{key:"render",value:function(){var e=this.props.data.businesses,t=M.a.find(e,["id",this.props.selectedRest]);return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{className:"row reservation mt-5 pb-5",id:"reservation"},l.a.createElement("div",{className:"col select-restaurant pt-5"},l.a.createElement("h4",{className:"section-title"},t.name)),l.a.createElement("div",{className:"w-100"}),l.a.createElement("div",{className:"col no-reserve mt-3 ".concat(parseInt(t.wait)<=3||this.state.success?"collapse":"")},l.a.createElement("h5",null,"The restaurant does not accept any more reservation."),l.a.createElement("small",null,"The current wait time is over 1 Hour. You may add into the waitlist in store."),l.a.createElement("hr",{className:"my-4"}),l.a.createElement("h5",{className:"section-title"},"Please Let us know the current wait time."),l.a.createElement("select",{id:"updatewait",name:"updatewait",className:"form-control col-md-10 col-sm-10 mb-4","aria-label":"Current Wait Time",required:!0},l.a.createElement("option",{value:"1"},"Less then 10 minutes"),l.a.createElement("option",{value:"2"},"Less then 30 minutes"),l.a.createElement("option",{value:"3"},"Less than 45 minutes"),l.a.createElement("option",{value:"4"},"More than an hour!")),l.a.createElement("a",{href:"#updateWait",className:"btn btn-primary text-light ",id:"updateWait",onClick:this.update.bind(this)},"Submit Update")),l.a.createElement("div",{className:"w-100"}),l.a.createElement("div",{className:"col reserve-success ".concat(parseInt(t.wait)>3||!this.state.success?"collapse":"")},l.a.createElement("h4",null,"Reservation Success"),l.a.createElement("h5",null,"You have reserved a Table 3:30 PM for Party size 2!"),l.a.createElement("small",null,"Please arrive in 15 mins before your reserved time.")),l.a.createElement("div",{className:"w-100"}),l.a.createElement("div",{className:"col reserve-update ".concat(parseInt(t.wait)<=3||!this.state.success?"collapse":"")},l.a.createElement("h4",null,"Wait Time Update"),l.a.createElement("h5",null,"Thank you for telling us the latest wait time."),l.a.createElement("small",null,"We will use the latest data to serve you better.")),l.a.createElement("div",{className:"w-100"}),l.a.createElement("form",{className:"form-horizontal col ".concat(parseInt(t.wait)>3||this.state.success?"collapse":""),id:"reservation-form",method:"get"},l.a.createElement("fieldset",null,l.a.createElement("h4",null,l.a.createElement("legend",null,"Reserve a Table Now")),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"col control-label",htmlFor:"fullname"},"Your Name"),l.a.createElement("div",{className:"col"},l.a.createElement("input",{id:"fullname",name:"fullname",type:"text",placeholder:"Enter Your Full Name",className:"form-control input-md",required:!0}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"col control-label",htmlFor:"email"},"Your Email"),l.a.createElement("div",{className:"col"},l.a.createElement("input",{id:"email",name:"email",type:"email",placeholder:"Enter Your Email",className:"form-control input-md",required:!0}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"col control-label",htmlFor:"phone"},"Your Contact Number"),l.a.createElement("div",{className:"col"},l.a.createElement("input",{id:"phone",name:"phone",type:"tel",placeholder:"Phone Number Format: 2061231234",pattern:"[0-9]{3}[0-9]{3}[0-9]{4}",className:"form-control input-md",required:!0}))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"col  control-label",htmlFor:"size"},"Party Size"),l.a.createElement("div",{className:"col"},l.a.createElement("select",{id:"size",name:"size",className:"form-control",required:!0},l.a.createElement("option",{value:"1"},"1"),l.a.createElement("option",{value:"2"},"2"),l.a.createElement("option",{value:"3"},"3"),l.a.createElement("option",{value:"4"},"4"),l.a.createElement("option",{value:"5"},"5"),l.a.createElement("option",{value:"6"},"6"),l.a.createElement("option",{value:"7"},"7"),l.a.createElement("option",{value:"8"},"8"),l.a.createElement("option",{value:"9"},"9"),l.a.createElement("option",{value:"10"},"10"),l.a.createElement("option",{value:"11"},">10")))),l.a.createElement("div",{className:"form-group"},l.a.createElement("label",{className:"col control-label",htmlFor:"time"},"Time of Arrival"),l.a.createElement("div",{className:"col"},l.a.createElement("select",{id:"time",name:"time",className:"form-control",required:!0},l.a.createElement("option",{value:"1"},"3:30 PM"),l.a.createElement("option",{value:"2"},"4:00 PM"),l.a.createElement("option",{value:"3"},"4:30 PM"),l.a.createElement("option",{value:"4"},"5:00 PM"),l.a.createElement("option",{value:"5"},"5:30 PM"),l.a.createElement("option",{value:"6"},"6:00 PM"),l.a.createElement("option",{value:"7"},"6:30 PM"),l.a.createElement("option",{value:"8"},"7:00 PM"),l.a.createElement("option",{value:"9"},"7:30 PM"),l.a.createElement("option",{value:"10"},"8:00 PM"),l.a.createElement("option",{value:"11"},"8:30 PM"),l.a.createElement("option",{value:"12"},"9:00 PM")))),l.a.createElement("button",{className:"form-control form-group btn btn-primary",onClick:this.update.bind(this),type:"submit",id:"reserveBtn"},"Reserve Now")))))}}]),t}(n.Component),W=a(29),D=a.n(W),F=function(e){function t(){var e;return Object(o.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).state={data:{},view:"init",pos:[],selectedRest:-1,loading:!1},e.mapRef=l.a.createRef(),e.mapViewRef=l.a.createRef(),e.reserveRef=l.a.createRef(),e.onDataChange=function(t,a,n){e.setState({data:t,view:a,pos:n}),"map"===a?window.scrollTo(0,e.mapViewRef.current.offsetTop):"reservation"===a&&window.scrollTo(0,e.reserveRef.current.offsetTop)},e.onReserveChange=function(t){e.setState({selectedRest:t})},e.onSetLoading=function(t){e.setState({loading:t})},e}return Object(u.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",null,l.a.createElement(v,null)),l.a.createElement("main",null,l.a.createElement("div",{id:"overlay",className:this.state.loading?"d-block":"d-none"},l.a.createElement("div",{style:{margin:(window.innerHeight-240)/2+"px 0 0 "+(window.innerWidth-240)/2+"px"}},l.a.createElement(D.a,{className:"loader",type:"Puff",color:"#b2cfff",height:"240",width:"240"}))),l.a.createElement("div",{className:"container-fluid",id:"main_wrapper"},l.a.createElement(w,{data:this.state.data,onDataChange:this.onDataChange.bind(this),onSetLoading:this.onSetLoading.bind(this)}),l.a.createElement("hr",{ref:this.mapViewRef}),"map"===this.state.view||"reservation"===this.state.view?l.a.createElement(I,{ref:this.mapRef,data:this.state.data,pos:this.state.pos,onDataChange:this.onDataChange.bind(this),onReserveChange:this.onReserveChange.bind(this)}):l.a.createElement(l.a.Fragment,null),l.a.createElement("hr",{ref:this.reserveRef}),"reservation"===this.state.view?l.a.createElement(T,{data:this.state.data,selectedRest:this.state.selectedRest,onDataChange:this.onDataChange.bind(this)}):l.a.createElement(l.a.Fragment,null))),l.a.createElement("footer",null,l.a.createElement(f,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));a(67);s.a.render(l.a.createElement(F,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[30,1,2]]]);
//# sourceMappingURL=main.3d3376c3.chunk.js.map