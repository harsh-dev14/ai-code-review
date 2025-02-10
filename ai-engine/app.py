from fastapi import FastAPI
from pydantic import BaseModel
from models.ai_review import analyze_code

app = FastAPI()

class CodeRequest(BaseModel):
    code: str

@app.post("/analyze")
def analyze(request: CodeRequest):
    result = analyze_code(request.code)
    return {"analysis": result}