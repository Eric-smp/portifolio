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
          <Image src='/myPhoto.jpg' alt={""}  width={400} height={400} style={{ borderRadius: '50%' }}/>
        </div>
      </Styles.ContentAboutMy>
    </ContentGlobal>
  );
}
