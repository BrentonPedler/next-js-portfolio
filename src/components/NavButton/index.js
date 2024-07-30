const VARIANT_STYLES = {
    primary: "bg-blue-500 text-white hover:bg-blue-700",
    secondary: "bg-gray-500 text-white hover:bg-gray-700",
    success: "bg-green-500 hover:bg-green-700",
    danger: "bg-red-500 hover:bg-red-700",
    outline: "border text-gray-700 hover:bg-gray-500 hover:text-white"
};

const NavButton = ( { href, label, variant = "primary", target } ) => {
    const variantClasses = VARIANT_STYLES[variant] || VARIANT_STYLES.primary;

    return (
        <div>
            <a
                href={href}
                className={`inline-block px-4 py-2 rounded transition duration-500 ease-in-out hover:shadow-xl w-auto ${variantClasses}`}
                target={target}
                rel={target === "_blank" ? "noopener noreferrer" : undefined}
            >
                {label}
            </a>
        </div>
    );
};

export default NavButton;
