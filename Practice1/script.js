// Test my understanding with the omdb api

// come back to the querystring point
// re-watch the querystring video
// find a more elegant way of doing this

let movie = "Terminator";
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

// Using async & await functions
// including try catch error handling - not currently working

const addNewMovie = async () => {
  try {
    const response = await fetch(queryURL);
    const data = await response.json();
    // check if the API is working correctly
    console.log(data);
    // assign data to variables, so we can pass into the HTML
    let title = data.Title;
    let year = data.Year;
    let actors = data.Actors;

    // Create a new row for the Dune film.
    // We are using jQuery here.
    // Create a new table row element
    const newTableRow = $("<tr>");
    // Create the new cells and content for the row
    // And then append onto the newTableRow
    const newTitle = $("<td>").text(data.Title);
    const newYear = $("<td>").text(data.Year);
    const filmActors = $("<td>").text(data.Actors);
    newTableRow.append(newTitle, newYear, filmActors);
    // add to the table itself
    $("tbody").append(newTableRow);
  } catch (e) {
    console.log("error", e);
  }
};

addNewMovie();
