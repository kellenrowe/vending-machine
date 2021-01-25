import { Link } from "react-router-dom";
import './VendingMachine.css';

const GIF_URL = "https://i.imgur.com/Hd2Lm2A.gif";
const SAKE_IMG = "https://wa-shoku.info/wp/wp-content/uploads/2019/02/b5958e9b222f904f994367b779c30277.jpg";
const BOURBON_IMG = "https://post.greatist.com/wp-content/uploads/sites/2/2020/11/THUMBwhat-is-the-difference-between-whiskey-and-bourbon-chowhound-732x549.jpg";
const OUZO_IMG = "https://www.sheknows.com/wp-content/uploads/2018/08/greek-ouzo_gc1rpn.jpeg";

/** Rendering of the VendingMachine component. 
 * 
 *  VendingMachine links to { Ouzo, Sake, Bourbon }
 *  
 *  App -> route / -> VendingMachine
 * */

function VendingMachine() {
  return (
    <div>
      <h1>Vending Machine</h1>
      <img
        src={GIF_URL}
        alt="Seinfeld Vending Maching gif"
      />
      <div className="VendingMachine-Img-Container">
        <div className="VendingMachine-Btn">
          <h3> Ouzo </h3>
          <Link to="/ouzo">
              <img
                src={ OUZO_IMG }
                alt="ouzo"
              />
            </Link>
        </div>
        <div className="VendingMachine-Btn">
          <h3> Bourbon </h3>
          <Link to="/bourbon">
              <img
                src={ BOURBON_IMG }
                alt="bourbon"
              />
            </Link>
        </div>
        <div className="VendingMachine-Btn">
          <h3> Sake </h3>
          <Link to="/sake">
              <img
                src={ SAKE_IMG }
                alt="sake"
              />
            </Link>
        </div>
      </div>
    </div>
  );
}

export default VendingMachine;
