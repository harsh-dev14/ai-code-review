import React from 'react';

const ResultDisplay = ({ results }) => {
    return (
        <div className="p-4 bg-gray-100 border rounded">
            <h3 className="text-lg font-bold">AI Review Results</h3>
            <pre className="mt-2 p-2 bg-white">{results}</pre>
        </div>
    );
};

export default ResultDisplay;