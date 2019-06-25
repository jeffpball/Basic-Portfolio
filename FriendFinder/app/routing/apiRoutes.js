// ===============================================================================
// LOAD DATA
// We are linking our routes to a series of "data" sources.
// These data sources hold arrays of information on each friend and their survey results
// ===============================================================================

let friendsAPI = require("../data/friendsData")

// Routing 
module.exports = function(app) {
    //grabs data friends array from the friendsData.js file
    app.get("/api/friends", function(req, res) {
        
        // Changed this to 
        res.json(friendsAPI);
    });
    
    // A POST route for /api/freinds that will handle incoming survey results and house compatability logic
    // Create a new friend - takes in JSON input
    
    
    app.post("/api/friends", function(req, res) { 
        // this pushes user survey data to freindsAPI
        friendsAPI.push(req.body);
        
        
        
        // Declare y which hold the sum of the diffrences of the array of answers between 2 users 
        let y = 0;
        
        // An empty array to hold score comparisons
        let comparisonArray = [];
        
        for (var j = 1; j < friendsAPI.length; j ++) {

            // Empty out y to start from zero
            y = 0 

            for (var i = 0; i < 4; i ++) { // 4 will turn to ten 
                let x = Math.abs(friendsAPI[0].scores[i] - friendsAPI[j].scores[i])
                y += x
                
                console.log(x)
            };
            comparisonArray.push(y)
            console.log(y);
            console.log(comparisonArray)
            // Holds the minimum of the comparisons of the score arrays for each user
            let minComparison = Math.min(...comparisonArray)
            //
            console.log(minComparison) 
            
            // Gives the index of the match we should grab from our friendsAPI object
            let matchIndex = comparisonArray.indexOf(minComparison)
            
            console.log(matchIndex)

            // final match 
            let finalMatch = friendsAPI[matchIndex +1];
            res.json(finalMatch);
            console.log(finalMatch)

            
        }
     
    });
};