// src/app/about/nu-code/page.js
import NavButton from '../../../components/NavButton';

export default function NuCodePage() {
    return (
        <div>
            <h1>NuCode Technologies</h1>
            <p>
                This is the about page of my portfolio. Here, you can learn more about my background, experience, and the projects I've worked on.
            </p>
            <NavButton
                href='/about'
                label='Go Back'
           />
        </div>
    );
}