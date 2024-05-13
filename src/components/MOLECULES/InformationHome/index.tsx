import * as Styles from "./styles";

export function InformationHome() {
  return (
    <Styles.ContentInformationHome>
      <div className="InformationForMy">
        <h3>Olá meu nome é</h3>
        <div className="nameAndJob">
          <h1>Eric de Sousa Sampaio</h1>
          <h1>
            Desenvolvedor <b className="typing-effect">Front-end</b>
          </h1>
        </div>
        <span>
          <p>
            Desenvolvi esse portfolio com intuito de me apresentar, mostrar as
            minhas habilidades no mundo da programação e também apresentar os
            projetos que desenvolvi sozinho e em grupo.
          </p>
          <p>
            Atualmente, estou trabalhando na <b>DevBot</b>
          </p>
        </span>
      </div>
    </Styles.ContentInformationHome>
  );
}
