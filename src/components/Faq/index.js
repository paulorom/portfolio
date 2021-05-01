import "rc-collapse/assets/index.css";
import "string.prototype.repeat";
import Collapse, { Panel } from "rc-collapse";
import React from "react";
import "./styles.scss";

function random() {
  return parseInt(Math.random() * 10, 10) + 1;
}

const arrowPath =
  "M869 487.8L491.2 159.9c-2.9-2.5-6.6-3.9-10.5-3.9h-88" +
  ".5c-7.4 0-10.8 9.2-5.2 14l350.2 304H152c-4.4 0-8 3.6-8 8v60c0 4.4 3." +
  "6 8 8 8h585.1L386.9 854c-5.6 4.9-2.2 14 5.2 14h91.5c1.9 0 3.8-0.7 5." +
  "2-2L869 536.2c14.7-12.8 14.7-35.6 0-48.4z";

function expandIcon({ isActive }) {
  return (
    <i style={{ marginRight: ".5rem" }}>
      <svg
        viewBox="0 0 1024 1024"
        width="1em"
        height="1em"
        fill="currentColor"
        style={{
          verticalAlign: "-.125em",
          transition: "transform .2s",
          transform: `rotate(${isActive ? 90 : 0}deg)`
        }}
      >
        <path d={arrowPath} p-id="5827" />
      </svg>
    </i>
  );
}

class Faq extends React.Component {
  state = {
    time: random(),
    accordion: true
  };

  onChange = activeKey => {
    this.setState({
      activeKey
    });
  };

  getItems() {
    const items = [];

    items.push(
      <Panel header={`Quem pode participar?`} key="0">
        Poderão participar da campanha qualquer pessoa física, maior de 18 anos,
        que tiver conta aberta no Daycoval Investe ou que venha a abrir nova
        conta no período da campanha.
      </Panel>
    );

    items.push(
      <Panel header={`O que eu ganho?`} key="1">
        Assim que o seu amigo indicado abrir uma conta utilizando o seu link
        exclusivo - ou escolher a opção “campanha indique uma amigo” e inserir o
        seu CPF no campo “indicação para abertura da conta” - e realizar
        aplicações a partir de R$ 10.000,00, por meio da plataforma on-line em
        qualquer produto do Banco Daycoval, ou de terceiros durante o período da
        campanha, você ganha R$ 100,00 (cem reais) em sua conta de investimento
        e ele também.
      </Panel>
    );

    items.push(
      <Panel header={`O que meu amigo ganha?`} key="2">
        Se o seu amigo indicado abrir a conta investimento no Daycoval Investe e
        aplicar em qualquer produto da plataforma Daycoval Investe, a partir de
        R$ 10.000,00 (dez mil reais), durante o período da campanha utilizando o
        seu código ou URL, automaticamente ele ganhará um crédito no valor de R$
        100,00 (cem reais) a ser creditado em D+1 na conta investimento aberta.
      </Panel>
    );

    items.push(
      <Panel
        header={`Existe valor mínimo de compra para participar da promoção?`}
        key="3"
      >
        Sim. As aplicações válidas para a campanha são de a partir de R$
        10.000,00 (dez mil reais), independente do prazo do produto aplicado.
      </Panel>
    );

    items.push(
      <Panel header={`Quando poderei sacar o meu bônus?`} key="4">
        Não. A sua participação na Campanha dependerá da conclusão do processo
        de abertura da sua conta na Capital Bits. Somente com a conta já aberta
        poderá fazer indicações aos seus amigos. Se você precisa de alguma ajuda
        ou mais informações para concluir a abertura de sua conta investimento,
        clique aqui para que possamos ajudá-lo.
      </Panel>
    );

    items.push(
      <Panel header={`O que é a Capital Bits?`} key="5">
        A Capital Bits é uma empresa especializada em investimentos em
        criptomoedas, após nosso lançamento, ofereceremos uma gama de produtos
        inovadores para o investidor que deseja uma exposição diversificada ao
        mercado de moedas digitais.
      </Panel>
    );

    items.push(
      <Panel header={`Por que comprar bitcoin na Capital Bits?`} key="6">
        Vamos encarar a realidade, investir é difícel e extremamente
        estressante, especialmente se você está constantemente perdendo dinheiro
        em cada negócio! A verdade dura e fria é... A maioria dos investidores
        novatos em criptomoedas serão vítima dos “3 estágios emocionais de um
        trader perdedor”: Tristeza, raiva e desespero. Estes sentimentos
        arruinam seu julgamento antes mesmo de começar. Nossa plataforma
        automatizada possui os melhores algoritmos para produzir um crescimento
        orgânico de seu capital. Utilizando uma abordagem multidimensional,
        atrelamos experiência da mente humana com a análise técnica e
        versatilidade de nossos sistemas computacionais.
      </Panel>
    );

    items.push(
      <Panel header={`Quando será o lançamento da plataforma?`} key="7">
        A nossa plataforma de investimentos será lançada dia 07/09/2019. Até
        esta data, estamos distribuindo nosso caloroso bônus de Boas-vindas. Não
        fique de fora e convide seus amigos a ganhar também.
      </Panel>
    );

    items.push(
      <Panel header={`Quem pode investir em nossos produtos?`} key="8">
        Nosso objetivo é tornar o investimento em criptomoedas inclusivo e
        acessível a todos. Temos produtos disponíveis para todos os perfis de
        investidor.
      </Panel>
    );

    items.push(
      <Panel header={`Por que investir em criptomoedas?`} key="9">
        Pela primeira vez na história da humanidade, podemos enviar valores de
        forma segura para qualquer pessoa em qualquer lugar do mundo na mesma
        velocidade que a informação sem precisar de bancos. Estamos diante de
        uma revolução sem precedentes, capaz de remodelar por inteiro a forma
        que a economia mundial funciona, quebrando barreiras nacionais e criando
        um sistema financeiro realmente global.
      </Panel>
    );

    return items;
  }

  setActivityKey = () => {
    this.setState({
      activeKey: ["2"]
    });
  };

  toggle = () => {
    this.setState({
      accordion: !this.state.accordion
    });
  };

  reRender = () => {
    this.setState({
      time: random()
    });
  };

  render() {
    const accordion = this.state.accordion;
    const activeKey = this.state.activeKey;

    return (
      <section id="Faq" className="FaqSection section">
        <div className="container">
          <div className="columns">
            <div className="column is-full-mobile is-two-thirds-tablet is-8-desktop">
              <h1 className="title has-text-weight-bold is-spaced is-3">
                Perguntas mais frequentes
              </h1>
              <Collapse
                accordion={accordion}
                onChange={this.onChange}
                activeKey={activeKey}
                expandIcon={expandIcon}
              >
                {this.getItems()}
              </Collapse>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default Faq;
