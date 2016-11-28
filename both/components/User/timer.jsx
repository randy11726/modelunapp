Timer = React.createClass({

    onSubmit(e){

        e.preventDefault();

        FlowRouter.go('/');


        },

    startTimer(event){
        //$("#DateCountdown").TimeCircles({start: "false"});

        console.log("clicked start")
        console.log(event);
         },

    componentDidMount() {
      var alarm = new buzz.sound('/sounds/alarm.mp3');
      var tick = new buzz.sound('/sounds/ticking.mp3');
      var stop = false;
      $("#startbutton").click(function(){
          $("#DateCountdown").TimeCircles().start();
          tick.play();
          stop = false;
      });
      $("#stopbutton").click(function(){
          $("#DateCountdown").TimeCircles().stop();
          tick.stop();
          stop = true;
      });
      $("#restartbutton").click(function(){
          $("#DateCountdown").TimeCircles().restart();
          tick.play();
      });
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
        if ($("#DateCountdown").TimeCircles().getTime() < 1) { alarm.play(); tick.stop();}
      
      } );


         },




    render() {


        return (
            <div>
            <h1> Timer </h1>
              <h8><div id="DateCountdown" data-timer="16" className="example"></div></h8>
              <button id="startbutton" className="waves-effect waves-light btn-large">Start</button>
              <button id="stopbutton" className="waves-effect waves-light btn-large">Stop</button>
              <button id="restartbutton" className="waves-effect waves-light btn-large">Restart</button>



            </div>
        );


    }



});
