import './styles/Global.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import list_navigation from "@/data/list_navigation.json";

import Layout from './layouts/Layout';
import Home_Page from './pages/Home';
import Experience_Page from './pages/Experience';
import Technology_Page from './pages/Technology';
import Error404_Page from './pages/Error404';
import Projects_Page from './pages/Projects';
import Services_Page from './pages/Services';
import MyData_Page from './pages/MyData';

/* Mapeo de rutas a sus respectivos componentes */
const components: Record<string, React.FC> = {
  "/": Home_Page,
  "/Tecnologia": Technology_Page,
  "/Proyectos": Projects_Page,
  "/Servicios": Services_Page,
  "/Experiencia": Experience_Page,
  "/Sobre_Mi": MyData_Page
};

/* Genera las rutas dinámicamente desde `list_navigation.json` */
const routes = list_navigation.map(data => ({
  path: data.url,
  element: React.createElement(components[data.url] || Error404_Page) 
}));

/* Configuración del enrutador con la estructura del Layout */
const router = createBrowserRouter([
  {
    element: <Layout />,
    children: routes
  },
  {
    path: "*",
    element: <Error404_Page />
  }
]);

/* Punto de entrada principal de la aplicación */
const rootEl = document.getElementById('root');

if (rootEl) {
  const root = ReactDOM.createRoot(rootEl);
  root.render(
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  );
}