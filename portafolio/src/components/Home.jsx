import React from 'react'
import { RiCheckboxBlankCircleFill, RiLinkedinBoxFill, RiGithubFill } from "react-icons/ri";

const Home = () => {

  return <section id='Home' className='min-h-[90vh] grid grid-cols-1 xl:grid-cols-8 gap-8 md:gap-0 '>
    {/* INFORMATION */}
    <div className='md:col-span-5 flex items-center justify-center p-8 xl:p-16'>
      <div className='flex flex-col gap-8 '>
        <h1 className='text-5xl xl:text-7xl font-bold xl:leading-[7.5rem]'>
          Emmanuel Berrio <br/>
          <div className=''>    
            <span className='text-primary py-2 px-8 border-8 border-primary relative inline-block '>Software Depveloper              
              <RiCheckboxBlankCircleFill  className='text-white text-base absolute -left-5 -top-5 p-2 bg-primary rounded-full box-content'/>
              <RiCheckboxBlankCircleFill className='text-white text-base absolute -right-5 -top-5 p-2 bg-primary rounded-full box-content'/>
              <RiCheckboxBlankCircleFill className='text-white text-base absolute -right-5 -bottom-5 p-2 bg-primary rounded-full box-content'/>
              <RiCheckboxBlankCircleFill className='text-white text-base absolute -left-5 -bottom-5 p-2 bg-primary rounded-full box-content'/> 
            </span>

          </div>
        </h1>

        {/* DESCRIPTION */}
        <p className='text-gray-500 text-2xl leading-[2.5rem]'>Soy un apasionado desarrollador web fullstack de Colombia. Como desarrollador full stack, tengo la habilidad de trabajar tanto en la parte del Frontend como en la parte del Backend de una aplicación, lo que me permite crear soluciones completas y efectivas para satisfacer las necesidades de los clientes de principio a fin.</p>

        {/* BUTTONS - Se descarga el cv*/}
          <div className='flex md:flex-row items-center gap-6'>
            <a href='./CV-Emmanuel Berrio Jimenez.pdf' target={'_blank'} className='py-2 px-8 rounded-xl text-xl xl:w-auto relative  text-center text-primary border border-primary overflow-hidden transition-all ease-in-out before:absolute before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white'>
              Descargar CV
            </a>
          
            {/* LINKEDIN BUTTON */}
            <a href='https://www.linkedin.com/in/emmanuel-berrio-jimenez/' target={'_blank'} className=' py-2 px-2 rounded-xl text-4xl flex items-center relative  text-center text-primary border border-primary overflow-hidden transition-all ease-in-out before:absolute before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white'>
              <RiLinkedinBoxFill className='items-center text-center' />
            </a>

            {/* GITHUB BUTTON */}
            <a href='https://github.com/Emmanuelxs13' target={'_blank'} className=' py-2 px-2 rounded-xl text-4xl flex items-center relative  text-center text-primary border border-primary overflow-hidden transition-all ease-in-out before:absolute before:bg-primary before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:-z-10 before:transition-all before:duration-500 before:w-full before:h-0 before:rotate-45 hover:before:h-[380%] hover:text-white'>
              <RiGithubFill className='items-center text-center'/>
            </a>
          </div>
      </div>
    </div>

    {/* PROFILE IMAGE */}
    <div className='md:col-span-3 flex items-center justify-center relative'>
      <div>
        <img src='./fotoPerfil.JPG' className='w-56 h-56 md:w-96 md:h-96 object-cover rounded-full'/>

        {/* BACKGROUND CIRCLE */}
        <div className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 w-[300px] h-[300px] md:w-[480px] md:h-[480px] bg-second border-[25px] border-primary rounded-full -z-10'></div>

        {/* LOGOS */}
        
          {/* REACT LOGO */}
        {/* <img src='../../public/img/React_logo.jpg' className='w-12 h-12 md:w-20 md:h-20 object-cover rounded-full absolute -top-[10%] right-[8%] md:top-[8%] md:right-[12%] rotate-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'/> */}

          {/* JAVASCRIPT LOGO */}
        {/* <img src='../../public/img/JavaScript_logo.png' className='w-12 h-12 md:w-20 md:h-20 object-cover rounded-full absolute top-[1%] left-[3%] md:top-[2%] md:left-[7%] -rotate-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 '/> */}

          {/* PHP LOGO */}
        {/* <img src='../../public/img/php_logo.png' className='w-12 h-12 md:w-20 md:h-20 object-cover rounded-full absolute top-[13%] right-[105%] -rotate-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'/> */}

          {/* MYSQL LOGO */}
        {/* <img src='mysql_logo.png' className='w-12 h-12 md:w-20 md:h-20 object-cover rounded-full  absolute top-[33%] right-[100%] -rotate-12'/> */}

          {/* GIT LOGO */}
        {/* <img src='../../public/img/Git_logo.png' className='w-12 h-12 md:w-20 md:h-20 object-cover rounded-full  absolute top-[73%] right-[85%] md:top-[73%] md:right-[89%] -rotate-12 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'/> */}

          {/* TYPESCRIPT LOGO */}
        {/* <img src='Typescript_logo.png' className='w-12 h-12 md:w-20 md:h-20 object-cover rounded-full  absolute top-[-1%] right-[35%] rotate-12'/> */}
      </div>
    </div>
  </section>
}

export default Home

