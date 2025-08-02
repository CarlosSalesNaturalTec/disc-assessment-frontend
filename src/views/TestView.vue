<template>
  <div class="test-page">
    <div class="container">
      <div class="illustration-container">
        <img src="/barra-disc.png" alt="Ilustração Perfil Comportamental" class="illustration-image"/>
      </div>

      <div class="main-content" v-if="currentQuestion">
        <h1 class="main-title">{{ currentQuestion.pergunta }}</h1>
        <p class="subtitle">(Mesmo que você se identifique com mais de um, escolha o que mais se encaixa)</p>

        <div class="answer-buttons">
          <button 
            v-for="resposta in currentQuestion.respostas" 
            :key="resposta.texto" 
            @click="selectAnswer(resposta)"
            class="answer-button">
            {{ resposta.texto }}
          </button>
        </div>
      </div>
      <div v-else>
        <h1 class="main-title">Questionário Concluído!</h1>
      </div>

      <div class="progress-section">
        <div class="progress-bar">
          <div class="progress-fill" :style="{ width: progress + '%' }"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import questionsData from '@/data/questions.json';

export default {
  name: 'TestView',
  data() {
    return {
      questions: questionsData.perguntas,
      currentQuestionIndex: 0,
      userAnswers: [],
    };
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    },
    progress() {
      return (this.currentQuestionIndex / this.questions.length) * 100;
    }
  },
  methods: {
    selectAnswer(resposta) {
      this.userAnswers.push({
        perguntaId: this.currentQuestion.id,
        pergunta: this.currentQuestion.pergunta,
        resposta: resposta.texto,
        valor: resposta.valor,
      });

      if (this.currentQuestionIndex < this.questions.length - 1) {
        this.currentQuestionIndex++;
      } else {
        // Lógica para quando o questionário for concluído
        console.log('Respostas Finais:', this.userAnswers);
        // Aqui você pode, por exemplo, redirecionar para uma página de resultados
      }
    }
  }
};
</script>

<style scoped>
.test-page {
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

.main-content {
  flex-grow: 1; /* Faz esta seção crescer */
  display: flex;
  flex-direction: column;
  justify-content: center; /* Centraliza o conteúdo verticalmente */
}

.main-title {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 2rem;
  font-weight: bold;
  color: #4a4a4a; /* Cinza escuro */
  margin-bottom: 0.5rem;
}

.subtitle {
  font-family: 'Helvetica Neue', sans-serif;
  font-size: 1rem;
  color: #888; /* Cinza mais claro */
  margin-bottom: 2.5rem;
}

.answer-buttons {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 3rem;
}

.answer-button {
  background-color: #ffffff;
  border: 2px solid #008080; /* Borda verde-azulado */
  color: #008080; /* Texto verde-azulado */
  border-radius: 8px;
  padding: 1rem 2rem;
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.answer-button:hover {
  background-color: #008080;
  color: #ffffff;
}

.progress-section {
  width: 100%;
  padding-top: 1rem;
}

.progress-bar {
  background-color: #e0e0e0; /* Fundo cinza claro */
  border-radius: 10px;
  height: 10px;
  width: 100%;
  overflow: hidden;
}

.progress-fill {
  background-color: #007bff; /* Azul vibrante */
  height: 100%;
  border-radius: 10px;
  transition: width 0.5s ease-in-out;
}
</style>
