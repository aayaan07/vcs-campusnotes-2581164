// Sample campus notes for initial display
const initialNotes = [
  {
    title: "DBMS Unit 3 Revision",
    category: "Lecture",
    content: "Review relational algebra operations, join strategies, and normalization up to BCNF."
  },
  {
    title: "VCS Git Tagging & Workflow",
    category: "Lab",
    content: "Practice creating lightweight and annotated tags, and writing Conventional Commits."
  }
];

function displayNotes(notes) {
  const notesContainer = document.getElementById("notes-list");
  if (!notesContainer) return;
  notesContainer.innerHTML = "";

  notes.forEach((note) => {
    const item = document.createElement("div");
    item.className = "note-item";
    item.innerHTML = `
      <div class="note-header">
        <h3>${note.title}</h3>
        <span class="badge">${note.category}</span>
      </div>
      <p class="note-body">${note.content}</p>
    `;
    notesContainer.appendChild(item);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  displayNotes(initialNotes);

  const form = document.getElementById("note-form");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("note-title").value;
      const category = document.getElementById("note-category").value;
      const content = document.getElementById("note-content").value;

      initialNotes.push({ title, category, content });
      displayNotes(initialNotes);
      form.reset();
    });
  }
});
