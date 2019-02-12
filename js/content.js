// Form ----------------------------	
var questions_texts = [
  {"title": "Me diga, você é menino ou menina?",
    "type": "options",
    "name": "gender",
    "options": ["Menina", "Menino"],
    "button_text": "Próximo"},
  {"title": "E como posso te chamar?",
    "type": "text",
    "name": "name",
    "placeholder": "Pode escrever aqui",
    "button_text": "Próximo"},
  {"title": "Oi #Fulano#,  quantos anos você tem?",
    "type": "number",
    "name": "age",
    "placeholder": "Sua idade aqui",
    "button_text": "Próximo"},
  {"title": "Legal! E qual o nome da sua cidade?",
    "type": "text",
    "name": "city",
    "placeholder": "Nome da cidade aqui",
    "button_text": "Enviar"}
]
var available_cities = ["Abaiara","Acarapé","Acaraú","Acopiara","Aiuaba","Alcântaras","Altaneira","Alto Santo","Amontada","Antonina do Norte","Apuiarés","Aquiraz","Aracati","Aracoiaba","Ararendá","Araripe","Aratuba","Arneiroz","Assaré","Aurora","Baixio","Banabuiú","Barbalha","Barreira","Barro","Barroquinha","Baturité","Beberibe","Bela Cruz","Boa Viagem","Brejo Santo","Camocim","Campos Sales","Canindé","Capistrano","Caridade","Cariré","Caririaçu","Cariús","Carnaubal","Cascavel","Catarina","Catunda","Caucaia","Cedro","Chaval","Choró","Chorozinho","Coreaú","Crateús","Crato","Croatá","Cruz","Deputado Irapuan Pinheiro","Ererê","Eusébio","Farias Brito","Forquilha","Fortaleza","Fortim","Frecheirinha","General Sampaio","Graça","Granja","Granjeiro","Groaíras","Guaiúba","Guaraciaba do Norte","Guaramiranga","Hidrolândia","Horizonte","Ibaretama","Ibiapina","Ibicuitinga","Icapuí","Icó","Iguatu","Independência","Ipaporanga","Ipaumirim","Ipu","Ipueiras","Iracema","Irauçuba","Itaiçaba","Itaitinga","Itapagé","Itapipoca","Itapiúna","Itarema","Itatira","Jaguaretama","Jaguaribara","Jaguaribe","Jaguaruana","Jardim","Jati","Jijoca de Jericoaroara","Juazeiro do Norte","Jucás","Lavras da Mangabeira","Limoeiro do Norte","Madalena","Maracanaú","Maranguape","Marco","Martinópole","Massapê","Mauriti","Meruoca","Milagres","Milhã","Miraíma","Missão Velha","Mombaça","Monsenhor Tabosa","Morada Nova","Moraújo","Morrinhos","Mucambo","Mulungu","Nova Olinda","Nova Russas","Novo Oriente","Ocara","Orós","Pacajus","Pacatuba","Pacoti","Pacujá","Palhano","Palmácia","Paracuru","Paraipaba","Parambu","Paramoti","Pedra Branca","Penaforte","Pentecoste","Pereiro","Pindoretama","Piquet Carneiro","Pires Ferreira","Poranga","Porteiras","Potengi","Potiretama","Quiterianópolis","Quixadá","Quixelô","Quixeramobim","Quixeré","Redenção","Reriutaba","Russas","Saboeiro","Salitre","Santa Quitéria","Santana do Acaraú","Santana do Cariri","São Benedito","São Gonçalo do Amarante","São João do Jaguaribe","São Luís do Curu","Senador Pompeu","Senador Sá","Sobral","Solonópole","Tabuleiro do Norte","Tamboril","Tarrafas","Tauá","Tejuçuoca","Tianguá","Trairi","Tururu","Ubajara","Umari","Umirim","Uruburetama","Uruoca","Varjota","Várzea Alegre","Viçosa do Ceará"]

// Quiz ----------------------------
var quiz_texts = [
  {"title": "Você ficaria um mês numa floresta com seus amigos?",
    "type": "options",
    "name": "mei",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"},
    {"title": "Aceitar sair amanhã de manhã para uma viagem por todo o Ceará?",
    "type": "options",
    "name": "laz",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"},
    {"title": "Aceitaria trocar seus olhos por outros com visão de raio x",
    "type": "options",
    "name": "ino",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"},
    {"title": "Aceitaria ser professor/professora da sua turma?",
    "type": "options",
    "name": "edu",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"},
    {"title": "Trocaria seus brinquedos por dinheiro?",
    "type": "options",
    "name": "eco",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"},
    {"title": "Gostaria de colher sua comida no quintal da sua casa?",
    "type": "options",
    "name": "sau",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"},
    {"title": "Você gostaria de ser o prefeito da sua cidade?",
    "type": "options",
    "name": "gov",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"}
  ]
// Mapa ----------------------------


