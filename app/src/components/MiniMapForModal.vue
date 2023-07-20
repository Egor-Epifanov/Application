<template>
  <section id="mini-map">

  </section>
</template>
  
<script>
import axios from 'axios';

  export default{
    name: 'MiniMapForModal',
    data(){
      return{
        adress:"",
      }
    }
    // methods:{
    //   locatorButton(){
    //     if(navigator.geolocation) {
    //       navigator.geolocation.getCurrentPosition(
    //         position => {
    //           this.getAdressFrom(position.coords.latitude, position.coords.longitude);
    //           this.showUserLocation(position.coords.latitude, position.coords.longitude);
    //         },
    //         error => {
    //           console.log(error.message);
    //         }
    //       )
    //     }
    //     else{
    //       console.log("Ошибка! Ваш бразуер не поддерживает отслеживание геолокации")
    //     }
    //   },
    //   getAdressFrom(lat, long){
    //     axios.get("https://maps.googleapis.com/maps/api/geocode/json?latlng=" + lat + "," + long + "&key=AIzaSyC4800J442xrkb5zUzGSEHA5GHHnMmccgc")
    //     .then(response => {
    //       if(response.data.error_message){
           
    //         console.log(response.console.error_message)
    //       }
    //       else{ 
    //         this.adress = response.data.results[0].formatted_adress;
    //       }
    //     }).catch(error => {
    //       console.log(error.message)
    //     })
    //   },
    //   showUserLocation(latitude, longitude){
    //     let map = new google.maps.Map(document.getElementById("map"), {
    //       zoom: 12,
    //       center: new google.maps.LatLng(latitude,longitude),
    //       mapTypeId:google.maps.MapTypeId.ROADMAP       
    //     })
    //   }
    // }
  }
</script>
  
 <style scoped>
  #mini-map {
    position: absolute;
    min-height: 200px;
    height: 80%;
    width: 60%;
  }
</style>