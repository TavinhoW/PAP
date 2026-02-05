// 1. Definimos o IP dinamicamente com base no que vês no teu browser
const currentIP = window.location.hostname;
const API_URL = `http://${currentIP}:8080`;

/**
 * Função para procurar os dados do backend (Load Balancer)
 * Esta função é exportada para ser usada no teu Dashboard.jsx
 */
export const fetchData = async () => {
  try {
    // 2. Usamos a variável API_URL para fazer o pedido
    // Certifica-se de que a rota coincide com a do teu backend (ex: /api/status ou /)
    const response = await fetch(`${API_URL}/`);

    if (!response.ok) {
      throw new Error(`Erro na rede: ${response.status}`);
    }

    const data = await response.json();
    
    // Log útil para veres no F12 qual o serviço que respondeu
    console.log("Dados recebidos da API:", data);
    
    return data;
  } catch (error) {
    console.error("Erro ao tentar contactar o backend:", error);
    // Lançamos o erro para que o componente React possa mostrar uma mensagem ao utilizador
    throw error;
  }
};
