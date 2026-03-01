// orchestrator.js — Multi-agent inference pipeline
// Loads agent definitions from agents.json and runs mock cascade inference

const agents = {};

async function loadAgents() {
    console.log("Loading agent registry...");
    try {
        const response = await fetch('src/agents.json');
        const registry = await response.json();

        for (const [id, meta] of Object.entries(registry)) {
            agents[id] = { ready: true, ...meta };
            console.log(`Loaded ${meta.name}`);
        }
        return true;
    } catch (e) {
        console.warn("Registry unavailable, falling back to defaults", e);
        // Fallback agents so the UI still works
        for (let i = 1; i <= 3; i++) {
            agents[i] = { ready: true, name: `FallbackAgent${i}` };
        }
        return false;
    }
}

async function orchestrate(query, audio, image) {
    // Simulated RAG retrieval — would normally search a vector store
    const ragContext = { "vision": ["Retinopathy study 2024"] };

    // Run each agent's inference (mock for demo)
    let results = {};
    results[1] = { pred: "Low Risk", conf: 0.95 };

    if (query && query.includes('vision')) {
        results[10] = { pred: "Detected Abnormality", conf: 0.92 };
    }

    return generateReport(results, ragContext[query] || []);
}

function generateReport(results, ragData) {
    let html = `<h2>Diagnostic Report (96% Confidence)</h2><ul>`;
    for (const [k, v] of Object.entries(results)) {
        html += `<li>Agent ${k}: ${v.pred} (${v.conf})</li>`;
    }
    html += `</ul><p>RAG Context: ${ragData.length > 0 ? ragData.join(', ') : 'None'}</p>`;
    return html;
}

// Expose globally for the HTML page
window.loadAgents = loadAgents;
window.orchestrate = orchestrate;
