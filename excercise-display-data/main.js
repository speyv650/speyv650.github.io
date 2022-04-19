let albums = [
    {album_name: "TaylorSwift", songs: 15, months_till_next_album: 24, path: "media/1.pdf"},
    {album_name: "Fearless", songs: 6, months_till_next_album: 23, path: "media/2.pdf"},
    {album_name: "SpeakNow", songs: 16, months_till_next_album: 23, path: "media/3.pdf"},
    {album_name: "Red", songs: 30, months_till_next_album: 24, path: "media/4.pdf"},
    {album_name: "1989", songs: 13, months_till_next_album: 36, path: "media/5.pdf"},
    {album_name: "Reputation", songs: 15, months_till_next_album: 26, path: "media/6.pdf"},
    {album_name: "Lover", songs: 18, months_till_next_album: 8, path: "media/7.pdf"},
    {album_name: "Folklore", songs: 34, months_till_next_album: 4, path: "media/8.pdf"},
    {album_name: "Evermore", songs: 15, months_till_next_album: 0, path: "media/9.pdf"},
    ];
    
let container = document.querySelector(".albums");
let i = 1;
let b;
let c;
function showAlbums(album) {
  for (var b = 0; b < album.songs; b++) {
    let newItem = document.createElement("div");
    let albumDiv = container.appendChild(newItem);
    newItem.classList.add("album")
    newItem.classList.add(i.toString())
    newItem.classList.add("album-" + i)
    console.log("album-" + i)
  }
  i++;
  for (var c = 0; c < album.months_till_next_album; c++) {
    let newItem = document.createElement("div");
    let albumDiv = container.appendChild(newItem);
    newItem.classList.add("album")
    newItem.classList.add("month-spacer")
    console.log("spacer")
  }
}

albums.forEach(showAlbums)





// // First show all the albumCovers and create divs for each of them
// let container = document.querySelector(".garden");
// // create a counter variable that will give us each albumCovers number in the array
// let i = 0;

// function displayalbumCovers(flower) {

//   // image object
//   var elem = document.createElement("img");
//   var j = i
//   elem.src = "media/" + i.toString() + ".pdf"

//   // creates a new div; appends that div to the container
//   let newItem = document.createElement("div");
//   newItem.appendChild(elem)
//   let flowerDiv = container.appendChild(newItem);
//   // increase the counter variable by one
//   i++;
//   // adds a shared class to each new div
//   newItem.classList.add("flower");
//   // adds a specific class to each new div
//   newItem.classList.add("flower" + i.toString());
//   // places the flower name and amount to the div
//   flowerDiv.innerHTML = flower.name + " – " + flower.amount;
//   // sets height of flower to the amount. try changing height to width, or padding
//   flowerDiv.style.height = flower.amount + "px";
//   console.log(flower);
// }
// // loops through the albumCovers and runs the displayalbumCovers function for each one
// albumCovers.forEach(displayalbumCovers);