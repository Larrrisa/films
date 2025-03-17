import { TextField, Button, Typography } from "@mui/material";
import style from "./styles.module.css";

import { useForm } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface SignInFormData {
  email: string;
  password: string;
}

export function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const onSubmit = (data: SignInFormData): void => {
    setError("");

    const users = JSON.parse(localStorage.getItem("users") || "[]");
    const user = users.find((user: any) => user.email === data.email);

    if (!user || user.password !== data.password) {
      setError("Invalid email or password");
      return;
    }

    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        fullName: user.fullName,
        email: user.email,
        isLogged: true,
      })
    );

    localStorage.setItem("isAuthenticated", "true");

    navigate("/");
  };

  return (
    <div className={style.container}>
      <Typography variant="h1">Sign In</Typography>
      {error && (
        <Typography color="error" sx={{ marginY: 2 }}>
          {error}
        </Typography>
      )}
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email", { required: "Email is required" })}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password", { required: "Password is required" })}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Sign In
        </Button>
      </form>
    </div>
  );
}
