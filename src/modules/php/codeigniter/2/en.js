

let new_location = document.location.href.replace("https://www.codeigniter.com/userguide2", "http://cikorea.net/user_guide_2.1.0");
new_location = new_location.replace("https://codeigniter.com/userguide2", "http://cikorea.net/user_guide_2.1.0");

let new_window = document.createElement("a");
div.appendChild(new_window);
new_window.innerText = "한글버전 새창";
new_window.href = new_location;
new_window.target = "_blank";
new_window.classList.add("btn");

let moveWindow = document.createElement("a");
div.appendChild(moveWindow);
moveWindow.innerText = "한글버전 이동";
moveWindow.href = new_location;
moveWindow.classList.add("btn");
