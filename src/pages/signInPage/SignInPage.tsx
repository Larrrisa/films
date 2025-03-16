import { TextField, Button, Typography } from "@mui/material";
import style from "./styles.module.css";

export function SignInPage() {
  return (
    <div className={style.container}>
      <Typography variant="h1">Sign In</Typography>
      <form className={style.form}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
        />
        <TextField label="Password" type="password" />
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  );
}
