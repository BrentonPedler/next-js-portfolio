// src/components/Header/index.js
import Navbar from "../Navbar";
import Link from 'next/link';

const Header = () => {
  return (
    <header className="flex justify-between my-4">
      <Link href="/">
        <h2>B</h2>
      </Link>
      <Navbar />
    </header>
  );
};

export default Header;
