const frases = [
  "Conexão perdida: Tentamos alcançar sua memória, mas o sujeito não foi encontrado.",
  "Erro de rota: O caminho para a memória escolhida não foi encontrado.",
  "Requisição inválida: Sentimento não reconhecido pelo sistema.",
  "Memória não encontrada: Talvez tenha sido sonho.",
  "Solicitação indisponível: Nenhuma recordação foi encontrada no sistema.",
  "Falha de comunicação: Tente acessar essa memória em si mesmo.",
  "Erro interno: Algo dentro de você não soube lidar."
];

const fraseElemento = document.getElementById("frase-erro");
const fraseAleatoria = frases[Math.floor(Math.random() * frases.length)];

fraseElemento.innerText = fraseAleatoria;