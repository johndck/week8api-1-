// Test my understanding with the omdb api

// old way - can I do this?
// come back to the querystring point
// re-watch the querystring video
// find a more elegant way of doing this

let movie = "Dune";
let para1 = "?apikey=trilogy";
let extra = "&";
let para2 = `t=${movie}`;
let queryURL = "http://www.omdbapi.com/" + para1 + extra + para2;

// here is the fetch to get the data
// included in the error handing

/*
fetch(queryURL)
  .then((res) => {
    console.log("success", res);
    return res.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((e) => {
    console.log("error", e);
  });
*/

// model method

const searchMovieInfo = async () => {
  try {
    const response = await fetch(queryURL);
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log("error", e);
  }
};

searchMovieInfo();
