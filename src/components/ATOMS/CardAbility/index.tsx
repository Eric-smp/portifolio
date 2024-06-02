import { ReactNode } from "react";
import * as Styles from "./styles";


type TCardAbility = {
  icon: ReactNode;
  title: string;
  style?: React.CSSProperties; 
};

export function CardAbility(props: TCardAbility) {
  return (
    <Styles.CardAbility style={props.style}>
      <span>{ props.icon}</span>
      <h4>{ props.title}</h4>
    </Styles.CardAbility>
  );
}
