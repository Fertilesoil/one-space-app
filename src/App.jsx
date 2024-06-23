import styled from "styled-components";
import EstilosGlobais from "./componentes/EstilosGlobais";
import Cabecalho from "./componentes/Cabecalho";
import BarraLateral from "./componentes/BarraLateral";
import Banner from "./componentes/Banner";
import bannerBackground from "./assets/banner.png";
import Galeria from "./componentes/Galeria";

import fotos from "./fotos.json";
import { useState } from "react";
import ModalZoom from "./componentes/ModalZoom";

const FundoGradiente = styled.div`
  background-image: linear-gradient(174.61deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`

const AppContainer = styled.div`
  width: 1440px;
  margin: 0 auto;
  max-width: 100%;
`

const MainContainer = styled.main`
  display: flex;
  gap: 24px;
`

const ConteudoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const App = () => {

  const [fotosGaleria, setFotosGaleria] = useState(fotos);
  const [fotoSelecionada, setFotoSelecionada] = useState(null);
  const [tag, setTag] = useState(null);

  const aoAlternarTag = (tag) => {
    switch (tag) {
      case 1:
        setFotosGaleria(fotosGaleria.filter(foto => foto.tagId === tag));
        break;

      case 2:
        setFotosGaleria(fotosGaleria.filter(foto => foto.tagId === tag));

        break;

      case 3:
        setFotosGaleria(fotosGaleria.filter(foto => foto.tagId === tag));

        break;

      case 4:
        setFotosGaleria(fotosGaleria.filter(foto => foto.tagId === tag));

        break;

      default:
        setFotosGaleria(fotos);
    }
  }

  const aoAlternarFavorito = (foto) => {
    if (foto.id === fotoSelecionada?.id) {
      setFotoSelecionada({
        ...fotoSelecionada,
        favorita: !fotoSelecionada.favorita
      });
    }

    setFotosGaleria(fotosGaleria.map(fotoGaleria => {
      return {
        ...fotoGaleria,
        favorita: fotoGaleria.id === foto.id ? !foto.favorita : fotoGaleria.favorita
      }
    }))
  }

  return (
    <FundoGradiente>
      <EstilosGlobais />

      <AppContainer>
        <Cabecalho />

        <MainContainer>
          <BarraLateral />

          <ConteudoGaleria>
            <Banner
              texto={`A galeria mais completa de fotos do espaço!`}
              backgroundImage={bannerBackground}
            />
            <Galeria
              aoAlternarTag={aoAlternarTag}
              aoAlternarFavorito={aoAlternarFavorito}
              aoFotoSelecionada={(foto) => setFotoSelecionada(foto)}
              imagens={fotosGaleria}
            />
          </ConteudoGaleria>

        </MainContainer>

      </AppContainer>

      <ModalZoom
        foto={fotoSelecionada}
        aoFechar={() => setFotoSelecionada(null)}
        aoAlternarFavorito={aoAlternarFavorito}
      />
    </FundoGradiente>
  )
}

export default App
