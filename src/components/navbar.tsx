import { AppBar, Toolbar, Typography, Avatar, IconButton } from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import styles from "./navbar.module.css";

const arrowButton = {
  backgroundColor: "rgba(58, 57, 64, 0.3)",
  borderRadius: "8px",
  width: "47px",
  height: "47px",
};

export default function Navbar() {
  return (
    <AppBar
      position="static"
      style={{
        backgroundColor: "#09090D",
        height: "111px",
        justifyContent: "center",
      }}
    >
      <Toolbar className={styles.navbar}>
        <div className="flex items-center">
          <IconButton
            edge="start"
            color="inherit"
            style={arrowButton}
            aria-label="back"
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <div className="ml-2">
            <Typography variant="h6" component="div">
              Media Mangement
            </Typography>
            <Typography>Draft Campaign</Typography>
          </div>
        </div>
        <div className="flex justify-between">
          <div>
            <Typography
              style={{
                fontSize: "16px",
                fontFamily: "Poppins",
                fontWeight: "500",
                textAlign: "right",
              }}
            >
              User Name
            </Typography>
            <a style={{ color: "#FF7DFF", textDecoration: "underline" }}>
              Change Profile
            </a>
          </div>
          <Avatar
            alt="User Name"
            src="/static/images/avatar/1.jpg"
            className="ml-2 mt-1"
          />
        </div>
      </Toolbar>
    </AppBar>
  );
}
