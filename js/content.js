// General ----------------------------
var kidName = ""
var kidRegion = ""
var kidAge = 0
var kidBadge = ""

//form
var question_number = 0 //first question
var questions_array = [] //actual array of questions
var actual_section = undefined

//general
var actual_badge = undefined
var actual_level = -1 //depends on number of levels of each badge
var level_stars = ["empty", "empty", "empty"] //empty, half, full
var answeredFeedback = false

// modal
var cutscenes_name = undefined
var comment_name = undefined // regions/other_normal_comment
var congrats_name = undefined // badge/mei_0/edu_2

// Cutscenes ----------------------------
var cutscenes_infos = {
  "start": {
    "src": "video/video.mp4",
    "jump": "form"
  },
  "end": {
    "src": "video/video2.mp4",
    "jump": "certificate"
  }
}

// Form ----------------------------
var questions_texts = [{
    "title": "Me diga, você é menino ou menina?",
    "type": "options",
    "name": "gender",
    "options": ["Menina", "Menino"],
    "button_text": "Próximo"
  },
  {
    "title": "E como posso te chamar?",
    "type": "text",
    "name": "name",
    "placeholder": "Escreva seu nome",
    "button_text": "Próximo"
  },
  {
    "title": "Oi #name#, quantos anos você tem?",
    "type": "number",
    "name": "age",
    "placeholder": "Escreva sua idade",
    "button_text": "Próximo"
  },
  {
    "title": "Legal! E qual o nome da sua cidade?",
    "type": "select",
    "name": "city",
    "placeholder": "Escolha o nome da sua cidade",
    "button_text": "Enviar"
  }
]
var available_cities = ["Abaiara", "Acarapé", "Acaraú", "Acopiara", "Aiuaba", "Alcântaras", "Altaneira", "Alto Santo", "Amontada", "Antonina do Norte", "Apuiarés", "Aquiraz", "Aracati", "Aracoiaba", "Ararendá", "Araripe", "Aratuba", "Arneiroz", "Assaré", "Aurora", "Baixio", "Banabuiú", "Barbalha", "Barreira", "Barro", "Barroquinha", "Baturité", "Beberibe", "Bela Cruz", "Boa Viagem", "Brejo Santo", "Camocim", "Campos Sales", "Canindé", "Capistrano", "Caridade", "Cariré", "Caririaçu", "Cariús", "Carnaubal", "Cascavel", "Catarina", "Catunda", "Caucaia", "Cedro", "Chaval", "Choró", "Chorozinho", "Coreaú", "Crateús", "Crato", "Croatá", "Cruz", "Deputado Irapuan Pinheiro", "Ererê", "Eusébio", "Farias Brito", "Forquilha", "Fortaleza", "Fortim", "Frecheirinha", "General Sampaio", "Graça", "Granja", "Granjeiro", "Groaíras", "Guaiúba", "Guaraciaba do Norte", "Guaramiranga", "Hidrolândia", "Horizonte", "Ibaretama", "Ibiapina", "Ibicuitinga", "Icapuí", "Icó", "Iguatu", "Independência", "Ipaporanga", "Ipaumirim", "Ipu", "Ipueiras", "Iracema", "Irauçuba", "Itaiçaba", "Itaitinga", "Itapajé", "Itapipoca", "Itapiúna", "Itarema", "Itatira", "Jaguaretama", "Jaguaribara", "Jaguaribe", "Jaguaruana", "Jardim", "Jati", "Jijoca de Jericoacoara", "Juazeiro do Norte", "Jucás", "Lavras da Mangabeira", "Limoeiro do Norte", "Madalena", "Maracanaú", "Maranguape", "Marco", "Martinópole", "Massapê", "Mauriti", "Meruoca", "Milagres", "Milhã", "Miraíma", "Missão Velha", "Mombaça", "Monsenhor Tabosa", "Morada Nova", "Moraújo", "Morrinhos", "Mucambo", "Mulungu", "Nova Olinda", "Nova Russas", "Novo Oriente", "Ocara", "Orós", "Pacajus", "Pacatuba", "Pacoti", "Pacujá", "Palhano", "Palmácia", "Paracuru", "Paraipaba", "Parambu", "Paramoti", "Pedra Branca", "Penaforte", "Pentecoste", "Pereiro", "Pindoretama", "Piquet Carneiro", "Pires Ferreira", "Poranga", "Porteiras", "Potengi", "Potiretama", "Quiterianópolis", "Quixadá", "Quixelô", "Quixeramobim", "Quixeré", "Redenção", "Reriutaba", "Russas", "Saboeiro", "Salitre", "Santa Quitéria", "Santana do Acaraú", "Santana do Cariri", "São Benedito", "São Gonçalo do Amarante", "São João do Jaguaribe", "São Luís do Curu", "Senador Pompeu", "Senador Sá", "Sobral", "Solonópole", "Tabuleiro do Norte", "Tamboril", "Tarrafas", "Tauá", "Tejuçuoca", "Tianguá", "Trairi", "Tururu", "Ubajara", "Umari", "Umirim", "Uruburetama", "Uruoca", "Varjota", "Várzea Alegre", "Viçosa do Ceará"]

