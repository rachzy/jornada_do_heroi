import { useModalStore } from "@/lib/zustand/modal/store";
import { useSelectorStore } from "@/lib/zustand/selector/store";
import { Backdrop, Box, Fade, Modal, ThemeProvider } from "@mui/material";
import Loader from "../../atoms/Loader";
import { modalTheme } from "@/themes/Modal.theme";

import { useState } from "react";
import ModalContainer from "@/components/atoms/ModalContainer";
import ModalFrameBox from "@/components/atoms/ModalFrameBox";
import ModalStats from "@/components/molecules/ModalStats";

export default function FightModal() {
  const [allowCustomColor, setAllowCustomColor] = useState(false);

  const modalActive = useModalStore((state) => state.active);
  const setModalActive = useModalStore((state) => state.setActive);
  const selectedMetahumans = useSelectorStore(
    (state) => state.selectedMetahumans
  );

  function handleClose() {
    setModalActive(false);
  }

  function safeRender() {
    if (selectedMetahumans.includes(null)) {
      return <Loader />;
    }

    return (
      <ModalContainer>
        <ModalFrameBox
          caption={selectedMetahumans[0]!.name}
          image={selectedMetahumans[0]!.images.md}
        />
        <ModalStats
          metahumans={selectedMetahumans}
          allowCustomColor={allowCustomColor}
          setAllowCustomColor={setAllowCustomColor}
        />
        <ModalFrameBox
          caption={selectedMetahumans[1]!.name}
          image={selectedMetahumans[1]!.images.md}
        />
      </ModalContainer>
    );
  }

  return (
    <Modal
      open={modalActive}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <ThemeProvider theme={modalTheme}>{safeRender()}</ThemeProvider>
    </Modal>
  );
}
