/* ==========================================================
   BASE DE DADOS DO SISTEMA  (único arquivo que você edita)
   ========================================================== */
const DADOS = {

   condominio: "Residencial Morada Sul",

   /* Número que recebe o relatório do plantão.
      Formato: país + DDD + número, só dígitos. Ex.: "5581999999999"
      Se ficar vazio, o WhatsApp abre para você escolher o contato. */
   whatsappRelatorio: "",

   porteiros: [
      { valor: "jose-guilherme", nome: "José Guilherme" },
      { valor: "milton-mendes",  nome: "Milton Mendes" },
      { valor: "heleno",         nome: "Heleno" },
      { valor: "damiao",         nome: "Damião" }
   ],

   blocos: ["B-01", "B-02", "B-03", "B-04", "B-05", "B-06"],

   apartamentos: ["101", "102", "103", "104", "105", "106"],

   tiposEntrega: ["Encomenda", "Carta", "Delivery", "Documento", "Outros"],

   /* Moradores: bloco, apto, nome e telefone (com 55 + DDD).
      Para adicionar mais, copie uma linha e preencha. */
   moradores: [
      { bloco: "B-01", apto: "101", nome: "João Silva",  telefone: "5581900000001" },
      { bloco: "B-02", apto: "102", nome: "Maria Souza", telefone: "5581900000002" },
      { bloco: "B-03", apto: "103", nome: "Pedro Santos", telefone: "5581900000003" }
   ]
};
