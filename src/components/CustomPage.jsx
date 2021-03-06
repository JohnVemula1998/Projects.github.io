import { Pagination } from "@mui/material";
import React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
    palette: {
        primary: {
          main: '#0971f1',
          darker: '#053e85',
        },
    },
});
const CustomPage = ({ setPage, numOfPages = 10 }) => {
  const handlePageChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        marginTop: 10,
      }}
    >
      <ThemeProvider theme={(darkTheme)}>
        <Pagination
          count={numOfPages}
          color='primary'
          onChange={(e) => handlePageChange(e.target.textContent)}
          hideNextButton
          hidePrevButton
        />
      </ThemeProvider>
    </div>
  );
};

export default CustomPage;
