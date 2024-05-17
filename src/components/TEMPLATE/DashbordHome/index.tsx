import {
  Header,
  RedesFixed,
  ContentHome,
  AboutMy,
  Ability,
} from "@/components";
import * as Styles from "./styles";
import { useGlobal } from "@/provider/Global";
import { useInView } from "react-intersection-observer";

export function DashbordHome() {
  const { visibleModal } = useGlobal();

  // Hooks separados para cada componente
  const [refContentHome, inViewContentHome] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const [refAboutMy, inViewAboutMy] = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  const [refAbility, inViewAbility] = useInView({
    triggerOnce: true,
    threshold: 0,
  });

  return (
    <Styles.WrapperHome modalOpen={visibleModal}>
      <Header />

      <div>
        <Styles.WrapperContent>
          <div
            ref={refContentHome}
            className={inViewContentHome ? "animate" : ""}
          >
            <ContentHome />
          </div>
          <div ref={refAboutMy} className={inViewAboutMy ? "animate" : ""}>
            <AboutMy />
          </div>
          <div ref={refAbility} className={inViewAbility ? "animate" : ""}>
            <Ability />
          </div>
        </Styles.WrapperContent>
      </div>

      <RedesFixed />
    </Styles.WrapperHome>
  );
}
