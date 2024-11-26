const express = require("express");
const mysql = require("mysql");
const app = express();
const port = 3000;

// Configuração do banco de dados
const db = mysql.createConnection({
  host: "sql10.freemysqlhosting.net",
  user: "sql10747470",
  password: "sql10747470",
  database: "quiz_ranking",
});

// Conexão com o banco de dados
db.connect((err) => {
  if (err) throw err;
  console.log("Conectado ao banco de dados!");
});

// Middleware para processar formulários
app.use(express.urlencoded({ extended: true }));

// Servindo arquivos estáticos como CSS e imagens
app.use(express.static("public")); // Certifique-se de que a pasta "public" contém seu CSS e imagens

// Página principal: exibe o ranking
app.get("/", (req, res) => {
  const query = "SELECT nome, pontuacao FROM ranking ORDER BY pontuacao DESC LIMIT 10";
  db.query(query, (err, results) => {
    if (err) throw err;

    // HTML com a estrutura enviada por você
    let html = `
      <!DOCTYPE html>
      <html lang="pt-BR">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Ranking do Quiz</title>
        <link rel="stylesheet" href="ranking.css">
      </head>
      <body>
        <header>
          <div class="navbar">
            <div class="logo">
              <a href="../indice/indice.html">
                <img src="../capa/img_capa/home.png" />
              </a>
            </div>
            <div class="imgss">
              <a href="../produtores/prod.html">
                <img src="../theo/img-white/produtores.png" alt="Produtores">
              </a>
              <a href="../consu1/consu1.html">
                <img src="../theo/img-white/con_1.png" alt="Con 1">
              </a>
              <a href="../consu2/consu2.html">
                <img src="../theo/img-white/vamos lá! (4) 3.png" alt="Vamos Lá">
              </a>
              <a href="../consu3/consu3.html">
                <img src="../theo/img-white/con_3.png" alt="Con 3">
              </a>
              <a href="../decom/decom.html">
                <img src="../theo/img-white/decompositores.png" alt="Decompositores">
              </a>
            </div>
          </div>
        </header>
        
        <div class="container">
          <section>
            <ul>
    `;

    results.forEach((row, index) => {
      const medalha =
        index === 0
          ? '<img class="diamante" src="./assets/diamante.png" alt="diamante">'
          : index === 1
          ? '<img class="ouro" src="./assets/ouro.png" alt="ouro">'
          : index === 2
          ? '<img class="prata" src="./assets/prata.png" alt="prata">'
          : index === 3
          ? '<img class="bronze" src="./assets/bronze.png" alt="bronze">'
          : "";

      html += `
        <li>
          <span class="${["d", "o", "p", "b"][index] || ""}">${index + 1}</span>
          ${medalha}
          <p>${row.nome}</p>
          <span class="revenue">${row.pontuacao} pontos</span>
        </li>
      `;
    });

    html += `
            </ul>
          </section>
        </div>
      </body>
      </html>
    `;

    res.send(html);
  });
});

// Rota para adicionar uma pontuação
app.post("/add", (req, res) => {
  const { nome, pontuacao } = req.body;
  const query = "INSERT INTO ranking (nome, pontuacao) VALUES (?, ?)";
  db.query(query, [nome, parseInt(pontuacao)], (err) => {
    if (err) throw err;
    res.redirect("/"); // Redireciona para o ranking após adicionar
  });
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
