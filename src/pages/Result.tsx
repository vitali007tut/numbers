import { useParams } from 'react-router-dom';

export default function Result() {
    const { type, value, mounth, day } = useParams();

    const title = (() => {
        if (value === 'random') {
            return `random: ${type}`;
        }
        if (type === 'date') {
            return `${type}: ${mounth} | ${day}`;
        }
        if (type === 'math' || type === 'trivia') {
            return `${type}: ${value}`;
        }
        return '';
    })();

    return (
        <div className="section">
            <h2 className="title">Result for {title}</h2>
            <div className="w-full max-w-2xl mt-2 p-4 bg-white/10 rounded text-white text-lg"></div>
        </div>
    );
}
