let buttons = document.querySelectorAll(".popup");
let annotation = document.querySelector(".annotation");

console.log("buttons");
console.log("buttonData");


buttons.forEach(function(button) {
  // add an event listener to each individual button
  button.addEventListener('click', function (event) {
  	let buttonData = button.dataset.annotation;
  	let newAnnotation = document.createElement("div");
  	let annotationAll = button.querySelector(".annotation-fix");
  	console.log(annotationAll);
  	newAnnotation.innerHTML = buttonData;
    // checks to see if the button has an active class; if it does, then it will remove the active class and remove the annotation div
    if (button.classList.contains("active")) {
    	button.classList.remove("active");
    	annotationAll.remove();
    	// else, if it does NOT have an active class, it adds the active class and creates the annotation div
    } else {
    	button.classList.add("active");
    	button.appendChild(newAnnotation);
			newAnnotation.classList.toggle("annotation-fix");
    }
  });
});



// button.addEventListener("click", displayPopUp);


// This is how you would get it to work for just one button
// function displayPopUp() {
// 	annotation.innerHTML = buttonData;
// 	annotation.classList.toggle("annotation-fix");
//   }



// button.addEventListener("click", displayPopUp);
