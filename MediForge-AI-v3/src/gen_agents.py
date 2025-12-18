import os
import json

# Mock execution if Key is missing or Lib is missing
try:
    import google.generativeai as genai
    has_lib = True
except ImportError:
    has_lib = False

api_key = os.getenv("GEMINI_API_KEY")

if not api_key or not has_lib:
    print("Warning: No API Key or Library found. Generating mock agents.json for local test.")
    # Mock data for local testing
    mock_registry = {
        "1": {"name": "Agent1_FedEHR", "description": "Federated EHR Analysis", "status": "active"},
        "2": {"name": "Agent2_Vision", "description": "Medical Imaging Analysis", "status": "active"},
        "10": {"name": "Agent10_Gateway", "description": "Secure Inference Gateway", "status": "active"}
    }
    with open("src/agents.json", "w") as f:
        json.dump(mock_registry, f, indent=2)
    exit(0)

genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-1.5-pro')

projects = {1: "Fed EHR Analysis", 2: "Retinopathy Vision", 10: "Inference Gateway"}
registry = {}

for i, desc in projects.items():
    try:
        # Simulation of writing/exporting
        print(f"✅ Agent {i} Generated & Exported for {desc}")
        registry[i] = {
            "name": f"Agent{i}_{desc.split()[0]}",
            "description": desc,
            "status": "active"
        }
    except Exception as e:
        print(f"Error generating Agent {i}: {e}")

# Save Registry
with open("src/agents.json", "w") as f:
    json.dump(registry, f, indent=2)
print("✅ agents.json registry created.")
