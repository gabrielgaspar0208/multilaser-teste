interface InfoCardProps {
  title?: string;
  subtitle?: string;
  text?: string;
  image: string;
}

export const InfoCard = ({ title, subtitle, text, image }: InfoCardProps) => {
  return (
    <div className="info-box-container">
      <img src={image} alt="" />
      <div className="text-box">
        <h2>{title}</h2>
        <h3>{subtitle}</h3>
        <p>{text}</p>
      </div>
    </div>
  );
};
