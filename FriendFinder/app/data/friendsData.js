// ===============================================================================
// DATA
// Below data will hold all of the friends.
// Initially we just set it equal to a "dummy" customer.
// But you could have it be an empty array as well.
// ===============================================================================

// Friend Finder Data
// =============================================================


var friendsArray = [
    {
        "name":"Ahmed",
        "photo":"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQd2eJVSAd0BO0iOipuHg1wY0gtcf828hnD1d4_CFEucv17YLs",
        "scores":[
            5,
            1,
            4,
            4,
            5,
            1,
            2,
            5,
            4,
            1
          ]
      },
      {
        "name":"Lilly",
        "photo":"https://thumbor.forbes.com/thumbor/960x0/https%3A%2F%2Fspecials-images.forbesimg.com%2Fdam%2Fimageserve%2F1078084172%2F960x0.jpg%3Ffit%3Dscale",
        "scores":[
            2,
            1,
            4,
            4,
            2,
            3,
            2,
            1,
            5,
            1
          ]
      },
      {
        "name":"Jake",
        "photo":"https://2.gravatar.com/avatar/8be4188bccd6238472ec92169ced6479?s=400&d=mm&r=g",
        "scores":[
            2,
            3,
            3,
            4,
            2,
            4,
            2,
            5,
            2,
            5
          ]
      }
      
];
  
  // Note how we export the array. This makes it accessible to other files using require.
  module.exports = friendsArray;
  




