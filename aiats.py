import os
from transformers import pipeline

# Define the directory path
directory_path = '/Users/neeraj/Documents/External'

# Check if the directory exists
if os.path.exists(directory_path):
    print(f"The directory '{directory_path}' exists.")
else:
    print(f"The directory '{directory_path}' does not exist.")

# Now, integrate your model loading logic here

pipe = pipeline("text-generation", model="EleutherAI/gpt-j-6b")

result = pipe("Hello, how can I assist you today?")
print(result)
