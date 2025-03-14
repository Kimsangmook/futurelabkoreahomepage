'use client';

import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  description: string;
  image: string;
  value: string;
  type: number;
}

const Card = ({ title, description, image, value, type }: Props) => {
  return (
    <CardWrapper style={{ backgroundImage: `url(${image})` }} $type={type}>
      <CardContent>
        <Value>{value}</Value>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </CardWrapper>
  );
};

export default Card;

const CardWrapper = styled.div<{ $type: number }>`
  position: relative;
  width: 300px;
  height: 400px;
  background-size: cover;
  background-position: center;
  border-radius: 10px;
  overflow: hidden;
  color: white;
  display: flex;
  align-items: center;
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
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 0px 0px 24px 0px;
`;

const CardTitle = styled.h3`
  font-size: 27px;
  font-weight: bold;
`;

const CardDescription = styled.p`
  font-size: 19px;
`;

const Value = styled.a`
  display: block;
  font-size: 20px;
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
