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

function escapeHTML(str) {
  const div = document.createElement("div");
  div.innerText = str;
  return div.innerHTML;
}

function displayNotes(notes) {
  const notesContainer = document.getElementById("notes-list");
  if (!notesContainer) return;
  notesContainer.innerHTML = "";

  notes.forEach((note) => {
    const item = document.createElement("div");
    item.className = "note-item";
    item.innerHTML = `
      <div class="note-header">
        <h3>${escapeHTML(note.title)}</h3>
        <span class="badge">${escapeHTML(note.category)}</span>
      </div>
      <p class="note-body">${escapeHTML(note.content)}</p>
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
      const titleInput = document.getElementById("note-title");
      const categoryInput = document.getElementById("note-category");
      const contentInput = document.getElementById("note-content");

      const title = titleInput.value.trim();
      const category = categoryInput.value.trim();
      const content = contentInput.value.trim();

      // Bugfix: Prevent empty or whitespace-only note submission
      if (!title || !content) {
        alert("Please provide both a title and content for the note.");
        return;
      }

      initialNotes.push({ title, category, content });
      displayNotes(initialNotes);
      form.reset();
      titleInput.focus();
    });
  }
});
