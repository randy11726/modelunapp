

Join = React.createClass({

    listC(){  // list of committe form data entries in DB

        return Committee.find().fetch();
    },

    onSubmit(e){

        e.preventDefault();
        FlowRouter.go('/');


        },



    render() {
        let comC = this.listC();
        if (comC.length < 1){
            return (<div> Loading Committees</div>)
        }



        return (

          <div>
              <div className="row col">
                <form>
                  <div className="input-field">
                    <input id="search" placeholder="Search for a Committee" type="search" required/>
                    <label for="search"><i className="material-icons">search</i></label>
                    <i className="material-icons">close</i>
                  </div>
                </form>
              </div>

          <ul>
            {comC.map( (album) => {
              return <div> {album.comName} </div>
             })}

        </ul>

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
            <td>{comC[0].comName} </td>
            <td>save bears that are on melting ice caps</td>
            <td>Click Me!</td>
          </tr>
          {/*<tr>
            <td>Guns</td>
            <td>Do we need stronger laws for the kids!</td>
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
