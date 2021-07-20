d3.csv("Resources/Footballteams.csv").then(function(data) {
    console.log(data);

    var teams = []
    var goals = []
    var shots = []
    var yellow_cards = []
    var red_cards = []
    var possesions = []
    var pass = []
    var aerials_won = []
    var rating = []

    data.forEach(team => {
        console.log(team);
        teams.push(team["Country"]);
        goals.push(team["Goals"]);
        shots.push(team["Shots pg"]);
        yellow_cards.push(team["yellow_cards"]);
        red_cards.push(team["red_cards"]);
        possesions.push(parseFloat(team["Possession%"]/100));
        pass.push(parseFloat(team["Pass%"]/100));
        aerials_won.push(team["AerialsWon"]);
        rating.push(team["Rating"]);
    });

    console.log(teams);
    console.log(goals);


    var GoalTrace = {
        x: teams,
        y: goals,
        name: "Goals",
        marker:{
            color: "green"},
        type: "bar",
    };

    var YellowTrace = {
        x: teams,
        y: yellow_cards,
        name: "Yellow Cards",
        marker:{
            color: "yellow"},
        type: "bar",
    };

    var RedTrace = {
        x: teams,
        y: red_cards,
        name: "Red Cards",
        marker:{
            color: "red"},
        type: "bar",
    };
  
  
      // data
      var barData = [GoalTrace, YellowTrace, RedTrace];
  
      // Apply the group bar mode to the layout
      var barLayout = {
        title: "Team Statistics",
        xaxis: {title: "Teams (by Country)"},
        yaxis: {title: "Statistics"},
        margin: {
          l: 100,
          r: 100,
          t: 100,
          b: 100
        }
      };
  
      Plotly.newPlot("bar_chart", barData, barLayout);
});