import React, { useEffect, useState } from 'react';
import { db, auth } from '../firebase';
import { doc, getDoc, setDoc, collection, getDocs, addDoc, deleteDoc } from 'firebase/firestore';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
  const [about, setAbout] = useState('');
  const [contact, setContact] = useState({ email: '', github: '', linkedin: '' });
  const [projects, setProjects] = useState([]);
  const [newProj, setNewProj] = useState({ title: '', description: '', tech: '', github: '', demo: '' });

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const aboutSnap = await getDoc(doc(db, 'about', 'main'));
      if (aboutSnap.exists()) setAbout(aboutSnap.data().content);

      const contactSnap = await getDoc(doc(db, 'contact', 'main'));
      if (contactSnap.exists()) setContact(contactSnap.data());

      const projSnap = await getDocs(collection(db, 'projects'));
      const projData = projSnap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProjects(projData);
    };
    fetchData();
  }, []);

  const saveAbout = () => setDoc(doc(db, 'about', 'main'), { content: about });
  const saveContact = () => setDoc(doc(db, 'contact', 'main'), contact);
  const addProject = async () => {
    await addDoc(collection(db, 'projects'), {
      ...newProj,
      tech: newProj.tech.split(',').map(t => t.trim())
    });
    window.location.reload();
  };
  const deleteProject = async (id) => {
    await deleteDoc(doc(db, 'projects', id));
    window.location.reload();
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>👑 Admin Dashboard</h2>
      <button onClick={() => auth.signOut().then(() => navigate('/admin'))}>Logout</button>

      <h3>About Section</h3>
      <textarea rows="4" cols="60" value={about} onChange={e => setAbout(e.target.value)} />
      <br /><button onClick={saveAbout}>Save About</button>

      <h3>Contact Info</h3>
      <input placeholder="Email" value={contact.email} onChange={e => setContact({ ...contact, email: e.target.value })} />
      <br />
      <input placeholder="GitHub" value={contact.github} onChange={e => setContact({ ...contact, github: e.target.value })} />
      <br />
      <input placeholder="LinkedIn" value={contact.linkedin} onChange={e => setContact({ ...contact, linkedin: e.target.value })} />
      <br /><button onClick={saveContact}>Save Contact</button>

      <h3>Add Project</h3>
      {['title', 'description', 'tech', 'github', 'demo'].map(key => (
        <input key={key} placeholder={key} value={newProj[key]} onChange={e => setNewProj({ ...newProj, [key]: e.target.value })} />
      ))}
      <br /><button onClick={addProject}>Add Project</button>

      <h3>Existing Projects</h3>
      {projects.map(p => (
        <div key={p.id}>
          <b>{p.title}</b> – {p.tech?.join(', ')}
          <button onClick={() => deleteProject(p.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default AdminDashboard;
