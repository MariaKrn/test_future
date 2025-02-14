import { Box } from "@mui/material";
import { AddressBar } from "./AddressBar";
import { RepositoryCard } from "./RepositoryCard";
import { useEffect, useState } from "react";
import { getUserRepositories } from "../api/api";
import { Loader } from "./Loader";
import { Error } from "./Error";
import { ScrollEventTrigger } from "./ScrollEventTrigger";

export const MainContent = () => {
  const [userName, setUserName] = useState();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const [pageNumber, setPageNumber] = useState(0);

  useEffect(() => {
    if (userName) {
      setData([]);
      setIsLoading(true);
      getUserRepositories(userName, pageNumber).then((d) => {
        if (d === "Error") {
          setOpen(true);
          setIsLoading(false);
        } else {
          setIsLoading(false);
          setData(d);
        }
      });
    }
  }, [userName]);

  const incrementPage = () => {
    setPageNumber(pageNumber + 1);
  };

  return (
    <Box>
      <AddressBar userName={userName} setUserName={setUserName} />
      <Loader
        isLoading={isLoading}
        content={
          <Box
            style={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            {data.map((repo) => {
              return <RepositoryCard repo={repo} />;
            })}
          </Box>
        }
      />
      <Error open={open} setOpen={setOpen} />
      <ScrollEventTrigger incrementPage={incrementPage} />
    </Box>
  );
};
