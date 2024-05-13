import { Header, RedesFixed, ContentHome, AboutMy } from "@/components";
import * as Styles from "./styles";
import { useGlobal } from "@/provider/Global";

export function DashbordHome() {
  const { visibleModal } = useGlobal();
  return (
    <Styles.WrapperHome modalOpen={visibleModal}>
      <Header />

      <Styles.WrapperContent>
        <ContentHome />
        <AboutMy />
      </Styles.WrapperContent>

      <RedesFixed />
    </Styles.WrapperHome>
  );
}
