'use client';

import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  value: string;
}

const Card = ({ title, subtitle, description, image, value }: Props) => {
  return (
    <CardWrapper style={{ backgroundImage: `url(${image})` }}>
      <CardContent>
        <CardTitle>{title}</CardTitle>
        <CardSubtitle>{subtitle}</CardSubtitle>
        <CardDescription>{description}</CardDescription>
        <ViewMore>{value}</ViewMore>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: flex-end;
  padding: 20px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s ease-in-out;

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(0, 0, 0, 0.5);
    transition: background 0.3s ease-in-out;
  }

  &:hover {
    transform: translateY(20px);
  }

  &:hover:before {
    background: rgba(0, 0, 0, 0.2);
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
  width: 100%;
`;

const CardTitle = styled.h3`
  font-size: 24px;
  font-weight: bold;
`;

const CardSubtitle = styled.p`
  font-size: 18px;
  margin-top: 10px;
  font-weight: bold;
`;

const CardDescription = styled.p`
  font-size: 14px;
  margin-top: 5px;
`;

const ViewMore = styled.a`
  display: block;
  margin-top: 10px;
  font-size: 16px;
  color: #00ff99;
  opacity: 0;
  visibility: hidden;
  transition:
    opacity 0.3s ease-in-out,
    visibility 0.3s ease-in-out;

  ${CardWrapper}:hover & {
    opacity: 1;
    visibility: visible;
  }

  &:hover {
    text-decoration: underline;
  }
`;
