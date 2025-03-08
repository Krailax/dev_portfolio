import DataProject from "@/data/my_project.json";
import Project from "@/components/Project/Project";

export default function Top_Project(){
    const length_data = DataProject.length;
    const visibleServices = DataProject.slice(0, 3);
    
    return(
        length_data > 0 && (
            <section className="w-11/12 md:w-10/12 flex flex-col gap-4 mx-auto">
                <div className="flex flex-col justify-between w-full">
                <div className="flex flex-row justify-between w-full items-center">
                        <h2 className="font-semibold text-xl md:text-2xl">Proyectos</h2>
                        {length_data > 3 && (
                            <a href="proyectos" className="text-sm md:text-base cursor-pointer text-blue-600 hover:underline">
                                Mostrar más
                            </a>
                        )}
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 w-full py-8">
                        {visibleServices.map((project, index) => (
                            <Project key={index} title_project={project.title_project} description={project.description} list_image={project.list_image} list_technologies={project.list_technologies} url={project.url} />
                        ))}
                    </div>
                </div>
            </section>
        )
    )
}