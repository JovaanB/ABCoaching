import React from 'react';
import { Container } from 'react-bootstrap';

const Projects = () => {
  return (
    <section id="projects">
      <Container
        className="h-full py-16 antialiased bg-primary-very-light font-sans"
        style={{ marginBottom: '100px' }}
      >
        <header className="flex flex-col items-center mb-12">
          <h2 className="text-3xl text-primary-normal font-bold">Tarifs</h2>
        </header>
        <section className="flex flex-col lg:flex-row items-start items-center lg:justify-center w-full w-full lg:px-10 py-12 ">
          <article className="bg-white w-4/5 lg:w-custom mb-10 lg:px-4 px-6 py-10 text-center text-primary-dark rounded-lg">
            <h5 className="font-bold text-base">À distance</h5>
            <h2 className="pb-4 flex justify-center font-bold border-b border-gray-300">
              <span className="text-6xl">30,00 </span>
              <span className="text-3xl mt-6 mr-1">€ / mois</span>
            </h2>
            <ul className="text-sm font-bold">
              <li className="pt-4 pb-4 border-b border-gray-300">Programme personnalisé</li>
              <li className="pt-3 pb-4 border-b border-gray-300">Changement 1 fois par mois</li>
              <li className="pt-4 pb-4 border-b border-gray-300">Suivi nutritionnel</li>
            </ul>
            <button
              type="button"
              className="specialbg uppercase text-center text-sm mt-12 xl:px-24 px-12 sm:px-16 py-2 font-bold text-primary-very-light rounded-md"
            >
              Lets go
            </button>
          </article>
          <article className="specialbg lg:w-custom w-4/5 mb-10 px-6 py-16 lg:-mt-6 text-white text-center rounded-lg">
            <h5 className="font-bold text-base ">À distance+</h5>
            <h2 className="font-bold pb-4 mt-2 border-b border-gray-100 flex justify-center">
              <span className="text-6xl">50,00 </span>
              <span className="text-3xl mt-6 mr-1">€ / mois</span>
            </h2>
            <ul className=" text-sm font-bold">
              <li className="pt-4 pb-4 border-b border-gray-200">Programme personnalisé</li>
              <li className="pt-4 pb-4 border-b border-gray-200">Changement tous les 15 jours</li>
              <li className="pt-4 pb-4 border-b border-gray-200">Suivi nutritionnel</li>
            </ul>
            <button
              type="button"
              className="uppercase text-center text-sm mt-10 xl:px-24 px-12 sm:px-16 py-2 rounded-md font-bold bg-primary-very-light text-primary-blue"
            >
              Lets go
            </button>
          </article>
        </section>
      </Container>
    </section>
  );
};

export default Projects;
