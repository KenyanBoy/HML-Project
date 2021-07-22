function buildPlot() {

    d3.csv("Resources/Footballteams.csv").then(function(data) {
        console.log(data);


        var teams = ["Spain", "England", "France", "Italy", "Germany"]
        var goals = [0,0,0,0,0,0,0]
        var shots = [0,0,0,0,0,0,0]
        var yellow_cards = [0,0,0,0,0,0,0]
        var red_cards = [0,0,0,0,0,0,0]
        var possesions = [0,0,0,0,0,0,0]
        var pass = [0,0,0,0,0,0,0]
        var aerials_won = [0,0,0,0,0,0,0]
        var rating = [0,0,0,0,0,0,0]

        data.forEach(team => {
            console.log(team);
            if (team["Country"] == "Spain") {
                goals[0] = goals[0] + parseInt(team["Goals"])
                shots[0] = shots[0] + parseInt(team["Shots pg"])
                yellow_cards[0] = yellow_cards[0] + parseInt(team["yellow_cards"])
                red_cards[0] = red_cards[0] + parseInt(team["red_cards"])
                possesions[0] = possesions[0] + parseFloat(team["Possession%"]/100)
                pass[0] = pass[0] + parseFloat(team["Pass%"]/100)
                aerials_won[0] = aerials_won[0] + parseInt(team["AerialsWon"])
                rating[0] = rating[0] + parseInt(team["Rating"])
            } else if (team["Country"] == "England ") {
                goals[1] = goals[1] + parseInt(team["Goals"])
                shots[1] = shots[1] + parseInt(team["Shots pg"])
                yellow_cards[1] = yellow_cards[1] + parseInt(team["yellow_cards"])
                red_cards[1] = red_cards[1] + parseInt(team["red_cards"])
                possesions[1] = possesions[1] + parseFloat(team["Possession%"]/100)
                pass[1] = pass[1] + parseFloat(team["Pass%"]/100)
                aerials_won[1] = aerials_won[1] + parseInt(team["AerialsWon"])
                rating[1] = rating[1] + parseInt(team["Rating"])
            } else if (team["Country"] == "France ") {
                goals[2] = goals[2] + parseInt(team["Goals"])
                shots[2] = shots[2] + parseInt(team["Shots pg"])
                yellow_cards[2] = yellow_cards[2] + parseInt(team["yellow_cards"])
                red_cards[2] = red_cards[2] + parseInt(team["red_cards"])
                possesions[2] = possesions[2] + parseFloat(team["Possession%"]/100)
                pass[2] = pass[2] + parseFloat(team["Pass%"]/100)
                aerials_won[2] = aerials_won[2] + parseInt(team["AerialsWon"])
                rating[2] = rating[2] + parseInt(team["Rating"])
            } else if (team["Country"] == "Italy ") {
                goals[3] = goals[3] + parseInt(team["Goals"])
                shots[3] = shots[3] + parseInt(team["Shots pg"])
                yellow_cards[3] = yellow_cards[3] + parseInt(team["yellow_cards"])
                red_cards[3] = red_cards[3] + parseInt(team["red_cards"])
                possesions[3] = possesions[3] + parseFloat(team["Possession%"]/100)
                pass[3] = pass[3] + parseFloat(team["Pass%"]/100)
                aerials_won[3] = aerials_won[3] + parseInt(team["AerialsWon"])
                rating[3] = rating[3] + parseInt(team["Rating"])
            } else if (team["Country"] == "Germany ") {
                goals[4] = goals[4] + parseInt(team["Goals"])
                shots[4] = shots[4] + parseInt(team["Shots pg"])
                yellow_cards[4] = yellow_cards[4] + parseInt(team["yellow_cards"])
                red_cards[4] = red_cards[4] + parseInt(team["red_cards"])
                possesions[4] = possesions[4] + parseFloat(team["Possession%"]/100)
                pass[4] = pass[4] + parseFloat(team["Pass%"]/100)
                aerials_won[4] = aerials_won[4] + parseInt(team["AerialsWon"])
                rating[4] = rating[4] + parseInt(team["Rating"])
            };
        });

        console.log(goals);
        console.log(yellow_cards);
        
        var sum = 0
        goals.forEach(goal => {
            sum += goal 
        });

        console.log(sum);


        var GoalTrace = {
            x: teams,
            y: goals,
            name: "Goals",
            marker:{
                color: "green"},
            type: 'bar'
        };

        var ShotsTrace = {
            x: teams,
            y: shots,
            name: "Shots",
            marker:{
                color: "orange"},
            type: "bar"
        };

        var YellowTrace = {
            x: teams,
            y: yellow_cards,
            name: "Yellow Cards",
            marker:{
                color: "#D4AF37"},
            type: "bar"
        };

        var RedTrace = {
            x: teams,
            y: red_cards,
            name: "Red Cards",
            marker:{
                color: "red"},
            type: "bar"
        };


        var PossesionTrace = {
            x: teams,
            y: possesions,
            name: "Possesions",
            marker:{
                color: "blue"},
            type: "bar"
        };

        var PassTrace = {
            x: teams,
            y: pass,
            name: "Pass",
            marker:{
                color: "brown"},
            type: "bar"
        };

        var AreailWinsTrace = {
            x: teams,
            y: aerials_won,
            name: "Areal Wins",
            marker:{
                color: "#8feb34"},
            type: "bar"
        };

        var RatingsTrace = {
            x: teams,
            y: rating,
            name: "Ratings",
            marker:{
                color: "#8c34eb"},
            type: "bar"
        };
    
    
        // data
        var barData = [GoalTrace, ShotsTrace, YellowTrace, RedTrace, PossesionTrace, PassTrace, AreailWinsTrace, RatingsTrace];


        // Apply the group bar mode to the layout
        var barLayout = {
            title: "Team Statistics",
            xaxis: {title: "Teams (by Country)"},
            yaxis: {title: "Statistics",
                width: 5},
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

}

buildPlot();