import styled from "styled-components"
import Tags from "./Tags"
import Titulo from "../Titulo"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
  display: flex;
  gap: 24px;
`

const SecaoFluida = styled.section`
  flex-grow: 1;
`

const ImagensContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    gap: 24px 50px;
`

const Galeria = ({ imagens = [], aoFotoSelecionada, aoAlternarFavorito, aoAlternarTag }) => {
  return (
    <>
      <Tags aoAlternarTag={aoAlternarTag} />
      <GaleriaContainer>

        <SecaoFluida>
          <Titulo>Navegue pela galeria...</Titulo>
          <ImagensContainer>
            {imagens.map(imagem => (
              <Imagem
                aoAlternarFavorito={aoAlternarFavorito}
                aoZoomSolicitado={aoFotoSelecionada}
                key={imagem.id}
                foto={imagem}
              />
            ))}
          </ImagensContainer>
        </SecaoFluida>

        <Populares />
      </GaleriaContainer>
    </>
  )
}

export default Galeria