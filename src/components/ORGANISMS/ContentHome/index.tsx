import { InformationHome, AnimationHome, ContentGlobal } from "@/components";
import * as Styles from "./styles";
export function ContentHome() {
  return (
    <ContentGlobal>
      <Styles.BodyHome>
        <InformationHome />
        <AnimationHome />
      </Styles.BodyHome>
    </ContentGlobal>
  );
}
