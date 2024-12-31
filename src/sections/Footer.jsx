import React from 'react'

const Footer = () => {
    return (
        <section className='c-space pt-7 bt-3 border-t border-black-300 justify-between flex-wrap gap-5'>
            <div className='text-white-500 flex gap-2'>
                <p>©2025 Topher Briggs All rights reserved</p>
            </div>
            <div className='flex gap-3'>
                <div className='social-icon' href='https://github.com/TopherBriggs'>
                    <a href='https://github.com/TopherBriggs' className='w-1/2 h-1/2'><img src="/assets/github.svg" alt="github" /></a>

                </div>
                <div className='social-icon'>
                    <a href='https://www.linkedin.com/in/topher-briggs' className='w-1/2 h-1/2'><img src="/assets/linkedin.png" alt="linkedin" /></a>
                </div>
            </div>
        </section>
    )
}

export default Footer