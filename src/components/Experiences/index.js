import React from "react";
import PortfolioA from "./../PortfolioA";
import Portfolio from "./../Portfolio";
import Portfolio1 from "./../Portfolio1";
import Portfolio2 from "./../Portfolio2";
import Portfolio5 from "./../Portfolio5";
import Portfolio6 from "./../Portfolio6";
import Portfolio7 from "./../Portfolio7";
import Portfolio8 from "./../Portfolio8";

import "./styles.scss";

import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

function Experience() {
  return (
    <section id="Experiences" className="ExperiencesSection section">
      <div className="container">
        <h1 className="title">Experience</h1>

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - presente"
            iconStyle={{ background: "#f0e9dc" }}
          >
            <h3 className="vertical-timeline-element-title">
              CMO, UI Designer and Front End Developer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Trevon</h4>
            <p>User Experience, Visual Design</p>
            <p>
              <span className="button is-rounded is-small is-static">HTML</span>{" "}
              <span className="button is-rounded is-small is-static">CSS</span>{" "}
              <span className="button is-rounded is-small is-static">JS</span>{" "}
              <span className="button is-rounded is-small is-static">
                ANGULAR
              </span>
            </p>
            <br />
            <Portfolio2 />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="dezembro 2019 - presente"
            iconStyle={{ background: "#f0e9dc" }}
          >
            <h3 className="vertical-timeline-element-title">
              Desenvolvedor de Front-End e UI/UX Designer
            </h3>
            <h4 className="vertical-timeline-element-subtitle">CPQi</h4>
            <p>
              Desenvolvimento de solu????es para Onboarding de clientes para
              plataformas digitais banc??rias.
            </p>
            <p>
              <span className="button is-rounded is-small is-static">HTML</span>{" "}
              <span className="button is-rounded is-small is-static">CSS</span>{" "}
              <span className="button is-rounded is-small is-static">JS</span>{" "}
              <span className="button is-rounded is-small is-static">
                {" "}
                ANGULAR
              </span>
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="dezembro 2019 - presente"
            iconStyle={{ background: "#f0e9dc" }}
          >
            <h3 className="vertical-timeline-element-title">
              UI/UX Designer e Desenvolvedor de Front-End
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              BASA - Banco da Amaz??nia
            </h4>
            <p>
              Desenvolvimento de aplicativo para os assessores de cr??dito
              financeiro do Banco da Amaz??nia. A solu????o ?? voltada a otimiza????o
              do processo de concess??o de recursos para pequenos empreendedores.
            </p>
            <p>
              <span className="button is-rounded is-small is-static">HTML</span>{" "}
              <span className="button is-rounded is-small is-static">CSS</span>{" "}
              <span className="button is-rounded is-small is-static">JS</span>{" "}
              <span className="button is-rounded is-small is-static">
                IONIC
              </span>{" "}
              <span className="button is-rounded is-small is-static">
                {" "}
                ANGULAR
              </span>
            </p>
            <br />
            <PortfolioA />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="dezembro 2015 - presente"
            iconStyle={{ background: "#f0e9dc" }}
          >
            <h3 className="vertical-timeline-element-title">
              UI/UX Designer e Desenvolvedor de Front-End
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              BB Tecnologia e Servi??os
            </h4>
            <p>
              Como parceira no desenvolvimento de software para o Banco do
              Brasil, a BB Tecnologia oferece solu????es complexas, uma delas ?? o
              PSIM (Sistema de Gerenciamento de Seguran??a F??sica). Este software
              ouve eventos de milhares de c??meras e dispositivos de seguran??a em
              todo o Brasil.
            </p>
            <p>
              <span className="button is-rounded is-small is-static">HTML</span>{" "}
              <span className="button is-rounded is-small is-static">CSS</span>{" "}
              <span className="button is-rounded is-small is-static">JS</span>{" "}
              <span className="button is-rounded is-small is-static">
                PRIMEFACES
              </span>
            </p>
            <br />
            <Portfolio />
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            date="2019 - presente"
            iconStyle={{ background: "#f0e9dc" }}
          >
            <h3 className="vertical-timeline-element-title">
              UI/UX Designer e Desenvolvedor de Front-End
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Desenvolve Cidade
            </h4>
            <p>
              A empresa Desenvolve Cidade oferece solu????es no ramo de Nota
              Fiscal Eletr??nica e desburocratiza????o do processo de abertura e
              licenciamento de empresas. Com a plataforma Empresa Digital,
              participei da concep????o do aplicativo e remodela????o da landing
              page do projeto.
            </p>
            <p>
              <span className="button is-rounded is-small is-static">HTML</span>{" "}
              <span className="button is-rounded is-small is-static">CSS</span>{" "}
              <span className="button is-rounded is-small is-static">JS</span>{" "}
              <span className="button is-rounded is-small is-static">
                IONIC
              </span>{" "}
              <span className="button is-rounded is-small is-static">
                PRIMEFACES
              </span>
            </p>
            <br />
            <Portfolio1 />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="abril 2013 - dezembro 2015"
            iconStyle={{ background: "#f0e9dc" }}
          >
            <h3 className="vertical-timeline-element-title">
              Especialista de Suporte de TI
            </h3>
            <h4 className="vertical-timeline-element-subtitle">SESI</h4>
            <p>
              Suporte t??cnico aos usu??rios de v??rios sistemas de software e
              hardware.
            </p>
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="dezembro 2004 - abril 2015"
            iconStyle={{ background: "#f0e9dc" }}
          >
            <h3 className="vertical-timeline-element-title">
              Designer Gr??fico, UI/UX Designer e Desenvolvedor
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Freelancer</h4>
            <p>
              Atua????o como profissional independente em uma s??rie de projetos.
            </p>
            <p>
              <span className="button is-rounded is-small is-static">HTML</span>{" "}
              <span className="button is-rounded is-small is-static">CSS</span>{" "}
              <span className="button is-rounded is-small is-static">
                WORDPRESS
              </span>{" "}
              <span className="button is-rounded is-small is-static">
                DRUPAL
              </span>
            </p>
            <br />
            <Portfolio5 />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="ago 2007 - fev 2015"
            iconStyle={{ background: "#f0e9dc" }}
          >
            <h3 className="vertical-timeline-element-title">
              CEO, UI/UX Designer e Desenvolvedor de Front-End
            </h3>
            <h4 className="vertical-timeline-element-subtitle">Zeemp</h4>
            <p>
              Zeemp era um diret??rio comercial social. Alcan??ou mais de 1
              milh??es de usu??rios por m??s. Os usu??rios podiam avaliar os
              melhores servi??os locais e encontrar pessoas com as mesmas
              prefer??ncias.
            </p>
            <p>
              <span className="button is-rounded is-small is-static">HTML</span>{" "}
              <span className="button is-rounded is-small is-static">CSS</span>{" "}
              <span className="button is-rounded is-small is-static">
                DRUPAL
              </span>
            </p>
            <br />
            <Portfolio6 />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="fev 2005 - dez 2012"
            iconStyle={{ background: "#f0e9dc" }}
          >
            <h3 className="vertical-timeline-element-title">
              Pesquisador em Bioinform??tica
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Universidade Federal do Par?? - LPDNA
            </h4>
            <p>
              Pesquisa em Bioinform??tica e minera????o de dados no Laborat??rio de
              Polimorfismo de DNA. Utilizando ferramentas computacionais e de
              bioestat??stica, a pesquisa revelou a microdiversidade presente no
              reservat??rio da Usina Hidrel??trica de Tucuru??. Embasando uma gama
              de estudos ainda sendo realizados nesse bioma.
            </p>
            <br />
            <Portfolio7 />
          </VerticalTimelineElement>

          <VerticalTimelineElement
            className="vertical-timeline-element--education"
            date="jan 2004 - jan 2005"
            iconStyle={{ background: "#f0e9dc" }}
          >
            <h3 className="vertical-timeline-element-title">
              Desenvolvedor de Front-End e Suporte de TI
            </h3>
            <h4 className="vertical-timeline-element-subtitle">
              Universidade Federal do Par?? - PROGEP
            </h4>
            <p>
              A PROGEP ?? respons??vel pela implementa????o das pol??ticas de
              desenvolvimento de Gest??o de Pessoas na UFPA. Portanto, ?? de sua
              compet??ncia tratar tanto da sele????o dos servidores via concurso
              p??blico, de assuntos financeiros e de movimenta????es praticadas
              durante sua vida funcional, como tamb??m promove oportunidades de
              desenvolvimento na carreira e a????es de promo????o, preven????o e
              cuidados com a sa??de, dentre outras iniciativas que visam
              proporcionar uma melhor qualidade de vida no trabalho aos
              servidores da UFPA.
            </p>
            <p>
              <span className="button is-rounded is-small is-static">HTML</span>{" "}
              <span className="button is-rounded is-small is-static">CSS</span>{" "}
              <span className="button is-rounded is-small is-static">
                ADOBE
              </span>
            </p>
            <br />
            <Portfolio8 />
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </section>
  );
}

export default Experience;
