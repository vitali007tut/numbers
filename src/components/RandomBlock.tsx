import { useNavigate } from "react-router-dom";

export const RandomBlock = () => {
    const navigate = useNavigate();

    const handleRandomClick = (type: string) => {
        navigate(`/random/${type}`);
    };

    return (
        <>
            <div className="section">
                <h2 className="title">Random</h2>
                <div className="flex flex-wrap gap-2.5 justify-center sm:justify-between">
                    {['trivia', 'year', 'date', 'math'].map((type) => (
                        <button key={type} className="button" onClick={() => handleRandomClick(type)}>
                            {type.toUpperCase()}
                        </button>
                    ))}
                </div>
            </div>
        </>
    );
}
