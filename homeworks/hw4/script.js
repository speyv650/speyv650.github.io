// DARK MODE BUTTON
var htmlBody = document.body;
var isDark = false;
var darkModeButton = document.getElementById("buttonDarkMode");
darkModeButton.addEventListener("click", changeToDarkMode)

// RED TEXT BUTTON
var isRed = false;
var redTextButton = document.getElementById("buttonRedText");
redTextButton.addEventListener("click", changeToRedText)

// RANDOM COLOR BUTTON
var buttons = document.getElementsByTagName('Button');
var randomColorButton = document.getElementById("buttonRandomColor");
randomColorButton.addEventListener("click", randomColor)

// RED TEXT BUTTON
var isHidden = false;
var hideTextButton = document.getElementById("buttonHideText");
hideTextButton.addEventListener("click", hideText)

// RESET BUTTON
var resetButton = document.getElementById("buttonReset");
resetButton.addEventListener("click", reset)




// FUNCTIONS

function changeToDarkMode(){
	if (isHidden) {
		if(isDark){
			darkModeButton.textContent = "Dark Mode";
	  		htmlBody.style.background = "white";
	  		htmlBody.style.color = "white";
	  		isDark = false;
	  		console.log("dark mode is off.");
		} else {
			darkModeButton.textContent = "Light Mode";
	  		htmlBody.style.background = "black";
	  		htmlBody.style.color = "black"; 
	  		isDark = true;
	  		console.log("dark mode is on!");
		}
	} else {
		if(isDark == true){
	  		darkModeButton.textContent = "Dark Mode";
	  		htmlBody.style.background = "white";
	  		if(isRed==false){
	  			htmlBody.style.color = "black"; 
	  		}
	  		isDark = false;
	  		console.log("dark mode is off.");
		} else if (isDark === false) {
	  		darkModeButton.textContent = "Light Mode";
	  		htmlBody.style.background = "black";
	  		if(isRed==false){
	  			htmlBody.style.color = "white"; 
	  		}
	  		isDark = true;
	  		console.log("dark mode is on!");
		}
	}
	
}

function changeToRedText(){
	if (isHidden) {
		isRed = true
	} else {
		if(isRed == true){
  			redTextButton.textContent = "Red Text";
  			// change text color to black
  		if(isDark==true){
  			htmlBody.style.color = "white";
  		} else {
			htmlBody.style.color = "black";
  		}
  		isRed = false;
  		console.log("dark mode is off.");
		} else if (isRed === false) {
  			redTextButton.textContent = "Regular Text";
  			// change text color to Red
  			htmlBody.style.color = "red"; 
  			isRed = true;
  			console.log("dark mode is on!");
		}
	} 	
}

function randomColor(){
	var randomColor = Math.floor(Math.random()*16777215).toString(16);
	console.log("random color: ", randomColor)
	Array.from(document.querySelectorAll('button')).map(function(button) {
               button.style.backgroundColor="#" + randomColor;
    })
}

function hideText(){
	console.log("HIDE TEXT CALLED")
	// unhide
	if(isHidden==true){
		if (isRed){
			htmlBody.style.color = "red";
		} else if (isDark) {
			htmlBody.style.color = "white";
		} else if (isDark==false) {
			htmlBody.style.color = "black";
		}
		isHidden = false;
		hideTextButton.textContent = "Hide Text"
	// hide
	} else {
		console.log("HERE")
		if (isDark) {
			htmlBody.style.color = "black";
		} else {
			htmlBody.style.color = "white";
		}
		isHidden = true;
		hideTextButton.textContent = "Show Text"
	}
}

function reset(){
	isDark = false;
	isRed = false;
	isHidden = false;
	darkModeButton.textContent = "Dark mode"
	redTextButton.textContent = "Red Text";
	hideTextButton.textContent = "Hide Text"
	htmlBody.style.background = "white";
	htmlBody.style.color = "black";
	Array.from(document.querySelectorAll('button')).map(function(button) {
    	button.style.backgroundColor="white";
    })
}



// CLOCK
function runClock() {
  
  var now = new Date()
  
  var hour = now.getHours() % 12
  var min  = now.getMinutes()
  var sec  = now.getSeconds()
  var ms   = now.getMilliseconds()
  
  var clock = document.querySelector("div.clock")
  var hourHand = clock.querySelector("div.hour")
  var minHand  = clock.querySelector("div.minute")
  var secHand  = clock.querySelector("div.second")
  
  var hourRotation = 30 * hour + (0.5 * min)
  var minRotation = 6 * min + (0.1 * sec)
  var secRotation = 6 * sec + 0.0015 * ms
  hourHand.style.transform = "rotate(" + hourRotation + "deg)"
  minHand.style.transform = "rotate(" + minRotation + "deg)"
  
  console.log(sec);

  if (sec % 2 == 0) {
  	document.getElementById("secondHand").style.backgroundColor = "red";
  	secHand.style.transform = "rotate(" + secRotation + "deg)"
  } else {
  	document.getElementById("secondHand").style.backgroundColor = "black";
  	secHand.style.transform = "rotate(" + secRotation + "deg)"

  }
  


  requestAnimationFrame(runClock)
}
runClock()



