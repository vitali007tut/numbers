import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';
import AnimatedCounter from '../components/AnimatedCounter';

export default function Result() {
    const { type, value } = useParams();
    const navigate = useNavigate();
    const [fact, setFact] = useState('');
    const [selectNumber, setSelectNumber] = useState(0);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const [isVisible, setIsVisible] = useState(true);
    const BASE_URL = '/.netlify/functions/numbers-api?query=';

    const handleClear = () => {
        setIsVisible(false);
        setTimeout(() => {
            navigate('/');
        }, 300);
    };

    let title = '';
    let url = '';

    if (value === 'random') {
        title = `random ${type}:`;
        url = `random/${type}`;
    } else if (type === 'date') {
        const slashValue = value?.replace('-', '/');
        title = `${type}:`;
        url = `${slashValue}`;
    } else if (type === 'math' || type === 'trivia') {
        title = `${type}: `;
        url = `${value}/${type}`;
    }

    useEffect(() => {
        const fetchFact = async () => {
            try {
                setLoading(true);
                setError('');
                const response = await fetch(`${BASE_URL}${url}?json`);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setFact(data.text);
                setSelectNumber(data.number);
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
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    className="section flex flex-col items-center overflow-hidden"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0 }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                >
                    <h2 className="title">
                        Result for {title}
                        {!loading && selectNumber && <AnimatedCounter value={selectNumber} />}
                    </h2>
                    <div className="w-full max-w-2xl mt-2 p-4 bg-white/10 rounded text-white text-lg">
                        {loading && <p className="text">Loading...</p>}
                        {error && <p className="text-red-600">Error: {error}</p>}
                        {!loading && fact && <p className="text">{fact}</p>}
                    </div>
                    <motion.button className="button mt-4" onClick={handleClear}>
                        Clear
                    </motion.button>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
