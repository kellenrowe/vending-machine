import { Link } from "react-router-dom";

const GIF_URL = "https://media.tenor.com/images/5991f21d13b87d3dc1d733df99d75ed4/tenor.gif"

/** Rendering of the Sake component. 
 *  
 *  App -> Sake
 * */

function Sake() {
  return (
    <div>
      <h1>Hot or Cold?</h1>
      <img
        src={GIF_URL}
        alt="Cat drinking sake gif"
      />
      <p>{`Go back to the `}
          <Link to="/">
             vending machine
          </Link>
      </p>
    </div>
  );
}

export default Sake;
