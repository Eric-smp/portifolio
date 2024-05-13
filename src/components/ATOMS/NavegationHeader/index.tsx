import { ReactNode } from "react";
import * as Styles from "./styles";
import { Divider } from "@mui/material";

type TNavBar = {
  // children: ReactNode;
  isMobile?: boolean;
};

export function NavegationHeader(props: TNavBar) {
  const textOptions = [
    { text: "Home" },
    { text: "Sobre" },
    { text: "Habilidade" },
    { text: "Projetos" },
    { text: "Contato" },
  ];

  if (props.isMobile) {
    return (
      <Styles.NavBarMobile>
        {textOptions.map((option, index) => (
          <span key={index}>
            <h2>{option.text}</h2>
            <Divider flexItem className="divider"></Divider>
          </span>
        ))}
      </Styles.NavBarMobile>
    );
  }
  return (
    <Styles.NavHeaderDesktop>
      {textOptions.map((option, index) => (
        <Styles.FadeInH2
          key={index}
          style={{ animationDelay: `${index * 1}s` }}
        >
          {option.text}
        </Styles.FadeInH2>
      ))}
    </Styles.NavHeaderDesktop>
  );
}
