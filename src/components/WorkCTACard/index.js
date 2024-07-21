import Image from 'next/image';
import NavButton from '../NavButton';

const WorkCTACard = ( { title, description, buttonText, buttonHref, imageUrl, imageAlt, variant = 'order-0', align = 'left' }) => {

    const order = variant === 'order-1' ? 'order-0 md:order-1' : 'order-0';
    const text = align === 'left' ? 'text-center md:text-left' : 'text-center md:text-right';

    return (
        <div className={`flex flex-col md:flex-row my-20 rounded-2xl bg-[#F9F5F6]`}>
            <div className={`relative w-full md:flex-1 md:w-3/5 h-64 md:h-auto ${order}`}>
                <Image
                    src={imageUrl}
                    alt={imageAlt}
                    layout="fill"
                    objectFit="cover"
                    className="rounded-2xl shadow-xl"
                />
            </div>
            <div className={`flex flex-col justify-center md:justify-between w-full md:w-3/5 gap-10 px-6 md:px-10 ${text} my-10`}>
                <h3 className="font-bold text-xl">
                    {title}
                </h3>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
                <NavButton
                    href={ buttonHref }
                    label={ buttonText }
                    variant="secondary"
                />
            </div>
        </div>
    );
};

export default WorkCTACard;
