import { black_1, secondaryTextColor } from './../../../styles/theme/index';
import styled from 'styled-components';
import { width } from 'styles/theme';

export const Container = styled.div`
  background-color: red !important;
  width: ${width};
  margin: auto;
`;

export const ContentGame = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 50px;
`;

export const ContentLeft = styled.div`
  flex: 2;
`;

export const ContentRight = styled.div``;

export const Community = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
`;

export const CommunityItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 30px 26px;
  background-color: ${black_1};
  max-height: 200px;
  width: 50%;
`;

export const CommunityDes = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  line-height: 16pt;
  word-spacing: 5px;
`;

export const CommunityAuth = styled.div`
  display: flex;
  text-align: left;
  align-items: center;
  width: 100%;
  img {
    height: 32px;
  }
  p {
    margin: 0;
    color: ${secondaryTextColor};
  }
`;

export const CommunityText = styled.div`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 7;
  overflow: hidden;
`;
