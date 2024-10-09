const createBtn = document.getElementById("create-btn");
const notesContainer = document.querySelector(".notes-container");
const btn = document.getElementById("create-btn");

// DISPLAY THE INPUT NOTE SECTION
createBtn.addEventListener("click", () => {
  const img = document.createElement("img");
  const note = document.createElement("p");

  img.src = "./images/delete.png";
  note.setAttribute("contenteditable", "true");
  note.classList = "input-note";

  notesContainer.appendChild(note).appendChild(img);
});

// BUTTON RIPPLE EFFECT
btn.addEventListener("mouseover", (e) => {
  const x = e.pageX - btn.offsetLeft;
  const y = e.pageY - btn.offsetTop;

  btn.style.setProperty("--xPos", x + "px");
  btn.style.setProperty("--yPos", y + "px");
});
