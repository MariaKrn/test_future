import { Paper } from "@mui/material";
import { AddressBar } from "./AddressBar";
import { RepositoryCard } from "./RepositoryCard";
import { useEffect, useState } from "react";
import { getUserRepositories } from "../api/api";

export const MainContent = () => {
  const [userName, setUserName] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    if (userName) {
      getUserRepositories(userName).then(setData);
    }
  }, [userName]);

  return (
    <Paper>
      <AddressBar userName={userName} setUserName={setUserName} />
      {/*todo list for repos*/}
      {data.map((repo) => {
        return <RepositoryCard repo={repo} />;
      })}
    </Paper>
  );
};
