import { Link } from "react-router-dom";

const GIF_URL = "https://media2.giphy.com/media/xT9DPNfGVKRDrc29X2/giphy.gif"

/** Rendering of the Ouzo component. 
 *  
 *  App -> Ouzo
 * */

function Ouzo() {
  return (
    <div>
      <h1>Opaaaaaa... breaks plate.</h1>
      <img
        src={GIF_URL}
        alt="Grandpas drinking ouzo gif"
      />
      <p>{`Go back to the `}
          <Link to="/">
             vending machine
          </Link>
      </p>
    </div>
  );
}

export default Ouzo;