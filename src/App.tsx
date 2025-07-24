import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Result from './pages/Result';

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} >
                <Route path="/:value/:type" element={<Result />} />
            </Route>
        </Routes>
    );
}

export default App;