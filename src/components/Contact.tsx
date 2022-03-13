import { Box, Typography, TextField, Button } from "@mui/material";

export default function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "80vh",
        padding: 1,
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
          sx={{ paddingBottom: 1, color: "text.secondary" }}
          id="standard"
          variant="filled"
          label="Name"
          placeholder="Borat"
        />

        <TextField
          fullWidth
          size="small"
          sx={{ paddingBottom: 1 }}
          id="outlined"
          variant="filled"
          label="Email"
          placeholder="boratsagdiev.NOT@email.com"
        />

        <TextField
          fullWidth
          multiline
          sx={{ paddingBottom: 1 }}
          rows={8}
          id="outlined"
          variant="filled"
          label="Message"
          placeholder="Your message here..."
          onClick={() => alert("this box is a WIP")}
        />
        <Button
          fullWidth
          color="inherit"
          variant="outlined"
          onClick={() => alert("this box is a WIP")}
        >
          Send
        </Button>
      </Box>
    </Box>
  );
}
