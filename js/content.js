// General ----------------------------  
var kidName = ""
var kidRegion = ""
var kidAge = 0

var question_number = 0 //first question
var questions_array = [] //actual array of questions
var actual_section = undefined
var comment_name = undefined // regions/other_normal_comment

// Form ----------------------------	
var questions_texts = [
  {"title": "Me diga, você é menino ou menina?",
    "type": "options",
    "name": "gender",
    "options": ["Menina", "Menino"],
    "button_text": "Próximo"
  },
  {"title": "E como posso te chamar?",
    "type": "text",
    "name": "name",
    "placeholder": "Escreva seu nome",
    "button_text": "Próximo"
  },
  {"title": "Oi #name#, quantos anos você tem?",
    "type": "number",
    "name": "age",
    "placeholder": "Escreva sua idade",
    "button_text": "Próximo"
  },
  {"title": "Legal! E qual o nome da sua cidade?",
    "type": "text",
    "name": "city",
    "placeholder": "Escreva o nome da sua cidade",
    "button_text": "Enviar"
  }]
var available_cities = ["Abaiara","Acarapé","Acaraú","Acopiara","Aiuaba","Alcântaras","Altaneira","Alto Santo","Amontada","Antonina do Norte","Apuiarés","Aquiraz","Aracati","Aracoiaba","Ararendá","Araripe","Aratuba","Arneiroz","Assaré","Aurora","Baixio","Banabuiú","Barbalha","Barreira","Barro","Barroquinha","Baturité","Beberibe","Bela Cruz","Boa Viagem","Brejo Santo","Camocim","Campos Sales","Canindé","Capistrano","Caridade","Cariré","Caririaçu","Cariús","Carnaubal","Cascavel","Catarina","Catunda","Caucaia","Cedro","Chaval","Choró","Chorozinho","Coreaú","Crateús","Crato","Croatá","Cruz","Deputado Irapuan Pinheiro","Ererê","Eusébio","Farias Brito","Forquilha","Fortaleza","Fortim","Frecheirinha","General Sampaio","Graça","Granja","Granjeiro","Groaíras","Guaiúba","Guaraciaba do Norte","Guaramiranga","Hidrolândia","Horizonte","Ibaretama","Ibiapina","Ibicuitinga","Icapuí","Icó","Iguatu","Independência","Ipaporanga","Ipaumirim","Ipu","Ipueiras","Iracema","Irauçuba","Itaiçaba","Itaitinga","Itapagé","Itapipoca","Itapiúna","Itarema","Itatira","Jaguaretama","Jaguaribara","Jaguaribe","Jaguaruana","Jardim","Jati","Jijoca de Jericoaroara","Juazeiro do Norte","Jucás","Lavras da Mangabeira","Limoeiro do Norte","Madalena","Maracanaú","Maranguape","Marco","Martinópole","Massapê","Mauriti","Meruoca","Milagres","Milhã","Miraíma","Missão Velha","Mombaça","Monsenhor Tabosa","Morada Nova","Moraújo","Morrinhos","Mucambo","Mulungu","Nova Olinda","Nova Russas","Novo Oriente","Ocara","Orós","Pacajus","Pacatuba","Pacoti","Pacujá","Palhano","Palmácia","Paracuru","Paraipaba","Parambu","Paramoti","Pedra Branca","Penaforte","Pentecoste","Pereiro","Pindoretama","Piquet Carneiro","Pires Ferreira","Poranga","Porteiras","Potengi","Potiretama","Quiterianópolis","Quixadá","Quixelô","Quixeramobim","Quixeré","Redenção","Reriutaba","Russas","Saboeiro","Salitre","Santa Quitéria","Santana do Acaraú","Santana do Cariri","São Benedito","São Gonçalo do Amarante","São João do Jaguaribe","São Luís do Curu","Senador Pompeu","Senador Sá","Sobral","Solonópole","Tabuleiro do Norte","Tamboril","Tarrafas","Tauá","Tejuçuoca","Tianguá","Trairi","Tururu","Ubajara","Umari","Umirim","Uruburetama","Uruoca","Varjota","Várzea Alegre","Viçosa do Ceará"]

// Quiz ----------------------------
var quiz_texts = [
  { "title": "Você ficaria um mês numa floresta com seus amigos?",
    "type": "options",
    "name": "mei",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"
  },
  { "title": "Aceitar sair amanhã de manhã para uma viagem por todo o Ceará?",
    "type": "options",
    "name": "laz",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"
  },
  { "title": "Aceitaria trocar seus olhos por outros com visão de raio x",
    "type": "options",
    "name": "ino",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"
  },
  { "title": "Aceitaria ser professor/professora da sua turma?",
    "type": "options",
    "name": "edu",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"
  },
  { "title": "Trocaria seus brinquedos por dinheiro?",
    "type": "options",
    "name": "eco",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"
  },
  { "title": "Gostaria de colher sua comida no quintal da sua casa?",
    "type": "options",
    "name": "sau",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"
  },
  { "title": "Você gostaria de ser o prefeito da sua cidade?",
    "type": "options",
    "name": "gov",
    "options": ["Sim", "Não"],
    "button_text": "Pronto"
  }]

