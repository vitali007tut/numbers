import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface NumberInputBlockProps {
    type: 'math' | 'trivia';
}

export const NumberInputBlock: React.FC<NumberInputBlockProps> = ({ type }) => {
    const [value, setValue] = useState('');
    const navigate = useNavigate();
    const label = type.toUpperCase();

    const handleSubmit = () => {
        if (!/^\d+$/.test(value)) {
            alert(`Число ${type} должно быть в виде цифры`);
            return;
        }

        navigate(`/${value}/${type}`);
    };

    return (
        <div className="input-container">
            <input
                id={`number-${type}`}
                type="text"
                className="input"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Type number..."
            />
            <button className="button" type="button" onClick={handleSubmit}>
                {label}
            </button>
        </div>
    );
};
