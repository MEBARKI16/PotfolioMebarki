import React, { useState } from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
const EmailSection = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [successMessage, setSuccessMessage] = useState('');
    const [errorMessage, setErrorMessage] = useState(''); // Ajout pour gérer les erreurs

    const handleSubmit = async (event) => {
        event.preventDefault();
        setIsSubmitted(false); // Réinitialiser l'état de soumission
        setErrorMessage(''); // Réinitialiser les messages d'erreur

        const formData = new FormData(event.target);
        const { email, subject, message } = Object.fromEntries(formData);

        try {
            const response = await fetch('/api/SendMail', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    email,
                    subject,
                    message,
                }),
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            await response.json();
            setIsSubmitted(true);
            setSuccessMessage('Message submitted successfully!');

            event.target.reset();

            setTimeout(() => {
                setIsSubmitted(false);
                setSuccessMessage('');
            }, 5000);
        } catch (error) {
            console.error("Erreur lors de l'envoi du message : ", error);
            setErrorMessage("Failed to submit the message. Please try again.");
        }
    };
    return (
        <section className="grid md:grid-cols-2 py-24 my-12 md:py-12 gap-4">
            <div>
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">I&apos;m currently looking for new opportunities, my inbox is always open.
                    Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!</p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com/MEBARKI16" target="_blank">
                        <FaGithub className="text-white text-4xl" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/med-amine-mebarki-346335231/" target="_blank">
                        <FaLinkedin className="text-white text-4xl" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className="text-white block mb-2 text-sm font-medium" htmlFor="email">Your email</label>
                        <input className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" id="email" name="email" type="email" placeholder="Your Email" required />
                    </div>
                    <div className="mb-4">
                        <label className="text-white block mb-2 text-sm font-medium" htmlFor="subject">Subject</label>
                        <input className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" id="subject" name="subject" type="text" placeholder="Your Subject" required />
                    </div>
                    <div className="mb-4">
                        <label className="text-white block mb-2 text-sm font-medium" htmlFor="message">Message</label>
                        <textarea
                            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            id="message"
                            placeholder="Let's talk about..."
                            name="message"
                        />
                    </div>
                    <button className="bg-[#00bf8f] text-white font-medium py-2.5 px-5 w-full rounded-lg">
                        Submit
                    </button>
                    <div>
                        {isSubmitted && (
                            <div className="text-green-500 text-left my-4">
                                {successMessage}
                            </div>
                        )}
                        {errorMessage && (
                            <div className="text-red-500 text-left my-4">
                                {errorMessage}
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </section>
    )
}

export default EmailSection;