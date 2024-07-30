// src/app/about/mentorship/page.js
import WorkLayout from '@/components/WorkLayout';

export default function MentorshipPage() {
    const mentorshipData = {
        title: "Juno College of Technology",
        imgOne: "/assets/juno-one.png",
        altOne: "Two laptops on a desk facing each other",
        imgTwo: "/assets/juno-two.png",
        altTwo: "A laptop with a branch in a glass of water",
        paragraphOne: "After graduating from Juno College of Technology, I took on the role of a student mentor, a profound chapter in my career that reinforced my belief in the transformative power of sharing knowledge and the impact of empowering others. Mentorship at Juno allowed me to give back to the community that had shaped my foundational skills, fostering a supportive and collaborative learning environment for new students.",
        paragraphTwo: "As a mentor, my responsibilities included conducting thorough code reviews and providing one-on-one technical mentorship. I guided students through various topics, including ES6 JavaScript, React, HTML, CSS, SCSS, and accessibility, ensuring they understood the core principles and best practices. Additionally, I offered personal support to help them navigate the challenges of their learning journey. This role not only honed my technical expertise but also enhanced my communication and leadership skills, as I strived to inspire and empower the next generation of web developers.",
        returnUrl: "/about"
    };   

    return (
        <>
          <WorkLayout 
            title={ mentorshipData.title }
            paragraphOne={ mentorshipData.paragraphOne }
            paragraphTwo={ mentorshipData.paragraphTwo }
            imgOne={ mentorshipData.imgOne }
            imgTwo={ mentorshipData.imgTwo }
            altOne={ mentorshipData.altOne }
            altTwo={ mentorshipData.altTwo }
            returnUrl={ mentorshipData.returnUrl }
          /> 
        </>
    );
}
