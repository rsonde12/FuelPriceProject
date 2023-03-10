import Login from ".backend/profile"

import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { usaState } from 'react';

function App() {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path= "/" element={<Profile/>}/>
                </Routes>
            </Router>
        </div>
    );
}

export default App;