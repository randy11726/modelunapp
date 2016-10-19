

Committee = new Mongo.Collection("committee");


Browse = React.createClass({
    
    listC(){  // list of committe form data entries in DB 
        
        return Committee.find().fetch();
    },
    
    onSubmit(e){
        
        e.preventDefault();
        FlowRouter.go('/');

            
        },
    componentDidMount() { 
        $('select').material_select();
        $('.modal-trigger').leanModal();
        $('.datepicker').pickadate({
            selectMonths: true, // Creates a dropdown to control month
            selectYears: 15 // Creates a dropdown of 15 years to control year
        });

         },
    
    addCommittee(event){
            
            event.preventDefault(); 
            //console.log(this); 
            
            var cName = document.getElementById("committee_name").value;
            var cChair = document.getElementById("chair_name").value;
            var cAddress = document.getElementById("address").value;
            var cTopic = document.getElementById("topicArea").value;
            var cDate = document.getElementById("startDate").value;
            //var cCountry = document.getElementById("countySelect").querySelector("option[selected]").value;
            var countriesList = $('#countrySelect').val();
            console.log(cName, cChair, cAddress, cTopic, cDate); 
            //console.log(cCountry);
            //
           Committee.insert({
               
                comName: cName,
                comChair: cChair,
                comAddress: cAddress,
                comTopic: cTopic,
                comDate: cDate,
                comCountries: countriesList,
                complete: false,
                createdAt: new Date()
                
                
            });
            $("#createCommitteeForm")[0].reset(); // clears form after submission!! 

              
        },
    
    render() {
        
        console.log(this.listC());
        let comC = this.listC();
        if (comC.length < 1){
            return (<div> Loading Committees</div>)
        }
    
        return (
            
            
            <div>
            <div className="row">
                <h4 className="text-center">Please select one of the following...</h4> 
                    <br>
                    </br> 
              <div id="modal1" className="modal modal-fixed-footer">
                <div className="modal-content">
                  <h4 className="text-center">Form to Create Committee</h4>
                  <div className="row">
                    <form id="createCommitteeForm"  onSubmit = {this.addCommittee.bind(this)} className="col s12">
                      <div className="row">
                        <div className="input-field col s6">
                          <input id="committee_name" name="committee_name" type="text" className="validate"/>
                          <label for="comittee_name">Committee Name</label>
                        </div>
                        <div className="input-field col s6">
                          <input id="chair_name" ref="chair_name" type="text" className="validate"/>
                          <label for="chair_name">Committee Chair</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s8">
                          <input id="address" ref="address" type="text" className="validate"/>
                          <label for="address">Address</label>
                        </div>
                      <div className="input-field col s4">
                        <select multiple id="countrySelect" ref="countrySelect">
                          <option value="" disabled selected>Countries</option>
                          <option value="USA">USA </option>
                          <option value="Japan">Japan</option>
                          <option value="Canada">Canada</option>
                        </select>
                        <label for="countrySelect">Select Participating Countries</label>
                       </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s8">
                            <textarea placeholder="Max Characters: 500"  ref= "topicArea" id="topicArea" className="materialize-textarea" maxLength="500" ></textarea>
                            <label for="topicArea">Topic</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="startDate" ref="startDate" type="date" className="datepicker"/>
                            <label for="startDate">Select Date</label>
                        </div>
                          <button className="modal-action modal-close btn waves-effect waves-light" type="submit" name="action">Submit
                            <i className="material-icons right">send</i>
                          </button>
                      </div>   
                    </form>
                  </div>
                </div>
                <div className="modal-footer display-inline">
            {/*<div> <a href="#!" className=" modal-action modal-close waves-effect waves-light btn"> Close</a> </div> */}
                  <button className="modal-action modal-close btn waves-effect waves-light">Close </button>
                </div>
              </div>
            
            
                
            
                    <form onSubmit = {this.onSubmit} className="col offset-s4 s4">
                    <div className="row">      
                        <a className="waves-effect waves-light btn btn-block modal-trigger" href="#modal1">Create a Committee</a>
                 
                    </div>        
                    </form>
                </div>

            
            
            
            
            <div className="row">
                    <form className="col offset-s4 s4">
                    <div className="row">      
                        <a href="/join"><button className="waves-effect waves-light btn btn-block">Join a Committee</button> </a>
                </div>        
                </form>
            </div>
            <div> 
                
                
                    {this.listC().map( (resolution) => {  // this is how to iterate committe db and print all name
                     
                        return <ul> {resolution.comName} </ul>
                    })}
                
            
                            
            </div>
          </div>
        );
    
    
    }
    
    
    
});