fetch('info.json')
.then(response => response.json())
.then(dados => {
  document.getElementById("titulo").textContent = dados.titulo;
  document.getElementById("nome").textContent = `Nome: ${dados.nome}`;

  const container = document.getElementById("tabelas");

  dados.tabela.forEach(t => {
    const tabela = document.createElement("table");

    const thead = tabela.createTHead();
    const headerRow = thead.insertRow();
    const thHorario = document.createElement("th");
    thHorario.textContent = "Horário / Dia";
    headerRow.appendChild(thHorario);

    t.dias.forEach(d => {
      const th = document.createElement("th");
      th.textContent = d.dia;
      headerRow.appendChild(th);
    });

    const tbody = tabela.createTBody();

    t.horarios.forEach((horario, index) => {
      const row = tbody.insertRow();
      const tdHorario = row.insertCell();
      tdHorario.textContent = horario;

      t.dias.forEach(d => {
        const td = row.insertCell();
        td.innerHTML = d.atividades[index] || "";
      });
    });

    const titulo = document.createElement("h3");
    titulo.textContent = t.titulo;

    container.appendChild(titulo);
    container.appendChild(tabela);
  });
})
.catch(error => {
  console.error("Erro ao carregar o JSON:", error);
});
