import "./Investment.css";

export default function Investment() {
  return (
    <div>
      <div className="Investment">
        <h1>Diverse ways to Invest</h1>
        <p>Grow your money and invest for your future confidently.</p>
        <div className="investment-cont">
          <div className="investment-talks">
            <h1 className="title">Earn up to 35% returns</h1>
            <p className="about">
              Invest securely and confidently on the go. Grow your money
              confidently by investing in pre-vetted investment opportunities.
            </p>
            <div className="investment-a">
              <img src="./right.png" alt="right arrow button" />
              <a href="#">Learn about investments</a>
            </div>
          </div>
          <div className="investment-img">
            <img src="./iphoneInvest.avif" alt="investment image" />
          </div>
        </div>
      </div>
    </div>
  );
}
