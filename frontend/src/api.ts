const API_URL = "http://localhost:5001/analyze";

export async function analyzeCode(code: string) {
    const response = await fetch(API_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ code }),
    });

    return response.json();
}