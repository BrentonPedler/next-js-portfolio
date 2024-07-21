// src/app/about/mentorship/page.js
import NavButton from '../../../components/NavButton';

export default function MentorshipPage() {
    return (
        <div>
            <h1>Mentorship</h1>
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