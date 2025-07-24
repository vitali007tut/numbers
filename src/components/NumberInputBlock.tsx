import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface NumberInputBlockProps {
    type: 'math' | 'trivia';
}

export const NumberInputBlock: React.FC<NumberInputBlockProps> = ({ type }) => {
    const [value, setValue] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const label = type.toUpperCase();

    const handleSubmit = () => {
        if (!/^[-]?\d+$/.test(value)) {
            setError(`${label} should only contain digits`);
            return;
        }

        setError('');
        navigate(`/${value}/${type}`);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value;
        setValue(newValue);

        if (error) {
            setError('');
        }
    };

    return (
        <>
            <div className="input-container">
                <input
                    id={`number-${type}`}
                    type="text"
                    className="input text"
                    value={value}
                    onChange={handleInputChange}
                    placeholder="Type number..."
                />
                <button className="button" type="button" onClick={handleSubmit}>
                    {label}
                </button>
            </div>
            {error && <div className="error-message">{error}</div>}
        </>
    );
};
