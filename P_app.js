// //=============== RUNNING DATA ===============//
// d3.json("Resources/Team_Data.geojson").then(data => {
//     console.log(data);
//   });


//=============== INIT FUNCTION ===============//
function init () {
    d3.json("/api/stats_countries").then(response => {
      console.log(response);

    //   var IDs = d3.select("#selDataset");
    //   var IDsValues = data.properties.Country;
    //   IDsValues.forEach(id => {
    //     IDs.append("option").text(id).property("value", id);
    //   })
    // });
  }

//=============== BAR CHART ===============//
// function buildCharts (newSelection) {
//   d3.json("Resources/Team_Data.geojson").then(data => {
//     var properties = data.properties;
//     var countries = properties.Country
//     var filtered = properties.filter(row => row.Country == newSelection);
//     var barTrace = {
//       x: ,
//       y: ,
//       text: Statistics,
//       name: "Stats",
//       type: "group bar",
//     };

d3.csv("Resources/Footballteams.csv").then(function(data) {
  console.log(data);

// d3.csv("Resources/Team_Data.geojson").then(function(jsondata) {
//         console.log(jsondata);    
// });

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
          color: "#D4AF37"},
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

  var PossesionTrace = {
      x: teams,
      y: possesions,
      name: "Possesions",
      marker:{
          color: "blue"},
      type: "bar",
  };

  var PassTrace = {
      x: teams,
      y: pass,
      name: "Pass",
      marker:{
          color: "brown"},
      type: "bar",
  };

  var AreailWinsTrace = {
      x: teams,
      y: aerials_won,
      name: "Areal Wins",
      marker:{
          color: "#8feb34"},
      type: "bar",
  };

  var RatingsTrace = {
      x: teams,
      y: rating,
      name: "Ratings",
      marker:{
          color: "#8c34eb"},
      type: "bar",
  };


    // data
    var barData = [GoalTrace, YellowTrace, RedTrace, PossesionTrace, PassTrace, AreailWinsTrace, RatingsTrace];

    // Apply the group bar mode to the layout
    var barLayout = {
      title: "Team Statistics",
      xaxis: {title: "Teams (by Country)"},
      yaxis: {title: "Statistics"},
      barmode: 'group',
      margin: {
        l: 100,
        r: 100,
        t: 100,
        b: 100
      }
    };

    Plotly.newPlot("bar_chart", barData, barLayout);
});

//=============== OPTION CHANGED ===============//
// Fetch new data each time a new sample is selected 
function optionChanged () {
    var dropdownMenu = d3.select("#selDataset");
    var valueCountries = dropdownMenu.property("value");
    var url;
  ​

}
    
  
//=============== CALLING THE INIT FUNCTION ===============//
d3.selectAll("#selDataset").on("change", optionChanged);

init();
