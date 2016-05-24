Header = React.createClass({
    
    
  getInitialState() {
      return {
          isLoggedIn: User.isLoggedIn()  
      };
  },
    
    
  logout() {
    Meteor.logout(function(er){
      if(er) {
        Materialize.toast(er.reason, 4000);
      } else {
        this.setState({isLoggedIn: !this.state.isLoggedIn});
        FlowRouter.go('/');
      }
    }.bind(this)); // binds entire component
  },    
    
  render() {
      
      var navStyle = {
          backgroundColor: "#607d8b",
          paddingLeft: "24px"
          
      }
    var navOptions = User.isLoggedIn() ? <LoggedInNav logout = {this.logout}/> : <LoggedOutNav /> 
      
    return (
    <nav style ={navStyle}>
        <div className="nav-wrapper">
            <a href="/" className="brand-logo">Model U.N. Moderator System</a>  
            {navOptions}
        </div>
    </nav>
        
    );
  }
});
