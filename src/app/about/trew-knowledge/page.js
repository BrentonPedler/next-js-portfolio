// src/app/about/trew-knowledge/page.js
import NavButton from '../../../components/NavButton';

export default function TrewKnowledgePage() {
    return (
        <div>
            <h1>Trew Knowledge</h1>
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