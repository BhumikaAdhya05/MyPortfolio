import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { db } from '../firebase';
import { doc, getDoc } from 'firebase/firestore';

const ContactWrapper = styled.div`
  padding: 2rem;
`;

const Contact = () => {
  const [contact, setContact] = useState({ email: '', github: '', linkedin: '' });

  useEffect(() => {
    const fetchContact = async () => {
      const docRef = doc(db, 'contact', 'main');
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setContact(docSnap.data());
      }
    };
    fetchContact();
  }, []);

  return (
    <ContactWrapper>
      <h2>Contact Me</h2>
      <p>Email: {contact.email}</p>
      <p>
        <a href={contact.github} target="_blank" rel="noreferrer">GitHub</a> |{' '}
        <a href={contact.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
      </p>
    </ContactWrapper>
  );
};

export default Contact;
