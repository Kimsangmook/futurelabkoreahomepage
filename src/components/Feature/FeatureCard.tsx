import React from 'react';
import styled from 'styled-components';

type Props = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const FeatureCard = ({ icon, title, description }: Props) => {
  return (
    <Card>
      <IconContainer>{icon}</IconContainer>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Card>
  );
};

export default FeatureCard;

const Card = styled.div`
  background-color: white;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: background-color 0.2s ease-in-out;
`;

const IconContainer = styled.div`
  margin-bottom: 1rem;
  font-size: 2rem;
`;

const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: #1f2937;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: #4b5563;
  font-weight: 300;
`;
