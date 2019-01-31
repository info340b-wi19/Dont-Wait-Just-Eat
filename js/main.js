
var api_key = "pk.eyJ1IjoicmFtb25xdSIsImEiOiJjamU4M3l1dWYwOWQ4MnlvMXZ1NTQ4c21oIn0.ael5riwgSHwAvbLZaYps0A"  

function showMap(){
  $("#waitView").hide();
  $("#mapView").show();
}
function showWait(){
  $("#mapView").hide();
  $("#waitView").show();
}
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  }
}

function locateme(){
  $("#map").show()
  genMap();
  var elmnt = document.getElementById("searchLoc");
  elmnt.scrollIntoView();
}

function search(){
  $("#map").show()
  genMap();
  var elmnt = document.getElementById("searchLoc");
  elmnt.scrollIntoView();
}

function genMap(){
  var map = L.map('mainMap').setView([47.65671,-122.308914],13);
  L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token='+api_key, {
    maxZoom: 18,
    id: 'mapbox.light'
}).addTo(map);
}

// Data is from Yelp. In the future this will be replace by Yelp AJAX call

let exampleRestaurantList = {
  "businesses": [
      {
          "id": "JXRZqx7qpqmvMt5K10djAA",
          "alias": "chi-mac-seattle",
          "name": "Chi Mac",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/RGazer5zRR4DMDcoXmNrCw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/chi-mac-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 252,
          "categories": [
              {
                  "alias": "korean",
                  "title": "Korean"
              },
              {
                  "alias": "chicken_wings",
                  "title": "Chicken Wings"
              },
              {
                  "alias": "beerbar",
                  "title": "Beer Bar"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 47.66208,
              "longitude": -122.31344
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "4525 University Way NE",
              "address2": "",
              "address3": null,
              "city": "Seattle",
              "zip_code": "98105",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "4525 University Way NE",
                  "Seattle, WA 98105"
              ]
          },
          "phone": "+12065475151",
          "display_phone": "(206) 547-5151",
          "distance": 1041.7164771303665
      },
      {
          "id": "9vp47oNBP3iHTTPgrsWyNQ",
          "alias": "little-duck-seattle-2",
          "name": "Little Duck",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/OH5eULWg3Re1wzIR8ydfzQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/little-duck-seattle-2?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 3,
          "categories": [
              {
                  "alias": "chinese",
                  "title": "Chinese"
              }
          ],
          "rating": 5,
          "coordinates": {
              "latitude": 47.65707,
              "longitude": -122.31748
          },
          "transactions": [],
          "location": {
              "address1": "4100 Roosevelt Way NE",
              "address2": "Unit B",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98105",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "4100 Roosevelt Way NE",
                  "Unit B",
                  "Seattle, WA 98105"
              ]
          },
          "phone": "",
          "display_phone": "",
          "distance": 1058.5349390607014
      },
      {
          "id": "OYRdDA88AkyUlUmriMGWxw",
          "alias": "yoroshiku-seattle-4",
          "name": "Yoroshiku",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/boRbK85Pt-8AI62EX6J4Jw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/yoroshiku-seattle-4?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 452,
          "categories": [
              {
                  "alias": "ramen",
                  "title": "Ramen"
              },
              {
                  "alias": "izakaya",
                  "title": "Izakaya"
              },
              {
                  "alias": "gastropubs",
                  "title": "Gastropubs"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 47.661275215696,
              "longitude": -122.334412382889
          },
          "transactions": [
              "delivery",
              "pickup",
              "restaurant_reservation"
          ],
          "price": "$$",
          "location": {
              "address1": "1913 N 45th St",
              "address2": "",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98103",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "1913 N 45th St",
                  "Seattle, WA 98103"
              ]
          },
          "phone": "+12065474649",
          "display_phone": "(206) 547-4649",
          "distance": 2398.7556045235037
      },
      {
          "id": "RzOn1WEsHZ-vY5ZxyfOAkw",
          "alias": "pomodoro-seattle",
          "name": "Pomodoro",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/zq6dQR4Wm2tSyw52LNjufw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/pomodoro-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 386,
          "categories": [
              {
                  "alias": "italian",
                  "title": "Italian"
              },
              {
                  "alias": "spanish",
                  "title": "Spanish"
              },
              {
                  "alias": "tapasmallplates",
                  "title": "Tapas/Small Plates"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 47.641699,
              "longitude": -122.325672
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "2366 Eastlake Ave E",
              "address2": "Ste 101",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98102",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "2366 Eastlake Ave E",
                  "Ste 101",
                  "Seattle, WA 98102"
              ]
          },
          "phone": "+12063243160",
          "display_phone": "(206) 324-3160",
          "distance": 2251.7669841357347
      },
      {
          "id": "jzZatlgnWJfdTT_hY7NHLw",
          "alias": "taste-of-xian-seattle",
          "name": "Taste Of Xi'an",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/G0ak7f86o5qCWyNAcJTD4A/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/taste-of-xian-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 256,
          "categories": [
              {
                  "alias": "chinese",
                  "title": "Chinese"
              },
              {
                  "alias": "bbq",
                  "title": "Barbeque"
              },
              {
                  "alias": "noodles",
                  "title": "Noodles"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 47.66196,
              "longitude": -122.31345
          },
          "transactions": [
              "delivery",
              "pickup"
          ],
          "price": "$$",
          "location": {
              "address1": "4523 University Way NE",
              "address2": "",
              "address3": null,
              "city": "Seattle",
              "zip_code": "98105",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "4523 University Way NE",
                  "Seattle, WA 98105"
              ]
          },
          "phone": "+12062319999",
          "display_phone": "(206) 231-9999",
          "distance": 1031.3110074026679
      },
      {
          "id": "rXbU5HJx6mihqazytPTgXA",
          "alias": "kedai-makan-seattle-4",
          "name": "Kedai Makan",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/PMqIAYAknTK01diJEspDOA/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/kedai-makan-seattle-4?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 678,
          "categories": [
              {
                  "alias": "malaysian",
                  "title": "Malaysian"
              },
              {
                  "alias": "noodles",
                  "title": "Noodles"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 47.6179,
              "longitude": -122.32658
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "1802 Bellevue Ave",
              "address2": "",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98122",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "1802 Bellevue Ave",
                  "Seattle, WA 98122"
              ]
          },
          "phone": "",
          "display_phone": "",
          "distance": 4511.360467105781
      },
      {
          "id": "GkxyrbqO0FdEeFJG_PaTgg",
          "alias": "thackeray-seattle-2",
          "name": "Thackeray",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/jy4NRS84-5hYsEPMMo4Cvw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/thackeray-seattle-2?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 337,
          "categories": [
              {
                  "alias": "bars",
                  "title": "Bars"
              },
              {
                  "alias": "tradamerican",
                  "title": "American (Traditional)"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 47.649216,
              "longitude": -122.342439
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "3400 Stone Way N",
              "address2": null,
              "address3": "",
              "city": "Seattle",
              "zip_code": "98103",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "3400 Stone Way N",
                  "Seattle, WA 98103"
              ]
          },
          "phone": "+12067378743",
          "display_phone": "(206) 737-8743",
          "distance": 2991.559158849538
      },
      {
          "id": "ZHMHUTDxXhufLU-iFSNntg",
          "alias": "hanok-seattle-2",
          "name": "Hanok",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/S7NwaA85IorudiDdYpOoog/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/hanok-seattle-2?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 43,
          "categories": [
              {
                  "alias": "korean",
                  "title": "Korean"
              },
              {
                  "alias": "asianfusion",
                  "title": "Asian Fusion"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 47.63383,
              "longitude": -122.28028
          },
          "transactions": [],
          "location": {
              "address1": "4021 E Madison St",
              "address2": "",
              "address3": null,
              "city": "Seattle",
              "zip_code": "98112",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "4021 E Madison St",
                  "Seattle, WA 98112"
              ]
          },
          "phone": "",
          "display_phone": "",
          "distance": 2954.217247741837
      },
      {
          "id": "NCDpIDp2f-DhPO5sL5Hbdw",
          "alias": "xian-noodles-seattle-3",
          "name": "Xi'an Noodles",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/MErC-4Z-UX9HItR0LVKx0Q/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/xian-noodles-seattle-3?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 583,
          "categories": [
              {
                  "alias": "chinese",
                  "title": "Chinese"
              },
              {
                  "alias": "noodles",
                  "title": "Noodles"
              },
              {
                  "alias": "hotpot",
                  "title": "Hot Pot"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 47.66815,
              "longitude": -122.31319
          },
          "transactions": [],
          "price": "$",
          "location": {
              "address1": "5259 University Way NE",
              "address2": null,
              "address3": "",
              "city": "Seattle",
              "zip_code": "98105",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "5259 University Way NE",
                  "Seattle, WA 98105"
              ]
          },
          "phone": "+12065228888",
          "display_phone": "(206) 522-8888",
          "distance": 1592.4838963874006
      },
      {
          "id": "a4K6WMS8JW31VBteDM5TIA",
          "alias": "manolin-seattle",
          "name": "Manolin",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/f9KU-JOM0MkILzP053W8WQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/manolin-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 417,
          "categories": [
              {
                  "alias": "seafood",
                  "title": "Seafood"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 47.651215,
              "longitude": -122.343091
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "3621 Stone Way N",
              "address2": "",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98103",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "3621 Stone Way N",
                  "Seattle, WA 98103"
              ]
          },
          "phone": "+12062943331",
          "display_phone": "(206) 294-3331",
          "distance": 2996.3093109910296
      },
      {
          "id": "018rYSHznjI1lzEU9PDavA",
          "alias": "mkt-seattle",
          "name": "mkt.",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/xqw68AmnVJ18FYZjpjmIEw/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/mkt-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 288,
          "categories": [
              {
                  "alias": "newamerican",
                  "title": "American (New)"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 47.6686946,
              "longitude": -122.3329512
          },
          "transactions": [],
          "price": "$$$",
          "location": {
              "address1": "2108 N 55th St",
              "address2": "",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98103",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "2108 N 55th St",
                  "Seattle, WA 98103"
              ]
          },
          "phone": "+12068121580",
          "display_phone": "(206) 812-1580",
          "distance": 2648.107293758316
      },
      {
          "id": "6OVriioGG7w7Nwq5Q25WtA",
          "alias": "portage-bay-cafe-roosevelt-seattle",
          "name": "Portage Bay Cafe - Roosevelt",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/D1oi0eKTBuRlZiWe_Peejg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/portage-bay-cafe-roosevelt-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 1997,
          "categories": [
              {
                  "alias": "newamerican",
                  "title": "American (New)"
              },
              {
                  "alias": "breakfast_brunch",
                  "title": "Breakfast & Brunch"
              },
              {
                  "alias": "cafes",
                  "title": "Cafes"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 47.65757,
              "longitude": -122.3176
          },
          "transactions": [
              "restaurant_reservation"
          ],
          "price": "$$",
          "location": {
              "address1": "4130 Roosevelt Way NE",
              "address2": "",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98105",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "4130 Roosevelt Way NE",
                  "Seattle, WA 98105"
              ]
          },
          "phone": "+12065478230",
          "display_phone": "(206) 547-8230",
          "distance": 1073.3020873554258
      },
      {
          "id": "5TiNTcy5w_bLRtfVAoH5Bw",
          "alias": "pair-seattle",
          "name": "Pair",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/iuIz5PXHNTDDMeJkrCS7Ww/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/pair-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 215,
          "categories": [
              {
                  "alias": "newamerican",
                  "title": "American (New)"
              },
              {
                  "alias": "french",
                  "title": "French"
              },
              {
                  "alias": "wine_bars",
                  "title": "Wine Bars"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 47.6686789872273,
              "longitude": -122.294944967567
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "5501 30th Ave NE",
              "address2": "",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98105",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "5501 30th Ave NE",
                  "Seattle, WA 98105"
              ]
          },
          "phone": "+12065267655",
          "display_phone": "(206) 526-7655",
          "distance": 1608.6648077432742
      },
      {
          "id": "1vaAQ_ragENqgcAWtC0T2g",
          "alias": "oaky-s-tex-mex-seattle",
          "name": "Oaky’s Tex Mex",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/kOxN_ANAQ2MjSixhHpVtZg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/oaky-s-tex-mex-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 5,
          "categories": [
              {
                  "alias": "tex-mex",
                  "title": "Tex-Mex"
              }
          ],
          "rating": 5,
          "coordinates": {
              "latitude": 47.62603,
              "longitude": -122.36754
          },
          "transactions": [],
          "location": {
              "address1": "14147 Elliott Ave W",
              "address2": null,
              "address3": "",
              "city": "Seattle",
              "zip_code": "98119",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "14147 Elliott Ave W",
                  "Seattle, WA 98119"
              ]
          },
          "phone": "",
          "display_phone": "",
          "distance": 5796.212875908077
      },
      {
          "id": "ud5NuBZka9lVZdRlhQDrjQ",
          "alias": "din-tai-fung-seattle",
          "name": "Din Tai Fung",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/wqaerjGmExPpRDMNC3n6dQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/din-tai-fung-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 1945,
          "categories": [
              {
                  "alias": "taiwanese",
                  "title": "Taiwanese"
              },
              {
                  "alias": "shanghainese",
                  "title": "Shanghainese"
              },
              {
                  "alias": "dimsum",
                  "title": "Dim Sum"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 47.66164,
              "longitude": -122.29921
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "2621 NE 46th St",
              "address2": "",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98105",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "2621 NE 46th St",
                  "Seattle, WA 98105"
              ]
          },
          "phone": "+12065250958",
          "display_phone": "(206) 525-0958",
          "distance": 752.1892806307555
      },
      {
          "id": "lnhKk82pyocPND0lhwq-mQ",
          "alias": "bczhang-seattle",
          "name": "BCZhang",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/okpBQCVFkqyatl9jdLT44g/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/bczhang-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 21,
          "categories": [
              {
                  "alias": "chinese",
                  "title": "Chinese"
              },
              {
                  "alias": "creperies",
                  "title": "Creperies"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 47.6641,
              "longitude": -122.31291
          },
          "transactions": [],
          "location": {
              "address1": "4730 University Way NE",
              "address2": null,
              "address3": "",
              "city": "Seattle",
              "zip_code": "98105",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "4730 University Way NE",
                  "Seattle, WA 98105"
              ]
          },
          "phone": "+14256157905",
          "display_phone": "(425) 615-7905",
          "distance": 1170.626482095466
      },
      {
          "id": "qznc7_yV0VEWtgO27ywhjA",
          "alias": "the-zouave-restaurant-seattle",
          "name": "The Zouave Restaurant",
          "image_url": "https://s3-media4.fl.yelpcdn.com/bphoto/pt2sKXKpnX9KZEj1RqkpAg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/the-zouave-restaurant-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 179,
          "categories": [
              {
                  "alias": "italian",
                  "title": "Italian"
              },
              {
                  "alias": "french",
                  "title": "French"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 47.6756232,
              "longitude": -122.29875
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "2615 NE 65th St",
              "address2": "",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98115",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "2615 NE 65th St",
                  "Seattle, WA 98115"
              ]
          },
          "phone": "+12065257747",
          "display_phone": "(206) 525-7747",
          "distance": 2274.043246804022
      },
      {
          "id": "44OpjjkNgtgbYR92p3xNBQ",
          "alias": "kokkaku-seattle",
          "name": "Kokkaku",
          "image_url": "https://s3-media2.fl.yelpcdn.com/bphoto/Wn6ModXmN_9JyKseZWgs9w/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/kokkaku-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 71,
          "categories": [
              {
                  "alias": "newamerican",
                  "title": "American (New)"
              },
              {
                  "alias": "japanese",
                  "title": "Japanese"
              },
              {
                  "alias": "steak",
                  "title": "Steakhouses"
              }
          ],
          "rating": 4,
          "coordinates": {
              "latitude": 47.66163,
              "longitude": -122.33202
          },
          "transactions": [
              "restaurant_reservation"
          ],
          "price": "$$$",
          "location": {
              "address1": "2208 N 45th St",
              "address2": "",
              "address3": null,
              "city": "Seattle",
              "zip_code": "98103",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "2208 N 45th St",
                  "Seattle, WA 98103"
              ]
          },
          "phone": "+12065881568",
          "display_phone": "(206) 588-1568",
          "distance": 2242.5371939733873
      },
      {
          "id": "RS-Hlsx7k90m5QODHDs5Cg",
          "alias": "tapas-lab-seattle",
          "name": "Tapas Lab",
          "image_url": "https://s3-media1.fl.yelpcdn.com/bphoto/DXaC5iI9RnLncmSbsV2yRg/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/tapas-lab-seattle?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 83,
          "categories": [
              {
                  "alias": "tapasmallplates",
                  "title": "Tapas/Small Plates"
              },
              {
                  "alias": "spanish",
                  "title": "Spanish"
              },
              {
                  "alias": "asianfusion",
                  "title": "Asian Fusion"
              }
          ],
          "rating": 4.5,
          "coordinates": {
              "latitude": 47.67934,
              "longitude": -122.32439
          },
          "transactions": [],
          "price": "$$",
          "location": {
              "address1": "7012 Woodlawn Ave NE",
              "address2": "Unit 3B",
              "address3": "",
              "city": "Seattle",
              "zip_code": "98115",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "7012 Woodlawn Ave NE",
                  "Unit 3B",
                  "Seattle, WA 98115"
              ]
          },
          "phone": "+12067751744",
          "display_phone": "(206) 775-1744",
          "distance": 3084.009400144351
      },
      {
          "id": "6iuWZvByyyILVV7ADo_GQg",
          "alias": "tasty-seattle-2",
          "name": "Tasty",
          "image_url": "https://s3-media3.fl.yelpcdn.com/bphoto/nr-_rxS7j4ECm_yiie1CCQ/o.jpg",
          "is_closed": false,
          "url": "https://www.yelp.com/biz/tasty-seattle-2?adjust_creative=30c9RjJvoxPpDEtA6bPhLA&utm_campaign=yelp_api_v3&utm_medium=api_v3_business_search&utm_source=30c9RjJvoxPpDEtA6bPhLA",
          "review_count": 11,
          "categories": [
              {
                  "alias": "chinese",
                  "title": "Chinese"
              }
          ],
          "rating": 3.5,
          "coordinates": {
              "latitude": 47.66015,
              "longitude": -122.3134
          },
          "transactions": [],
          "location": {
              "address1": "4311 University Way NE",
              "address2": "",
              "address3": null,
              "city": "Seattle",
              "zip_code": "98105",
              "country": "US",
              "state": "WA",
              "display_address": [
                  "4311 University Way NE",
                  "Seattle, WA 98105"
              ]
          },
          "phone": "",
          "display_phone": "",
          "distance": 908.617776145585
      }
  ],
  "total": 2700,
  "region": {
      "center": {
          "longitude": -122.30358123779297,
          "latitude": 47.65543269087674
      }
  }
}
