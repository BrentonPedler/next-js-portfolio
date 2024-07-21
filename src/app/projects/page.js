import Tabs from '@/components/Tab';

export default function ProjectPage() {

    const projectData = [
        {
          title: 'Smooth Landing',
          description: 'Designed specifically for development students who have a domain for their portfolio but lack the time to code, our application provides a quick and effortless solution to create a professional landing page.',
          liveSite: 'Live Site',
          liveSiteHref: 'https://smooth-landing.netlify.app/',
          githubRepo: 'Github Repository',
          githubRepoHref: 'https://github.com/Smooth-Landing',
          imageUrl: '/assets/smooth-landing-image.png',
          imageAlt: 'Students working on a laptop'
        },
        {
          title: 'Daily Metal Motivator',
          description: 'Discover the ultimate source of inspiration tailored specifically for heavy metal enthusiasts. Whether youre gearing up for a workout, tackling a challenging task, or just need a dose of raw energy, our application delivers the perfect heavy metal lyric to match your mood.',
          liveSite: 'Live Site',
          liveSiteHref: 'https://vigilant-aryabhata-796d9b.netlify.app/',
          githubRepo: 'Github Repository',
          githubRepoHref: 'https://github.com/BrentonPedler/brentonPedlerProjectThree',
          imageUrl: '/assets/metal-image.png',
          imageAlt: 'Crowd at a rock concert'
        },
        {
          title: 'Guess Who Ghibli',
          description: 'Relive the nostalgia of the 80s board game Guess Who with a magical twist! Our application, designed and built in collaboration with my good friend Adrienne Lee, invites users to guess randomly generated characters from the enchanting world of Studio Ghibli.',
          liveSite: 'Live Site',
          liveSiteHref: 'https://mypettotoro.github.io/myPetTotoro/',
          githubRepo: 'Github Repository',
          githubRepoHref: 'https://github.com/myPetTotoro',
          imageUrl: '/assets/guess-who-ghibli.png',
          imageAlt: 'Person watching studio ghibli on mobile device'
        }
      ];

    return (
        <div className="text-center mt-10">
            <h1>My Creative Showcase</h1>
            <p className="w-3/4 m-auto py-10">
              Explore my collection of school projects, featuring both individual and collaborative efforts. Each project highlights the skills and creativity I've developed. Stay tuned for more exciting projects to come as I continue to learn and grow.
            </p>
            <Tabs tabs={projectData} />
        </div>
    )
}