MainLayout = React.createClass({
  render() {
    return (

      <div>
        <Header/>
        <main className="container">{this.props.content}</main>
        
          <footer className="page-footer">
              <div className="container">
              <p className="grey-text text-lighten-4 left">© 2016 Copyright Symbiko</p>
              <a className="grey-text text-lighten-4 right" href="mailto:Symbiko@hotmail.com">Contact us at Symbiko@hotmail.com</a>
              </div>

          </footer>
      </div>
    );
  }
});
