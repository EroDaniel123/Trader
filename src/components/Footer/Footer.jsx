import React from 'react';

function Footer() {
    return (
        <div className="bg-black text-xs w-full font-light text-gray-300 py-8 relative z-50">
            <div className="">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
                    {/* About Us */}
                    <div className="lg:ml-[4rem]">
                        <h3 className="text-lg font-bold">About Us</h3>
                    </div>
                    
                    {/* Follow */}
                    <div className="lg:ml-[40rem]">
                        <h3 className="text-lg font-bold">Follow</h3>
                        <p className='hover:underline'>
                            <a className="w-full h-full block">Twitter</a>
                        </p>
                        <p className='hover:underline'>
                            <a className="w-full h-full block">LinkedIn</a>
                        </p>
                        <p className="hover:underline">
                            <a className="w-full h-full block">Instagram</a>
                        </p>
                        <p className="hover:underline">
                            <a className="w-full h-full block">YouTube</a>
                        </p>
                    </div>
                    
                    {/* Contact */}
                    <div className="lg:ml-[4rem]">
                        <h3 className="text-lg font-bold">Contact</h3>
                        <p>080112223479</p>
                        <p>sales@buddy.com</p>
                        <p>help@buddy.com</p>
                        <p>business@buddy.com</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;