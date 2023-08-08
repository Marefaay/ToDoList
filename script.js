///remove class  beat fade from label
let labelIcon = document.querySelector(".add-task label i");
let input = document.querySelector("#input");
let btns = document.querySelectorAll(".to button");
let todoDiv = document.querySelector(".todo-div");
let finishedDiv = document.querySelector(".finished-div");
let addBtn = document.querySelector("#add");
let ul = document.querySelector(".tasks-list ul");

//Remove class fade to label icon on focus
input.addEventListener("focus", () => {
  labelIcon.classList.remove("fa-beat-fade");
});
//add class fade to label icon on blur
input.addEventListener("blur", () => {
  labelIcon.classList.add("fa-beat-fade");
});
// add task to list

console.log(ul);
console.log(addBtn);
addBtn.addEventListener("click", () => {
  if (input.value === "") {
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    let popup = document.createElement("div");
    popup.className = "popup";
    let popupContent = document.createElement("h1");
    let textContent = document.createTextNode("You Can not Add Empty Task");
    let close = document.createElement("i");
    close.className = "fa-solid fa-xmark";
    popupContent.appendChild(textContent);
    popup.appendChild(popupContent);
    overlay.appendChild(close);
    overlay.appendChild(popup);
    document.body.appendChild(overlay);
    close.addEventListener("click", () => {
      overlay.classList.add("left");
      close.style.display = "none";
    });
  } else {
    let li = document.createElement("li");
    let p=document.createElement("p");
    p.innerHTML = input.value;

    let editBtn = document.createElement("button");
    editBtn.className = "edit";
    editBtn.addEventListener("click",function(){
      li.style.display="none"
      input.value=p.innerHTML
    })
    let editText = document.createTextNode("Edit");
    let deleteBtn = document.createElement("button");
    deleteBtn.className = "delte";
    let deleteText = document.createTextNode("Delte");
    let showBtn = document.createElement("button");
    showBtn.className = "Finished";
    let showText = document.createTextNode("Finished");
    let liConatnier = document.createElement("div");
    liConatnier.className = "cont";
    deleteBtn.addEventListener("click", () => {
      li.style.display = "none";

    });
    function saveDlete(){
      localStorage.setItem("Delte",li.style.display)
     }
     function showDelte(){
      li.style.display=localStorage.getItem("Delte");
     }
     showDelte()
    let finishedUl = document.querySelector(".finished-div ul");
    showBtn.addEventListener("click", function () {
      let finsishedli = document.createElement("li");
      let finishedP=document.createElement("p");
      finishedP.className="FP"
      finishedP.innerHTML=p.innerHTML;
      let truecheck=document.createElement("i");
      truecheck.className="fa-solid fa-check";
      let finishedDelte=document.createElement("button");
    finishedDelte.className="finishedDelete";
    finishedDelte.className="FD";
    finishedDelte.addEventListener("click",()=>{
      finsishedli.style.display="none";
    })
    let finishedText=document.createTextNode("Delete");
    finishedDelte.appendChild(finishedText)
      // finishedUl.appendChild(finsishedli);
      finsishedli.appendChild(finishedP)
      finsishedli.appendChild(truecheck)
      finsishedli.appendChild(finishedDelte)
      finishedDiv.appendChild(finsishedli);
      saveFinishde();
    });

    editBtn.appendChild(editText);
    deleteBtn.appendChild(deleteText);
    showBtn.appendChild(showText);
    liConatnier.appendChild(editBtn);
    liConatnier.appendChild(deleteBtn);
    liConatnier.appendChild(showBtn);
    li.appendChild(p)
    li.appendChild(liConatnier);
    li.appendChild(liConatnier);
    ul.appendChild(li);
    todoDiv.appendChild(ul);

    input.value = "";
    saveData();
  }
});

function saveData() {
  localStorage.setItem("tasks", todoDiv.innerHTML);
}
function showData() {
  todoDiv.innerHTML = localStorage.getItem("tasks");
}
showData();
function saveFinishde() {
  localStorage.setItem("Finished", finishedDiv.innerHTML);
}
function showFinished() {
  finishedDiv.innerHTML = localStorage.getItem("Finished");
}
showFinished();
// console.log(btns)
btns.forEach((button) => {
  button.addEventListener("click", function (e) {
    btns.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.currentTarget.classList.add("active");
    localStorage.setItem("active", e.currentTarget.innerHTML);
    // saveActiveClass()
    if (e.currentTarget.dataset.active === "todo") {
      todoDiv.style.display = "block";
      finishedDiv.style.display = "none";
      localStorage.setItem("div", todoDiv.className);
    }
    if (e.currentTarget.dataset.active === "finished") {
      todoDiv.style.display = "none";
      finishedDiv.style.display = "block";
      localStorage.setItem("div", finishedDiv.className);
    }
  });
});
function showActive() {
  btns.forEach((btn) => {
    if (btn.dataset.active === localStorage.getItem("active")) {
      btn.classList.add("active");
    }
    if (localStorage.getItem("div") === "todo-div") {
      todoDiv.style.display = "block";
      finishedDiv.style.display = "none";
    }
    if (localStorage.getItem("div") === "finished-div") {
      todoDiv.style.display = "none";
      finishedDiv.style.display = "block";
    }
  });
}
showActive();
