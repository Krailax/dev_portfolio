import { Helmet } from "react-helmet-async";
import DataProject from "@/data/my_project.json";
import Project from "@/components/Project/Project";

export default function Projects_Page(){

 
    return(
        <>
            <Helmet>
                <title>Proyectos | Portafolio Web</title>
            </Helmet>
            <main className="w-11/12 lg:w-10/12 2xl:w-9/12 mt-6 h-full flex flex-col items-center gap-6 py-8 pt-12 lg:pt-8">
                <section className="w-11/12 md:w-10/12 flex flex-col gap-4 mx-auto">
                    <div className="w-full">
                        <h2 className="text-4xl font-bold text-gray-100 pb-3 w-fit">
                            <span className="mr-2">💡</span> Proyectos
                        </h2>
                    </div>
                    <hr className=" border-b rounded-lg border-[#a9a9a7]/10"/>
                    <div className="grid grid-cols-1 lg:grid-cols-1 gap-14 w-full py-8">
                        {DataProject.map((project, index) => (
                            <Project key={index} title_project={project.title_project} description={project.description} list_image={project.list_image} list_technologies={project.list_technologies} url={project.url} />
                        ))}
                    </div>
                </section>   
            </main>
        </>
    )
}