import './NavBar.css'
import GitHub_Logo from './GitHub_Logo.png'
function NavBar() {
    let linkedinUrl = 'https://www.linkedin.com/in/cole-kedzierski';
    let githubUrl = 'https://github.com/ColeKedz';
    return ( 
        <div id='navContainer'>
            <span ><a class='navFonts' href={linkedinUrl} target='_blank' rel='noreferrer' >Linkedin</a></span>
            <span><a id='GitHub' class='navFonts' href={githubUrl} target='_blank' rel='noreferrer'>GitHub</a></span>
        </div>

    );



}   export default NavBar;