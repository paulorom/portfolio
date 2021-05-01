import React from "react";
import Features from "./../Features";
import "./styles.scss";

function FeaturesSection(props) {
  return (
    <section id="FeaturesSection" className="FeaturesSection section is-medium">
      <Features
        items={[
          {
            id: 0,
            company: "BB Tecnologia e Serviços",
            title: "Desenvolvedor Front End e UX/UI Designer",
            date: "dezembro 2015 - atual",
            description:
              "Engenheiro Front-End e cargo de UI Design trabalhando para o conglomerado Banco do Brasil. Como parceira de desenvolvimento de software, a BB Tecnologia oferece soluções complexas, uma delas é o PSIM (Sistema de Gerenciamento de Segurança Física). Este software ouve eventos de milhares de câmeras de segurança em todo o Brasil. Projetei interfaces bonitas e fáceis de usar e desenvolvi todo o código front-end dessa solução.",
            portfolioID: ""
          },
          {
            id: 1,
            company: "Desenvolve - Tributação Sustentável",
            title: "Desenvolvedor Front End e UX/UI Designer",
            date: "maio 2019 - atual",
            description:
              "Engenheiro Front-End e cargo de UI Design trabalhando para o conglomerado Banco do Brasil. Como parceira de desenvolvimento de software, a BB Tecnologia oferece soluções complexas, uma delas é o PSIM (Sistema de Gerenciamento de Segurança Física). Este software ouve eventos de milhares de câmeras de segurança em todo o Brasil. Projetei interfaces bonitas e fáceis de usar e desenvolvi todo o código front-end dessa solução.",
            portfolioID: ""
          },
          {
            id: 2,
            company: "Freelancer",
            title: "Desenvolvedor Front End e UX/UI Designer",
            date: "2005 - atual",
            description:
              "Engenheiro Front-End e cargo de UI Design trabalhando para o conglomerado Banco do Brasil. Como parceira de desenvolvimento de software, a BB Tecnologia oferece soluções complexas, uma delas é o PSIM (Sistema de Gerenciamento de Segurança Física). Este software ouve eventos de milhares de câmeras de segurança em todo o Brasil. Projetei interfaces bonitas e fáceis de usar e desenvolvi todo o código front-end dessa solução.",
            portfolioID: ""
          },
          {
            id: 3,
            company: "Zeemp",
            title: "Desenvolvedor Front End e UX/UI Designer",
            date: "2008 - Atual",
            description:
              "Engenheiro Front-End e cargo de UI Design trabalhando para o conglomerado Banco do Brasil. Como parceira de desenvolvimento de software, a BB Tecnologia oferece soluções complexas, uma delas é o PSIM (Sistema de Gerenciamento de Segurança Física). Este software ouve eventos de milhares de câmeras de segurança em todo o Brasil. Projetei interfaces bonitas e fáceis de usar e desenvolvi todo o código front-end dessa solução.",
            portfolioID: ""
          },
          {
            id: 4,
            company: "SESI",
            title: "Desenvolvedor Front End e UX/UI Designer",
            date: "2013 - 2015",
            description:
              "Engenheiro Front-End e cargo de UI Design trabalhando para o conglomerado Banco do Brasil. Como parceira de desenvolvimento de software, a BB Tecnologia oferece soluções complexas, uma delas é o PSIM (Sistema de Gerenciamento de Segurança Física). Este software ouve eventos de milhares de câmeras de segurança em todo o Brasil. Projetei interfaces bonitas e fáceis de usar e desenvolvi todo o código front-end dessa solução.",
            portfolioID: ""
          },
          {
            id: 5,
            company: "Universidade Federal do Pará",
            title: "Desenvolvedor Front End e UX/UI Designer",
            date: "2005 - 2012",
            description:
              "Engenheiro Front-End e cargo de UI Design trabalhando para o conglomerado Banco do Brasil. Como parceira de desenvolvimento de software, a BB Tecnologia oferece soluções complexas, uma delas é o PSIM (Sistema de Gerenciamento de Segurança Física). Este software ouve eventos de milhares de câmeras de segurança em todo o Brasil. Projetei interfaces bonitas e fáceis de usar e desenvolvi todo o código front-end dessa solução.",
            portfolioID: ""
          },
          {
            id: 6,
            company: "Universidade Federal do Pará",
            title: "Desenvolvedor Front End e UX/UI Designer",
            date: "2004 - 2005",
            description:
              "Engenheiro Front-End e cargo de UI Design trabalhando para o conglomerado Banco do Brasil. Como parceira de desenvolvimento de software, a BB Tecnologia oferece soluções complexas, uma delas é o PSIM (Sistema de Gerenciamento de Segurança Física). Este software ouve eventos de milhares de câmeras de segurança em todo o Brasil. Projetei interfaces bonitas e fáceis de usar e desenvolvi todo o código front-end dessa solução.",
            portfolioID: ""
          }
        ]}
      />
    </section>
  );
}

export default FeaturesSection;
