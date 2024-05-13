import { useEffect, useState } from "react";
import {
  NavegationHeader,
  ModalMobile,
  TesteIconAnimation,
} from "@/components";
import { Close, Menu } from "@mui/icons-material/";
import { useTheme } from "styled-components";
import * as Styles from "./styles";
import { useGlobal } from "@/provider/Global";

export function Header() {
  const { visibleModal, setVisibleModal } = useGlobal();
  const setaRight = "<";
  const setaLeft = "/>";
  const theme = useTheme();

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 768) {
        setVisibleModal(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <Styles.ElementHeader>
      <h2>
        <Styles.spanPerson>{setaRight}</Styles.spanPerson>
        Eric Sampaio<Styles.spanPerson>{setaLeft}</Styles.spanPerson>
      </h2>
      <div className="navHeader">
        <NavegationHeader />
      </div>
      <div className="barRigth">
        {/* <Menu
          fontSize="large"
          htmlColor={theme.colors.azulClaro}
          onClick={() => setVisibleModal(true)}
        /> */}
        <TesteIconAnimation />
        {/* <Close fontSize="large" htmlColor={theme.colors.azulClaro}/> */}
      </div>

      {visibleModal ? (
        <Styles.WrapperModal isVisible={visibleModal}>
          <ModalMobile />
        </Styles.WrapperModal>
      ) : null}
    </Styles.ElementHeader>
  );
}
