import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Search from "./Components/SearchDiv/Search.jsx";
import Jobs from "./Components/JobDiv/Jobs.jsx";
import Value from "./Components/ValueDiv/Value.jsx";
import Footer from "./Components/FooterDiv/Footer.jsx";

function App() {
    return (
        <div>
            <Navbar/>
            <Search/>
            <Jobs/>
            <Value/>
            <Footer/>
        </div>
    );
}

export default App;