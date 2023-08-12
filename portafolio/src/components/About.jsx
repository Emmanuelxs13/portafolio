import React from 'react'


const About = () => {

    const textStyle = 'text-xl leading-[2.5rem]';

    return (
        <section id='About' className='mt-[8rem] m-8'>
            <div>
                {/* TITLE */}
                <h1 className='text-5xl text-center justify-center content-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#ACDFD4] bg-[#26A69A] mb-[5.5rem] xl:mb-[2rem]'>Sobre Mi</h1>

                <div className='flex content-center items-center'>
                    {/* PROFILE IMAGE */}
                    <div className='pt-5 md:pt-0'>
                        <img src='./fotoPerfil2.JPG' className='mx-[10%] w-[70%] mb-5 object-cover rounded-full ring ring-[#26A69A] ring-offset-base-100 ring-offset-1' />
                    </div>

                    {/* DESCRIPTION */}
                    <div className='w-full h-full text-gray-600 font-bold'>
                        <div className='w-[30rem] sm:w-[60rem] sm:py-4 sm:px-4 rounded-lg my-20'>
                            <p className={`${textStyle} mt-3 mr-[4rem]`}>
                                Soy un programador con experiencia en desarrollo web, estoy altamente motivado por el desafío de crear soluciones innovadoras para problemas complejos.
                            </p>

                            <p className={`${textStyle} mt-1 mr-[4rem]`}>
                                En mi carrera, he tenido la oportunidad de trabajar en una variedad de proyectos, desde pequeñas aplicaciones web hasta grandes sistemas de software.
                            </p>
                            <p className={`${textStyle} mt-1 mr-[4rem]`}>
                                Estoy enfocado en construir soluciones robustas, escalables y de alta calidad que satisfagan las necesidades de los usuarios y los clientes.<br/>

                                En resumen, como programador, mi pasión es trabajar en proyectos desafiantes, donde pueda aplicar mis habilidades y conocimientos para crear soluciones de software que impulsen el éxito de los clientes y de la empresa y que al mismo tiempo me permitan crecer y mejorar como programador y como persona.
                            </p>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default About
