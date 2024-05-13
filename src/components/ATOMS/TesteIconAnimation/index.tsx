import { useGlobal } from "@/provider/Global";
import * as Styles from "./styles";

export function TesteIconAnimation() {
  const { visibleModal, setVisibleModal } = useGlobal();

  const toggleVisibleModal = () => {
    setVisibleModal(!visibleModal);
  };

  return (
    <Styles.Section>
      <input
        type="checkbox"
        name="icon"
        id="icon"
        checked={visibleModal}
        onClick={toggleVisibleModal}
      />
      <label htmlFor="icon">
        <div></div>
        <div></div>
        <div></div>
      </label>
    </Styles.Section>
  );
}
