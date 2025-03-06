'use client';

import React, { Component } from 'react';
import { FaReact, FaDatabase, FaShieldAlt } from 'react-icons/fa';
import { SiNextdotjs, SiTailwindcss, SiStripe } from 'react-icons/si';

const icons = {
  nextjs: <SiNextdotjs size={48} />,
  react: <FaReact size={48} />,
  database: <FaDatabase size={48} />,
  auth: <FaShieldAlt size={48} />,
  stripe: <SiStripe size={48} />,
  component: <SiTailwindcss size={48} />,
};

const FeatureIcon = ({ name }: { name: keyof typeof icons }) => {
  return icons[name] || null;
};

export default FeatureIcon;
