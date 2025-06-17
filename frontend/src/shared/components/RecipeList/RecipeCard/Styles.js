import styled from 'styled-components';
import { font } from '../../../../shared/utils/styles';

export const Card = styled.a`
  border: solid 1px black;
  width: 300px;
  text-decoration: none;
  color: black;
  display: block;
`;

export const ImgContainer = styled.div`
  width: 300px;  
  height: 200px;
  overflow: hidden;
  position: relative;
  border-bottom: solid 1px black;
`;

export const RecipeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top center;
`;

export const InfoContainer = styled.div`
  padding: 15px;
`;

export const RecipeTitle = styled.p`
  ${font.size(20)}
  ${font.bold}
  margin: 0px;
  &:hover {
    text-decoration: underline;
  }
`;

export const DetailsContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 15px;
  justify-content: space-between;
`;

export const RecipeDetail = styled.p`
  ${font.size(15)}
  ${font.regular}
  margin: 0px;
`;