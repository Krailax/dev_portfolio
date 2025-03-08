import { useState } from "react";

export default function Project({title_project,description,list_image,list_technologies,url}:{title_project: string;description: string;list_image: { name_image: string; image: string; width: number; height: number }[];list_technologies: string[];url: string;}){
  const [view, setView] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const count = list_image.length;


  const ToggleView = (e: React.MouseEvent) => {
    e.stopPropagation();
    setView(!view);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % list_image.length);
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + list_image.length) % list_image.length);
  };

  return (
    <>
      <div onClick={ToggleView} className="flex flex-col cursor-pointer md:flex-row bg-[#a9a9a7]/10 shadow-lg rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
        {list_image.length > 0 && (
          <img loading="lazy" src={"/projects/" + list_image[0].image} alt={list_image[0].name_image || "Project Image"} width={list_image[0].width} height={list_image[0].height} className="w-full h-50 md:w-60 object-cover"/>
        )}
        <div className="p-6 flex flex-col justify-between w-full">
          <div>
            <h3 className="text-xl font-semibold text-white mb-2">{title_project}</h3>
            <p className="text-gray-300 mb-4">{description}</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {list_technologies.map((tech, index) => (
              <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
      {view && (
        <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50" onClick={ToggleView}>
          <button onClick={ToggleView} className=" cursor-pointer absolute top-2 right-4   text-3xl font-semibold text-white px-3 py-1 rounded shadow-lg">x</button>
          <div className="bg-primary rounded-2xl flex  flex-col md:flex-row shadow-lg w-11/12 md:max-w-8xl  relative" onClick={(e) => e.stopPropagation()}>
            <div className="relative w-full md:w-2/3 flex items-center  justify-center rounded-2xl">
              {count > 1 &&(
                <button onClick={prevImage} className="cursor-pointer absolute left-4 top-1/2 transform -translate-y-1/2   px-3 py-1 rounded shadow-lg">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="currentColor"  className="icon icon-tabler icons-tabler-filled icon-tabler-arrow-big-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" /></svg>
                </button>
              )}
              
              
              <img src={"/projects/" + list_image[currentImageIndex].image} loading="lazy" alt={list_image[currentImageIndex].name_image} className="w-full h-full max-h-[90vh] object-cover md:rounded-l-lg"/>
              {count > 1 &&(
                <button onClick={nextImage} className=" cursor-pointer absolute right-4 top-1/2 transform -translate-y-1/2  px-3 py-1 rounded shadow-lg">
                  <svg  xmlns="http://www.w3.org/2000/svg"  width="50"  height="50"  viewBox="0 0 24 24"  fill="currentColor"  className=" rotate-180 icon icon-tabler icons-tabler-filled icon-tabler-arrow-big-left"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9.586 4l-6.586 6.586a2 2 0 0 0 0 2.828l6.586 6.586a2 2 0 0 0 2.18 .434l.145 -.068a2 2 0 0 0 1.089 -1.78v-2.586h7a2 2 0 0 0 2 -2v-4l-.005 -.15a2 2 0 0 0 -1.995 -1.85l-7 -.001v-2.585a2 2 0 0 0 -3.414 -1.414z" /></svg>
                </button>
              )}
              
            </div>
            <div className="p-5 w-full md:w-1/3 flex flex-col justify-between ">
              <div>
                <h4 className="text-xl font-semibold text-white">{title_project}</h4>
                <p className="text-gray-300 mt-2">{description}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                    {list_technologies.map((tech, index) => (
                    <span key={index} className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
                        {tech}
                    </span>
                    ))}
                </div>
              </div>
              {url && (
                <a href={url} target="_blank" rel="noopener noreferrer" className="mt-4 text-center inline-block bg-blue-700 hover:shadow-lg hover:shadow-blue-500/50 text-white px-4 py-2 rounded shadow-lg hover:bg-blue-700">
                  Revisar Web
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