// Quiz ----------------------------
var quiz_texts = [{
    "title": "Você ficaria um mês numa floresta com seus amigos?",
    "type": "options",
    "name": "mei",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"
  },
  {
    "title": "Aceitar sair amanhã de manhã para uma viagem por todo o Ceará?",
    "type": "options",
    "name": "laz",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"
  },
  {
    "title": "Aceitaria trocar seus olhos por outros com visão de raio x",
    "type": "options",
    "name": "ino",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"
  },
  {
    "title": "Aceitaria ser professor/professora da sua turma?",
    "type": "options",
    "name": "edu",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"
  },
  {
    "title": "Trocaria seus brinquedos por dinheiro?",
    "type": "options",
    "name": "eco",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"
  },
  {
    "title": "Gostaria de colher sua comida no quintal da sua casa?",
    "type": "options",
    "name": "sau",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"
  },
  {
    "title": "Você gostaria de ser o prefeito da sua cidade?",
    "type": "options",
    "name": "gov",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"
  }
]

var badges_texts = {
  "sau": {
    "id": "sau",
    "color": "#D31A1A",
    "finished": false,
    "levels": 2,
    "title": "Amigo da Saúde",
    "description": "Adora cuidar de outras pessoas, tem muita coragem para salvar vidas e é muito amável."
  },
  "laz": {
    "id": "laz",
    "color": "#D87100",
    "finished": false,
    "levels": 3,
    "title": "Amigo do Lazer",
    "description": "É muito divertido e adora conhecer lugares novos."
  },
  "eco": {
    "id": "eco",
    "color": "#E0C43B",
    "finished": false,
    "levels": 2,
    "title": "Amigo da Economia",
    "description": "Ama números e sabe bem como vender algo para juntar dinheiro."
  },
  "mei": {
    "id": "mei",
    "color": "#48A32E",
    "finished": false,
    "levels": 3,
    "title": "Amigo da Sustentabilidade",
    "description": "Respeita a natureza e está sempre ajudando outras pessoas."
  },
  "gov": {
    "id": "gov",
    "color": "#007500",
    "finished": false,
    "levels": 4,
    "title": "Amigo do Governo",
    "description": "Gosta muito de falar com as pessoas. É responsável e organizado."
  },
  "edu": {
    "id": "edu",
    "color": "#046799",
    "finished": false,
    "levels": 3,
    "title": "Amigo da Educação",
    "description": "É muito curioso e está sempre lendo livros, revistas e histórias em quadrinho. Também adora ensinar os amigos."
  },
  "ino": {
    "id": "ino",
    "color": "#8748AF",
    "finished": false,
    "levels": 3,
    "title": "Amigo da Inovação",
    "description": "Criatividade é o seu ponto forte. Observa tudo à sua volta e não desiste fácil das coisas."
  }
}

var final_pont = [{
    "name": "mei",
    "points": 0
  },
  {
    "name": "laz",
    "points": 0
  },
  {
    "name": "ino",
    "points": 0
  },
  {
    "name": "edu",
    "points": 0
  },
  {
    "name": "eco",
    "points": 0
  },
  {
    "name": "sau",
    "points": 0
  },
  {
    "name": "gov",
    "points": 0
  }
]

var matrix_questions_pont = [
  [3, 2, -1, -2, -3, 1, 0],
  [1, 3, -2, -1, 2, 0, -3],
  [-3, 1, 3, 2, 0, -1, -2],
  [-2, 0, 1, 3, -1, -3, 2],
  [-1, -3, 2, 0, 3, -2, 1],
  [2, -2, 0, -3, 1, 3, -1],
  [0, -1, -3, 1, -2, 2, 3]
]

