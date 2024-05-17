import { ContentGlobal, CardAbility } from "@/components";
import * as Styles from "./styles";

export function Ability() {
  return (
    <ContentGlobal>
      <Styles.ContentAbility>
        <h1>Habilidades</h1>
        <div className="contentCard">
          <CardAbility />
        </div>
      </Styles.ContentAbility>
    </ContentGlobal>
  );
}
