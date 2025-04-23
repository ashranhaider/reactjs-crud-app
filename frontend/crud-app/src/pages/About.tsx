import { NavLink } from "react-router";

function About(){
    return (
      <>
        <h1 className="text-3xl font-bold mb-4">About Page</h1>
        <NavLink to="/" end>
          Back
        </NavLink>
      </>
    );
    
}

export default About;