import styled from "styled-components";
import tags from "./tags.json";

const ContainerTags = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
  p {
    color: #D9D9D9;
    font-size: 24px;
    font-weight: 400;
  }
`

const TagWrapper = styled.div`
  display:flex;
  gap: .9rem;
`
const BotaoTag = styled.button`
  font-size: 20px;
  font-weight: 400;
  outline: none;
  color: #F7F7F7;
  cursor: pointer;
  font-weight: 400;
  padding: 10px 8px 10px 8px;
  border-radius: 10px;
  background: rgb(217, 217, 217, .3);
  width: 102px;
  height: 49px;
  border: 2px solid transparent;
  transition: all .3s ease-in;
  &:hover {
      border: 2px solid #C98CF1;
      background: transparent;
      color: #C98CF1;
    }
`

const Tags = ({ aoAlternarTag }) => {
  return (
    <ContainerTags>
      <p>Busque por tags: </p>
      <TagWrapper>
        {tags.map(tag => (
          <BotaoTag onClick={() => aoAlternarTag(tag.id)} key={tag.id}>{tag.titulo}</BotaoTag>
        ))}
      </TagWrapper>
    </ContainerTags>
  )
}

export default Tags