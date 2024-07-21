// src/app/projects/guess-who-ghibli/page.js
import NavButton from '../../../components/NavButton';

export default function GuessWhoGhibliPage() {
    return (
        <div>
            <h1>Guess Who Ghibli Page</h1>
            <NavButton
                href='/projects'
                label='Return to Projects'
           />
        </div>
    );
}