// Comment ----------------------------
var comments_texts = {
  "start_game": {
    "color": "orange", //red, gree, blue, orange, transparent
    "text": "#name#, você quer me ajudar a construir um futuro legal pra gente?"
  },
  "start_quiz": {
    "color": "sunshine",
    "text": "Bom trabalho! Agora, precisamos saber que tipo de amigo você é. Responda as perguntas!"
  },
  "start_challenge": {
    "color": "blue",
    "text": "Agora, me ajude a resolver alguns desafios #badge_title#."
  },
  "about_region": {
    "color": "green",
    "text": "Você sabia que o Ceará é dividido em 14 regiões e a sua cidade fica no "
  }
}


var map_regions_texts = [{
    "id": "macico_de_baturite",
    "name": "Maçico de Baturité",
    "info": "Maciço de Baturité <br>13 cidades<br>população: +390.000",
    "cities": ["Acarapé", "Aracoiaba", "Aratuba", "Barreira", "Baturité", "Capistrano", "Guaramiranga", "Itapiúna", "Mulungu", "Ocara", "Pacoti", "Palmácia", "Redenção"]
  },
  {
    "id": "litoral_oeste",
    "name": "Litoral Oeste",
    "info": "Litoral Oeste<br>12 cidades<br>população: +380.000",
    "cities": ["Amontada", "Apuiarés", "General Sampaio", "Irauçuba", "Itapajé", "Itapipoca", "Miraíma", "Pentecoste", "Tejuçuoca", "Tururu", "Umirim", "Uruburetama"]
  },
  {
    "id": "cariri",
    "name": "Cariri",
    "info": "Cariri<br>29 cidades<br>população: +1.000.000",
    "cities": ["Abaiara", "Altaneira", "Antonina do Norte", "Araripe", "Assaré", "Aurora", "Barbalha", "Barro", "Brejo Santo", "Campos Sales",
      "Caririaçu", "Crato", "Farias Brito", "Granjeiro", "Jardim", "Jati", "Juazeiro do Norte", "Lavras da Mangabeira", "Mauriti", "Milagres",
      "Missão Velha", "Nova Olinda", "Penaforte", "Porteiras", "Potengi", "Salitre", "Santana do Cariri", "Tarrafas", "Várzea Alegre"
    ]
  },
  {
    "id": "centro_sul",
    "name": "Centro Sul",
    "info": "Centro Sul<br>13 cidades<br>+390.000",
    "cities": ["Acopiara", "Baixio", "Cariús", "Catarina", "Cedro", "Icó", "Iguatu", "Ipaumirim", "Jucás", "Orós", "Quixelô", "Saboeiro", "Umari"]
  },
  {
    "id": "sertao_central",
    "name": "Sertão Central",
    "info": "Sertão Central<br>13 cidades<br>população: +390.000",
    "cities": ["Banabuiú", "Choró", "Deputado Irapuan Pinheiro", "Ibaretama", "Ibicuitinga", "Milhã", "Mombaça", "Pedra Branca", "Piquet Carneiro",
      "Quixadá", "Quixeramobim", "Senador Pompeu", "Solonópole"
    ]
  },
  {
    "id": "serra_da_ibiapaba",
    "name": "Serra da Ibiapaba",
    "info": "Serra da Ibiapaba<br>9 cidades<br>população: +350.00",
    "cities": ["Carnaubal", "Croatá", "Guaraciaba do Norte", "Ibiapina", "Ipu", "São Benedito", "Tianguá", "Ubajara", "Viçosa do Ceará"]
  },
  {
    "id": "sertao_de_sobral",
    "name": "Sertão de Sobral",
    "info": "Sertão de Sobral<br>18 cidades<br>população: +490.00",
    "cities": ["Alcântaras", "Cariré", "Coreaú", "Forquilha", "Frecheirinha", "Graça", "Groaíras", "Massapê", "Meruoca", "Moraújo",
      "Mucambo", "Pacujá", "Pires Ferreira", "Reriutaba", "Santana do Acaraú", "Senador Sá", "Sobral", "Varjota"
    ]
  },
  {
    "id": "litoral_norte",
    "name": "Litoral Norte",
    "info": "Litoral Norte<br>13 cidades<br>população: +390.000",
    "cities": ["Acaraú", "Barroquinha", "Bela Cruz", "Camocim", "Chaval", "Cruz", "Granja", "Itarema", "Jijoca de Jericoacoara", "Marco",
      "Martinópole", "Morrinhos", "Uruoca"
    ]
  },
  {
    "id": "sertao_dos_inhamuns",
    "name": "Sertão dos Inhamuns",
    "info": "Sertão dos Inhamuns<br>5 cidades<br>população: +130.000",
    "cities": ["Aiuaba", "Arneiroz", "Parambu", "Quiterianópolis", "Tauá"]
  },
  {
    "id": "sertao_dos_crateus",
    "name": "Sertão dos Crateús",
    "info": "Sertão dos Crateús<br>13 cidades<br>população: +340.000",
    "cities": ["Ararendá", "Catunda", "Crateús", "Hidrolândia", "Independência", "Ipaporanga", "Ipueiras", "Monsenhor Tabosa", "Nova Russas",
      "Novo Oriente", "Poranga", "Santa Quitéria", "Tamboril"
    ]
  },
  {
    "id": "sertao_de_caninde",
    "name": "Sertão de Canindé",
    "info": "Sertão de Canindé<br>6 cidades<br>população +200.000",
    "cities": ["Boa Viagem", "Canindé", "Caridade", "Itatira", "Madalena", "Paramoti"]
  },
  {
    "id": "vale_do_jaguaribe",
    "name": "Vale do Jaguaribe",
    "info": "Vale do Jaguaribe<br>15 cidades<br>população +390.000",
    "cities": ["Alto Santo", "Ererê", "Iracema", "Jaguaretama", "Jaguaribara", "Jaguaribe", "Limoeiro do Norte", "Morada Nova", "Palhano",
      "Pereiro", "Potiretama", "Quixeré", "Russas", "São João do Jaguaribe", "Tabuleiro do Norte"
    ]
  },
  {
    "id": "litoral_leste",
    "name": "Litoral Leste",
    "info": "Litoral Leste<br>6 cidades<br>população +200.000",
    "cities": ["Aracati", "Beberibe", "Fortim", "Icapuí", "Itaiçaba", "Jaguaruana"]
  },
  {
    "id": "grande_fortaleza",
    "name": "Grande Fortaleza",
    "info": "Grande Fortaleza<br>19 cidade<br>+4.000.000",
    "cities": ["Aquiraz", "Cascavel", "Caucaia", "Chorozinho", "Eusébio", "Fortaleza", "Guaiúba", "Horizonte", "Itaitinga", "Maracanaú",
      "Maranguape", "Pacajus", "Pacatuba", "Paracuru", "Paraipaba", "Pindoretama", "São Gonçalo do Amarante", "São Luis do Curu", "Trairi"
    ]
  }
]

