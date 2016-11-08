


Meteor.users.allow({
  update: function(userId, user) {
    return true;

    /**
     * Don't use `return true` in production!
     * You probably need something like this:
     * return Meteor.users.findOne(userId).profile.isAdmin;
     */
  },
    insert: function(userId, user) {
    return true;

    /**
     * Don't use `return true` in production!
     * You probably need something like this:
     * return Meteor.users.findOne(userId).profile.isAdmin;
     */
    }

});

Dashboard = React.createClass({


    listC(){  // list of committe form data entries in DB

        return Committee.find().fetch();
    },

    onSubmit(e){

        e.preventDefault();
        FlowRouter.go('/');


        },



    userName(){
      var currentUser = Meteor.userId();
      let candy = Committee.find().fetch(); //Meteor.users.findOne(currentUser);
      console.log(candy); // change return candy to current user for id 

      return <p>{candy}</p>
    },




    render() {







        return (
          <div>
            <div className="row">
              <div className="col s12 m6">
                <div className="card blue-grey darken-1">
                  <div className="card-content white-text">
                    <span className="card-title">Card Title</span>
                    {this.userName()}
                  </div>
                  <div className="card-action">

                    <a href="#">This is a link</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );


    }



});
