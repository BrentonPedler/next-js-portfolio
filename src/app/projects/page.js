import Tabs from '@/components/Tab';

export default function ProjectPage() {

    const dummyData = [
        {
          title: 'Smooth Landing',
          description: 'An application built for development students. When you have a domain for your portfolio but no time to code use this application to create a stress free landing page.',
          liveSite: 'Live Site',
          liveSiteHref: 'https://smooth-landing.netlify.app/',
          githubRepo: 'Github Repository',
          githubRepoHref: 'https://github.com/Smooth-Landing',
          imageUrl: '/images/tab1.jpg',
          imageAlt: 'Tab 1 Image',
          timelineContent: 'Timeline content for Tab 1'
        },
        {
          title: 'Daily Metal Motivator',
          description: 'An application built for heavy metal enthusiasts looking for motivation. Select your mood & a heavy metal lyric will be generated at random.',
          liveSite: 'Live Site',
          liveSiteHref: 'https://vigilant-aryabhata-796d9b.netlify.app/',
          githubRepo: 'Github Repository',
          githubRepoHref: 'https://github.com/BrentonPedler/brentonPedlerProjectThree',
          imageUrl: '/assets/metal-image.png',
          imageAlt: 'Tab 2 Image',
          timelineContent: 'Timeline content for Tab 2'
        },
        {
          title: 'Guess Who Ghibli',
          description: 'An application inspired by the 80s board game Guess Who. Users are prompted to guess randomly generated characters from the Studio Ghibli API. Designed and built in collaboration with good friend Adrienne Lee.',
          liveSite: 'Live Site',
          liveSiteHref: 'https://mypettotoro.github.io/myPetTotoro/',
          githubRepo: 'Github Repository',
          githubRepoHref: 'https://github.com/myPetTotoro',
          imageUrl: '/images/tab3.jpg',
          imageAlt: 'Tab 3 Image',
          timelineContent: 'Timeline content for Tab 3'
        }
      ];

    return (
        <>
            <h1>Project Page</h1>
            <Tabs tabs={dummyData} />
        </>
    )
}