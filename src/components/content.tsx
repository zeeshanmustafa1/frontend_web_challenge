import {
  Typography,
  IconButton,
  Autocomplete,
  Divider,
  TextField,
} from "@mui/material";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import styles from "./content.module.css";

const Content = () => {
  const options = [
    { label: "Option 1" },
    { label: "Option 2" },
    { label: "Option 3" },
    { label: "Option 4" },
    { label: "Option 5" },
  ];

  return (
    <div style={{ backgroundColor: "rgba(58, 57, 64, 1)" }}>
      <div className={styles.heading}>
        <Typography variant="h5">Content Type</Typography>
        <Typography variant="body1">
          Choose a content type that best fits your needs.
        </Typography>
      </div>
      <Divider />
      <div className={styles.buttons}>
        <Typography variant="h6">Choose a Type</Typography>
        <div className={styles.buttonGroup}>
          {options.map((option, index) => (
            <IconButton key={index} className={styles.button}>
              {index + 1}
            </IconButton>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Content;
