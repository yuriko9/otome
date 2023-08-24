import "./StarModal.css";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import StarTable from "./StarTable";
import { useState } from "react";
import { iFaCaretRight } from "./icon/getIcon";

// modalのスタイル
const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 700,
  bgcolor: "background.paper",
  border: "2px solid #bc9f65",
  boxShadow: 24,
  p: 4,
  textAlign: "center",
};

// Modalの中身と表示制御
export default function StarModal({ star }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <li onClick={handleOpen}>
        {iFaCaretRight}
        {star.nameJp}
      </li>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <StarTable star={star} />
        </Box>
      </Modal>
    </>
  );
}
