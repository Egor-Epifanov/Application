<template>
    <div id="map" class="map">
      <div id="popup" class="ol-popup">
        <a href="#" id="popup-closer" class="ol-popup-closer" onclick="closePopup();"></a>
        <div id="popup-title" class="popup-title"></div>
        <div id="popup-content" class="popup-content"></div>
    </div>
    </div>
  </template>
  
  <script>
  import "ol/ol.css";
  import Map from "ol/Map";
  import View from "ol/View";
  import TileLayer from "ol/layer/Tile";
  import OSM from "ol/source/OSM";
  import { useGeographic } from "ol/proj";
  import VectorSource from "ol/source/Vector";
  import VectorLayer from "ol/layer/Vector";

  import Popup from "@/components/Popup.vue";
  
  export default {
    name: "Map",
    data() {
      return {
        mainMap: null,
        initialCoordinates: [39.70732721786235, 47.23260132167479]
      };
    },
    mounted() {
      this.myMap();
    },
    methods: {
      myMap() {
        useGeographic();
      this.mainMap = new Map({
          layers: [
            new TileLayer({
              source: new OSM(),
            }),
          ],
          target: "map",
          view: new View({
            center: this.initialCoordinates,
            zoom: 12,
          }),
        });
      
        const source = new VectorSource();
       source.addFeatures([new Feature(new Point(this.initialCoordinates))]); 

        const layer = new VectorLayer({
          source: source,
        });
        this.mainMap.addLayer(layer);
        setTimeout(() => {
          this.mainMap.updateSize();
        }, 500);
      },
    },
  };
  </script>
  
  <style>
  .map {
    min-height: 100px;
    height: 100%;
    width: 100%;
  }
  </style>