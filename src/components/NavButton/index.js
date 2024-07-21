import Link from 'next/link';

const VARIANT_STYLES = {
    primary: "bg-blue-500 hover:bg-blue-700",
    secondary: "bg-gray-500 hover:bg-gray-700",
    success: "bg-green-500 hover:bg-green-700",
    danger: "bg-red-500 hover:bg-red-700",
};

const NavButton = ( { href, label, variant = "primary" } ) => {
    const variantClasses = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;

    return (
        <Link href={href} passHref>
            <button 
                className={
                    `
                    px-4 
                    py-2 
                    text-white 
                    rounded 
                    transition 
                    duration-150 
                    ease-in-out 
                    hover:shadow-xl
                    ${variantClasses}
                    `
                }
            >
                {label}
            </button>
        </Link>
    );
};

export default NavButton;
