import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Result() {
    const { type, value, mounth, day } = useParams();
    const navigate = useNavigate();
    const [fact, setFact] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const BASE_URL = '/.netlify/functions/numbers-api?query=';

    let title = '';
    let url = '';

    if (value === 'random') {
        title = `random ${type}`;
        url = `random/${type}`;
    } else if (type === 'date') {
        title = `${type}: ${mounth} | ${day}`;
        url = `${mounth}/${day}/${type}`;
    } else if (type === 'math' || type === 'trivia') {
        title = `${type}: ${value}`;
        url = `${value}/${type}`;
    }

    useEffect(() => {
        const fetchFact = async () => {
            try {
                setLoading(true);
                setError('');
                const response = await fetch(`${BASE_URL}${url}`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.text(); // API возвращает простой текст
                setFact(data);
            } catch (err) {
                setError((err as Error).message);
            } finally {
                setLoading(false);
            }
        };

        if (url) {
            fetchFact();
        }
    }, [url]);

    return (
        <div className="section flex flex-col items-center">
            <h2 className="title">Result for {title}</h2>
            <div className="w-full max-w-2xl mt-2 p-4 bg-white/10 rounded text-white text-lg">
                {loading && <p>Loading...</p>}
                {error && <p className="text-red-400">Error: {error}</p>}
                {fact && <p>{fact}</p>}
            </div>
            <button className="button mt-4" onClick={() => navigate('/')}>
                Clear
            </button>
        </div>
    );
}
