import "./Security.css";

function Security() {
  return (
    <div>
      <div className="security">
        <img src="./securitylock.svg" alt="securitylock" />
        <div className="security-text">
          <h3>Your security is our priority</h3>
          <p>
            PiggyVest uses the highest level of Internet Security and it is
            secured by 256 bits SSL security encryption to ensure that your
            information is completely protected from fraud.
          </p>
          <div className="security-a">
            <img src="./right.png" alt="right arrow button" />
            <a href="#">More on our security measures</a>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Security;
