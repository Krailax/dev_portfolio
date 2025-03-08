import ServicesComponent from "@/components/Services/Services";
import { Helmet } from "react-helmet-async";

export default function Services_Page(){
    return(
        <>
            <Helmet>
                <title>Servicios | Portafolio Web</title>
            </Helmet>
            <main className="w-11/12 lg:w-10/12 2xl:w-9/12 mt-6 h-full flex flex-col items-center gap-6 py-8 pt-12 lg:pt-8">
                <section className="w-11/12 md:w-10/12 flex flex-col gap-4 mx-auto">
                    
   
                <div className="w-full">
                    <h2 className="text-4xl font-bold text-gray-100 pb-3 w-fit">
                        <span className="mr-2">🛠️</span> Servicios
                    </h2>
                </div>

                <hr className=" border-b rounded-lg border-[#a9a9a7]/10"/>
                <div className="flex flex-col">
                    <ServicesComponent limit={false} />
                </div>

                
                </section>   
            </main>
        </>
    )
}