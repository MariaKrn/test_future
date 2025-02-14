import { Box, CircularProgress } from "@mui/material";

export const Loader = ({ content, isLoading }) => {
  return isLoading ? (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <CircularProgress />
    </Box>
  ) : (
    content
  );
};
