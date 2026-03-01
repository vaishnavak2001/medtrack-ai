# MediForge AI 🩺

**An open-source, multi-agent medical AI diagnostic platform** that orchestrates 10 specialist AI agents, integrates with Google's MedGemma for ensemble reasoning, and runs entirely in the browser as an offline-capable Progressive Web App.

This project explores the intersection of **agentic AI architectures** and **clinical decision support systems** — built to demonstrate how federated, privacy-preserving medical AI could work at scale.

---

## Why This Project?

The healthcare AI landscape is fragmented. Most solutions are single-model, cloud-dependent, and proprietary. MediForge takes a fundamentally different approach:

- **Multi-agent architecture** — Instead of one monolithic model, 10 specialist agents each handle a specific medical domain (EHR analysis, retinopathy screening, drug interaction prediction, etc.)
- **Ensemble reasoning** — Results from all agents are synthesized through MedGemma for a holistic diagnostic report
- **Privacy-first** — Designed for federated learning; patient data never leaves the device
- **Works offline** — Full PWA support means the app functions without internet after first load
- **100% browser-based** — No backend server required; inference runs on WebGPU/WASM

---

## Architecture

```
┌─────────────────────────────────────────────────────────┐
│                    MediForge Platform                    │
├─────────────────────────────────────────────────────────┤
│                                                         │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐  ┌─────────┐   │
│  │ Agent 1  │  │ Agent 2  │  │ Agent 3  │  │   ...   │   │
│  │ FedEHR   │  │ MRISynth │  │ DrugGNN  │  │  x10    │   │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬────┘   │
│       │              │              │              │       │
│       └──────────────┴──────────────┴──────────────┘       │
│                          │                                 │
│                  ┌───────▼────────┐                        │
│                  │  Orchestrator  │                        │
│                  │  (Cascade +    │                        │
│                  │   Ensemble)    │                        │
│                  └───────┬────────┘                        │
│                          │                                 │
│              ┌───────────┼───────────┐                    │
│              │           │           │                    │
│       ┌──────▼──┐  ┌─────▼────┐  ┌──▼──────┐            │
│       │ MedGemma│  │ PubMed   │  │ Report  │            │
│       │ (HF API)│  │ RAG      │  │ Engine  │            │
│       └─────────┘  └──────────┘  └─────────┘            │
│                                                         │
├─────────────────────────────────────────────────────────┤
│  Frontend: React + Framer Motion + Tailwind CSS (PWA)   │
│  Inference: TensorFlow.js / ONNX Runtime Web            │
│  Offline: Service Worker + IndexedDB Cache              │
└─────────────────────────────────────────────────────────┘
```

---

## The 10 Specialist Agents

| # | Agent | Domain | Approach |
|---|-------|--------|----------|
| 1 | **FedEHR** | Electronic Health Records | Federated learning for privacy-preserving risk prediction |
| 2 | **MRISynth** | Medical Imaging | Generative synthesis for rare pathology augmentation |
| 3 | **DrugGNN** | Pharmacology | Graph Neural Network for drug repurposing candidates |
| 4 | **AlzMulti** | Neurology | Multimodal early Alzheimer's detection (speech + imaging) |
| 5 | **ECG-XAI** | Cardiology | Explainable AI for arrhythmia forecasting |
| 6 | **CancerRL** | Oncology | Reinforcement learning for treatment sequencing |
| 7 | **AMR-ViT** | Microbiology | Vision Transformer for antimicrobial resistance detection |
| 8 | **TrialBias** | Clinical Research | NLP-based bias detection in clinical trial literature |
| 9 | **ProteinGAN** | Genomics | Protein variant pathogenicity prediction |
| 10 | **DREdge** | Ophthalmology | Edge-deployed diabetic retinopathy screening |

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | React 18, Framer Motion, Tailwind CSS |
| **AI Runtime** | TensorFlow.js, ONNX Runtime Web |
| **LLM Integration** | MedGemma 27B (via HuggingFace Inference API) |
| **Knowledge Base** | PubMed RAG with local JSON cache |
| **Offline** | Service Worker, Workbox, PWA manifest |
| **Voice Input** | Web Speech API |
| **Build** | Vite 5 with PWA plugin |
| **CI/CD** | GitHub Actions → GitHub Pages |
| **Training** | PyTorch + ONNX export pipeline |
| **DevContainer** | Codespaces-ready with Python 3.11 |

---

## Project Structure

