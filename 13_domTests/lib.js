const container = document.querySelector("#container");
const paragraph = document.createElement("p");
container.appendChild(paragraph)

const parContent = document.querySelector("p");
parContent.style.cssText = "color:red;"
parContent.textContent = "Hey, I'm red"

//----------------------------------

const title = document.createElement("h3");
container.insertBefore(title, parContent);

const titleObject = document.querySelector("h3");
titleObject.style.cssText = "color:blue;";
titleObject.textContent = "I'm a blue h3";

// -----------------------------------
const otherDiv = document.createElement("div")
otherDiv.className = "border"
container.appendChild(otherDiv)

const borderDiv = document.querySelector(".border")
borderDiv.style.cssText = "border:thick solid black;"


// -------------------------------------
const bigTitle = document.createElement("h1")
bigTitle.className = "h1-title"
borderDiv.appendChild(bigTitle)
const bigTitleObject = document.querySelector(".h1-title")
bigTitleObject.textContent = "I'm in a div"

// ---------------
const btn = document.querySelector("#btn-test")

function alertFunction() {
  alert("yeah")
}

btn.addEventListener("click", function (e) {
e.target.style.background = "blue";
})
