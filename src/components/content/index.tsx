import { InfoCard } from "../../ui-library/info-card";
import { InfoCards } from "./InfoCards";

import antenna from "../../assets/images/info/antenna 1.png";
import bluetooth from "../../assets/images/info/bluetooth 1.png";
import volume from "../../assets/images/info/volume 1.png";
import molecular from "../../assets/images/info/molecular 1.png";
import cabos from "../../assets/images/info/cabos 1.png";

export const Content = () => {
  return (
    <div className="content-container">
      <div className="content-infos">
        <InfoCard image={antenna} text="Subwoofer Wireless" />
        <InfoCard image={bluetooth} text="Conexão bluetooth" />
        <InfoCard image={volume} text="300 W RMS potência total" />
        <InfoCard image={molecular} text="2.1 canais" />
        <InfoCard
          image={cabos}
          text="Entradas auxiliar (AUX) HDMI (ARC) óptico USB 2.0 | coaxial"
        />
      </div>
      <div className="content-quality">
        <h2>Maior qualidade sonora que estimula os seus sentidos</h2>
        <p>
          A interação entre a Soundbar e o Subwoofer entrega uma potência de{" "}
          <strong>300 W RMS,</strong> com 2.1 canais. São dois alto-falantes
          integrados e sem a necessidade de configurar diversas caixas de som em
          sua sala. Acompanhe os jogos de futebol e veja o show da sua banda
          preferida com mais realismo e emoção.
        </p>
        <p>
          E para aprimorar ainda mais os efeitos sonoros, possui três modos de
          equalização: músicas, filmes e notícias. É um ajuste que se adequa em
          distintos conteúdos e, assim, cria um som virtual surround que garante
          maior nível de imersão.
        </p>
      </div>
      <InfoCards />
      <div className="content-guarantee">
        <h2>Garantia</h2>
        <p>
          A Soundbar com Subwoofer Wireless conta com a alta qualidade da marca
          Pulse e disponibiliza <strong>3 anos de garantia</strong> contra
          defeitos de fabricação.
        </p>
      </div>
    </div>
  );
};
