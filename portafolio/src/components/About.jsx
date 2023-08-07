import React from 'react'


const About = () => {

    const textStyle = 'text-xl leading-[2.5rem]';

    return (
        <section id='About' className='mt-[8rem] m-8'>
            <div>
                {/* TITLE */}
                <h1 className='text-5xl text-center justify-center content-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-second to-[#05AE8C] mb-[5.5rem] xl:mb-[2rem]'>Sobre Mi</h1>

                <div className='flex content-center items-center'>
                    {/* PROFILE IMAGE */}
                    <div className='pt-5 md:pt-0'>
                        <img src='./fotoPerfil2.JPG' className='mx-[10%] w-[70%] mb-5 rounded-2xl object-cover' />
                        <div className='hidden sm:block absolute xl:top-[148%] xl:left-[5%] md:top-[140%] md:left-[36.2rem] w-[24%] h-[66%] bg-gradient-to-r from-second to-[#05AE8C] rounded-3xl -z-10' />
                    </div>

                    {/* DESCRIPTION */}
                    <div className='w-full h-full text-gray-600 font-bold'>
                        <div className='w-[30rem] sm:w-[60rem] sm:py-4 sm:px-4 rounded-lg my-20'>
                            <p className={`${textStyle} mt-3`}>
                                Soy un programador con experiencia en desarrollo web, estoy altamente motivado por el desafío de crear soluciones innovadoras para problemas complejos.
                            </p>

                            <p className={`${textStyle} mt-1`}>
                                En mi carrera, he tenido la oportunidad de trabajar en una variedad de proyectos, desde pequeñas aplicaciones web hasta grandes sistemas de software.
                            </p>
                            <p className={`${textStyle} mt-1`}>
                                Estoy enfocado en construir soluciones robustas, escalables y de alta calidad que satisfagan las necesidades de los usuarios y los clientes.<br/>

                                En resumen, como programador, mi pasión es trabajar en proyectos desafiantes, donde pueda aplicar mis habilidades y conocimientos para crear soluciones de software que impulsen el éxito de los clientes y de la empresa y que al mismo tiempo me permitan crecer y mejorar como programador y como persona.
                            </p>
                        </div>

                        {/* <div className='max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-20 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-gray-100 duration-300'>
                        <p className={`${textStyle} mt-3`}>
                            En resumen, como programador, mi pasión es trabajar en proyectos desafiantes, donde pueda aplicar mis habilidades y conocimientos para crear soluciones de software que impulsen el éxito de los clientes y de la empresa y que al mismo tiempo me permitan crecer y mejorar como programador y como persona. Si estás buscando un profesional motivado y dedicado para tu equipo, no dudes en contactarme.
                        </p>
                    </div> */}
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
