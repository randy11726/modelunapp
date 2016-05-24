// Reaktor API:  https://github.com/kadirahq/meteor-reaktor
// Router API:   https://github.com/meteorhacks/flow-router

// NOTE see flow-router branch for the vanilla router

Reaktor.init(
  <Router>
    <Route path="/" content={Home} layout={MainLayout} />
    <Route path="/Register" content={Register} layout={MainLayout} triggersEnter={isLoggedIn} />
    <Route path="/Login" content={Login} layout={MainLayout} triggersEnter={isLoggedIn} />
    
  </Router>
);

function isLoggedIn(context, doRedirect) {
	if(User.isLoggedIn()) {
        //console.log("is logged in");
		doRedirect('/');
	}
}

// Reaktor doensn't have a notFound component yet
FlowRouter.notFound = {
  action() {
    ReactLayout.render(MainLayout, { content: <NotFound /> });
  }
};
