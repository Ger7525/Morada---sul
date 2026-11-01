/* Monta as mensagens e abre o WhatsApp. */
const Whats = (function () {
   "use strict";

   function abrir(telefone, texto) {
      const numero = String(telefone || "").replace(/\D/g, "");
      const base = numero ? "https://wa.me/" + numero : "https://wa.me/";
      window.open(base + "?text=" + encodeURIComponent(texto), "_blank", "noopener");
   }

   function formatarData(iso) {
      if (!iso) return "—";
      const p = iso.split("-");
      return p.length === 3 ? p[2] + "/" + p[1] + "/" + p[0] : iso;
   }

   function nomePorteiro(valor) {
      const p = DADOS.porteiros.find(function (x) { return x.valor === valor; });
      return p ? p.nome : "—";
   }

   function mensagemEntrega(e, operador) {
      const linhas = [
         "*" + DADOS.condominio + " – Aviso de entrega*",
         "",
         "Olá, " + e.nome + "! Chegou uma entrega para você.",
         "Bloco " + e.bloco + " · Apto " + e.apto,
         "Tipo: " + e.tipo
      ];
      if (e.descricao) linhas.push("Detalhes: " + e.descricao);
      linhas.push("Recebido às " + e.hora + ".", "Portaria – " + operador.nome);
      return linhas.join("\n");
   }

   function bloco(titulo, itens, formatar) {
      const linhas = ["", "*" + titulo + " (" + itens.length + ")*"];
      if (!itens.length) linhas.push("Nenhum registro.");
      itens.forEach(function (item, i) { linhas.push((i + 1) + ". " + formatar(item)); });
      return linhas;
   }

   function mensagemPlantao(p, operador) {
      let linhas = [
         "*PLANTÃO – " + DADOS.condominio + "*",
         "Data: " + formatarData(p.data),
         "Operador: " + operador.nome,
         "Porteiro saindo: " + nomePorteiro(p.saindo),
         "Porteiro entrando: " + nomePorteiro(p.entrando)
      ];
      linhas = linhas.concat(
         bloco("ENTREGAS", p.entregas, function (e) {
            return "[" + e.hora + "] " + e.bloco + "/" + e.apto + " – " + e.nome + " – " + e.tipo +
               (e.descricao ? " (" + e.descricao + ")" : "");
         }),
         bloco("OCORRÊNCIAS", p.ocorrencias, function (o) {
            return "[" + o.hora + "] " + o.tipo + ": " + o.descricao;
         }),
         bloco("OBSERVAÇÕES", p.observacoes, function (o) {
            return "[" + o.hora + "] " + o.titulo + ": " + o.descricao;
         }),
         bloco("PRESTADORES DE SERVIÇO", p.prestadores, function (s) {
            return "[" + s.hora + "] " + s.empresa + " – " + s.nome + " – " + s.servico;
         })
      );
      return linhas.join("\n");
   }

   return { abrir, formatarData, nomePorteiro, mensagemEntrega, mensagemPlantao };
})();
