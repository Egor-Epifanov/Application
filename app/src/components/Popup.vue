<template>
    <div id="popup" class="ol-popup">
        <a href="#" id="popup-closer" class="ol-popup-closer"></a>
        <div id="popup-content">
            
                <q-table
                :title="title"
                :rows="rows"
                :columns="columns"
                row-key="key"
                :separator="separator"
                v-model:pagination="table_pagination"
                />
                <q-pagination
                v-model="current"
                color="purple"
                :max="maxPage"
                :max-pages="10"
                boundary-numbers                
                @update:modelValue="onPageChange"
                ></q-pagination>            
        </div>
    </div>
</template>

<script>
import Overlay from "ol/Overlay";
import Feature from "ol/Feature";
import { Vector as VectorSource } from 'ol/source';
import { VectorImage } from 'ol/layer';

export default{
    name: 'Popup',
    data() {
    return {
        title: "",
        rows: [],
        columns: [],
        current: 1,
        maxPage: 0,
        featureProps: [],
        separator: 'cell',
        table_pagination: {
            page: 1
        },
        highlight_layer: ''
    }
},
addClick () {
            
            // Create vector layer for highlighting the feature on popup click
            let highlight_layer = new VectorImage({
                source: new VectorSource({                    
                })                
            });
 
            this.map.addLayer(highlight_layer);
 
            let container = document.getElementById('popup');            
            let closer = document.getElementById('popup-closer');
 
            /**
             * Create an overlay to anchor the popup to the map.
             */
            const overlay = new Overlay({
                element: container,
                autoPan: {
                    animation: {
                    duration: 250,
                    },
                },
            });
 
            /**
             * Add a click handler to hide the popup.
             * @return {boolean} Don't follow the href.
             */
            closer.onclick = function () {
                highlight_layer.getSource().clear();
                this.table_pagination = {
                    page: 1
                };
                this.current = 1;
                overlay.setPosition(undefined);
                closer.blur();
                return false;
            };
            
            this.title = 'dummy';
            this.map.addOverlay(overlay);
 
            /**
             * Add a click handler to the map to render the popup.
             */
            let that = this;
            this.map.on('singleclick', function (evt) {
                // Clear highlight_layer features on every click
                that.current = 1;
                highlight_layer.getSource().clear();
                that.featureProps = [];
                that.maxPage = 0;                             
                
                // Iterating through array of features found on clicked coordinates of map
                evt.target.forEachFeatureAtPixel(evt.pixel, (feature, layer) => {
                    
                    // Maintaining states such as title, feature properties for features on click and rendering them on q-table in popup
                    let featureProp = {};
                    featureProp.title = layer.get('name');
                    featureProp.columns = [{name: 'key', label: 'Key', field: 'key'}, {name: 'value', label: 'Value', field: 'value'}]
                    featureProp.rows = [];
                    featureProp.geom = '';
                    let props = feature.getProperties();
 
                    for (let x in props) {
                        if (x != 'geometry') {                            
                            featureProp.rows.push({
                                key: x.toUpperCase(),
                                value: props[x]                                
                            })                          
                        } else {
                            featureProp.geom = props[x];
                        }
                        
                    }   
                    that.featureProps.push(featureProp);
                    that.maxPage += 1
                });
 
                if (that.featureProps.length) {
                    that.title = that.featureProps[0].title;
                    that.columns = that.featureProps[0].columns;
                    that.rows = that.featureProps[0].rows;
 
                    let feature = new Feature({
                        geometry: that.featureProps[0].geom
                    });
 
                    highlight_layer.getSource().addFeature(feature);
                    
                    const coordinate = evt.coordinate;                                
                    overlay.setPosition(coordinate);
                }                
            });
            that.highlight_layer = highlight_layer;
        },
        onPageChange(i) {  
            /**
             *Changing the feature info and highlight feature on pagination click
             */
            this.highlight_layer.getSource().clear();
 
            this.table_pagination = {
                page: 1
            };        
            this.title = this.featureProps[i-1].title;
            this.columns = this.featureProps[i-1].columns;
            this.rows = this.featureProps[i-1].rows;
 
            let feature = new Feature({
                geometry: this.featureProps[i-1].geom
            });
 
            this.highlight_layer.getSource().addFeature(feature);
        }
}
</script>