import { ContentGlobal, CardAbility } from "@/components";
import Cypress from '@/assets/svg/cypress.svg'
import JavaScript from '@/assets/svg/javascript.svg'
import NextJs from '@/assets/svg/nextdotjs.svg'
import TypeScript from '@/assets/svg/typescript.svg'
import HTML from '@/assets/svg/html5.svg'
import CSS from '@/assets/svg/css3.svg'
import ReactIcon from '@/assets/svg/react.svg'
import StylesComponents from '@/assets/svg/styledcomponents.svg'
import Git from '@/assets/svg/git.svg'
import GitHub from '@/assets/svg/github.svg'
import * as Styles from "./styles";
 type TCardAbility = {
      icon: JSX.Element;
      title: string;
      style?: React.CSSProperties;
    };
export function Ability() {

  const cards = [
    { icon: <Cypress />, title: "Cypress" },
    { icon: <JavaScript />, title: "JavaScript" },
    { icon: <TypeScript />, title: "TypeScript" },
    { icon: <HTML />, title: "HTML" },
    { icon: <CSS />, title: "CSS" },
    { icon: <ReactIcon />, title: "React" },
    { icon: <StylesComponents />, title: "Styles Components" },
    { icon: <Git />, title: "Git" },
    { icon: <GitHub />, title: "GitHub" },
  ];

  return (
   


    <ContentGlobal>
      <Styles.ContentAbility>
        <h1>Habilidades</h1>
        <div className="contentCard">
          {cards.map((card, index) => (
            <CardAbility
              key={index}
              style={{ animationDelay: `${index * 0.5}s` }}
              icon={card.icon}
              title={card.title}
            />
          ))}
        </div>
      </Styles.ContentAbility>
    </ContentGlobal>
  );
}