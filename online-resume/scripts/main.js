const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "images/image-place-holder.jpeg") {
    myImage.setAttribute("src", "images/dogs.jpeg");
  } else {
    myImage.setAttribute("src", "images/image-place-holder.jpeg");
  }
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");
function setUserName() {
    const myName = prompt("Please enter your name");
    localStorage.setItem("name", myName);
    myHeading.textContent = `Welcome to my online resume, ${myName}.`;
  }
  
  if (!localStorage.getItem("name")) {
    setUserName();
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Mozilla is cool, ${storedName}`;
  }

  myButton.onclick = () => {
    setUserName();
  };
  
  
