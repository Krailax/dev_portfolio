import Data_Home from "@/data/home_data.json";

export default function Personal_Details() {
    return (
        <section className="relative flex flex-col items-center justify-center gap-8 text-white rounded-lg p-12 py-6">
            
            <div className="relative w-52 h-52 md:w-128 md:h-128 rounded-full overflow-hidden border-4 border-gray-500 shadow-xl hover:shadow-blue-950 transition-shadow duration-300">
                <img src={`/home/${Data_Home.name_image}`} alt="Perfil" className="object-cover w-full h-full"/>
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-50"></div>
            </div>

            <div className="flex flex-col items-center text-center gap-4">
                <h2 className="text-4xl font-bold tracking-wide">{Data_Home.my_speciality}</h2>
                <h3 className="text-lg text-gray-300">{Data_Home.my_name}</h3>

                {Data_Home.name_vitae ? (
                    <a href={`/cv/${Data_Home.name_vitae}`} download className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-full shadow-md transition-all">
                        Descargar CV
                    </a>
                ): null}

                <div className="flex rounded-4xl gap-8 mt-4 shadow-lg shadow-black/20 px-6 sm:p-2 py-4 flex-wrap w-full items-center justify-center">
                    {Data_Home.redes_sociales.map((social, index) =>
                        social.url ? (
                            <a key={index} href={social.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-blue-500">
                                {/* Puedes cambiar los SVG por tus propios iconos, dependiendo de la red social */}
                                {social.title === "LinkedIn" && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-linkedin">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M8 11v5" /> <path d="M8 8v.01" /> <path d="M12 16v-5" /> <path d="M16 16v-3a2 2 0 1 0 -4 0" /> <path d="M3 7a4 4 0 0 1 4 -4h10a4 4 0 0 1 4 4v10a4 4 0 0 1 -4 4h-10a4 4 0 0 1 -4 -4z" />
                                    </svg>
                                )}
                                {social.title === "Twitter" && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-x">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M4 4l11.733 16h4.267l-11.733 -16z" /> <path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
                                    </svg>
                                )}
                                {social.title === "GitHub" && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-github">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" />
                                    </svg>
                                )}
                                {social.title === "Instagram" && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-instagram">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M4 8a4 4 0 0 1 4 -4h8a4 4 0 0 1 4 4v8a4 4 0 0 1 -4 4h-8a4 4 0 0 1 -4 -4z" /> <path d="M9 12a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" /> <path d="M16.5 7.5v.01" />
                                    </svg>
                                )}
                                {social.title === "Facebook" && (
                                    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-brand-facebook">
                                        <path stroke="none" d="M0 0h24v24H0z" fill="none" /> <path d="M7 10v4h3v7h4v-7h3l1 -4h-4v-2a1 1 0 0 1 1 -1h3v-4h-3a5 5 0 0 0 -5 5v2h-3" />
                                    </svg>
                                )}
                            </a>
                        ) : null
                    )}
                </div>
            </div>
        </section>
    );
}