var badges_texts = [
    { "id" : "sau",
      "title": "Amigo da Saúde",
      "description": "Adora cuidar de outras pessoas, tem muita coragem para salvar vidas e é muito amável."
    },
    { "id" : "laz",
      "title": "Amigo do Lazer",
      "description": "É muito divertido e adora conhecer lugares novos."
    },
    { "id" : "eco",
      "title": "Amigo da Economia",
      "description": "Ama números e sabe bem como vender algo para juntar dinheiro."
    },
    { "id" : "mei",
      "title": "Amigo do Meio Ambiente",
      "description": "Respeita a natureza e está sempre ajudando outras pessoas."
    },
    { "id" : "gov",
      "title": "Amigo do Governo",
      "description": "Gosta muito de falar com as pessoas. É responsável e organizado."
    },
    { "id" : "edu",
      "title": "Amigo da Educação",
      "description": "É muito curioso e está sempre lendo livros, revistas e histórias em quadrinho. Também adora ensinar os amigos."
    },
    { "id" : "ino",
      "title": "Amigo da Inovação",
      "description": "Criatividade é o seu ponto forte. Observa tudo à sua volta e não desiste fácil das coisas."
    }
]

var final_pont = [
      { "name": "mei",
        "points": 0 
      },
      { "name": "laz",
        "points": 0 
      },
      { "name": "ino",
        "points": 0 
      },
      { "name": "edu",
        "points": 0 
      },
      { "name": "eco",
        "points": 0 
      },
      { "name": "sau",
        "points": 0 
      },
      { "name": "gov",
        "points": 0 
      }]

var matrix_questions_pont  = [[3,2,-1,-2,-3,1,0],
                              [1,3,-2,-1,2,0,-3],
                              [-3,1,3,2,0,-1,-2],
                              [-2,0,1,3,-1,-3,2],
                              [-1,-3,2,0,3,-2,1],
                              [2,-2,0,-3,1,3,-1],
                              [0,-1,-3,1,-2,2,3]]

// Comment ----------------------------

var comments_texts = {
  "start_game":
      { "color" : "orange", //red, gree, blue, orange, transparent
         "text": "#name#, você quer me ajudar a construir um futuro legal pra gente?"
      },
  "start_quiz":
      { "color" : "sunshine",
         "text": "Bom trabalho! Agora, precisamos saber com o que você vai trabalhar. Responda as perguntas!"
      },
  "start_challenge":
      { "color" : "blue",
         "text": "Agora, me ajude a resolver alguns desafios."// da #badge#."
      },
  "about_region":
      { "color" : "green",
         "text": "Você sabia que o Ceará é dividido em 14 regiões e a sua cidade fica no "
      }
}

var map_regions_texts = [
    { "id" : "macico_de_baturite",
      "name": "Maçico de Baturité",
      "info" : "Maciço de Baturité <br>13 cidades<br>população: +390.000"
    },
    { "id" : "litoral_oeste",
      "name": "Litoral Oeste",
      "info" : "Litoral Oeste<br>12 cidades<br>população: +380.000"
    },
    { "id" : "cariri",
      "name": "Cariri",
      "info" : "Cariri<br>29 cidades<br>população: +1.000.000"
    },
    { "id" : "centro_sul",
      "name": "Centro Sul",
      "info" : "Centro Sul<br>13 cidades<br>+390.000"
    },
    { "id" : "sertao_central",
      "name": "Sertão Central",
      "info" : "Sertão Central<br>13 cidades<br>população: +390.000"
    },
    { "id" : "serra_da_ibiapaba",
      "name": "Serra da Ibiapaba",
      "info" : "Serra da Ibiapaba<br>9 cidades<br>população: +350.00"
    },
    { "id" : "sertao_de_sobral",
      "name": "Sertão de Sobral",
      "info" : "Sertão de Sobral<br>18 cidades<br>população: +490.00"
    },
    { "id" : "litoral_norte",
      "name": "Litoral Norte",
      "info" : "Litoral Norte<br>13 cidades<br>população: +390.000"
    },
    { "id" : "sertao_dos_inhamuns",
      "name": "Sertão dos Inhamuns",
      "info" : "Sertão dos Inhamuns<br>5 cidades<br>população: +130.000"
    },
    { "id" : "sertao_dos_crateus",
      "name": "Sertão dos Crateús",
      "info" : "Sertão dos Crateús<br>13 cidades<br>população: +340.000"
    },
    { "id" : "sertao_de_caninde",
      "name": "Sertão de Canindé",
      "info" : "Sertão de Canindé<br>6 cidades<br>população +200.000"
    },
    { "id" : "vale_do_jaguaribe",
      "name": "Vale do Jaguaribe",
      "info" : "Vale do Jaguaribe<br>15 cidades<br>população +390.000"
    },
    { "id" : "litoral_leste",
      "name": "Litoral Leste",
      "info" : "Litoral Leste<br>6 cidades<br>população +200.000"
    },
    { "id" : "grande_fortaleza",
      "name": "Grande Fortaleza",
      "info":  "Grande Fortaleza<br>19 cidade<br>+4.000.000"
    }]

// Help desafios ----------------------------

var helps_texts = { 
  "map":{"title": "Descobrindo o Ceará",
          "text" : "Encaixe as regiões no mapa. Precisamos de todas juntas para a nossa aventura!"
        },
  "mei0":{"title": "Hora de limpar!",
          "text" : "Transforme um espaço da sua cidade. Junte e separe o lixo do terreno abandonado."
        },
  "mei1":{"title": "Vamos plantar!",
          "text" : "Podemos deixar o lugar melhor ainda. Que tal fazer uma <a>horta comunitária</a>?",
          "tip"  : "Horta comunitária: lugar onde todo mundo pode plantar e colher alimentos."
        },
  "mei2":{"title": "Xiii...Sem água!",
          "text" : "Opa, essa casa não tem <a>saneamento básico</a>. Ligue os canos para chegar água na torneira!",
          "tip"  : "Saneamento básico: sistema de canos por onde a água chega na nossa casa e por onde sai."
        }
}

