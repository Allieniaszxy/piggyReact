import "./Card.css";
const Card = () => {
  return (
    <div>
      <div className="card">
        <h1>Many ways to build your savings</h1>
        <p>Earn 12%-22% when you save with any of these Piggyvest plans.</p>
        <div className="card-grid">
          <div className="grid-items piggybank">
            <h1 className="title">Automated Savings</h1>
            <p className="about">
              Build a dedicated savings faster on your terms, automatically or
              manually
            </p>
            <div className="card-a">
              <img src="./right.png" alt="right arrow button" />
              <a href="#">Piggybanks</a>
            </div>
            <div className="card-img">
              <img src="./piggbank.png" alt="" />
            </div>
          </div>
          <div className="grid-items safelock">
            <h1 className="title">Fixed Savings</h1>
            <p className="about">
              Lock money for a fixed durations without having access to it
              manually. It's like having a custom fixed deposit
            </p>
            <div className="card-a">
              <img src="./right.png" alt="right arrow button" />
              <a href="#">Safelock</a>
            </div>
            <div className="card-img">
              <img src="./safelock.png" alt="" />
            </div>
          </div>
          <div className="grid-items target">
            <h1 className="title">Goal-oriented Savings</h1>
            <p className="about">
              Reach all your savings goal faster. Save towards multiple goals on
              your own or with a group
            </p>
            <div className="card-a">
              <img src="./right.png" alt="right arrow button" />
              <a href="#">Target Savings</a>
            </div>
            <div className="card-img">
              <img src="./targetsavings.avif" alt="" />
            </div>
          </div>
          <div className="grid-items naira">
            <h1 className="title">Flex Naira</h1>
            <p className="about">
              Save, transfer, manage amd organize and withdraw your money at any
              time.
            </p>
            <div className="card-a">
              <img src="./right.png" alt="right arrow button" />
              <a href="#">Flex Naira</a>
            </div>
            <div className="card-img">
              <img src="./flexnaira.avif" alt="" />
            </div>
          </div>
          <div className="grid-items dollar">
            <h1 className="title">Flex Dollar</h1>
            <p className="about">
              Save and grow your money in foreign currency like Dollars.
            </p>
            <div className="card-a">
              <img src="./right.png" alt="right arrow button" />
              <a href="#">Flex Dollar</a>
            </div>
            <div className="card-img">
              <img src="./flexdollar.avif" alt="" />
            </div>
          </div>
          <div className="grid-items house">
            <h1 className="title">HouseMoney</h1>
            <p className="about">Plan for your rent and household expenses.</p>
            <div className="card-a">
              <img src="./right.png" alt="right arrow button" />
              <a href="#">House Money</a>
            </div>
            <div className="card-img">
              <img src="./housemoney.png" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;
