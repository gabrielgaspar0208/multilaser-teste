interface InfoBoxProps {
  text: string;
  image: string;
}

export const InfoBox = ({ text, image }: InfoBoxProps) => {
  return (
    <div className="info-box-container">
      <img src={image} alt="" />
      <p>{text}</p>
    </div>
  );
};
