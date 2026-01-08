import React, { useState } from 'react';
import axios from 'axios';

function GenerateCV() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [summary, setSummary] = useState('');
  const [experiences, setExperiences] = useState('');
  const [education, setEducation] = useState('');
  const [skills, setSkills] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      fullName: fullName,
      email: email,
      phone: phone,
      summary: summary,
      experiences: experiences.split('\n').filter(Boolean),
      education: education.split('\n').filter(Boolean),
      skills: skills.split(',').map((s) => s.trim()).filter(Boolean),
    };
    try {
      const token = localStorage.getItem('accessToken');
      const config = token ? { headers: { Authorization: 'Bearer ' + token } } : {};
      const response = await axios.post('/api/cvs', payload, config);
      setMessage("CV créé avec l'identifiant " + response.data.id);
      setFullName('');
      setEmail('');
      setPhone('');
      setSummary('');
      setExperiences('');
      setEducation('');
      setSkills('');
    } catch (error) {
      console.error(error);
      setMessage("Une erreur s'est produite lors de la création du CV.");
    }
  };

  return (
    <div>
      <h2>Générer un CV</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nom complet</label><br />
          <input type="text" value={fullName} onChange={(e) => setFullName(e.target.value)} required />
        </div>
        <div>
          <label>Email</label><br />
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>Téléphone</label><br />
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </div>
        <div>
          <label>Résumé</label><br />
          <textarea value={summary} onChange={(e) => setSummary(e.target.value)} />
        </div>
        <div>
          <label>Expériences (une par ligne)</label><br />
          <textarea value={experiences} onChange={(e) => setExperiences(e.target.value)} />
        </div>
        <div>
          <label>Formation (une par ligne)</label><br />
          <textarea value={education} onChange={(e) => setEducation(e.target.value)} />
        </div>
        <div>
          <label>Compétences (séparées par des virgules)</label><br />
          <input type="text" value={skills} onChange={(e) => setSkills(e.target.value)} />
        </div>
        <button type="submit">Créer CV</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default GenerateCV;
