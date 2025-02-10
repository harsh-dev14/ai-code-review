from transformers import pipeline

def analyze_code(code):
    model = pipeline("text-classification", model="microsoft/codebert-base")
    return model(code)