import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const AboutSection = styled.div`
  padding: 2rem;
`;

const About = () => {
  const [about, setAbout] = useState('');

  useEffect(() => {
    const fetchAbout = async () => {
      const docRef = doc(db, 'about', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setAbout(docSnap.data().content);
      }
    };
    fetchAbout();
  }, []);

  return (
    <AboutSection>
      <h2>About Me</h2>
      <p>{about}</p>
    </AboutSection>
  );
};

export default About;
