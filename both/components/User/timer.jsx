Timer = React.createClass({

    onSubmit(e){

        e.preventDefault();

        FlowRouter.go('/');


        },

    startTimer(event){
        //$("#DateCountdown").TimeCircles({start: "false"});

        console.log("clicked start");
        console.log(event);
         },
   editTimer(e){
       e.preventDefault();
       var newTime =$("#selectTime").val();
       $("#DateCountdown").data('timer', newTime);
       $("#DateCountdown").TimeCircles().restart();
       $("#DateCountdown").TimeCircles().stop();
       console.log(newTime);
       console.log("clicked edit");
       //tick.stop();
        },

    componentDidMount() {

      $(document).ready(function() {
        $('select').material_select();
      });
      var alarm = new buzz.sound('/sounds/alarm.mp3');
      var tick = new buzz.sound('/sounds/ticking.mp3');
      var stop = false;
      $("#startbutton").click(function(){
          $("#DateCountdown").TimeCircles().start();
          //tick.play();
          //tick.loop();
          stop = false;
      });
      $("#stopbutton").click(function(){
          $("#DateCountdown").TimeCircles().stop();
          //tick.stop();
          stop = true;
      });
      $("#restartbutton").click(function(){
          $("#DateCountdown").TimeCircles().restart();
          //tick.play();
          //tick.loop();
          stop = false;
      });
      $("#morebutton").click(function(){
          var timer = 60;
          $("#DateCountdown").data('timer', timer);
          $("#DateCountdown").TimeCircles().restart();
          //tick.play();
          //tick.loop();
      });
      /*$("#editButton").click(function(){
          var newTime =$("#selectTime").val();
          $("#DateCountdown").data('timer', newTime);
          $("#DateCountdown").TimeCircles().restart();
          $("#DateCountdown").TimeCircles().stop();
          console.log(newTime);
          console.log("clicked edit")
          //tick.stop();
      });*/
      $("#DateCountdown").TimeCircles({
          "start": false,
          "animation": "smooth",
          "bg_width": 0.2,
          "fg_width": 0.03,
          "count_past_zero": false,
          "circle_bg_color": "#575757",
          "time": {
              "Days": {
                  "text": "Days",
                  "color": "#94cdff",
                  "show": false
              },
              "Hours": {
                  "text": "Hours",
                  "color": "#41404f",
                  "show": false
              },
              "Minutes": {
                  "text": "Minutes",
                  "color": "#2a26f7",
                  "show": true
              },
              "Seconds": {
                  "text": "Seconds",
                  "color": "#2a26f7",
                  "show": true
              }
          }
      }).addListener(function()
      { //if ($("#DateCountdown").TimeCircles().getTime() > 1) { tick.play(); }
        if ($("#DateCountdown").TimeCircles().getTime() < 1) { alarm.play();}

      } );


         },




    render() {



      var styleCard2 = {
        textAlign: 'center'
      };

      var styleCard3 = {
          width: 160,
          position: 'relative',
          textAlign: 'center'
      };


        return (
            <div>
            <h1> Timer </h1>
              <div id="DateCountdown" data-timer="16" className="example"></div>



              <div class="row" style ={styleCard2}>
                <button id="startbutton" className="waves-effect waves-light btn-large bt1">Start</button>
                <button id="stopbutton" className="waves-effect waves-light btn-large bt1 ">Stop</button>
                <button id="restartbutton" className="waves-effect waves-light btn-large bt1">Restart</button>


              </div>
              <br>
                  <br> </br>
              </br>




              <div className="row" style ={styleCard2}>
              <form className="col s12"style ={styleCard2}>
                <div className="row">
                  <div className="input-field col s6" style ={styleCard3}>
                    <select id= "selectTime" style ={styleCard3}>
                      <option value="" disabled selected>Select time!</option>
                      <option value="120">2:00</option>
                      <option value="240">4:00</option>
                      <option value="360">6:00</option>
                      <option value="600">10:00</option>
                    </select>
                    <label>Choose Timer Countdown</label>
                  </div>
                  <div className="input-field col s6">
                    <button id="editButton" className="waves-effect waves-light btn-large" onClick={this.editTimer.bind(this)}> Update Timer</button>
                    <br>
                        <br> </br>
                    </br>
                    <br>
                        <br> </br>
                    </br>
                    <br>
                        <br> </br>
                    </br>
                    <br>
                        <br> </br>
                    </br>
                    <br>
                        <br> </br>
                    </br>
                    <br>
                        <br> </br>
                    </br>
                    <br>
                        <br> </br>
                    </br>
                    <br>
                        <br> </br>
                    </br>
                  </div>
                </div>
              </form>
            </div>




            </div>
        );


    }



});