```
medtrack-ai/
├── MediForge-AI-v3/            # Lightweight vanilla HTML/JS version
│   ├── index.html              # Single-page diagnostic console
│   ├── src/
│   │   ├── orchestrator.js     # Agent loading & cascade inference
│   │   ├── agents.json         # Agent registry (10 specialist agents)
│   │   ├── gen_agents.py       # Gemini-powered agent generation script
│   │   └── agents/
│   │       └── agent1_fed_ehr.py   # Sample agent with PubMedBERT
│   ├── colab_notebooks/
│   │   └── master_orchestrator.ipynb
│   └── .devcontainer/          # GitHub Codespaces configuration
│
├── MediForge-v5-Free/          # Full React PWA (production version)
│   ├── src/
│   │   ├── App.jsx             # Main application (10-agent dashboard)
│   │   ├── main.jsx            # React entry point
│   │   └── styles.css          # Glassmorphism + gradient design system
│   ├── public/
│   │   ├── manifest.json       # PWA manifest
│   │   └── sw.js               # Service worker for offline support
│   ├── data/
│   │   └── pubmed_sample.json  # Local RAG knowledge base
│   ├── scripts/
│   │   └── train_free.py       # PyTorch training + ONNX export pipeline
│   ├── package.json
│   ├── vite.config.js          # Vite + PWA plugin configuration
│   ├── tailwind.config.js
│   └── postcss.config.js
│
├── .github/workflows/
│   ├── deploy.yml              # CI/CD for v3 (Python + GitHub Pages)
│   └── mediforge-v5-deploy.yml # CI/CD for v5 (Train → Build → Deploy)
│
├── CONTRIBUTING.md
├── LICENSE
└── README.md
```

---

## Getting Started

### Prerequisites

- **Node.js** 18+ (for the React PWA)
- **Python** 3.11+ (for agent training scripts)
- **Git**

### Quick Start — v5 React PWA

```bash
# Clone the repository
git clone https://github.com/vaishnavak2001/medtrack-ai.git
cd medtrack-ai/MediForge-v5-Free

# Install dependencies
npm install

# Start dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

### Quick Start — v3 Vanilla Version

```bash
cd MediForge-AI-v3
python -m http.server 8000
# Open http://localhost:8000
```

### Training Pipeline (Optional)

```bash
# Install Python dependencies
pip install torch transformers datasets scikit-learn onnx

# Run the training script — exports 10 ONNX models
python MediForge-v5-Free/scripts/train_free.py
```

### Building for Production

```bash
cd MediForge-v5-Free
npm run build    # Output in dist/
npm run preview  # Preview production build locally
```

---

## Features

### Implemented ✅

- [x] 10-agent multi-specialist diagnostic cascade
- [x] MedGemma LLM ensemble synthesis (via HuggingFace API)
- [x] PubMed RAG evidence retrieval
- [x] Voice input via Web Speech API
- [x] Offline-capable PWA with service worker caching
- [x] Glassmorphism UI with animated gradient design
- [x] Responsive dashboard (mobile + desktop)
- [x] CI/CD pipeline (GitHub Actions → GitHub Pages)
- [x] ONNX model export pipeline (PyTorch → browser)
- [x] DevContainer / Codespaces support

### In Progress 🔧

- [ ] Real trained models (currently using statistical mocks)
- [ ] AR medical visualization (Three.js integration)
- [ ] Multi-language support for symptom input

### Planned 📋

- [ ] WebGPU-accelerated inference for faster predictions
- [ ] Patient history timeline with IndexedDB persistence
- [ ] Federated learning simulation with Web Workers
- [ ] DICOM image upload and analysis
- [ ] Drug interaction checker with GNN inference
- [ ] Export diagnostic reports as PDF
- [ ] Integration with FHIR health data standards
- [ ] Unit and integration test suite

---

## How It Works

1. **User enters symptoms** — via text input or voice (Web Speech API)
2. **Cascade inference** — All 10 specialist agents run in parallel, each analyzing the input from their domain perspective
3. **Ensemble synthesis** — Agent results are fed to MedGemma for a unified diagnostic opinion
4. **RAG augmentation** — Relevant PubMed literature is retrieved from the local knowledge base
5. **Report generation** — A confidence-scored diagnostic report is rendered with per-agent breakdowns

> **Note:** This is a research/portfolio project. The current agents use mock inference for demonstration purposes. In a production setting, each agent would load a real ONNX model trained on domain-specific medical datasets (MIMIC-IV, APTOS, PhysioNet, etc.).

---

## CI/CD Pipeline

The project includes two GitHub Actions workflows:

| Workflow | Trigger | Steps |
|----------|---------|-------|
| `deploy.yml` | Push to `main` | Install Python deps → Generate agents → Deploy v3 to Pages |
| `mediforge-v5-deploy.yml` | Push to `main` | Train models → `npm install` → `npm run build` → Deploy v5 to Pages |

---

## Contributing

Contributions are welcome! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

Areas where help would be particularly valuable:

- Training real models on public medical datasets
- Expanding the PubMed RAG knowledge base
- Adding accessibility features (ARIA, keyboard nav)
- Writing tests

---

## License

This project is licensed under the MIT License — see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- [TensorFlow.js](https://www.tensorflow.org/js) and [ONNX Runtime Web](https://onnxruntime.ai/) for browser-based ML inference
- [MedGemma](https://huggingface.co/google/medgemma-public-27b-it) by Google for medical LLM capabilities
- [PubMedBERT](https://huggingface.co/microsoft/BiomedNLP-PubMedBERT-base-uncased-abstract) by Microsoft for biomedical NLP
- [Framer Motion](https://www.framer.com/motion/) for smooth UI animations
- [Vite](https://vitejs.dev/) for the blazing-fast build toolchain

---

*Built by [Vaishnav](https://github.com/vaishnavak2001) — exploring the future of privacy-preserving, browser-native medical AI.*
