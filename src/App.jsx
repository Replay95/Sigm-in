import "./App.css";

import Card from "@mui/material/Card";
import { Box, Button, CardContent, TextField } from "@mui/material";
import { useState } from "react";

function App() {
  const [emailInput, setEmailInput]=useState("")
  const [password, setPassword]=useState("")
  const [errors, setErrors]=useState([])
  
  function handlsubmit(){
    const errorsArray = []

    if(emailInput === ""){
      errorsArray.push("email")
    }

    if(password === ""){
      errorsArray.push("password")
    }

    if(emailInput==="" || password === "") {
      setErrors(errorsArray);
      alert("未入力の項目があります")
      return;
    }

    setErrors([]);

    alert(`Email:${emailInput}\nPssword: ${password}`)
  }

  return (
    <>
      <Card>
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              paddingBottom: "2rem",
            }}
          >
            <TextField
              required
              error={errors.includes("email")}
              helperText={errors.includes("email") ? "入力してください" : ""}
              label="Email"
              variant="standard"
              sx={{ marginBottom: "1rem" }}
              onChange={(e) => setEmailInput(e.target.value)}
            />
            <TextField
              id="standard-password-input"
              required
              error={errors.includes("password")}
              helperText={errors.includes("password") ? "入力してください" : ""}
              label="Password"
              type="password"
              autoComplete="current-password"
              variant="standard"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          <Button onClick={handlsubmit} variant="contained">ログイン</Button>
        </CardContent>
      </Card>
    </>
  );
}

export default App;
