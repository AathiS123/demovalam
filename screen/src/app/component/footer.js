import Link from 'next/link'
import React from 'react'

export default function Footer() {
    const links = [
        { href: "/appointment", label: 'Appointment' },
        { href: "/our doctors", label: 'Our Doctors' },
        { href: "/servicecategory", label: 'Service Category' },
        { href: "/aboutus", label: 'About Us' },
        { href: "/contactus", label: 'Contact Us' },

    ]
    const datas = [
        'Phone: +123 456 7890', 'Email: Lorem ipsum dolor sit amet', 'Address: 0123 Some Place', 'some country',

    ]
    return (
        <div className='bg-[#B93177] p-12 flex flex-col md:flex-row md:justify-between space-y-6 md:space-y-0 flex-wrap'>
            {/* left section */}
            <div className='md:w-1/5'>
                <p className='text-white'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam luctus a leo a ornare. Vestibulum lobortis luctus tortor id molestie. Fusce condimentum vehicula aliquam.
                    In luctus quis turpis ac fringilla. In sit amet elit felis. Nam a magna lectus.
                </p>
            </div>

            {/* middle section */}
            <div className='md:w-1/5'>
                <h4 className='text-white font-bold mb-4'>Important Links</h4>
                <div className='space-y-2'>
                    {links.map((link, index) => (
                        <Link key={index} href={link.href}>
                            <p className='text-white hover:underline text-lg'>{link.label}</p>
                        </Link>
                    )
                    )
                    }
                </div>
            </div>

            {/* middle section */}
            <div className='md:w-1/5'>
                <h4 className='text-white font-bold mb-4'>Contact Us</h4>
                <div className='space-y-2'>
                    {datas.map((data, index) => (
                        <div>
                            <p className="text-[#fff]">{data}</p>
                        </div>
                    )
                    )
                    }
                </div>
            </div>


            {/* right section */}
            <div className='flex md:w-1/5  space-x-3 items-center'>
                <img src='/contactimgs/Linkedin.png' alt='linkedin' className='w-8 h-8 md:w-10 md:h-10 object-contain'/>
                <img src='/contactimgs/facebook.png' alt='facebook' className='w-8 h-8 md:w-10 md:h-10 object-contain'/>
                <img src='/contactimgs/instagram.png' alt='instagram' className='w-8 h-8 md:w-10 md:h-10 object-contain'/>
            </div>
        </div>
    )
}
