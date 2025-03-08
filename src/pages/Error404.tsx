import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

export default function Error404_Page() {
  return (
    <>
      <Helmet>
        <title>Not Found 404</title>
      </Helmet>
      <main className="h-screen w-full flex flex-col items-center justify-center ">
        <div className="text-center">
          <h2 className="text-6xl font-bold text-gray-800 dark:text-white animate-bounce">404</h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 mt-4">
            Lo sentimos, la página que buscas no existe.
          </p>
          <Link to="/" className="mt-6 inline-block px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-700 hover:shadow-blue-500 transition">
            Volver al Inicio
          </Link>
        </div>
      </main>
    
    </>
  );
}