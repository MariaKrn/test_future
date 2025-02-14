import { TextField } from "@mui/material";
import { useEffect, useState } from "react";
import { useDebounce } from "../utils/useDebounce";

export const AddressBar = ({ userName, setUserName }) => {
  const [searchVal, setSearchVal] = useState("");
  const debounceValue = useDebounce(searchVal, 1000);

  useEffect(() => {
    setUserName(searchVal);
  }, [debounceValue]);

  const handleChange = (e) => {
    setSearchVal(e.target.value);
  };

  return (
    <TextField
      style={{
        display: "flex",
        justifyContent: "center",
        marginLeft: "20%",
        marginRight: "20%",
        marginTop: "5%",
        marginBottom: "1%",
      }}
      id="filled-search"
      label="Search field"
      type="search"
      variant="filled"
      onChange={handleChange}
    />
  );
};
