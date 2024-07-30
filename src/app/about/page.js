// src/app/about/page.js
import WorkCTACard from '@/components/WorkCTACard';

const aboutData = [
    {
        title: "Team Contributions at Trew Knowledge",
        description: "Enhancing user experiences and backend functionality through the use of React-powered Gutenberg blocks, integrating jQuery for interactive features, and employing PHP for robust backend development",
        buttonText: "Inside My WordPress Journey",
        buttonHref: "/about/trew-knowledge",
        imageUrl: "/assets/trewk-image.png",
        imageAlt: "Trew Knowledge Display Photo",
        variant: "order-0",
        align: "left"
    },
    {
        title: "Elevating Front-End Skills at Nu Code Technologies",
        description: "Working at Nu Code Technologies enriched my understanding of the web's potential and my role in crafting it, enhancing my proficiency in both the technical and client-facing aspects of web development.",
        buttonText: "Journey Through Innovation",
        buttonHref: "/about/nu-code",
        imageUrl: "/assets/nucode-image.png",
        imageAlt: "Nu Code Display Photo",
        variant: "order-1",
        align: "left"
    },
    {
        title: "Empowering Futures: Mentorship at Juno College",
        description: "Mentorship was a profound chapter in my career, reinforcing my belief in the transformative power of sharing knowledge and the impact of empowering.",
        buttonText: "Growing Together: My Mentorship Story",
        buttonHref: "/about/mentorship",
        imageUrl: "/assets/mentor-image.png",
        imageAlt: "Mentoring Display Photo",
        variant: "order-0",
        align: "left"
    }
];

export default function AboutPage() {
    return (
        <div className="text-center mt-10">
            <h1>
                Journey through my professional experiences. 
            </h1>
            <p className='w-3/4 m-auto py-10 border-b'>
                Delve into my professional journey, where you’ll uncover the experiences that have shaped my career. Learn about the diverse projects I've brought to life, the skills I've honed, and the background that fuels my passion for development. Click through to discover detailed insights into my work and the expertise I bring to each project.
            </p>
            <div className="">
                {
                    aboutData.map( ( item, index ) => (
                        <WorkCTACard
                            key={ index }
                            title={ item.title }
                            description={ item.description }
                            buttonText={ item.buttonText }
                            buttonHref={ item.buttonHref }
                            imageUrl={ item.imageUrl }
                            imageAlt={ item.imageAlt }
                            variant={ item.variant }
                            align={ item.align }
                        />
                    ) )
                }
            </div>
        </div>
    );
}
