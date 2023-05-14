function initMap(){
  const posicion = {
    lat: -25.363,
    lng: 131.044
  }

  const map = new google.maps.Map(document.getElementById("map"),{
    zoom: 4,
    center: posicion
  
})

markers.push(
  new google.maps.Marker({
    position: {
      lat:-8.9740,
      lng:-79.5492,
    },
    map,
    title: "Cerro Ancón",
  })
);
markers.push(
  new google.maps.Marker({
    position: {
      lat:-8.8060,
      lng:-82.5630,
    },
    map,
    title: "Volcan Barú",
  })
);
markers.push(
  new google.maps.Marker({
    position: {
      lat:-8.9300,
      lng:-79.5818,
    },
    map,
    title: "Puente de las Americas",
  })
);





}