import { Box, Container, Typography } from "@mui/material";
import AccountMenu from "../AccountMenu";
import React from "react";

const MainPage = () => {
  const [openForm, setOpenForm] = React.useState(false);
  const handleOnClick = (page) => {
    console.log("open");
    if (!openForm) {
      setOpenForm(true);
    } else {
      setOpenForm(false);
    }
  };

  return (
    <Container maxWidth="sm">
      <AccountMenu onClick={handleOnClick} />
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          React Skills test
        </Typography>
      </Box>
    </Container>
  );
};

export default MainPage;
