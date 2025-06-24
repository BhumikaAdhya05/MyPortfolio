import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
  background: linear-gradient(to right, #1a1a1a, #111);
  color: white;
  text-align: center;
`;

const Home = () => {
  return (
    <Hero>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        Hi, I’m Bhumika 👋
      </motion.h1>
      <motion.p initial={{ y: 20, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
        Full Stack Developer & Machine Learning Enthusiast
      </motion.p>
    </Hero>
  );
};

export default Home;
