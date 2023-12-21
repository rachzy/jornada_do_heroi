import { Box } from "@mui/material";
import classes from "./SearchInput.module.css";
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  MutableRefObject,
  useRef,
} from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function SearchInput(
  props: DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  >
) {
  const inputRef = useRef() as MutableRefObject<HTMLInputElement>;

  function handleIconClick() {
    inputRef.current.focus();
  }
  return (
    <Box
      sx={{
        display: "flex",
        width: 600,
        maxWidth: "100%",
        justifyContent: "center",
        alignSelf: "center",
        margin: "auto",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          backgroundColor: "rgba(217, 217, 217, 0.20)",
          borderRadius: 2,
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            marginLeft: 1.5,
            marginY: 0,
          }}
          onClick={handleIconClick}
        >
          <FaMagnifyingGlass fill={"rgba(255, 255, 255, 0.60)"} />
        </Box>
        <input ref={inputRef} className={classes.search} {...props} />
      </Box>
    </Box>
  );
}
