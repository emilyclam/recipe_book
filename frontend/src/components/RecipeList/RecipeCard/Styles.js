import styled from 'styled-components';
import { font } from 'styles';

export const Card = styled.div`
  border: solid 1px black;
  width: 300px;
  text-decoration: none;
  color: black;
  display: block;
`;

export const ImgContainer = styled.a`
  display: block;
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

export const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const RecipeTitle = styled.a`
  ${font.size(20)}
  ${font.bold}
  color: black;
  margin: 0px;
  cursor: pointer;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export const SaveIcon = styled.img`
  width: 25px;
  align-self: flex-start;
  margin-left: 5px;
  cursor: pointer;
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