import React from 'react';
import styled from 'styled-components';
import { ImgProps } from './Img.types';

export const StyledImg = styled.img<{ disabled?: boolean }>`
  width: ${({ width }) => width || '100%'};
  height: ${({ height }) => height || 'auto'};
  object-fit: cover;
  display: block;
  border-radius: 4px;
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%) opacity(0.6)' : 'none')};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  transition: filter 0.3s ease;

  @media (max-width: 600px) {
    width: 100%;
    height: auto;
  }
`;

const Img: React.FC<ImgProps> = ({ src, alt = 'Image', width = '100%', height = 'auto', disabled = false }) => {
  if (!src) return null;

  return <StyledImg src={src} alt={alt} width={width} height={height} disabled={disabled} />;
};

export default Img;
