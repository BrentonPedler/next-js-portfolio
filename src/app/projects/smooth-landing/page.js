// src/app/projects/smooth-landing/page.js
import NavButton from '../../../components/NavButton';

export default function SmoothLandingPage() {
    return (
        <div>
            <h1>Smooth Landing Project</h1>
            <NavButton
                href='/projects'
                label='Return to Projects'
           />
        </div>
    );
}
