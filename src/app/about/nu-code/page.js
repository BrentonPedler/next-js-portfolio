// src/app/about/nu-code/page.js
import WorkLayout from '@/components/WorkLayout';

export default function NuCodePage() {
    const nucodeData = {
        title: "NuCode Technologies",
        imgOne: "/assets/nucode-one.png",
        altOne: "A mobile phone showing prices of digital coins",
        imgTwo: "/assets/nucode-two.png",
        altTwo: "A graphic for web3",
        paragraphOne: "My first professional role was at NuCode Technologies, a small startup specializing in modern web solutions, specifically web3, blockchain, and smart contracts. In this dynamic environment, I primarily focused on front-end development, where I was responsible for creating visually appealing and highly functional user interfaces. I honed my technical skills by working extensively with JavaScript, including state management using Redux, and styling using Material UI and styled-components. Ensuring accessibility was a key priority, as I implemented best practices to make our applications user-friendly for all.",
        paragraphTwo: "In addition to my technical responsibilities, I played a significant role in client-facing meetings and demos, which helped me develop strong communication and presentation skills. I also managed SEO and content writing tasks, contributing to the overall success and visibility of our projects. This multifaceted experience at NuCode Technologies allowed me to build a comprehensive skill set and a deep appreciation for the collaborative and interdisciplinary nature of web development.",
        returnUrl: "/about"
    }; 

    return (
        <>
            <WorkLayout 
            title={ nucodeData.title }
            paragraphOne={ nucodeData.paragraphOne }
            paragraphTwo={ nucodeData.paragraphTwo }
            imgOne={ nucodeData.imgOne }
            imgTwo={ nucodeData.imgTwo }
            altOne={ nucodeData.altOne }
            altTwo={ nucodeData.altTwo }
            returnUrl={ nucodeData.returnUrl }
            /> 
      </>
    );
}