import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {IconButton} from "@mui/material";
import Button from "@mui/material/Button";
export default function PortfolioItem({
  type,
  title,
  href,
  desc,
  image,
  alt,
  techStack,
}: {
  type: string;
  title: string;
  href?: string;
  desc: string;
  image: string;
  alt: string;
  techStack?: string[];
}) {
  return (
    <Box
      sx={{
        justifyContent: "center",
        alignText: "center",
        paddingTop: 2,
      }}
    >
      <Card
        sx={{
          padding: 1,
          backgroundColor: "primary.main",
        }}
      >
        <Typography align="center" color="text.secondary" variant="h6">
          {title}
        </Typography>
        <CardMedia component="img" image={image} alt={alt} />
        <CardContent>
          <Typography align="center" paragraph color="text.secondary">
            {desc}
          </Typography>
          {href ? (
            <Button
              fullWidth
              color="secondary"
              variant="outlined"
              target="_blank"
              href={href}
            >
              visit site
            </Button>
          ) : (
            <Button fullWidth disabled variant="outlined">
              Not Hosted
            </Button>
          )}
        </CardContent>
      </Card>
    </Box>
  );
}
