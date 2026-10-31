// Sample campus notes for initial display
const campusNotesState = [
  {
    id: 1,
    title: "DBMS Unit 3 Revision",
    category: "Lecture",
    content: "Review relational algebra operations, join strategies, and normalization up to BCNF."
  },
  {
    id: 2,
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

function createNoteElement(note) {
  const item = document.createElement("div");
  item.className = "note-item";
  item.dataset.id = note.id;
  item.innerHTML = `
    <div class="note-header">
      <h3>${escapeHTML(note.title)}</h3>
      <span class="badge">${escapeHTML(note.category)}</span>
    </div>
    <p class="note-body">${escapeHTML(note.content)}</p>
  `;
  return item;
}

function renderNotes(notes) {
  const notesContainer = document.getElementById("notes-list");
  if (!notesContainer) return;

  notesContainer.innerHTML = "";
  const fragment = document.createDocumentFragment();
  notes.forEach((note) => {
    fragment.appendChild(createNoteElement(note));
  });
  notesContainer.appendChild(fragment);
}

function handleAddNote(event) {
  event.preventDefault();
  const titleInput = document.getElementById("note-title");
  const categoryInput = document.getElementById("note-category");
  const contentInput = document.getElementById("note-content");

  const title = titleInput.value.trim();
  const category = categoryInput.value.trim();
  const content = contentInput.value.trim();

  if (!title || !content) {
    alert("Please provide both a title and content for the note.");
    return;
  }

  const newNote = {
    id: Date.now(),
    title,
    category,
    content
  };

  campusNotesState.push(newNote);
  renderNotes(campusNotesState);

  event.target.reset();
  titleInput.focus();
}

document.addEventListener("DOMContentLoaded", () => {
  renderNotes(campusNotesState);

  const form = document.getElementById("note-form");
  if (form) {
    form.addEventListener("submit", handleAddNote);
  }
});
