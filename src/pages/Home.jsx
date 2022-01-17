import landingImage from "../images/shoe.png";

function Home() {
  return (
    <>
      <div className="container">
        <section id="home-content">
          <div id="landing-welcome">
            <h1>Sneaker Hads</h1>
            <p>
              Your search for the best place to get the latest sneaker drops is
              over! Sneaker Hads is your new one stop shop for any and every
              sneaker drop. If you’re ready for new drop opportunities and early
              access to exclusive drops, sign up today!
            </p>
            <button>Sign Up</button>
          </div>
          <div id="landing-image">
            <div>
              <img src={landingImage} alt="landing shoe" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
