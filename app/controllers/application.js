import Ember from 'ember';

export default Ember.Controller.extend({
  sheltersService: Ember.inject.service('shelters'),
  filter: null,

  shelters: Ember.computed('sheltersService.shelters.@each', 'filter', function() {
    var shelters = this.get('sheltersService.shelters');

    if (!shelters || !this.filter) {
      return null;
    }

    return shelters.filter( shelter => {
      return shelter.valueForDomain('sheltstat') === this.filter;
    });
  }),

  actions: {
    filterShelters: function(filter) {
      this.set('filter', filter);
    }
  }
});
