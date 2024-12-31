import React, { useState } from 'react'
import Globe from 'react-globe.gl'
import Button from '../components/Button'

const About = () => {
    const [hasCopied, setHasCopied] = useState(false);
    let audio = new Audio("assets/bingo.mp3");
    const handleCopy = () => {
    navigator.clipboard.writeText('chris@topherbrig.gs');
    audio.play();
    setHasCopied(true);
    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
    };
    return (
        <section className="c-space my-20" id="about">
            <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                    <img src='assets/me.jpg' alt='me :3' className='rounded-full w-48 h-48 self-center' />

                        <div>
                            <p className="grid-headtext">Hi, I’m Topher Briggs</p>
                            <p className="grid-subtext">
                                I'm a recent grad from <span className="text-yellow-500">University of Michigan</span> with a <span className="text-white">Bachelor of Science in Computer Science</span>
                                <br />
                                I also graduated from <span className="text-green-600">Washtenaw Community College</span> with a Associates degree in <span className="text-white">Information Systems: Programming in C++</span> and <span className="text-white">Computer Science: Programming in Java</span>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

                        <div>
                            <p className="grid-headtext">Tech Stack</p>
                            <p className="grid-subtext">
                                I specialize in a variety of languages, frameworks, and tools that allow me to build robust and scalable
                                applications. I am most proficient in <span className="text-yellow-500">C++</span>, <span className="text-yellow-500">Python</span>, and <span className="text-yellow-500">Java</span>. I have experience with <span className="text-yellow-500">React</span>, <span className="text-yellow-500">Robot Operating System (ROS)</span>, and <span className="text-yellow-500">PHP</span>.
                            </p>
                        </div>
                    </div>
                </div>
                <div className="col-span-1 xl:row-span-3">
                    <div className="grid-container">
                        <div className='rounded-3xl w-full sm:h-[326px] h-fit flex justify-cetner items-center'>
                            <Globe
                                height={326}
                                width={326}
                                backgroundColor='rgba(0, 0, 0, 0)'
                                backgroundImageOpacity={0.5}
                                showAtmosphere
                                showGraticules
                                animateIn
                                labelsData={[{ lat: 42, lng: -84, text: "here's me!", color: 'white', size: 30 }]}
                                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                            />
                        </div>
                        <div>
                            <p className='grid-headtext'>Location</p>
                            <p className='grid-subtext'>I'm willing to work anywhere in the metro Detroit area, including Detroit, Ann Arbor, and the surrounding areas.</p>
                            <Button name='Contact me' isBeam containerClass='w-full mt-10' />
                        </div></div>
                </div>
                <div className="xl:col-span-2 xl:row-span-3">
                    <div className='grid-container'>
                        <img src="assets/grid3.png" alt="grid-3" className="w-full sm:h-[276px] h-fit object-contain" />
                        <div>
                            <p className='grid-headtext'>My passion for Coding</p>
                            <p className='grid-subtext'>I'm passionate about coding because it allows me to create innovative and impactful solutions that can improve the lives of others. I enjoy the challenge of problem-solving and the satisfaction of seeing my code come to life.</p>
                        </div>
                    </div>
                </div>
                <div className='xl:col-span-1 xl:row-span-3'><div className='grid-container'>
                    <img src="assets/grid4.png" alt="grid-4" className="w-full sm:h-[276px] md-h[126px] h-fit object-cover sm:object-top" />
                    <div className="space-y-2"><p className='grid-subtext w-full text-center'>Contact me</p>
                    <div className='copy-container' onClick={handleCopy}>
                        <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy"/> <p className='lg:text-2xl md:text-xl font-medium text-gray_gradient text-white'>chris@topherbrig.gs</p>'</div></div>
                </div></div>

            </div>
        </section>
    )
}

export default About