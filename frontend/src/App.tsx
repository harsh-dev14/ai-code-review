import React, { useState } from 'react';
import CodeEditor from './components/CodeEditor';
import ResultDisplay from './components/ResultDisplay';
import { analyzeCode } from './api';

function App() {
    const [results, setResults] = useState('');

    const handleSubmit = async (code) => {
        const data = await analyzeCode(code);
        setResults(data.analysis);
    };

    return (
        <div className="container mx-auto p-6">
            <CodeEditor onSubmit={handleSubmit} />
            <ResultDisplay results={results} />
        </div>
    );
}

export default App;