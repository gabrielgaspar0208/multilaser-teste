import { InfoCard } from "../../ui-library/info-card";
import soundBarWaves from "../../assets/images/content/soundbar+waves_2 1.png";
import firstCardImg from "../../assets/images/content/SP604_02 2 1.png";
import secondCardImg from "../../assets/images/content/devices 1.png";
import thirdCardImg from "../../assets/images/content/SP604_03 1 (1).png";

export const InfoCards = () => {
  return (
    <div className="info-cards">
      <div>
        <img src={soundBarWaves} alt="" />
      </div>
      <div className="first-row">
        <InfoCard
          title="Subwoofer Wireless"
          subtitle="Muito mais marcante e funcional"
          text="O Subwoofer Wireless potencializa os tons mais graves amplificando as trilhas sonoras e os efeitos de áudio típicos dos filmes de ação, deixando-os ainda mais pulsantes. E por não ter fios, sua sala fica mais organizada."
          image={firstCardImg}
        />
      </div>
      <div className="second-row">
        <InfoCard
          title="Alta conectividade"
          text="Apresenta muitas possibilidades de conexões como auxiliar, coaxial, óptica, HDMI ARC ou porta USB. Use seu aparelho de CD, DVD, videogame, entre outros e aproveite o seu momento. <br> Por meio da conexão Bluetooth 5.0, curta um som intenso direto do seu celular, tablet e outros equipamentos de forma rápida."
          image={secondCardImg}
        />
      </div>
      <div className="third-row">
        <InfoCard
          title="Inovador e de fácil instalação"
          text="Com o suporte, você pode pendurar a <strong>Soundbar com Subwoofer Wireless Pulse</strong> na parede da sua casa para otimizar espaço ou na estante."
          image={thirdCardImg}
        />
      </div>
    </div>
  );
};
