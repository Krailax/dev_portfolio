import { Helmet } from "react-helmet-async";
import My_data from "@/data/my_data.json";

export default function MyData_Page() {
    return (
        <>
            <Helmet>
                <title>Sobre Mí | Portafolio Web</title>
            </Helmet>
            <main className="w-11/12 lg:w-10/12 2xl:w-9/12 mt-6 h-full flex flex-col items-center gap-6 py-8 pt-12 lg:pt-8">
                <section className="w-11/12 md:w-10/12 flex flex-col gap-4 mx-auto">
                    
     

   
                    <div className="w-full">
                        <h2 className="text-4xl font-bold text-gray-100 pb-3 w-fit">
                            <span className="mr-2">🔍</span> Sobre Mí
                        </h2>
                    </div>

                    <hr className=" border-b rounded-lg border-[#a9a9a7]/10"/>


                    <div className="w-full grid gap-6 grid-cols-1 md:grid-cols-2">

                        {My_data.general_description && (
                            <div className="md:col-span-2 bg-[#2a2a2a] p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-[#00aaff]">📌 Descripción General</h3>
                                <p className="text-lg mt-2">{My_data.general_description}</p>
                            </div>
                        )}

                        {My_data.what_I_am_looking_for && (
                            <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-[#ffbb00]">🚀 Lo Que Busco</h3>
                                <p className="text-lg mt-2">{My_data.what_I_am_looking_for}</p>
                            </div>
                        )}

                        {My_data.goals && (
                            <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-[#ff6600]">🎯 Metas</h3>
                                <p className="text-lg mt-2">{My_data.goals}</p>
                            </div>
                        )}

                        {My_data.challenges && (
                            <div className="md:col-span-2 bg-[#2a2a2a] p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-[#ff4444]">⚡ Desafíos</h3>
                                <p className="text-lg mt-2">{My_data.challenges}</p>
                            </div>
                        )}

                        {My_data.collaborations && (
                            <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-[#00dd77]">🤝 Colaboraciones</h3>
                                <p className="text-lg mt-2">{My_data.collaborations}</p>
                            </div>
                        )}

                        {My_data.community_contributions?.length > 0 && (
                            <div className="bg-[#2a2a2a] p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-[#ff77aa]">🌍 Contribuciones a la Comunidad</h3>
                                <ul className="list-disc list-inside text-lg mt-2">
                                    {My_data.community_contributions.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                        {My_data.project_types?.length > 0 && (
                            <div className="md:col-span-2 bg-[#2a2a2a] p-6 rounded-lg shadow-md">
                                <h3 className="text-2xl font-semibold text-[#66bbff]">💡 Tipos de Proyectos</h3>
                                <ul className="list-disc list-inside text-lg mt-2">
                                    {My_data.project_types.map((item, index) => (
                                        <li key={index}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        )}

                    </div>
                </section>
            </main>
        </>
    );
}
