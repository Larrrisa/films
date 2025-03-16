import { TextField, Button, Typography } from "@mui/material";
import style from "./styles.module.css";

export function SignUpPage() {
  return (
    <div className={style.container}>
      <Typography variant="h1">Sign Up</Typography>
      <form className={style.form}>
        <TextField label="Full name" type="text" />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <Button type="submit">Sign Up </Button>
      </form>
    </div>
  );
}
