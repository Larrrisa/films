import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import style from "./styles.module.css";
import { InfoIcon, StarFullIcon, StarIcon } from "../icons";
import { Film } from "../../types/types";

interface CardProps {
  data: Film;
}

export default function Card({ data }: CardProps) {
  return (
    <MuiCard
      sx={{ backgroundColor: "#1a1a1a", maxWidth: 228 }}
      className={style.card}
    >
      <CardActionArea>
        <CardMedia
          component="img"
          className={style.cardMedia}
          image="/static/images/cards/contemplative-reptile.jpg"
          alt=""
          sx={{ height: 321 }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h3"
            component="div"
            className={style.cardTitle}
          >
            {data.title}
          </Typography>
          <div className={style.info}>
            <div>
              <StarFullIcon />
              <span>{data.vote_average}</span>
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
