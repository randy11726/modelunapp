Register = React.createClass({
    
onSubmit(e){
    
    e.preventDefault();
    
    var email = this.refs.email.getDOMNode().value;
    var password = this.refs.password.getDOMNode().value;
    var confirmPassword = this.refs.confirmPassword.getDOMNode().value;
    
    
    if (confirmPassword == password && confirmPassword != "" && password != ""){ //can be made more robust 
        var accountInfo = {
            email: email,
            password: password,
            
            
        };
        Accounts.createUser(accountInfo, function(er){
            if (er){
                Materialize.toast(er.reason, 4000);
            }
            else{
            
                //Redirect to admin or page after logging in  
                FlowRouter.go('/')
                   
            }
            
        });
    }
    if (confirmPassword == "" && password == ""){
        Materialize.toast('User must enter password!', 4000)
    }
    if (confirmPassword != password){
        
        Materialize.toast('The passwords must match!', 4000)
    }
    
    
},    
   
render() {
    return (
        
    <div className="row">
    <h4 className="text-center"> Registration</h4>
    <form onSubmit = {this.onSubmit} className="col offset-s4 s4">
      <div className="row">  
        <div className="input-field col s12">
          <input id="email" ref= "email" type="email" className="validate" /> 
          <label htmlFor="email">Email</label>
        </div>
      </div>
      <div className="row">  
        <div className="input-field col s12">
          <input id="password" ref= "password" type="password" className="validate" />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className="row">  
        <div className="input-field col s12">
          <input id="confirmPassword" ref= "confirmPassword" type="password" className="validate" />
          <label htmlFor="confirmPassword">Confirm Password</label>
        </div>
      </div>
        <div className="row">  
            <button className="waves-effect waves-light btn btn-block">Submit</button>
        </div>        
    </form>
  </div>
        
    );
  }
});