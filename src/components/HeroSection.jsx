import React from 'react'
import Image from 'next/image'
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {
    return (
        <section>
            <div className="grid grid-cols-1 md:grid-cols-12 ">
                <div className="col-span-7 place-self-center text-center md:text-left">
                    <h1 className="text-white mb-4 text-2xl md:text-4xl font-extrabold">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00bf8f] to-[#001510]">
                            Hello, I&apos;m{" "}
                        </span>

                        <br />
                        <TypeAnimation
                            sequence={[
                                'Amine MEBARKI',
                                1000,
                                'Software Engineering',
                                1000,
                                'FullStack Web Developer',

                            ]}
                            wrapper="span"
                            speed={50}
                            repeat={Infinity}
                        />
                    </h1>
                    <p className="text-[#ADB7BE] text-sm lg:text-xl mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Maiores, voluptates blanditiis. Tempora fugit aspernatur eligendi laboriosam natus qui quas dolorum temporibus aliquam incidunt. A delectus autem quasi hic, sunt soluta!</p>
                    <div>
                        <button className="w-full md:w-fit px-5 py-3 bg-gradient-to-br from-[#00bf8f] to-[#001510] hover:bg-slate-200 rounded-full text-white font-semibold mr-4 mb-2 md:mb-0 ">Hire Me</button>
                        <button className="w-full md:w-fit p-1 bg-gradient-to-br from-[#00bf8f] to-[#001510] hover:bg-slate-200 text-white font-semibold rounded-full">
                            <span className="block bg-black hover:bg-slate-800 rounded-full px-4 py-2">
                                Download CV
                            </span>
                        </button>
                    </div>
                </div>
                <div className="col-span-5 place-self-center mt-5 lg:mt-0">
                    <div className="rounded-full flex justify-center items-end bg-[#181818] w-[270px] h-[270px]">
                        <Image
                            src="/amine.png"
                            alt="Photo Amine"
                            width={200}
                            height={200}
                            style={{ width: '250px', height: '250px' }}
                            className="rounded-full"
                        />
                    </div>

                </div>
            </div>
        </section>
    )
}

export default HeroSection