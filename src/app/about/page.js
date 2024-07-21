// src/app/about/page.js
import WorkCTACard from '@/components/WorkCTACard';

const aboutData = [
    {
        title: "Team Contributions at Trew Knowledge",
        description: "Enhancing user experiences and backend functionality through the use of React-powered Gutenberg blocks, integrating jQuery for interactive features, and employing PHP for robust backend development",
        buttonText: "Inside My WordPress Journey",
        buttonHref: "/about/trew-knowledge",
        imageUrl: "/assets/placeholder-cta.png",
        imageAlt: "Trew Knowledge Display Photo"
    },
    {
        title: "Elevating Front-End Skills at Nu Code Technologies",
        description: "Working at Nu Code Technologies enriched my understanding of the web's potential and my role in crafting it, enhancing my proficiency in both the technical and client-facing aspects of web development.",
        buttonText: "Journey Through Innovation",
        buttonHref: "/about/nu-code",
        imageUrl: "/assets/placeholder-cta.png",
        imageAlt: "Nu Code Display Photo"
    },
    {
        title: "Empowering Futures: Mentorship at Juno College",
        description: "Mentorship was a profound chapter in my career, reinforcing my belief in the transformative power of sharing knowledge and the impact of empowering.",
        buttonText: "Growing Together: My Mentorship Story",
        buttonHref: "/about/mentorship",
        imageUrl: "/assets/placeholder-cta.png",
        imageAlt: "Mentoring Display Photo"
    }
];

export default function AboutPage() {
    return (
        <div>
            <h1>About Me</h1>
            <p>
                This is the about page of my portfolio. Here, you can learn more about my background, experience, and the projects I've worked on.
            </p>
            <div className="">
                {
                    aboutData.map( ( item, index ) => (
                        <WorkCTACard
                            key={index}
                            title={item.title}
                            description={item.description}
                            buttonText={item.buttonText}
                            buttonHref={item.buttonHref}
                            imageUrl={item.imageUrl}
                            imageAlt={item.imageAlt}
                            variant={item.variant}
                        />
                    ) )
                }
            </div>
        </div>
    );
}
