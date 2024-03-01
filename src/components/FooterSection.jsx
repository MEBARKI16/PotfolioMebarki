import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const FooterSection = () => {
    return (
        <section className="footer border border-l-transparent border-r-transparent border-top-[#33353F]">
            <div className="p-4 flex justify-between items-center">
                <Link href="/"><Image src="/amine_mebarki_logo.png" width={100} height={100} style={{ width: "100px", height: "auto" }} /></Link>
                <p className="text-slate-500">All rights reserved.</p>
            </div>
        </section>
    )
}

export default FooterSection;