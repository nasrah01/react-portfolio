import BgVideo from "Images/1200.mp4";

const VideoBG = () => {
  return (
    <>
      <video autoPlay loop muted className="bg-vid">
        <source src={BgVideo} type="video/mp4" />
      </video>
    </>
  );
};

export default VideoBG;
