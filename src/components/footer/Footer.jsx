import "./Footer.css";

export default function Footer() {
  return (
    <div>
      <div className="Footer">
        <div className="foot1">
          <img src="./piggyvestlogo.svg" alt="logo" />
          <img
            src="./compliance.avif"
            alt="compliance"
            className="compliance"
          />
        </div>
        <div className="foot2">
          <ul>
            <li>Products</li>
            <li>Piggybank</li>
            <li>Invest</li>
            <li>Safelock </li>
            <li>Target Savings</li>
            <li>Flex Naira</li>
            <li>Flex Dollar</li>
          </ul>
        </div>
        <div className="foot3">
          <ul>
            <li>Company</li>
            <li>About</li>
            <li>FAQs</li>
            <li>Blog</li>
          </ul>
        </div>
        <div className="foot4">
          <ul>
            <li>Legal</li>
            <li>Terms</li>
            <li>Privacy</li>
            <li>Security</li>
          </ul>
        </div>
        <div className="foot5">
          <div className="socials">
            <img src="./facebook.svg" alt="" />
            <img src="./instagram.svg" alt="" />
            <img src="./twitter.svg" alt="" />
            <img src="./tiktok.svg" alt="" />
            <img src="./youtube.svg" alt="" />
          </div>
          <h5>
            Tesmot house, Abdulrahman Okene close, Victoria Island, Lagos,
            Nigeria.
          </h5>
          <p>contact@piggyvest.com</p>
          <p>+2347009339339</p>
        </div>
      </div>
      <div className="bottomFeeder">
        <h6>
          Piggyvest (formerly piggybank.ng) is the leading online savings &
          investing platform in Nigeria. For over 9 years, our customers have
          saved and invested billions of Naira that they would normally be
          tempted to spend.
        </h6>
        <h5>2016 - 2025 PiggyTech Global Limited - RC 1405222</h5>
      </div>
    </div>
  );
}
