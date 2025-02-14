import { Box, Card } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";

export const RepositoryCard = ({ repo }) => {
  const formatDate = repo.updated_at.split("T")[0];

  return (
    <Card
      style={{
        width: "450px",
        marginLeft: "20px",
        marginRight: "20px",
        marginTop: "50px",
        padding: "15px",
      }}
    >
      <Box
        fontWeight="fontWeightMedium"
        style={{
          display: "flex",
          justifyContent: "center",
          paddingBottom: "10px",
        }}
      >
        {repo.name}
      </Box>
      <Box style={{ display: "flex", paddingBottom: "10px" }}>
        <Box style={{ marginRight: "3px" }}>Описание: </Box>
        <Box>{repo.description}</Box>
      </Box>
      <Box style={{ display: "flex", paddingBottom: "10px" }}>
        <Box style={{ marginRight: "3px" }}>Ссылка: </Box>
        <Box>{repo.html_url}</Box>
      </Box>
      <Box
        style={{
          display: "flex",
          justifyContent: "space-between",
          paddingBottom: "10px",
        }}
      >
        <Box>{formatDate}</Box>
        <Box style={{ display: "flex" }}>
          <Box style={{ display: "flex", alignItems: "center" }}>
            {repo.stargazers_count}
          </Box>
          <StarIcon
            style={{ color: "yellow" }}
            name="size-large"
            size="large"
          />
        </Box>
      </Box>
    </Card>
  );
};
