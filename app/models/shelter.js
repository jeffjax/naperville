import Ember from 'ember';
import Feature from './feature';

export default Feature.extend({
  name:           Ember.computed.alias('graphic.attributes.facname'),
  statusCode:     Ember.computed.alias('graphic.attributes.sheltstat'),
  capacity:    Ember.computed.alias('graphic.attributes.capacity'),
});
