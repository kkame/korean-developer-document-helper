let new_location = document.location.href.replace("php.net/manual/kr", "php.net/manual/en");

let new_window=document.createElement("a");
div.appendChild(new_window);
new_window.innerText="영문버전 새창";
new_window.href=new_location;
new_window.target="_blank";
new_window.classList.add("btn");

let moveWindow=document.createElement("a");
div.appendChild(moveWindow);
moveWindow.innerText="영문버전 이동";
moveWindow.href=new_location;
moveWindow.classList.add("btn");
