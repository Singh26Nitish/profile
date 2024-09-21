import React, { useState } from 'react';
import data from './data.json';

const ProjectDesign = ({ title, imageUrl, onClick }) => (
  <div
    onClick={onClick} 
    className="cursor-pointer rounded-lg overflow-hidden shadow-lg transform transition-transform hover:-translate-y-2"
  >
    <img
      src={require(`${imageUrl}`)} 
      alt={title}
      className="w-full h-36 object-cover"
    />
    <div className="p-4">
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
  </div>
);

const ProjectModal = ({ project, onClose }) => {
  if (!project) return null;

  const handleOutsideClick = (e) => {
    if (e.target.id === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div
      id="modal-overlay"
      className="fixed inset-0 bg-light bg-opacity-50 flex items-center justify-center "
      onClick={handleOutsideClick}
    >
      <div className="bg-light p-6 rounded-lg w-1/3 relative">
        <img
          src={require(`${project.imageUrl}`)}
          alt={project.title}
          className="w-full h-48 object-cover rounded-lg mb-4 cursor-pointer"
          onClick={() => window.open(project.deploymentLink, '_blank')}
        />
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-2xl font-bold">{project.title}</h2>
          <i
            className="fa-brands fa-github text-2xl cursor-pointer"
            onClick={() => window.open(project.gitLink, '_blank')}
          />
        </div>
        <ul className="list-disc list-inside">
          {project.bulletPoints.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700"
        >
          Close
        </button>
      </div>
    </div>
  );
};

const ProjectData = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="text-white p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {data.projects.map((item, index) => (
          <ProjectDesign
            key={index}
            title={item.title}
            imageUrl={item.imageUrl}
            onClick={() => handleProjectClick(item)}
          />
        ))}
      </div>

      {/* Modal */}
      <ProjectModal project={selectedProject} onClose={handleCloseModal} />
    </div>
  );
};

export default function Project() {
  return <ProjectData />;
}