// Help desafios ----------------------------
var helps_texts = {
  "map": {
    "title": "Descobrindo o Ceará",
    "text": "Encaixe as regiões no mapa. Precisamos de todas juntas para a nossa aventura!"
  },
  "mei_0": {
    "title": "Hora de limpar!",
    "text": "Transforme um espaço da sua cidade. Junte e separe o lixo do terreno abandonado."
  },
  "mei_1": {
    "title": "Vamos plantar!",
    "text": "Podemos deixar o lugar melhor ainda. Que tal fazer uma <a>horta comunitária</a>?",
    "tip": "Lugar onde todo mundo pode plantar e colher alimentos."
  },
  "mei_2": {
    "title": "Xiii...Sem água!",
    "text": "Opa, essa casa não tem <a>saneamento básico</a>. Ligue os canos para chegar água na torneira!",
    "tip": "Sistema de canos por onde a água chega na nossa casa e por onde sai."
  },
  "gov_0": {
    "title": "Hora de brincar!",
    "text": "Você pode ser líder no parquinho e organizar as brincadeiras. Comece separando os times."
  },
  "gov_1": {
    "title": "Ajude!",
    "text": "Receba as doações de alimento do bairro para ajudar a ONG."
  },
  "gov_2": {
    "title": "Olá ouvintes!",
    "text": "Participe da rádio. Junte as notícias para o programa e deixe todo mundo informado."
  },
  "gov_3": {
    "title": "Lei é lei!",
    "text": "Ajude o prefeito a decidir o que é bom para a sua cidade."
  },
  "laz_0": {
    "title": "Você sabe o que tem de bom no Ceará?",
    "text": "Complete o álbum de figurinhas e descubra!"
  },
  "laz_1": {
    "title": "Me conta!",
    "text": "O que tem na sua cidade? Marque as imagens na tela."
  },
  "laz_2": {
    "title": "7 erros.",
    "text": "Hmmm...tem algo de errado na imagem ao lado. Encontre 7 erros."
  },
  "ino_0": {
    "title": "Fique atento!",
    "text": "Observe a cena e tente resolver o problema."
  },
  "ino_1": {
    "title": "Indo para o espaço!",
    "text": "Monte um foguete que consiga ir até o espaço."
  },
  "ino_2": {
    "title": "Seguindo o caminho!",
    "text": "Adicione peças ao carrinho para que ele consiga andar."
  },
  "sau_0": {
    "title": "Comer, comer…",
    "text": "Um prato de comida saudável é melhor que remédio! Você sabe montar um? Arraste as comidas para o prato."
  },
  "sau_1": {
    "title": "Vamos brincar!",
    "text": "Brincar também te deixa muito saudável. Aproveite os brinquedos."
  },
  "edu_0": {
    "title": "Super escola!",
    "text": "Adicione novas coisas na sua escola e veja o que acontece."
  },
  "edu_1": {
    "title": "Dentro da escola!",
    "text": "Agora vamos adicionar mais 5 coisas legais dentro da escola."
  },
  "edu_2": {
    "title": "Minha sala de aula!",
    "text": "Por último, adicione 5 coisas na sala de aula."
  },
  "eco_0": {
    "title": "Cofrinho cheio! Quanto dinheiro você consegue juntar?",
    "text": "Pegue as moedas verdes e fuja das vermelhas. Use as setas do teclado."
  },
  "eco_1": {
    "title": "Coleção de bolinhas!",
    "text": "Veja o que você ganha se colocar moedas nas máquinas de bolinhas."
  }
}

