# VCS CampusNotes

A web-based campus notes application designed for students to capture, categorize, and organize academic study notes, lecture summaries, and lab checklists.

**Author:** Aayaan Kumar (2581164)

---

## Features

- **Quick Note Entry:** Add academic notes with titles, categories, and content.
- **Categorization:** Classify notes into Lecture, Lab, Assignment, and Exam categories.
- **Input Validation:** Prevents submission of empty or whitespace-only notes.
- **Accessible UI:** High-contrast buttons, responsive layout, and mobile-friendly design.
- **HTML Sanitization:** Safe text rendering to prevent script injection.

---

## File Structure

```text
vcs-campusnotes/
├── index.html       # Application entry point and structure
├── style.css        # Responsive styling and CSS design rules
├── app.js           # Client-side state and note rendering logic
└── README.md        # Documentation and project overview
```

---

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/aayaan07/vcs-campusnotes-2581164.git
   cd vcs-campusnotes
   ```
2. Open `index.html` in any modern web browser (Chrome, Edge, Firefox, Safari).

---

## Versioning & Git Workflow

This repository follows [Semantic Versioning (SemVer)](https://semver.org/) and the [Conventional Commits](https://www.conventionalcommits.org/) specification:

- `v0.1.0`: Initial prototype release (lightweight tag)
- `v1.0.0`: Production-ready release with note management, accessibility improvements, and documentation (annotated tag)

### Conventional Commit Types Used:
- `feat:` Introduces a new feature to the codebase
- `fix:` Patches a bug or accessibility issue
- `docs:` Documentation changes only
- `refactor:` Code restructuring without changing behavior
- `chore:` Maintenance tasks, configuration, and repository setup
