import React from 'react';
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Link from 'next/link';
const EmailSection = () => {
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
                <form className="flex flex-col gap-4">
                    <div className="mb-4">
                        <label className="text-white block mb-2 text-sm font-medium" htmlFor="email">Your email</label>
                        <input className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" id="email" type="email" placeholder="Your Email" required />
                    </div>
                    <div className="mb-4">
                        <label className="text-white block mb-2 text-sm font-medium" htmlFor="subject">Subject</label>
                        <input className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" id="subject" type="text" placeholder="Your Subject" required />
                    </div>
                    <div className="mb-4">
                        <label className="text-white block mb-2 text-sm font-medium" htmlFor="message">Message</label>
                        <textarea
                            className="bg-[#18191E] border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
                            id="message"
                            placeholder="Let's talk about..."
                        />
                    </div>
                    <button className="bg-[#00bf8f] text-white font-medium py-2.5 px-5 w-full rounded-lg">
                        Submit
                    </button>
                </form>
            </div>
        </section>
    )
}

export default EmailSection;