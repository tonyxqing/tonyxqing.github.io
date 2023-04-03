import {Box, Typography, TextField, Button} from "@mui/material";
import React from "react";
export default function Contact() {
  const [message, setMessage] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const handleMessage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <Box
        component="form"
        sx={{
          maxWidth: "100%",
          width: 500,
          color: "text.primary",
        }}
      >
        <Typography
        id="Contact"
          sx={{
            whiteSpace: "nowrap",
            textAlign: "end",
            fontWeight: "bold",
            color: "text.primary",
          }}
          variant="h6"
        >
          Send me a message 📬
        </Typography>

        <TextField
          fullWidth
          size="small"
          sx={{paddingBottom: 1, color: "text.secondary"}}
          id="standard"
          variant="filled"
          label="Name"
          placeholder="Borat"
        />

        <TextField
          fullWidth
          size="small"
          sx={{paddingBottom: 1}}
          id="outlined"
          variant="filled"
          label="Email"
          placeholder="boratsagdiev.NOT@email.com"
          value={email}
          onChange={handleEmail}
        />

        <TextField
          fullWidth
          multiline
          sx={{paddingBottom: 1}}
          rows={8}
          id="outlined"
          variant="filled"
          label="Message"
          placeholder="Your message here..."
          value={message}
          onChange={handleMessage}
        />
        <Button
          fullWidth
          color="inherit"
          variant="outlined"
          target="_top"
          rel="noopener noreferrer"
          href={`mailto:tony.qing+website@gmail.com?cc=${email}&subject=&body=${message}`}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
