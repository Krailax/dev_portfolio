import { Helmet } from "react-helmet-async";
import Data_Experience from "@/data/my_experiences.json";


export default function Experience_Page(){
    return (
        <>
            <Helmet>
                <title>Experiencia | Portafolio Web</title>
            </Helmet>
            <main className="w-11/12 lg:w-10/12 2xl:w-9/12 mt-6 h-full flex flex-col items-center gap-6 py-8 pt-12 lg:pt-8">
                <section className="w-11/12 md:w-10/12 flex flex-col gap-4 mx-auto">
                    <div className="w-full">
                        <h2 className="text-4xl font-bold text-gray-100 pb-3 w-fit">
                            💼 Experiencia
                        </h2>
                    </div>
                    <hr className=" border-b rounded-lg border-[#a9a9a7]/10"/>
                    {Data_Experience.map((data, key) => (
                    <div className="flex flex-row md:flex-row p-4 md:p-5 gap-4 w-full" key={key}>

                        <div className="flex flex-col w-full gap-2 md:gap-4">
                            <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between">
                                <h3 className="font-semibold text-base md:text-lg">{data.role} - {data.company_name}</h3>
                                <p className="text-sm text-white/90">{data.project_duration}</p>
                            </div>
                            <p className="text-sm md:text-base text-white/70 ">{data.description}</p>
                            {data.link && (
                                <a href={data.link} className="text-blue-600 text-sm md:text-base hover:underline" target="_blank" rel="noopener noreferrer">
                                    Ir al proyecto
                                </a>
                            )}
                        </div>
                    </div>
                ))}
                </section>
            </main>
        </>
    );
}