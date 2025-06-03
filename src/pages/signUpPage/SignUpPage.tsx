import { Button, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";

import style from "./styles.module.css";

interface SignUpFormData {
  fullName: string;
  email: string;
  password: string;
}

export function SignUpPage() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<SignUpFormData>();
  const [error, setError] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  const onSubmit = (data: SignUpFormData): void => {
    setError("");

    const existingUsers: SignUpFormData[] = JSON.parse(
      localStorage.getItem("users") || "[]"
    );
    const emailExists = existingUsers.some((user) => user.email === data.email);

    if (emailExists) {
      setError("Email already registered");
      return;
    }

    const updatedUsers = [...existingUsers, data];
    localStorage.setItem("users", JSON.stringify(updatedUsers));

    // Save current user with password in localStorage
    localStorage.setItem(
      "currentUser",
      JSON.stringify({
        fullName: data.fullName,
        email: data.email,
        password: data.password,
        isLogged: true,
      })
    );

    // Set authentication status
    localStorage.setItem("isAuthenticated", "true");

    setSuccess(true);
    reset();
  };

  return (
    <div className={style.container}>
      <Typography variant="h1">Sign Up</Typography>
      {success && (
        <Typography color="success" sx={{ marginY: 2 }}>
          Registration successful! You can now sign in.
        </Typography>
      )}
      {error && (
        <Typography color="error" sx={{ marginY: 2 }}>
          {error}
        </Typography>
      )}
      <form className={style.form} onSubmit={handleSubmit(onSubmit)}>
        <TextField
          label="Full name"
          type="text"
          fullWidth
          margin="normal"
          error={!!errors.fullName}
          helperText={errors.fullName?.message}
          {...register("fullName")}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.email}
          helperText={errors.email?.message}
          {...register("email")}
        />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          fullWidth
          margin="normal"
          error={!!errors.password}
          helperText={errors.password?.message}
          {...register("password")}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ marginTop: 2 }}
        >
          Sign Up
        </Button>
      </form>
    </div>
  );
}
