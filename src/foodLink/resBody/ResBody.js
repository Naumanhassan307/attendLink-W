import "./ResBodyStyle.css";
import UseResBody from "./UseResBody";
// import  MediaCard  from "./ResBodyCard";

import card from "../../assets/res/card.jpg"



import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { AiOutlineHeart } from "react-icons/ai";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

function ResBody(){
    const classes = useStyles();
    
    const [array] = UseResBody()
    return (
      <>
        <p className="resBody-main-div-tlt">Find Restaurent and many more!</p>
        <div className="resBody-main-div">
          <br />
          {array.map((item, idx) => {
            return (
              <div className="resBody-card">
                <Card className={classes.root} key={idx}>
                  <CardActionArea>
                    <CardMedia
                      className={classes.media}
                      image={card}
                      title={item.resName}
                    />
                    {/* <img
                              src={
                                "https://www.google.com/search?q=img+food&rlz=1C1CHBF_enPK891PK891&tbm=isch&source=iu&ictx=1&fir=Pi4nEbQqX4_zmM%252CRB__2DxE3HJa8M%252C_&vet=1&usg=AI4_-kQdvg_7F7lH2ndhZ3lF2a8OfzwceQ&sa=X&ved=2ahUKEwjWxqzKjMTyAhW6RUEAHYOFAM4Q9QF6BAgFEAE#imgrc=Pi4nEbQqX4_zmM"
                              }
                              width="100%"
                              height="100px"
                              title={item.resName}
                            /> */}
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="h2">
                        {item.resName}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                      >
                        {item.resDetail}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions>
                    <AiOutlineHeart size={40} />
                    <Button size="small" color="primary">
                      Learn More
                    </Button>
                  </CardActions>
                </Card>
              </div>
            );
          })}
        </div>
      </>
    );
}
export default ResBody

