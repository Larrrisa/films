import MuiCard from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import CardActionArea from "@mui/material/CardActionArea";
import style from "./styles.module.css";
import { InfoIcon, StarFullIcon, StarIcon } from "../icons";
import { Film, Series } from "../../types/types";
import { Link } from "react-router";

interface CardProps {
  data: Film | Series;
  width?: number;
}

export default function Card({ data, width = 400 }: CardProps) {
  return (
    <MuiCard sx={{ width: width }} className={style.card}>
      <Link to={`/movie/${data.id}`}>
        <CardActionArea>
          <CardMedia
            component="img"
            className={style.cardMedia}
            image={`https://image.tmdb.org/t/p/w500${data.poster_path}`}
            alt={data.type === "film" ? data.title : data.name}
            sx={{ height: 321 }}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant="h3"
              component="div"
              className={style.cardTitle}
            >
              {data.type === "film" ? data.title : data.name}
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
      </Link>
    </MuiCard>
  );
}
