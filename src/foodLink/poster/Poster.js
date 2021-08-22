
import "./PosterStyle.css";

import {Link} from "react-router-dom"

function Poster(){
    return (
      <div className="poster-main-div">
        <p className="poster-main-div-txt">
          Order Tasty & Fresh <br /> Food.
          <br />
          <p className="poster-main-div-txt-1">
            anytime!
            <Link exact to="/auth/signup" style={{textDecoration: "none"}}>
              <button className="poster-main-div-txt-1-btn">
                CREATE ACCOUNT
              </button>
            </Link>
          </p>
        </p>
      </div>
    );
}
export default Poster