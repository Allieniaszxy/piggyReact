import "./Main.css";
function Main() {
  return (
    <div>
      <div className="Main">
        <div className="mainText">
          <div className="report">
            <img src="./apple.png" alt="flower" />
            <h3>The 2024 PiggyVest Savings Report</h3>
          </div>
          <h1>The Better Way to Save & Invest</h1>
          <p className="main-p">
            Piggyvest helps over 5 million customers achieve their financial
            goals by helping them save and invest with ease.
          </p>
          <div className="mainBtn">
            <div className="iphone">
              <img src="./apple.png" alt="apple" />
              Get on Iphone
            </div>
            <div className="iphone">
              <img src="./google-play.png" alt="android" />
              Get on Iphone
            </div>
          </div>
        </div>
        <div className="mainImage">
          <img src="./hero_image.png" alt="hero-image" />
        </div>
      </div>
    </div>
  );
}
export default Main;
