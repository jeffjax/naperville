import Ember from 'ember';
import Shelter from '../models/shelter';
import Query from 'esri/tasks/query';

export default Ember.Service.extend({
  featureLayer: null,
  shelters: null,

  queryShelters: Ember.observer('featureLayer', function() {
    var query = new Query();
    query.where = '1=1';
    query.outFields = ['sheltstat', 'capacity', 'facname'];
   
    this.featureLayer.queryFeatures(query).then(featureSet => {
      this.set('shelters', featureSet.features.map(graphic => {
        return Shelter.create({ graphic: graphic });
      }));
    });   
  })
});
