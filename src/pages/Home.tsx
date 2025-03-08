import { Helmet } from "react-helmet-async";
import TechCarousel from "../components/Home/Tech_Carousel";
import Personal_Details from "@/components/Home/Personal Details";
import Personal_Experiences from "@/components/Home/Personal_Experiences";
import Top_Project from "@/components/Home/Top_Project";
import Top_Services from "@/components/Home/Top_Services";

export default function Home_Page(){
    return(
        <>
            <Helmet>
                <title>Inicio | Portafolio Web </title>
            </Helmet>
            <main className="w-11/12 lg:w-10/12 2xl:w-9/12 mt-6 h-full flex flex-col items-center gap-6 py-8 pt-12 lg:py-0 lg:pb-8">
                <Personal_Details/>
                <TechCarousel/>
                <Personal_Experiences/>
                <Top_Project/>
                <Top_Services/>
            </main>
        </>
    )
}