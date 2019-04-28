// var map;
// var options = {
//   center: {lat: 51.085597, lng: 1.149856},
//   zoom: 16
// }

// function initMap() {
//   map = new google.maps.Map(document.getElementById('map'), options);

//   var markers = [
//     {
//       coordinates: {lat: 51.085597, lng: 1.149856},
//       // iconImage: 'assets/images/sc-icon.png',
//       content: '<h1>Partaaay!</h1><img src="assets/images/sc-icon.png" alt="">'
//     },
//     {
//       coordinates: {lat: 51.084725, lng: 1.153940},
//       content: '<h1>Choo choo!</h1>' 
//     }
//   ];

//   // loop through markers
//   for( var i = 0; i < markers.length;i++){
//     addMarker(markers[i])
//   };

//   function addMarker(props){  
//     var marker = new google.maps.Marker({
//       map: map,
//       position: props.coordinates
//     });

//     if(props.iconImage){
//       marker.setIcon(props.iconImage);
//     }

//     if(props.content){
//       var infoWindow = new google.maps.InfoWindow({
//         content: props.content,
//         maxWidth: 200
//       });
//     };
    
//     marker.addListener('click', function(){
//       infoWindow.open(map, marker)
//     });
//   }
// }