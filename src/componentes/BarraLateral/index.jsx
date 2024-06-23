import styled from "styled-components"
import ItemNavegacao from "../ItemNavegacao"

const ListaEstilizada = styled.ul`
list-style: none;
padding: 0;
margin: 0;
width: 212px;

a {
  text-decoration: none;
  color: white;
}
`


const BarraLateral = () => {

  const caminho = `/icones/`;

  return (
    <aside>
      <nav>

        <ListaEstilizada>

          <ItemNavegacao
            iconeAtivo={`/icones/home-ativo.png`}
            iconeInativo={`/icones/home-inativo.png`}
            ativo
          >
            Inicio
          </ItemNavegacao>

          <ItemNavegacao
            iconeAtivo={`${caminho}mais-vistas-ativo.png`}
            iconeInativo={`${caminho}mais-vistas-inativo.png`}
          >
            Mais Vistas
          </ItemNavegacao>

          <ItemNavegacao 
          iconeAtivo={`${caminho}mais-curtidas-ativo.png`}
          iconeInativo={`${caminho}mais-curtidas-inativo.png`}
          >
            Mais Curtidas
          </ItemNavegacao>

          <ItemNavegacao 
          iconeAtivo={`${caminho}novas-ativo.png`}
          iconeInativo={`${caminho}novas-inativo.png`}
          >
            Novas
          </ItemNavegacao>

          <ItemNavegacao 
          iconeAtivo={`${caminho}surpreenda-me-ativo.png`}
          iconeInativo={`${caminho}surpreenda-me-inativo.png`}
          >
            Surpreenda-me
          </ItemNavegacao>

        </ListaEstilizada>

      </nav>
    </aside>
  )
}

export default BarraLateral