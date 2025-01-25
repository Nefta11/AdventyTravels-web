import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

function App() {
    return (
        <BrowserRouter>
            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Agrega más rutas si es necesario */}
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
