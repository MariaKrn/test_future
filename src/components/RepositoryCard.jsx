import { Box, Card } from "@mui/material";

export const RepositoryCard = ({ repo }) => {
  debugger;
  return (
    <Card>
      <Box>{repo.name}</Box>
      <Box>{repo.description}</Box>
      <Box>{repo.url}</Box>
      <Box>{repo.stargazers_count}</Box>
      <Box>{repo.updated_at}</Box>
    </Card>
  );
};
