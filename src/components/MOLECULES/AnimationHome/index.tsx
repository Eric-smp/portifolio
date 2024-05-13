import * as Styles from "./styles";

export function AnimationHome() {
  return (
    <Styles.AnimationsCss>
      <div className="circle"></div>
      <svg
        className="triangle-svg"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        <polygon
          points="100,20 20,180 180,180"
          fill="transparent"
          stroke="#00aeff"
          stroke-width="1"
        />
      </svg>
    </Styles.AnimationsCss>
  );
}
