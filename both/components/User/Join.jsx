

Join = React.createClass({

    listC(){  // list of committe form data entries in DB

        return Committee.find().fetch();
    },

    onSubmit(e){

        e.preventDefault();
        FlowRouter.go('/');


        },
    componentDidMount() {

        $('.modal-trigger').leanModal();



         },

    prom(event){

        //event.preventDefault();

        console.log(event);// prints id !!!!!!!!!! of committee on the row the button was on 
        //console.log(target.id);
         },





    render() {
        let comC = this.listC();
        if (comC.length < 1){
            return (<div> Loading Committees</div>)
        }

        function prom2(event){

            event.preventDefault();

            console.log("crybaby");
             }






        return (

          <div>
              <div className="row col">
                <form>
                  <div className="input-field">
                    <input id="search" autocomplete="false" placeholder="Search for a Committee" type="search" required/>
                    <label for="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                  </div>
                </form>
              </div>

              <div className="modal" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">
                <div className="modal-dialog" role="document">
                  <div className="modal-content">
                    <div className="modal-header">
                      <button className="modal-action modal-close btn waves-effect waves-light">x </button>
                      <h4 className="modal-title" id="myModalLabel">Details</h4>
                    </div>
                    <div className="modal-body">
                      <p><input type="text" class="input-sm" id="txtfname"/></p>
                      <p><input type="text" class="input-sm" id="txtlname"/></p>
                      <p>This is comChairs</p>
                    </div>
                    <div className="modal-footer">
                      <button className="modal-action modal-close btn waves-effect waves-light">Close </button>
                      <button type="button" className="btn btn-primary">Save changes</button>
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

                        <button id={committee._id} key={committee._id} className="waves-effect waves-light btn btn-block" onClick={this.prom.bind(this, committee._id)} >Join</button>


                      </td>
                    </tr>
                  </div>




          )
        })}
           </tbody>
         </table>


        {/*<table className="bordered">
        <thead>
          <tr>
              <th data-field="id">Committee Name</th>
              <th data-field="name">Topic</th>
              <th data-field="price">Details</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            {comC.forEach( (album) => {
              return (<div> {album.comName} </div>)
             })}
          </tr>
        </tbody>
      </table> */}
          {/*<tr>
            <td>{comC[0].comName} </td>
            <td>save bears that are on melting ice caps</td>
            <td>Click Me!</td>
          </tr>
          <tr>
            <td>Global Warming</td>
            <td>I have fallen and I cant get up</td>
            <td>Click Me!</td>
          </tr>
        </tbody>
      </table>*/}


      </div>


        );


    }



});
