import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  padding: 2rem;
`;

const Card = styled(motion.div)`
  background: #202020;
  color: white;
  padding: 1.5rem;
  border-radius: 10px;
`;

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const fetchProjects = async () => {
      const projSnap = await getDocs(collection(db, 'projects'));
      const projData = projSnap.docs.map(doc => doc.data());
      setProjects(projData);
    };
    fetchProjects();
  }, []);

  return (
    <div>
      <h2 style={{ paddingLeft: '2rem' }}>Projects</h2>
      <Grid>
        {projects.map((proj, i) => (
          <Card key={i} whileHover={{ scale: 1.05 }}>
            <h3>{proj.title}</h3>
            <p>{proj.description}</p>
            <p><b>Stack:</b> {proj.tech?.join(', ')}</p>
            <a href={proj.github} target="_blank" rel="noreferrer">GitHub</a>
            {proj.demo && <span> | <a href={proj.demo} target="_blank" rel="noreferrer">Live Demo</a></span>}
          </Card>
        ))}
      </Grid>
    </div>
  );
};

export default Projects;
