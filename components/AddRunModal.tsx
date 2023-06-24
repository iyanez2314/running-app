"use client";

import { useState } from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function AddRunModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [inputs, setInputs] = useState({
    distance: "",
    time: "",
    pace: "",
    date: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(inputs);
    handleClose();
  };

  return (
    <div>
      <Button
        className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition-all duration-300 font-thin"
        onClick={handleOpen}
      >
        Add Run
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <form onSubmit={handleSubmit} className="flex flex-col gap-y-5">
            <div>
              <h2>Distance</h2>
              <input
                onChange={handleChange}
                type="text"
                placeholder="2.35mi"
                name="distance"
              />
            </div>
            <div>
              <h2>Time</h2>
              <input
                onChange={handleChange}
                type="text"
                placeholder="30:24"
                name="time"
              />
            </div>

            <div>
              <h2>Pace</h2>
              <input
                onChange={handleChange}
                type="text"
                placeholder="7:38"
                name="pace"
              />
            </div>
            <div>
              <h2>Date</h2>
              <input
                onChange={handleChange}
                type="text"
                placeholder="10/10/2021"
                name="date"
              />
            </div>
            <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded transition-all duration-300 font-thin">
              Add Run
            </button>
          </form>
        </Box>
      </Modal>
    </div>
  );
}
