import Data_Experience from "@/data/my_experiences.json";

export default function Personal_Experiences() {
    
    const length_data = Data_Experience.length;
    const visibleExperiences = Data_Experience.slice(0, 3); // Limita a los primeros 3 elementos

    return (
        length_data > 0 && (
            <section className="w-11/12 md:w-10/12 flex flex-col gap-4 mx-auto">
                <div className="flex flex-row justify-between w-full items-center">
                    <h2 className="font-semibold text-xl md:text-2xl">Experiencias</h2>
                    {length_data > 3 && (
                        <a href="experiencia" className="text-sm md:text-base cursor-pointer text-blue-600 hover:underline">
                            Mostrar más
                        </a>
                    )}
                </div>

                {visibleExperiences.map((data, key) => (
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
        )
    );
}
