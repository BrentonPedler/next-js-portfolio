import Image from 'next/image';
import NavButton from '../NavButton';

const ProjectCTACard = ({ title, description, buttonText, buttonHref, imageUrl, imageAlt }) => {
    return (
        <div className="p-10 mb-5">
            <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2">
                    {title}
                </h3>
            </div>
            <Image
                src={imageUrl}
                alt={imageAlt}
                width={300}
                height={250}
                objectFit="cover"
                className="px-6"
            />
            <div className="px-6 py-4">
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 py-4">
                <NavButton
                    href={buttonHref}
                    label={buttonText}
                    variant="secondary"
                />
            </div>
        </div>
    );
};

export default ProjectCTACard;