import os
from transformers import pipeline

# Define the directory path
directory_path = '/path/to/your/directory'  # Replace with your desired directory

# Check if the directory exists
if os.path.exists(directory_path):
    print(f"The directory '{directory_path}' exists.")
else:
    print(f"The directory '{directory_path}' does not exist.")

# Load a smaller model (GPT-Neo 1.3B) to avoid large downloads
pipe = pipeline("text-generation", model="EleutherAI/gpt-neo-1.3B")

# Test the model with a sample input
result = pipe("Hello, how can I assist you today?")
print(result)

