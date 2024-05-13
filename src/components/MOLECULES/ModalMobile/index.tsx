import { NavegationHeader } from "@/components";
import { Close } from "@mui/icons-material";
import { useTheme } from "styled-components";
import * as Styles from "./styles";
import { useGlobal } from "@/provider/Global";

export function ModalMobile() {
  const theme = useTheme();
  const { setVisibleModal } = useGlobal();

  return (
    <Styles.ModalComponent>
      <div className="contentNav">
        <NavegationHeader isMobile />
      </div>
    </Styles.ModalComponent>
  );
}

{
  /* <h2>Home</h2>
<h2>Sobre</h2>
<h2>Habilidades</h2>
<h2>Projetos</h2>
<h2>Contato</h2> */
}
