// src/app/about/trew-knowledge/page.js
import WorkLayout from '@/components/WorkLayout';

export default function TrewKnowledgePage() {
        const nucodeData = {
            title: "Trew Knowledge",
            imgOne: "/assets/tk-one.png",
            altOne: "",
            imgTwo: "/assets/tk-two.png",
            altTwo: "",
            paragraphOne: "Since January 1, 2023, I have been a dedicated web developer at Trew Knowledge, a company renowned for its innovative approach to digital solutions. In this role, I have been integral to enhancing user experiences and backend functionality, primarily through the development of React-powered Gutenberg blocks. My work ethic and commitment to continuous improvement are evident in my proactive approach to problem-solving and my willingness to embrace new technologies. Effective communication and collaboration with my team have been key to successfully delivering high-quality projects, ensuring that our solutions are both functional and user-friendly.",
            paragraphTwo: "At Trew Knowledge, I work alongside a talented team of professionals who are passionate about delivering high-quality digital solutions. We focus on creating seamless, user-friendly interfaces and robust backend systems that meet and exceed client expectations. My journey here has been marked by continuous learning and professional growth, as I tackle challenging projects that push the boundaries of modern web development, including the use of headless CMS with Next.js. This role has not only allowed me to refine my technical skills but also to develop a deeper understanding of user-centric design and agile development methodologies, reinforcing my commitment to excellence in the field.",
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