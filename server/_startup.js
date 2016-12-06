console.log("Starting server...");

Meteor.publish('run', function() {

  if (this.userId != null) {
    console.log("published");
    return Committee.find({
      _id: 1
    }, {
      fields: {
        '_id': 1,
        'emails': 1,
        'createdAt': 1,
        'joinCommittee':1
      }
    });
  } else {
    console.log("published else");
    return this.ready();
  }
});
Meteor.publish('null', function() {

  if (this.userId != null) {
    return Meteor.users.find({
      _id: this.userId
    }, {
      fields: {
        '_id': 1,
        'emails': 1,
        'createdAt': 1,
        'joinCommittee':1
      }
    });
  } else {
    return this.ready();
  }
});


//Meteor.publish("numbers/all", function() {
  //return Meteor.users.find().fetch();
//});
//Meteor.publish('userData', function () { return Meteor.users.find({}).fetch(); });
//Meteor.publish('comData', function () { return Committee.find({}).fetch(); });
