import bgTopo from "../../assets/images/BG_TOPO 1.png";

export const Intro = () => {
  return (
    <div className="intro-container">
      <div className="intro-header">
        <div className="intro-text">
          <h1>Soundbar</h1>
          <p>com Subwoofer Wireless Pulse</p>
        </div>
        <img src={bgTopo} alt="bg-topo-01" />
        <div className="text-containers">
          <div className="first row">
            <p>
              Com a <strong>Soundbar com Subwoofer Wireless Pulse,</strong> você
              vai levar para a sua sala o impactante som do cinema de forma
              prática, sem ocupar espaço e sem cabos. Reúna a família e amigos e
              desfrute!
            </p>
          </div>
          <div className="second row">
            <h2>Soundbar com Subwoofer Wireless Pulse</h2>
            <p>Transforme um simples som em uma potência.</p>
          </div>
          <div className="tertiary row">
            <p>
              A Soundbar e o Subwoofer Wireless Pulse oferecem, juntos, uma
              experiência de áudio profunda e poderosa. Um efeito que envolve
              todo o ambiente!
            </p>
            <p>
              Sem complicações! Conecte sua Soundbar com Subwoofer Wireless
              Pulse, por meio das conexões bluetooth, auxiliar, coaxial, óptica
              e HDMI ARC, para assistir filmes, séries e outros tipos de
              entretenimento ou escute suas músicas preferidas pela porta USB. A
              Soundbar com Subwoofer Wireless Pulse é discreta, moderna e
              combina com qualquer decoração.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
