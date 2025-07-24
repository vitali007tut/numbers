import CustomDatePicker from '../components/CustomDatePicker';
import { NumberInputBlock } from '../components/NumberInputBlock';
import { RandomBlock } from '../components/RandomBlock';
import { Outlet } from 'react-router-dom';

export default function Home() {
    return (
        <div className="min-h-screen bg-multi-layer text-white flex flex-col items-center p-6 space-y-6">
            <h1 className="logo">Numbers Facts</h1>

            <div className="section">
                <NumberInputBlock type="math" />
                <NumberInputBlock type="trivia" />
                <CustomDatePicker />
            </div>
            <RandomBlock />
            <Outlet />
        </div>
    );
}
