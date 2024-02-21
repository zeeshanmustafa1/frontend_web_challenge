import {Button, Toolbar} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import {ThemeProvider} from '@mui/material/styles';
import {theme} from "@/constants/color";

const Footer = () => {
  return (
    <ThemeProvider theme={theme}>
      <Toolbar
        style={{
          backgroundColor: "#09090D",
          display: "flex",
          height: "111px",
          justifyContent: "space-between",
        }}
      >
        <Button variant="outlined" color="primary">
          Back
        </Button>
        <Button variant="outlined" endIcon={<SendIcon/>}>
          Send
        </Button>
      </Toolbar>
    </ThemeProvider>
  );
};

export default Footer;
