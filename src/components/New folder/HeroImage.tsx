import React from 'react';
import styled from 'styled-components';
import { HeroImageProps } from './HeroImage.types';

export const StyledHeroImageContainer = styled.div<{ disabled?: boolean }>`
  position: relative;
  width: 100%;
  height: 300px;
  overflow: hidden;
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'default')};
  filter: ${({ disabled }) => (disabled ? 'grayscale(100%) opacity(0.6)' : 'none')};

  @media (max-width: 768px) {
    height: 200px;
  }
`;

export const StyledImage = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.7));
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const StyledTextWrapper = styled.div`
  text-align: center;
  color: #fff;

  h1 {
    font-size: 2rem;
    margin: 0;
  }

  p {
    font-size: 1rem;
    margin: 0.5rem 0 0;
  }

  @media (max-width: 600px) {
    h1 {
      font-size: 1.2rem;
    }

    p {
      font-size: 0.9rem;
    }
  }
`;

const HeroImage: React.FC<HeroImageProps> = ({ imageUrl, headline, subheadline, disabled = false }) => {
  return (
    <StyledHeroImageContainer disabled={disabled} data-testid="herocontainer">
      <StyledImage src={imageUrl} alt="Hero" disabled={disabled} />
      {!disabled && (
        <StyledOverlay>
          <StyledTextWrapper>
            <h1>{headline}</h1>
            <p>{subheadline}</p>
          </StyledTextWrapper>
        </StyledOverlay>
      )}
    </StyledHeroImageContainer>
  );
};

export default HeroImage;
