import React from 'react';

function Login() {
  const handleLogin = () => {
    // Construct the Keycloak login URL. In a real app, these values should be
    // provided via environment variables to match your Keycloak configuration.
    const keycloakUrl = process.env.REACT_APP_KEYCLOAK_URL || 'http://localhost:8080/auth';
    const realm = process.env.REACT_APP_KEYCLOAK_REALM || 'cv-realm';
    const clientId = process.env.REACT_APP_KEYCLOAK_CLIENT_ID || 'cv-client';
    const redirectUri = window.location.origin + '/';
    const loginUrl = `${keycloakUrl}/realms/${realm}/protocol/openid-connect/auth?client_id=${clientId}&redirect_uri=${encodeURIComponent(redirectUri)}&response_type=token&scope=openid`;
    window.location.href = loginUrl;
  };

  return (
    <div>
      <h2>Connexion</h2>
      <p>Pour accéder aux fonctionnalités sécurisées, veuillez vous connecter.</p>
      <button onClick={handleLogin}>Se connecter avec Keycloak</button>
    </div>
  );
}

export default Login;
