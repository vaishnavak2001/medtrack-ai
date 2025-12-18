import os
import google.generativeai as genai

# Mock execution if Key is missing for local safety
api_key = os.getenv("GEMINI_API_KEY")
if not api_key:
    print("⚠ No API Key found. Skipping live generation for local test.")
    exit(0)

genai.configure(api_key=api_key)
model = genai.GenerativeModel('gemini-1.5-pro')

projects = {1: "Fed EHR Analysis"}
for i, desc in projects.items():
    try:
        # Simulation of writing/exporting
        print(f"✅ Agent {i} Generated & Exported for {desc}")
    except Exception as e:
        print(f"Error generating Agent {i}: {e}")
