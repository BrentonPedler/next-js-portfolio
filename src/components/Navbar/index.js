// src/components/Navbar/index.js

import Link from 'next/link';

const Navbar = () => {
    return (
        <nav>
            <ul className="flex gap-4">
                <li>
                    <Link href="/about">About</Link>
                </li>
                <li>
                    <Link href="/projects">Projects</Link>
                </li>
                <li>
                    <Link href="/contact">Contact</Link>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
