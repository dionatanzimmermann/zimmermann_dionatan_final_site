import React from 'react';
import styled from 'styled-components';
import { CardProps } from './Card.types';

export const StyledCardContainer = styled.div<{ disabled?: boolean }>`
  width: 100%;
  max-width: 300px;
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  background-color: ${({ disabled }) => (disabled ? '#f5f5f5' : '#fff')};
  box-shadow: ${({ disabled }) =>
    disabled ? 'none' : '0 2px 6px rgba(0,0,0,0.1)'};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%) opacity(0.6)' : 'none')};
  transition: box-shadow 0.3s;

  &:hover {
    box-shadow: ${({ disabled }) =>
      disabled ? 'none' : '0 4px 12px rgba(0,0,0,0.15)'};
  }

  @media (max-width: 600px) {
    max-width: 100%;
  }
`;

export const StyledCardImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 180px;
  object-fit: cover;
  opacity: ${({ disabled }) => (disabled ? 0.6 : 1)};

  @media (max-width: 600px) {
    height: 140px;
  }
`;

export const StyledCardContent = styled.div`
  padding: 16px;

  @media (max-width: 600px) {
    padding: 12px;
  }
`;

export const StyledCardTitle = styled.h3<{ disabled?: boolean }>`
  margin: 0;
  font-size: 1.25rem;
  color: ${({ disabled }) => (disabled ? '#888' : '#333')};

  @media (max-width: 600px) {
    font-size: 1.1rem;
  }
`;

export const StyledCardDescription = styled.p<{ disabled?: boolean }>`
  margin-top: 8px;
  font-size: 0.95rem;
  color: ${({ disabled }) => (disabled ? '#aaa' : '#555')};

  @media (max-width: 600px) {
    font-size: 0.9rem;
  }
`;

const Card: React.FC<CardProps> = ({
  imageUrl,
  title,
  description,
  disabled = false,
}) => {
  return (
    <StyledCardContainer disabled={disabled} data-testid='card'>
      {imageUrl && (
        <StyledCardImage
          src={imageUrl}
          alt={title || 'Card Image'}
          disabled={disabled}
        />
      )}
      <StyledCardContent>
        <StyledCardTitle disabled={disabled}>
          {title || ' '}
        </StyledCardTitle>
        <StyledCardDescription disabled={disabled}>
          {description || ' '}
        </StyledCardDescription>
      </StyledCardContent>
    </StyledCardContainer>
  );
};

export default Card;