import FormControl from "@mui/material/FormControl";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import { useNavigate } from "react-router";
import { useState } from "react";

export default function Search() {
  const [textValue, setTextValue] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (event) => {
    event.preventDefault();
    navigate(`/?search=${textValue}`);
  };

  const handleOnChange = (event) => {
    setTextValue(event.target.value);
    navigate(`/?search=${event.target.value}`);
  };

  return (
    <FormControl
      onSubmit={handleOnSubmit}
      sx={{ width: { xs: "100%", md: "25ch" } }}
      variant="outlined"
    >
      <OutlinedInput
        size="small"
        id="search"
        placeholder="Buscando..."
        onChange={handleOnChange}
        sx={{ flexGrow: 1 }}
        startAdornment={
          <InputAdornment position="start" sx={{ color: "text.primary" }}>
            <SearchRoundedIcon fontSize="small" />
          </InputAdornment>
        }
        inputProps={{
          "aria-label": "search",
        }}
      />
      <input type="submit" value="Buscar" />
    </FormControl>
  );
}
