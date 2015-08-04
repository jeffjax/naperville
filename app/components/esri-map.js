import Ember from 'ember';
import Map from 'esri/map';
import FeatureLayer from 'esri/layers/FeatureLayer';

export default Ember.Component.extend({
  sheltersService: Ember.inject.service('shelters'),
  map: null,

  didInsertElement: function() {
    var map = new Map(this.elementId, {
      center: [-88.173535, 41.703578],
      zoom: 12,
      basemap: 'topo'
    });

    const sheltersUrl = 'http://sampleserver6.arcgisonline.com/arcgis/rest/services/NapervilleShelters/FeatureServer/0';
    const sheltersLayer = new FeatureLayer(sheltersUrl);
    
    sheltersLayer.on('load', event => {
      this.get('sheltersService').set('featureLayer', sheltersLayer);
    });

    map.addLayer(sheltersLayer);

    this.set('map', map);
    this.set('registerAs', this); // expose a property for clients of the components to bind to
  }
});
