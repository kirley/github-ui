import Ember from 'ember';

export default Ember.Route.extend({

  model: function() {
    return [
      {id: "calendar-ui", name: "Calendar UI"},
      {id: "datepicker-ui", name: "Date Picker UI"},
      {id: "accordion-ui", name: "Accordion UI"}
    ];
  }

});
