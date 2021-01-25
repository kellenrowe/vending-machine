import { Link } from "react-router-dom";

const GIF_URL = "https://media1.giphy.com/media/mZQhT9Ey4tpgA/giphy.gif"

/** Rendering of the Bourbon component. 
 *  
 *  App -> Bourbon
 * */

function Bourbon() {
  return (
    <div>
      <h1>Neat</h1>
      <img
        src={GIF_URL}
        alt="30Rock bourbon gif"
      />
      <p>{`Go back to the `}
          <Link to="/">
             vending machine
          </Link>
      </p>
    </div>
  );
}

export default Bourbon;