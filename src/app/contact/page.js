// src/app/contact/page.js
import Form from '@/components/Form';
import Image from 'next/image';

export default function ContactPage() {
    return (
        <div>
            <h1>Contact Me</h1>
            <p>
                This is the about page of my portfolio. Here, you can learn more about my background, experience, and the projects I've worked on.
            </p>
            <div className='flex gap-4 border rounded-2xl p-10'>
                <Form />
                <div className="relative w-full h-72">
                    <Image
                        src='/assets/contact-page-image.png'
                        alt='A hanging telephone'
                        layout="fill"
                        objectFit="cover"
                        className="rounded-2xl shadow-xl"
                    />
        </div>
            </div>
        </div>
    );
}
