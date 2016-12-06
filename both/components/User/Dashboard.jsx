

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

    listD(){
      var newobject = {};
      var currentUser = Meteor.userId();
      console.log(currentUser);
      var poop = Meteor.users.find({_id: currentUser}, {_id: 0, emails: 1}).fetch();
      console.log(poop);


      var printme = poop[0].joinCommittee;
      var a = new Array();
      console.log(printme);
      //var hel = Committee.find( { _id: "jNdvf6JWk29TQdYfe" } ).fetch();
      for (i = 0; i < printme.length; i++) {

          newobject = Committee.find( { _id: printme[i] } ).fetch();
          a.push(newobject);
          console.log(a[i])
          //var animal = a[i][0].comName;
          //console.log(animal);
      }
      console.log(a);

      console.log("Array of Everything is Above Me");
      //return Meteor.users.find({_id: currentUser}, {_id: 0, emails: 1}).fetch();
      return a;
    },


    onSubmit(e){

        e.preventDefault();
        FlowRouter.go('/');


        },

    goTimer(e){


        FlowRouter.go('/timer');


        },



    userName(){
      var currentUser = Meteor.userId();
      let candy = Committee.find().fetch(); //Meteor.users.findOne(currentUser);
      //console.log("Topic is this " + candy[0].comTopic); // change return candy to current user for id
      //var email = Committee.find({ _id: currentUser });
      var email = Meteor.users.find({_id: currentUser}, {'_id': 0, 'emails.address': 1}).fetch();
      var emailAddr = email[0].emails[0].address
      return <h4>{emailAddr}</h4>
    },





    render() {




      console.log(this.listC());
      let comD = this.listD();
      let comC = this.listC();
      if (comC.length < 1 || comD.length < 1){
          console.log("loading committes");
          return (<div> Loading Committees</div>)
      }

      var styleCard = {

        width: 900
      };

      var styleCardFooter = {

        textAlign: 'center'
      };





        return (
          <div>
            <div className="row">
              <div className="col s12 m6">
                <div className="card blue-grey darken-1" style ={styleCard}>
                  <div className="card-content white-text">
                    <span className="card-title">Welcome,   </span>
                      <div>
                        <p> {this.userName()}</p>
                      </div>

                  </div>
                  <div className="card-action" style ={styleCardFooter}>

                    <a href="#">Committes you joined are below!!</a>






                  </div>
                </div>
              </div>
            </div>
            <table className="bordered centered">
            <thead className="tableHeader">
              <tr>
                  <th data-field="id">Committee Name</th>
                  <th data-field="name1">Topic</th>
                  <th data-field="name2">Address</th>
                  <th data-field="name3">Chair</th>
                  <th data-field="name4">Dates23s</th>
                  <th data-field="name5">Countires</th>
                  <th data-field="price">Details</th>
              </tr>
            </thead>

            <tbody>
          {comD.map( (committee) => {
            //console.log(committee[0].comCountries);
            var comCountriesClean = committee[0].comCountries.join(', '); // used to add spacing and commas between countries array

            var self = this;


            return (



                  <div>
                  <tr>
                    <td> {committee[0].comName} </td>
                    <td>{committee[0].comTopic}</td>
                    <td> {committee[0].comAddress} </td>
                    <td>{committee[0].comChair}</td>
                    <td> {committee[0].comDate} </td>
                    <td>{comCountriesClean}</td>
                    <td>

                      <button id={committee[0]._id} key={committee[0]._id} className="waves-effect waves-light btn btn-block" onClick={this.goTimer.bind(this,event)} >START</button>


                    </td>
                  </tr>
                </div>




        )
      })}
         </tbody>
       </table>


          </div>
        );


    }


});
