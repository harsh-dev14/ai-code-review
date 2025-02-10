import React, { useState } from 'react';

const CodeEditor = ({ onSubmit }) => {
    const [code, setCode] = useState('');

    return (
        <div className="p-4">
            <textarea
                className="w-full h-40 p-2 border rounded"
                placeholder="Paste your code here..."
                value={code}
                onChange={(e) => setCode(e.target.value)}
            />
            <button 
                className="mt-2 p-2 bg-blue-500 text-white rounded"
                onClick={() => onSubmit(code)}
            >
                Analyze Code
            </button>
        </div>
    );
};

export default CodeEditor;