// Congrats ----------------------------
var congrats_texts = {
  "badge": {
    "text": "Você é #badge_title#. Parabéns!"
  },
  "mei_0": {
    "text": "Parabéns! Você deixou o terreno limpo e ajudou na <a>reciclagem</a> do lixo.",
    "tip": "Reciclagem: transformar o lixo em um produto novo."
  },
  "mei_1": {
    "text": "Muito bem! Antes de cozinhar, vamos lavar o que você colheu."
  },
  "mei_2": {
    "text": "Parabéns! Agora as pessoas do seu bairro podem colher alimentos de graça nesse terreno."
  },
  "gov_0": {
    "text": "Parabéns! Você conseguiu organizar a brincadeira."
  },
  "gov_1": {
    "text": "Maravilha! Sua atitude ajudou muita gente que estava com fome!"
  },
  "gov_2": {
    "text": "A cidade adorou! Agora está todo mundo mais informado."
  },
  "gov_3": {
    "text": "Você é um grande líder! Fez ótimas escolhas para sua cidade. Continue assim."
  },
  "laz_0": {
    "text": "Uau! Você conhece tudo mesmo!"
  },
  "laz_1": {
    "text": "Sua cidade é bem legal!"
  },
  "laz_2": {
    "text": "Bom trabalho. Isso sim é ser um grande amigo do lazer."
  },
  "ino_0": {
    "text": "Parabéns! Um inventor precisa ser um ótimo observador.",
    "textM": "Parabéns! Uma inventora precisa ser uma ótima observadora"
  },
  "ino_1": {
    "text": "Maravilhoso! É preciso muita criatividade para fazer um foguete."
  },
  "ino_2": {
    "text": "É isso aí! Testar, testar e testar várias vezes ajuda a melhorar as invenções! Isso é persistência."
  },
  "sau_0": {
    "text": "Muito bem. Você sabe como se cuidar!"
  },
  "sau_1": {
    "text": "Maravilha! Comer bem e brincar mais, sem doenças nunca mais!"
  },
  "edu_0": {
    "text": "Por fora sua escola está incrível!"
  },
  "edu_1": {
    "text": "Agora sim está tudo certo para os alunos aprenderem melhor. Parabéns."
  },
  "edu_2": {
    "text": "Incrível! Eu queria estudar numa escola dessas!"
  },
  "eco_0": {
    "text": "Parabéns! Você juntou seu próprio dinheiro!"
  },
  "eco_1": {
    "text": "Maravilha! Você <a>investiu</a> seu dinheiro em coisas muito legais.",
    "tip": "Dar o seu dinheiro em troca de algo melhor pra você."
  }
}
