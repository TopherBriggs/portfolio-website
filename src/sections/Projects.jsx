import React, { Suspense, useState } from 'react'
import { myProjects } from '../constants'
import { Canvas } from '@react-three/fiber';
import { Center, OrbitControls } from '@react-three/drei';
import CanvasLoader from '../components/CanvasLoader';
import DemoComputer from '../components/DemoComputer';

const projectCount = myProjects.length;

const Projects = () => {

    const [selectedProjectIndex, setSelectedProjectIndex] = useState(0);
    const currentProject = myProjects[selectedProjectIndex];

    const handleNavigation = (direction) => {
        setSelectedProjectIndex((prevIndex) => {
            if (direction === 'prev') {
                if (prevIndex === 0) {
                    return projectCount - 1;
                }
                return prevIndex - 1;
            } else {
                if (prevIndex === projectCount - 1) {
                    return 0;
                }
                return prevIndex + 1;
            }
        });
    }
    return (
        <section className='c-space my-20' id='projects'>
            <p className='head-text'>My Work</p>
            <div className='grid lg:grid-cols-2 grid-cols-1 mt-12 gap-5 w-full'>
                <div className='flex flex-col gap-5 relative sm:p-10 py-10 px-5 shadow-2xl shadow-black-200'>
                    <div className='absolute top-0 right-0'>
                        <img src={currentProject.spotlight} alt='spotlight' className='w-full h-96 object-cover rounded-xl' />
                    </div>
                    <div className='p-3 backdrop-filter backdrop-blur-3xl w-fit rounded-lg' style={currentProject.logoStyle}>
                        <img src={currentProject.logo} alt='logo' className='w-10 h-10 shadow-sm' />
                    </div>
                    <div className='flex flex-col gap-5 text-white-600 my-5'>
                        <p className='text-2xl font-semibold animatedText'>{currentProject.title}</p>
                        <p className='animatedText'>{currentProject.desc}</p>
                        <p className='animatedText'>{currentProject.subdesc}</p>
                    </div>
                    <div className='flex items-center justify-between gap-5 flex-wrap'>
                        <div className="flex items-center gap-3">
                            {currentProject.tags.map((tag, index) => (
                                <div
                                    key={index}
                                    className="relative group flex items-center justify-center w-12 h-12 bg-black-300 rounded-lg shadow-md transition-transform duration-300 ease-in-out transform group-hover:scale-110 group-hover:rotate-3"
                                >
                                    <img
                                        src={tag.path}
                                        alt={tag.name}
                                        className="scale-75 transition-transform duration-300 ease-in-out transform group-hover:translate-y-[-4px] group-hover:scale-110 group-hover:rotate-6"
                                    />
                                    <div className="whitespace-nowrap absolute bottom-14 left-1/2 -translate-x-1/2 bg-gray-800 text-white text-sm rounded-md px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-lg">
                                        {tag.name}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {currentProject.href ? (
                        <a className='flex items-center gap-2 cursor-pointer text-white-600' href={currentProject.href} target='_blank' rel='noreferrer'><p>Learn More</p>
                            <img src='/assets/arrow-up.png' alt='arrow' className='w-3 h-3' /></a>) : null}
                    </div>
                    <div className='flex justify-between items items-center mt-7'>
                        <button className='arrow-btn' onClick={() => handleNavigation('prev')}>
                            <img src='/assets/left-arrow.png' alt='left-arrow' className='w-4 h-4' />
                        </button>
                        <button className='arrow-btn' onClick={() => handleNavigation('next')}>
                            <img src='/assets/right-arrow.png' alt='right-arrow' className='w-4 h-4' />
                        </button>
                    </div>
                </div>

                <div className='border border-black-300 bg-black-200 rounded-lg h-96 md:h-full'>
                    <Canvas gl={{ preserveDrawingBuffer: true }}>
                        <ambientLight intensity={Math.PI} />
                        <directionalLight position={[10, 10, 5]} />
                        <Center>
                            <Suspense fallback={<CanvasLoader />}>
                                <group scale={2} position={[0, -3, 0]} rotation={[0, -0.1, 0]}>

                                    <DemoComputer texture={currentProject.texture} />
                                </group>
                            </Suspense>

                        </Center>
                        <OrbitControls maxPolarAngle={Math.PI / 2} enableZoom={false} />
                    </Canvas>
                </div>
            </div>
        </section>
    )
}

export default Projects