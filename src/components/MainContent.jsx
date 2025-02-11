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
      setData(getUserRepositories(userName));
    }
  }, [userName]);

  return (
    <Paper>
      <AddressBar userName={userName} setUserName={setUserName} />
      {/*todo list for repos*/}
      <RepositoryCard />
    </Paper>
  );
};
