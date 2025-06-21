import "./Video.css";
export default function Video() {
  return (
    <div>
      <div className="video-container">
        <h1>Meet Our Saver of the Month</h1>
        <p>
          Every month, we shine a spotlight on one saver, asking them about
          their savings culture and how Piggyvest has helped them.
        </p>
        <div className="videos">
          <iframe
            width="100%"
            height="auto"
            border-radius="20px"
            src="https://youtu.be/2EnGMGxKuII?si=KWJuyViKcivxouNa"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
