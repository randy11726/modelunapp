

Meteor.subscribe("null", function() {
  console.log("SUBSCRIED ")
  return Meteor.users.find( { _id: 1 } ).fetch();
});

Meteor.subscribe("run", function() {
  console.log("SUBSCRIED 2 ")
  return Meteor.users.find( { _id: 1 } ).fetch();
});
/*Meteor.subscribe("comData", function() {
    //Collection available
});

Meteor.subscribe('numbers/all');
  return {
    numbers: Meteor.users.find().fetch(),
  };
*/
