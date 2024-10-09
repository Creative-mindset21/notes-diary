const createBtn = document.getElementById("create-btn");
const notesContainer = document.querySelector(".notes-container");

// DISPLAY THE INPUT NOTE SECTION
createBtn.addEventListener("click", () => {
  const img = document.createElement("img");
  const note = document.createElement("p");

  img.src = "./images/delete.png";
  note.setAttribute("contenteditable", "true");
  note.classList = "input-note";

  notesContainer.appendChild(note).appendChild(img);
});
