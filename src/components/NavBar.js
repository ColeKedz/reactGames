import './NavBar.css'
function NavBar() {
    let linkedinUrl = 'https://www.linkedin.com/in/cole-kedzierski';
    let githubUrl = 'https://github.com/ColeKedz';
    return ( 
        <nav id='navContainer'>
            <ul>
                <li ><a className='navFonts' href={linkedinUrl} target='_blank' rel='noreferrer' >Linkedin</a></li>
                <li><a id='GitHub' class='navFonts' href={githubUrl} target='_blank' rel='noreferrer'>GitHub</a></li>
            </ul>
        </nav>

    );



}   export default NavBar;