import styled from 'styled-components';

export const WithHoverEffect = styled.span`
  &:hover {
    cursor: pointer;
    transform: scale(1.1);
    transition: transform .2s ease-out;
  }`;
