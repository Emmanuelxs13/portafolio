import React from 'react'



const Contact = () => {
    return (
        <div id='Contact'>

            <footer className="footer footer-center p-10 text-accent-content">
                
                <div>
                    <div className="grid grid-flow-col gap-4">

                    {/* LINKEDIN */}
                        <a href='https://www.linkedin.com/in/emmanuel-berrio-jimenez/' target={'_blank'}><img width="70" height="70" src="https://img.icons8.com/clouds/100/linkedin.png" alt="linkedin" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'/></a>

                    {/* GITHUB */}
                        <a href='https://github.com/Emmanuelxs13' target={'_blank'}><img width="70" height="70" src="https://img.icons8.com/clouds/100/github.png" alt="github" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'/></a>

                    {/* CELLPHONE */}
                        <a href='https://wa.me/3015249169' target={'_blank'}><img width="70" height="70" src="https://img.icons8.com/clouds/100/whatsapp.png" alt="whatsapp" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'/></a>

                    {/* EMAIL */}
                        <a href="mailto:emmanuelberriojimenez@gmail.com" target={'_blank'}><img width="70" height="70" src="https://img.icons8.com/clouds/100/new-post.png" alt="new-post" className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110'/></a>
                    </div>
                </div>
                <div>
                    <p className="font-bold">
                        Emmanuel Berrio Jimenez 
                    </p>
                    <p>Copyright © 2023 - All right reserved</p>
                </div>
            </footer>
        </div>
    )
}

export default Contact
