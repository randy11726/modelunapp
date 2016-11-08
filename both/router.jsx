// Reaktor API:  https://github.com/kadirahq/meteor-reaktor
// Router API:   https://github.com/meteorhacks/flow-router

// NOTE see flow-router branch for the vanilla router

Reaktor.init(
  <Router>
    <Route path="/" content={Home} layout={MainLayout} />
    <Route path="/Register" content={Register} layout={MainLayout} triggersEnter={isLoggedIn} />
    <Route path="/Login" content={Login} layout={MainLayout} triggersEnter={isLoggedIn} />
    <Route path="/changepassword" content={ChangePassword} layout={MainLayout} triggersEnter={isNotLoggedIn} />
    <Route path="/dashboard" content={Dashboard} layout={MainLayout} triggersEnter={isNotLoggedIn} />
    <Route path="/browse" content={Browse} layout={MainLayout} triggersEnter={isNotLoggedIn} />
    <Route path="/join" content={Join} layout={MainLayout} triggersEnter={isNotLoggedIn} />

  </Router>
);



//checks if user is logged in
function isLoggedIn(context, doRedirect) {
	if(User.isLoggedIn()) {
        console.log("is logged in");
		doRedirect('/');
	}
}
// checks if user is not logged in
function isNotLoggedIn(context, doRedirect) {
	if(!User.isLoggedIn()) {
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
