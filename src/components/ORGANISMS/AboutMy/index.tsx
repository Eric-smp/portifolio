import { DescriptionMy } from "@/components";
import { ContentGlobal } from "@/components";
import Image from "next/image";
import MyPhoto from './public/myPhoto.jpg'
import * as Styles from "./styles";

export function AboutMy() {
  return (
    <ContentGlobal>
      <Styles.ContentAboutMy>
        <DescriptionMy />
        <div className="contentImage">
          <div className="border"></div>
          <Styles.ImagePerfil src='/myPhoto.png' alt={""}   style={{ borderRadius: '50%' }}/>
        </div>
      </Styles.ContentAboutMy>
    </ContentGlobal>
  );
}
