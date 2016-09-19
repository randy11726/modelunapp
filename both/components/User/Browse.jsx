Browse = React.createClass({
    
    onSubmit(e){
        
        e.preventDefault();
        FlowRouter.go('/');

            
        },
    
    
    render() {
        
    
        return (
            <div>
            <div className="row">
                <h4 className="text-center">Please select one of the following...</h4> 
                    <br>
                    </br> 
                    <form onSubmit = {this.onSubmit} className="col offset-s4 s4">
                    <div className="row">      
                        <button className="waves-effect waves-light btn btn-block">Create a Committee</button>
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