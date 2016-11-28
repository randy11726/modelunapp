

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

    goTimer(e){

      
        FlowRouter.go('/timer');


        },



    userName(){
      var currentUser = Meteor.userId();
      let candy = Committee.find().fetch(); //Meteor.users.findOne(currentUser);
      //console.log("Topic is this " + candy[0].comTopic); // change return candy to current user for id
      //var email = Committee.find({ _id: currentUser });
      //var email = Meteor.users.find({_id: currentUser}, {'_id': 0, 'emails.address': 1}).fetch();
      var name = candy[0].comChair;




      console.log(name);
      return <h4>{name}</h4>
    },

    done(){
      //var comSet = this.listC();
      var can = this.forceUpdate();
      //return <p> comSet[0].comChair</p>
      return can
    },





    render() {




      console.log(this.listC());
      let comC = this.listC();
      if (comC.length < 1){
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
                  <th data-field="name4">Date</th>
                  <th data-field="name5">Countires</th>
                  <th data-field="price">Details</th>
              </tr>
            </thead>

            <tbody>
          {comC.map( (committee) => {
            //console.log(committee.comCountries);
            var comCountriesClean = committee.comCountries.join(', '); // used to add spacing and commas between countries array

            var self = this;


            return (



                  <div>
                  <tr>
                    <td> {committee.comName} </td>
                    <td>{committee.comTopic}</td>
                    <td> {committee.comAddress} </td>
                    <td>{committee.comChair}</td>
                    <td> {committee.comDate} </td>
                    <td>{comCountriesClean}</td>
                    <td>

                      <button id={committee._id} key={committee._id} className="waves-effect waves-light btn btn-block" onClick={this.goTimer.bind(this,event)} >START</button>


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
