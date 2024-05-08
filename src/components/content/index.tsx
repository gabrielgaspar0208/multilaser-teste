import { InfoBox } from "../../ui-library/info-box/InfoBox";

import antenna from "../../assets/images/antenna 1.png";

export const Content = () => {
  return (
    <div className="content-container">
      <div className="content-infos">
        <InfoBox image={antenna} text="Subwoofer Wireless" />
        <InfoBox image={antenna} text="Conexão bluetooth" />
        <InfoBox image={antenna} text="300 W RMS potência total" />
        <InfoBox image={antenna} text="2.1 canais" />
        <InfoBox
          image={antenna}
          text="Entradas auxiliar (AUX) HDMI (ARC) óptico USB 2.0 | coaxial"
        />
      </div>
    </div>
  );
};
