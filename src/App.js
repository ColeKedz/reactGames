import { Route, Routes, Link } from 'react-router-dom';
import HomePage from './components/HomePage';
import About from './components/About';
import Header from './components/Header.css'

 
function App() {

    const linkedinUrl = 'https://www.linkedin.com/in/cole-kedzierski';
    const githubUrl = 'https://github.com/ColeKedz';

    return (


        <div className='App'>
            <header id="App-header">

                <nav id="navContainer">
                    <Link className='navItem' to="/reactGames"> Home </Link>
                    <Link className='navItem' to="/About"> About </Link>
                    <span ><a className='navItem' href={linkedinUrl} target='_blank' rel='noreferrer' >Linkedin</a></span>
                    <span><a className='navItem' href={githubUrl} target='_blank' rel='noreferrer'>GitHub</a></span>
                    
                   
                </nav>

            </header>

            <Routes>
                <Route path="/reactGames" element={<HomePage />} />
                <Route path="/About" element={<About /> } />
            </Routes>
    
        </div>

    );
}

export default App;