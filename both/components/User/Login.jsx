Login = React.createClass({

    onSubmit(e) {

        e.preventDefault();
        // Get our input values
        var email = this.refs.email.getDOMNode().value;
        var password = this.refs.password.getDOMNode().value;


        //Login user
        Meteor.loginWithPassword(email, password, function(er){
            if (er){
                Materialize.toast(er.reason, 4000);
            }
            else{

                //Redirect to admin or page after logging in
                FlowRouter.go('/dashboard')

            }

        });

    },

    render () {

        return (
            <div className="row">
              <h4 className="text-center">Login</h4>
              <form onSubmit = {this.onSubmit} className="col offset-s4 s4">
                <div className="row">
                  <div className="input-field col s12">
                    <input id="email" ref= "email" type="text" className="validate" />
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
                      <button className="waves-effect waves-light btn btn-block">Login</button>
                  </div>
              </form>
            </div>


        );
    }


});
