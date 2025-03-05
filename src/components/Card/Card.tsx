import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import style from "./styles.module.css";
import { InfoIcon, StarFullIcon, StarIcon } from "../icons";

export default function Card() {
  return (
    <MuiCard className={style.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          className={style.cardMedia}
          image="/static/images/cards/contemplative-reptile.jpg"
          alt="green iguana"
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            className={style.cardTitle}
          >
            Lizard
          </Typography>
          <div className={style.info}>
            <div>
              <StarFullIcon />
              <span>8.6</span>
            </div>
            <div>
              <StarIcon />
              <span>Rate</span>
            </div>
            <div>
              <InfoIcon />
            </div>
          </div>
        </CardContent>
      </CardActionArea>
    </MuiCard>
  );
}
