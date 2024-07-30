import Image from 'next/image';
import NavButton from '../NavButton';

const WorkLayout = ( { title, paragraphOne, paragraphTwo, imgOne, imgTwo, altOne, altTwo, returnUrl } ) => {
    return (
        <div>
            <h1>{title}</h1>
            <div>
                <div>
                    <p>{paragraphOne}</p>
                    <div className="relative w-full h-64 md:h-auto">
                        <Image 
                            src={imgOne}
                            alt={altOne}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
                <div>
                    <p>{paragraphTwo}</p>
                    <div className="relative w-full h-64 md:h-auto">
                        <Image 
                            src={imgTwo}
                            alt={altTwo}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-2xl shadow-xl"
                        />
                    </div>
                </div>
            </div>
            <NavButton
                href={ returnUrl }
                label='Go Back'
           />
        </div>
    )
}

export default WorkLayout;