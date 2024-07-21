import Tabs from "@/components/Tab";

export default function Home() {
  const aboutData = [
    {
      title: 'Test 1',
      description: 'Hello World',
      buttonText: 'Lorem Ipsum',
      buttonHref: 'www.google.com',
      imageUrl: '/assets/placeholder-cta.png',
      imageAlt: 'This is an image'
    },
    {
      title: 'Test 2',
      description: 'Hello World 2',
      buttonText: 'Lorem Ipsum 2',
      buttonHref: 'www.google.com',
      imageUrl: '/assets/placeholder-cta.png',
      imageAlt: 'This is an image'
    },
  ]
  return (
    <div className="pb-8">
        <h1 className="text-9xl">brenton</h1>
        <h2>web dev + coder + creator</h2>
        <p>Small Projects, Big Impact: Let's Collaborate.</p>
    </div> 
  );
}
