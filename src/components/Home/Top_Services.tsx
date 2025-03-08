import DataServices from "@/data/my_serivces.json";

export default function Top_Services(){
    const length_data = DataServices.length;
    const visibleServices = DataServices.slice(0, 4);
    
    return(
        length_data > 0 && (
        <section className="w-11/12 md:w-10/12 flex flex-col gap-4 mx-auto">
            <div className="flex flex-col justify-between w-full">
            <div className="flex flex-row justify-between w-full items-center">
                    <h2 className="font-semibold text-xl md:text-2xl">Servicios</h2>
                    {length_data > 4 && (
                        <a href="servicios" className="text-sm md:text-base cursor-pointer text-blue-600 hover:underline">
                            Mostrar más
                        </a>
                    )}
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 w-full py-8">
                    {visibleServices.map((service, index) => (
                        <div key={index} className="flex flex-col md:flex-row bg-[#a9a9a7]/10 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                            <img loading="lazy" src={"/services/" + service.image} alt={service.title_image} width={service.width} height={service.height} className="w-full h-full md:w-60 object-cover"/>
                            <div className="p-6 flex flex-col justify-between w-full">
                                <div>
                                    <h3 className="text-xl font-semibold text-white mb-2">{service.name_service}</h3>
                                    <p className="text-gray-300 mb-4">{service.description}</p>
                                </div>
                                <a href={service.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 font-medium hover:underline self-start">
                                    Ver más →
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
        )        
    )
}