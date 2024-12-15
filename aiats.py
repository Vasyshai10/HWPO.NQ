from transformers import pipeline

pipe = pipeline("text-generation", model="EleutherAI/gpt-j-6b")

result = pipe("Hello, how can I assist you today?")
print(result)
