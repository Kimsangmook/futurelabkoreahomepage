'use client';

import React from 'react';
import styled from 'styled-components';
import FeatureCard from './FeatureCard';
import FeatureIcon from './FeatureIcon';
import { GridCol, GridContainer } from '../Grid';

const FeaturesClient = () => {
  const features = [
    {
      icon: 'nextjs',
      title: 'We Are Next Z',
      description: 'MZ generation leading the way to innovative business opportunities.',
    },
    {
      icon: 'react',
      title: 'Energy',
      description: 'Promoting sustainability and eco-friendly solutions through technology.',
    },
    {
      icon: 'database',
      title: 'Sustainable Success',
      description: 'Achieving lasting growth powered by data-driven innovation.',
    },
    {
      icon: 'component',
      title: 'Green Innovative',
      description: 'Differentiating green services through creativity and innovative ideas.',
    },
    {
      icon: 'auth',
      title: 'Trust & Influence',
      description: 'Building trust through reliable security and influential solutions.',
    },
    {
      icon: 'stripe',
      title: 'New Possibilities',
      description: 'Creating sustainable revenue models and unlocking new potentials.',
    },
  ] as const;

  return (
    <StyledSection>
      <GridContainer>
        <GridCol sm={0} md={2} lg={0} />
        <GridCol sm={4} md={8} lg={12}>
          <Container>
            <Title>Features</Title>
            <Description>Cool features of our company.</Description>
            <Grid>
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={<FeatureIcon name={feature.icon} />}
                  title={feature.title}
                  description={feature.description}
                />
              ))}
            </Grid>
          </Container>
        </GridCol>
        <GridCol sm={0} md={2} lg={0} />
      </GridContainer>
    </StyledSection>
  );
};

export default FeaturesClient;

const StyledSection = styled.section`
  background-color: black;
`;

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  text-align: center;
  background-color: #111827;
  border-radius: 12px;
  padding: 24px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  color: #f9fafb; /* 밝은 텍스트 */
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1.2rem;
  color: #d1d5db; /* 중간 밝기 */
  font-weight: 300;
  max-width: 800px;
  margin: 0 auto 2.5rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
`;
