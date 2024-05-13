import * as Styles from "./styles";
import { Divider } from "@mui/material";
import { GitHub, Instagram, LinkedIn } from "@mui/icons-material";
import { useTheme } from "@emotion/react";

export function RedesFixed() {
  const theme = useTheme();
  return (
    <Styles.ContentRede>
      <span>
        <GitHub
          htmlColor="#20cfe2"
          onClick={() => window.open("https://github.com/Eric-smp", "_blank")}
        />
      </span>
      <span>
        <Instagram
          htmlColor="#20cfe2"
          onClick={() =>
            window.open("https://www.instagram.com/eric__sampaio/", "_blank")
          }
        />
      </span>
      <span>
        <LinkedIn
          htmlColor="#20cfe2"
          onClick={() =>
            window.open("https://www.linkedin.com/in/eric-smp/", "_blank")
          }
        />
      </span>
      <div>
        <Divider flexItem className="diviser" />
      </div>
    </Styles.ContentRede>
  );
}
