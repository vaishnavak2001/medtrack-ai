# Contributing to MediForge AI

Thanks for your interest in contributing! Here's how to get started.

## Getting Started

1. **Fork** this repository
2. **Clone** your fork locally
3. Create a **feature branch**: `git checkout -b feature/your-feature`
4. Make your changes and **test** them
5. **Commit** with a clear message: `git commit -m "feat: add symptom autocomplete"`
6. **Push** to your fork and open a **Pull Request**

## Development Setup

### v3 (Vanilla HTML/JS)

```bash
cd MediForge-AI-v3
python -m http.server 8000
# Open http://localhost:8000
```

### v5 (React PWA)

```bash
cd MediForge-v5-Free
npm install
npm run dev
```

## Commit Convention

We loosely follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` — New features
- `fix:` — Bug fixes
- `docs:` — Documentation changes
- `refactor:` — Code refactoring
- `test:` — Adding or updating tests

## Areas Where Help is Appreciated

- Real ONNX model training pipelines (see `scripts/train_free.py`)
- Adding more PubMed articles to the RAG knowledge base
- Accessibility improvements (ARIA labels, keyboard navigation)
- Unit tests for the agent orchestrator
- Mobile responsiveness tweaks

## Code of Conduct

Be respectful. Be constructive. We're all here to learn and build cool things.
