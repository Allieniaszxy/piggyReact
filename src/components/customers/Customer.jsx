import "./Customers.css";

export default function Customer() {
  return (
    <div>
      <div className="customers">
        <div className="customers-img">
          <img src="./fallbackImg.png" alt="customers image" />
        </div>
        <div className="customers-text">
          <div className="cus-img">
            <img src="./firstCus.jpeg" alt="" />
            <img src="./secondCus.jpeg" alt="" />
            <img src="./thirdCus.jpeg" alt="" />
            <img src="./fourthCus.jpeg" alt="" className="fourth" />
          </div>
          <h1>Join 5+ million people who save and invest with us</h1>
          <div className="cusBtn">
            <div className="cusI">
              <img src="./apple.png" alt="apple" />
              Get on Iphone
            </div>
            <div className="cusI">
              <img src="./google-play.png" alt="android" />
              Get on Iphone
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
