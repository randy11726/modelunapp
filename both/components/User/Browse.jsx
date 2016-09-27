
Browse = React.createClass({
    
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
    

    
    render() {
        
    
        return (
            
            
            <div>
            <div className="row">
                <h4 className="text-center">Please select one of the following...</h4> 
                    <br>
                    </br> 
               <div>       
            <div className="chips"></div>
                  <div className="chips chips-initial"></div>
                  <div className="chips chips-placeholder"></div>
              </div> 
              <div id="modal1" className="modal modal-fixed-footer">
                <div className="modal-content">
                  <h4 className="text-center">Form to Create Committee</h4>
                  <div className="row">
                    <form className="col s12">
                      <div className="row">
                        <div className="input-field col s6">
                          <input id="first_name" type="text" className="validate"/>
                          <label for="first_name">Committee Name</label>
                        </div>
                        <div className="input-field col s6">
                          <input id="first_name" type="text" className="validate"/>
                          <label for="first_name">Committee Chair</label>
                        </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s8">
                          <input id="address" type="text" className="validate"/>
                          <label for="address">Address</label>
                        </div>
                      <div className="input-field col s4">
                        <select multiple>
                          <option value="" disabled selected>Countries</option>
                          <option value="1">USA </option>
                          <option value="2">Japan</option>
                          <option value="3">Canada</option>
                        </select>
                        <label>Select Participating Countries</label>
                       </div>
                      </div>
                      <div className="row">
                        <div className="input-field col s8">
                            <textarea placeholder="Max Characters: 500" id="textarea1" className="materialize-textarea" maxLength="500" ></textarea>
                            <label for="textarea1">Topic</label>
                        </div>
                        <div className="input-field col s4">
                            <input id="startDate" type="date" className="datepicker"/>
                            <label for="startDate">Select Date</label>
                        </div>
                      </div>   
                      
                    </form>
                  </div>
                </div>
                <div className="modal-footer">
                  <a href="#!" className=" modal-action modal-close waves-effect waves-green btn-flat">Agree</a>
                </div>
              </div>
            
            
                
            
                    <form onSubmit = {this.onSubmit} className="col offset-s4 s4">
                    <div className="row">      
                        <a className="waves-effect waves-light btn btn-block modal-trigger" href="#modal1">Create a Committee</a>
                 
                    </div>        
                    </form>
                </div>

            
            
            
            
            <div className="row">
                    <form onSubmit = {this.onSubmit} className="col offset-s4 s4">
                    <div className="row">      
                        <button className="waves-effect waves-light btn btn-block">Join a Committee</button>
                </div>        
                </form>
            </div>
          </div>
        );
    
    
    }
    
    
    
});