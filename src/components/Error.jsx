import { Alert, Snackbar } from "@mui/material";

export const Error = ({ open, setOpen }) => {
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };
  return (
    <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity="error"
        variant="filled"
        sx={{ width: "100%" }}
      >
        Упс! Что-то пошло не так. Проверьте введённые данные и попробуйте снова.
      </Alert>
    </Snackbar>
  );
};
