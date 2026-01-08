import React from 'react';

function Templates() {
  return (
    <div>
      <h2>Modèles de CV et lettres</h2>
      <p>
        Vous pouvez télécharger des modèles prêts à l'emploi pour rédiger vos CV et
        lettres de motivation. Ces modèles sont disponibles au format Markdown et
        peuvent être convertis en PDF ou DOCX selon vos besoins.
      </p>
      <ul>
        <li>
          <a href="/cv_template.md" download>
            Télécharger le modèle de CV (Markdown)
          </a>
        </li>
        <li>
          <a href="/cv_template.md" download>
            Télécharger le modèle de lettre de motivation
          </a>
        </li>
      </ul>
      <p>
        Besoin d'un design personnalisé ? Contactez‑nous pour créer des modèles
        uniques avec Canva.
      </p>
    </div>
  );
}

export default Templates;
