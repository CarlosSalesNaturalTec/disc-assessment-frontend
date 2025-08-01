<template>
  <div class="welcome-page">
    <div class="container">
      <div class="illustration-container">
        <img src="/barra-disc.png" alt="Ilustração Perfil Comportamental" class="illustration-image"/>
      </div>
      <h1 class="main-title">
        Você está pronta(o) para conhecer seu perfil comportamental predominante?
      </h1>
      <div class="content-section">
        <div class="column">
          <h2 class="tips-title">DICAS:</h2>
          <ol class="tips-list">
            <li>Não há resultado bom ou ruim, por isso, seja sincera(o).</li>
            <li>Escolha um momento tranquilo para fazer o teste.</li>
            <li>Não pense muito, a primeira resposta geralmente será a mais correta.</li>
            <li>Responda pensando em quem você é e não em quem gostaria de ser.</li>
          </ol>
        </div>
        <div class="column action-column">
          <p class="action-text">Clique no botão!</p>
          <router-link to="/test" class="start-button">COMEÇAR O TESTE</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView'
};
</script>

<style scoped>
.welcome-page {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #008080; /* Verde-azulado (Teal) */
  padding: 2rem;
}

.container {
  background-color: #ffffff;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  padding: 2rem 3rem;
  max-width: 900px;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 80vh; /* Altura mínima consistente */
}

.illustration-container {
  width: 100%;
  background-color: #FFF5E9;
  border-radius: 10px;
  margin-bottom: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
}

.illustration-image {
  max-width: 100%;
  height: auto;
  max-height: 150px;
}

.main-title {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 2rem;
}

.content-section {
  display: flex;
  justify-content: space-between;
  text-align: left;
  gap: 2rem;
  flex-grow: 1; /* Faz esta seção crescer */
  align-items: center; /* Centraliza o conteúdo verticalmente */
}

.column {
  flex: 1;
}

.tips-title {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 1.2rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;
}

.tips-list {
  font-family: 'Helvetica Neue', sans-serif;
  color: #555;
  padding-left: 20px;
  line-height: 1.6;
}

.action-column {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.action-text {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 1.2rem;
  color: #333;
  margin-bottom: 1rem;
}

.start-button {
  background-color: #007bff; /* Azul */
  color: #ffffff;
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  text-decoration: none;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.start-button:hover {
  background-color: #0056b3; /* Azul mais escuro */
}
</style>
