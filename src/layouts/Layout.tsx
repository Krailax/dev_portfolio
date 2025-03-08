import ComponentMenuNavigation from "@/components/Navigation";
import { Helmet } from "react-helmet-async";
import { Outlet } from "react-router-dom";

export default function Layout(){
    return(
        <>
            <Helmet>
                <meta name="description" content="Portafolio profesional de un desarrollador web especializado en tecnologías modernas." />
                <meta name="keywords" content="desarrollo web, programador, frontend, backend, portafolio" />
            </Helmet>
            <main className="w-full h-full overscroll-y-auto flex flex-col items-center">
                <ComponentMenuNavigation/>
                <Outlet/>
            </main>
        </>
    )
}