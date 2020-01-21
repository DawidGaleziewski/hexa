class Map {
  constructor(mapDivID) {
    this.mapDivID = mapDivID;
    this.token =
      "pk.eyJ1IjoiZGF3aWRnYWxlemlld3NraWRldiIsImEiOiJjazVubjQ1bXgwYWR5M29tb2VuencxaTByIn0.wWmIia6n4sMWffSuNG8VGA";
  }

  initMap() {
    const mymap = L.map(this.mapDivID).setView([51.505, -0.09], 13);

    L.tileLayer(
      "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox/streets-v11",
        accessToken: this.token
      }
    ).addTo(mymap);

    const marker = L.marker([51.5, -0.09]).addTo(mymap);
  }
}

export default Map;
