import { Helmet } from "react-helmet-async";
import Data_Technologies from "@/data/my_technologies.json";

export default function Technology_Page() {
    return (
        <>
            <Helmet>
                <title>Tecnologías | Portafolio Web</title>
            </Helmet>
            <main className="w-11/12 lg:w-10/12 2xl:w-9/12 mt-6 h-full flex flex-col items-center gap-6 py-8 pt-12 lg:pt-8">
                <section className="w-11/12 md:w-10/12 flex flex-col gap-4 mx-auto">
                    
                    <div className="w-full">
                        <h2 className="text-4xl font-bold text-gray-100  pb-3 w-fit">
                            🚀 Tecnologías que Uso
                        </h2>
                    </div>

                    <div className="flex flex-col gap-10 w-full">
                        {Data_Technologies.map((data, key) => (
                            <div className="border border-[#a9a9a7]/20 w-full min-h-40 rounded-3xl p-8 shadow-xl" key={key}>
                                <h3 className="font-semibold text-2xl text-gray-200 border-b border-[#a9a9a7]/10 pb-2">
                                    {data.group}
                                </h3>
                                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-6">
                                    {data.list_tecnologies.map((data_tech, index) => (
                                        <div className="flex flex-col items-center gap-3 text-center bg-[#a9a9a7]/10 p-5 rounded-xl shadow-md hover:scale-105 hover:bg-[#272727] transition-all duration-300" key={index}>
                                            <img src={`/technologies/${data_tech.img}`} alt={data_tech.name} width={data_tech.width} height={data_tech.height} className="rounded-md object-contain"/>
                                            <p className="text-white font-semibold">{data_tech.name}</p>
                                            <span className="text-sm text-gray-300">{data_tech.level}</span>
                                            <span className="text-xs text-gray-400">{data_tech.experience_years} años</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </section>   
            </main>
        </>
    );
}
