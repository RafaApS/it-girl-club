/* It Girl Club — script.js (sem módulos; funciona também via file://) */

/* 1. DADOS */
const CATEGORIAS = [
  {
    id: "aesthetic-wardrobe",
    nome: "The Aesthetic Wardrobe",
    looks: [
      {
        titulo: "Estilos Azul Profundo",
        descricao: "O estilo 'The Aesthetic Wardrobe' traduz uma abordagem minimalista e contemporânea focada no luxo silencioso, priorizando a construção de um armário-cápsula versátil e sofisticado. Numa paleta de cores neutras, aliada a uma alfaiataria desconstruída, onde peças estruturadas ganham fluidez e leveza.",
        lojas: [
          { nome: "Loja Ilha do Mel", url: "https://www.lojailhadomel.com.br/" },
          { nome: "MODAB", url: "https://www.modab.com.br/" }
        ]
      },
      {
        titulo: "Casual Clássico",
        descricao: "Descrição do look 2.",
        lojas: [
          { nome: "Dafiti", url: "https://www.dafiti.com.br/" },
          { nome: "Renner", url: "https://www.lojasrenner.com.br/" }
        ]
      },
      {
        titulo: "Estilo Terninho", descricao: "O estilo 'The Aesthetic Wardrobe' traduz uma abordagem minimalista e contemporânea focada no luxo silencioso, priorizando a construção de um armário-cápsula versátil e sofisticado. Numa paleta de cores neutras, aliada a uma alfaiataria desconstruída, onde peças estruturadas ganham fluidez e leveza.",
        lojas: [
          { nome: "Dafiti", url: "https://www.dafiti.com.br/" },
          { nome: "Renner", url: "https://www.lojasrenner.com.br/" }]
      },
      {
        titulo: "Branco Assimétrico", descricao: "O estilo 'The Aesthetic Wardrobe' traduz uma abordagem minimalista e contemporânea focada no luxo silencioso, priorizando a construção de um armário-cápsula versátil e sofisticado. Numa paleta de cores neutras, aliada a uma alfaiataria desconstruída, onde peças estruturadas ganham fluidez e leveza.",
        lojas: [
          { nome: "Dafiti", url: "https://www.dafiti.com.br/" },
          { nome: "Renner", url: "https://www.lojasrenner.com.br/" }]
      },
      {
        titulo: "Pretinho básico", descricao: "O estilo 'The Aesthetic Wardrobe' traduz uma abordagem minimalista e contemporânea focada no luxo silencioso, priorizando a construção de um armário-cápsula versátil e sofisticado. Numa paleta de cores neutras, aliada a uma alfaiataria desconstruída, onde peças estruturadas ganham fluidez e leveza.",
        lojas: [
          { nome: "Loja Ilha do Mel", url: "https://www.lojailhadomel.com.br/" },
          { nome: "MODAB", url: "https://www.modab.com.br/" }]
      },
      {
        titulo: "Estilo Neutro", descricao: "O estilo 'The Aesthetic Wardrobe' traduz uma abordagem minimalista e contemporânea focada no luxo silencioso, priorizando a construção de um armário-cápsula versátil e sofisticado. Numa paleta de cores neutras, aliada a uma alfaiataria desconstruída, onde peças estruturadas ganham fluidez e leveza.",
        lojas: [
          { nome: "Shein", url: "https://br.shein.com/" },
          { nome: "Riachuelo", url: "https://www.riachuelo.com.br/" }]
      }
    ]
  },
  {
    id: "everyday-looks",
    nome: "Everyday Looks",
    looks: [
      {
        titulo: "Descolado e Confortável", descricao: "O estilo 'Everyday Looks' traduz a essência da moda urbana, jovem e descomplicada. É uma estética focada no conforto sem abrir mão do estilo, baseada em peças curingas do dia a dia, como jeans, camisetas básicas e modelagens mais amplas (oversized ou wide leg). A paleta de cores é sóbria e funcional, permitindo infinitas combinações. ",
        lojas: [
          { nome: "Renner", url: "https://www.lojasrenner.com.br/" },
          { nome: "C&A", url: "https://www.cea.com.br/" },
          { nome: "Corina", url: "https://www.corinalovers.com.br/" }


        ]
      },
      {
        titulo: "Básico Fluido", descricao: "O estilo 'Everyday Looks' traduz a essência da moda urbana, jovem e descomplicada. É uma estética focada no conforto sem abrir mão do estilo, baseada em peças curingas do dia a dia, como jeans, camisetas básicas e modelagens mais amplas (oversized ou wide leg). A paleta de cores é sóbria e funcional, permitindo infinitas combinações. ",
        lojas: [
          { nome: "MUNA", url: "https://muna.com.br/" },
          { nome: "r.d.lay", url: "https://www.rdlay.com.br/" }
        ]
      },
      {
        titulo: "Urbano Retrô", descricao: "O estilo 'Everyday Looks' traduz a essência da moda urbana, jovem e descomplicada. É uma estética focada no conforto sem abrir mão do estilo, baseada em peças curingas do dia a dia, como jeans, camisetas básicas e modelagens mais amplas (oversized ou wide leg). A paleta de cores é sóbria e funcional, permitindo infinitas combinações. ",
        lojas: [
          { nome: "MUNA", url: "https://muna.com.br/" },
          { nome: "r.d.lay", url: "https://www.rdlay.com.br/" }
        ]
      },
      {
        titulo: "Urbano Retrô", descricao: "O estilo 'Everyday Looks' traduz a essência da moda urbana, jovem e descomplicada. É uma estética focada no conforto sem abrir mão do estilo, baseada em peças curingas do dia a dia, como jeans, camisetas básicas e modelagens mais amplas (oversized ou wide leg). A paleta de cores é sóbria e funcional, permitindo infinitas combinações. ",
        lojas: [
          { nome: "MUNA", url: "https://muna.com.br/" },
          { nome: "r.d.lay", url: "https://www.rdlay.com.br/" }
        ]
      },
      {
        titulo: "Streetwear Utilitário", descricao: "O estilo 'Everyday Looks' traduz a essência da moda urbana, jovem e descomplicada. É uma estética focada no conforto sem abrir mão do estilo, baseada em peças curingas do dia a dia, como jeans, camisetas básicas e modelagens mais amplas (oversized ou wide leg). A paleta de cores é sóbria e funcional, permitindo infinitas combinações. ",
        lojas: [
          { nome: "Forum", url: "https://www.forum.com.br/" },
          { nome: "Dafiti", url: "https://www.dafiti.com.br/" }
        ]
      },
      {
        titulo: "Streetwear Utilitário", descricao: "O estilo 'Everyday Looks' traduz a essência da moda urbana, jovem e descomplicada. É uma estética focada no conforto sem abrir mão do estilo, baseada em peças curingas do dia a dia, como jeans, camisetas básicas e modelagens mais amplas (oversized ou wide leg). A paleta de cores é sóbria e funcional, permitindo infinitas combinações. ",
        lojas: [
          { nome: "Forum", url: "https://www.forum.com.br/" },
          { nome: "Dafiti", url: "https://www.dafiti.com.br/" }
        ]
      }
    ]
  },
  {
    id: "special-occasions",
    nome: "Special Occasions",
    looks: [
      {
        titulo: "Fluidez Marinho Frente Única",
        descricao: "Este look elegante e noturno foca no brilho discreto do tecido com uma modelagem frente única de cetim. A blusa de decote reto e alças finas traz frescor, enquanto a silhueta alongada é complementada por um detalhe metálico (cinto) que adiciona um ponto de luz ao azul marinho profundo.",
        lojas: [
          { nome: "Viva Dress", url: "https://www.vivadress.com.br/" },
          { nome: "Lenita", url: "https://www.lenita.com.br/" },
          { nome: "FARM", url: "https://www.farmrio.com.br/" }
        ]
      },
      {
        titulo: "Slip Dress Azul Royal",
        descricao: "Com apelo sensual e sofisticado, este vestido midi acetinado em tom azul royal destaca-se pela modelagem 'slip dress'. As alcinhas finas e a fenda lateral pronunciada trazem um movimento sedutor e leveza, sendo uma aposta infalível para festas ou eventos sociais noturnos.",
        lojas: [
          { nome: "Loja Style Me", url: "https://www.lojastyleme.com.br/" },
          { nome: "Maria Brazil", url: "https://www.mariabrazil.com.br/" },
          { nome: "Toth Store", url: "https://www.tothstore.com.br/" }
        ]
      },
      {
        titulo: "Metalizado Assimétrico Prata",
        descricao: "Ideal para destacar as curvas com brilho intenso, o vestido curto prateado aposta no drapeado estratégico e na textura acetinada. A gola boba e os cortes assimétricos conferem um ar moderno e fashionista, perfeito para baladas e eventos de gala descontraídos.",
        lojas: [
          { nome: "Ellus", url: "https://www.ellus.com/" },
          { nome: "ZARA", url: "https://www.zara.com/br/" },
          { nome: "Lenita", url: "https://www.lenita.com.br/" }
        ]
      },
      {
        titulo: "Alfaiataria e Cetim",
        descricao: "O contraste perfeito entre o estruturado e o romântico. O vestido curto de cetim bege ou champagne, de decote reto, ganha um contraponto de atitude e formalidade com o uso de um blazer de alfaiataria preto clássico, jogado casualmente sobre os ombros.",
        lojas: [
          { nome: "ZARA", url: "https://www.zara.com/br/" },
          { nome: "Privalia", url: "https://br.privalia.com/" },
          { nome: "Dafiti", url: "https://www.dafiti.com.br/" }
        ]
      },
      {
        titulo: "Tubinho Preto Minimalista",
        descricao: "A quintessência do guarda-roupa clássico: o vestido tubinho preto midi tomara-que-caia. Sem alças, com corte reto e sem detalhes excessivos, ele valoriza a silhueta através de linhas limpas e estruturadas. É o auge da elegância minimalista.",
        lojas: [
          { nome: "ZARA", url: "https://www.zara.com/br/" },
          { nome: "Miss & Misses", url: "https://www.missemisses.com.br/" },
          { nome: "Posthaus", url: "https://www.posthaus.com.br/" }
        ]
      },
      {
        titulo: "Vestido Vermelho Amarrações",
        descricao: "A quintessência do guarda-roupa clássico: o vestido tubinho preto midi tomara-que-caia. Sem alças, com corte reto e sem detalhes excessivos, ele valoriza a silhueta através de linhas limpas e estruturadas. É o auge da elegância minimalista.",
        lojas: [
          { nome: "ZARA", url: "https://www.zara.com/br/" },
          { nome: "Miss & Misses", url: "https://www.missemisses.com.br/" },
          { nome: "Posthaus", url: "https://www.posthaus.com.br/" }
        ]
      }
    ]
  },
  {
    "id": "color-me-fashion",
    "nome": "Color Me Fashion",
    "looks": [
      {
        "titulo": "Mistura de Xadrez e Tons Pastel",
        "descricao": "Um look que brinca com texturas e padrões, combinando uma saia xadrez estruturada com uma blusa de tom pastel e um casaco texturizado sobre os ombros, criando um visual fashionista, elegante e cheio de atitude.",
        "lojas": [
          { "nome": "Renner", "url": "https://www.lojasrenner.com.br/" },
          { "nome": "AMARO", "url": "https://amaro.com/" },
          { "nome": "Dafiti", "url": "https://www.dafiti.com.br/" }
        ]
      },
      {
        "titulo": "Color Block Primário",
        "descricao": "Uma aposta ousada no color blocking. O blazer vermelho vivo contrasta na perfeição com a boina azul, enquanto a blusa preta equilibra as cores e os óculos de sol vermelhos reforçam a estética criativa e urbana do conjunto.",
        "lojas": [
          { "nome": "ZARA", "url": "https://www.zara.com/br/" },
          { "nome": "C&A", "url": "https://www.cea.com.br/" },
          { "nome": "Riachuelo", "url": "https://www.riachuelo.com.br/" }
        ]
      },
      {
        "titulo": "Contraste Turquesa e Mostarda",
        "descricao": "Uma verdadeira explosão de cores vibrantes com um blazer e boina em tom turquesa, que contrastam intensamente com uma blusa amarela texturizada. Os óculos brancos de formato 'olho de gato' conferem um toque retro e arrojado ao visual.",
        "lojas": [
          { "nome": "FARM", "url": "https://www.farmrio.com.br/" },
          { "nome": "Shein", "url": "https://br.shein.com/" },
          { "nome": "Renner", "url": "https://www.lojasrenner.com.br/" }
        ]
      },
      {
        "titulo": "Conjunto Estampado Tropical",
        "descricao": "Um visual fresco e alegre composto por um conjunto descontraído de camisa de manga curta e calções com um padrão floral vibrante. A blusa amarela por baixo harmoniza com a paleta quente, sendo a escolha ideal para dias soalheiros.",
        "lojas": [
          { "nome": "FARM", "url": "https://www.farmrio.com.br/" },
          { "nome": "C&A", "url": "https://www.cea.com.br/" },
          { "nome": "Marisa", "url": "https://www.marisa.com.br/" }
        ]
      },
      {
        "titulo": "Alfaiataria Colorida",
        "descricao": "Uma abordagem moderna e expressiva à alfaiataria que une um fato (blazer e calças) num tom verde menta vibrante com uma blusa cor-de-rosa em contraste. Um look divertido, mas simultaneamente poderoso e estruturado.",
        "lojas": [
          { "nome": "ZARA", "url": "https://www.zara.com/br/" },
          { "nome": "Dafiti", "url": "https://www.dafiti.com.br/" },
          { "nome": "AMARO", "url": "https://amaro.com/" }
        ]
      },
      {
        "titulo": "Transparencia e Cores",
        "descricao": "Uma abordagem moderna e expressiva à alfaiataria que une um fato (blazer e calças) num tom verde menta vibrante com uma blusa cor-de-rosa em contraste. Um look divertido, mas simultaneamente poderoso e estruturado.",
        "lojas": [
          { "nome": "ZARA", "url": "https://www.zara.com/br/" },
          { "nome": "Dafiti", "url": "https://www.dafiti.com.br/" },
          { "nome": "AMARO", "url": "https://amaro.com/" }
        ]
      }
    ]
  },
  {
    "id": "seasons-mood",
    "nome": "Seasons Mood",
    "looks": [
      {
        "titulo": "Verão Leve Azul e Branco",
        "descricao": "Um visual fresco e descontraído, ideal para os dias quentes, composto por um vestido curto azul com estampas brancas de inspiração tropical. Acompanhado por uma bolsa de malha artesanal e sandálias rasteiras, traduz perfeitamente a leveza do verão.",
        "lojas": [
          { "nome": "FARM", "url": "https://www.farmrio.com.br/" },
          { "nome": "Renner", "url": "https://www.lojasrenner.com.br/" },
          { "nome": "AMARO", "url": "https://amaro.com/" }
        ]
      },
      {
        "titulo": "Inverno Urbano com Xadrez",
        "descricao": "Uma composição aconchegante para dias frios, unindo uma blusa de gola alta clara, calças escuras ajustadas e um cachecol xadrez marcante em tons de vermelho e preto. O casaco pesado complementa o estilo urbano e funcional.",
        "lojas": [
          { "nome": "ZARA", "url": "https://www.zara.com/br/" },
          { "nome": "C&A", "url": "https://www.cea.com.br/" },
          { "nome": "Dafiti", "url": "https://www.dafiti.com.br/" }
        ]
      },
      {
        "titulo": "Neve Aconchegante",
        "descricao": "Um look ideal para o inverno rigoroso, combinando um casaco acolchoado (puffer jacket) em tom neutro claro, uma camisola de malha texturizada por baixo e um chapéu estilo bucket hat. Prático, quente e com muita atitude na neve.",
        "lojas": [
          { "nome": "Renner", "url": "https://www.lojasrenner.com.br/" },
          { "nome": "Riachuelo", "url": "https://www.riachuelo.com.br/" },
          { "nome": "ZARA", "url": "https://www.zara.com/br/" }
        ]
      },
      {
        "titulo": "Primavera Delicada",
        "descricao": "Inspirado na suavidade da estação das flores, este look traz um camisolão de malha trabalhada em tom claro combinando com um hijab cinzento. Uma produção delicada, confortável e harmoniosa para um passeio ao ar livre.",
        "lojas": [
          { "nome": "Marisa", "url": "https://www.marisa.com.br/" },
          { "nome": "C&A", "url": "https://www.cea.com.br/" },
          { "nome": "Dafiti", "url": "https://www.dafiti.com.br/" }
        ]
      },
      {
        "titulo": "Estilo Urbano Floral e Cargo",
        "descricao": "Um visual jovem que mistura o romantismo de uma t-shirt cropped com estampa floral e a utilidade moderna de umas calças cargo largas em tons claros. Perfeito para um estilo streetwear descontraído e cheio de personalidade.",
        "lojas": [
          { "nome": "Shein", "url": "https://br.shein.com/" },
          { "nome": "AMARO", "url": "https://amaro.com/" },
          { "nome": "ZARA", "url": "https://www.zara.com/br/" }
        ]
      },
      {
        "titulo": "Estilo Outono",
        "descricao": "Um visual jovem que mistura o romantismo de uma t-shirt cropped com estampa floral e a utilidade moderna de umas calças cargo largas em tons claros. Perfeito para um estilo streetwear descontraído e cheio de personalidade.",
        "lojas": [
          { "nome": "Shein", "url": "https://br.shein.com/" },
          { "nome": "AMARO", "url": "https://amaro.com/" },
          { "nome": "ZARA", "url": "https://www.zara.com/br/" }
        ]
      }
    ]
  },
  {
    id: "fashion-essentials",
    nome: "Fashion Essentials",
    looks: [
      {
        titulo: "Slip Dress Utilitário",
        descricao: "Um visual urbano e moderno que combina um vestido midi canelado na cor marrom avermelhado com fenda lateral e um blazer oversized preto sobreposto, finalizado com tênis casual.",
        lojas: [
          { "nome": "Renner", "url": "https://www.lojasrenner.com.br" },
          { "nome": "Zara", "url": "https://www.zara.com/br/" },
          { "nome": "Amaro", "url": "https://amaro.com" }
        ]
      },
      {
        titulo: "Tricot Trançado & Alfaiataria",
        descricao: "Composição aconchegante e elegante para dias amenos, trazendo um suéter de tricot trançado cinza com decote em V combinado com calça reta de alfaiataria preta e tênis esportivo.",
        lojas: [
          { "nome": "Renner", "url": "https://www.lojasrenner.com.br" },
          { "nome": "Riachuelo", "url": "https://www.riachuelo.com.br" },
          { "nome": "Zara", "url": "https://www.zara.com/br/" }
        ]
      },
      {
        titulo: "Alfaiataria Desconstruída",
        descricao: "Estilo minimalista e contemporâneo composto por uma camisa social branca oversized de abotoamento frontal com ombros caídos, combinada de forma despretensiosa com calça preta.",
        lojas: [
          { "nome": "Zara", "url": "https://www.zara.com/br/" },
          { "nome": "Riachuelo", "url": "https://www.riachuelo.com.br" },
          { "nome": "Hering", "url": "https://www.hering.com.br" }
        ]
      },
      {
        titulo: "Casual Chic Estruturado",
        descricao: "Look alinhado e casual chic que equilibra um blazer estruturado preto, regata branca básica e calça bege de alfaiataria com cinto fino e caimento levemente cenoura.",
        lojas: [
          { "nome": "Amaro", "url": "https://amaro.com" },
          { "nome": "Zara", "url": "https://www.zara.com/br/" },
          { "nome": "Renner", "url": "https://www.lojasrenner.com.br" }
        ]
      },
      {
        titulo: "Sobreposição Temporal",
        descricao: "Produção clássica de meia-estação apresentando um sobretudotrench coat longo tom bege cáqui sobre regata cinza e calça jeans clara de cintura alta com pernas retas.",
        lojas: [
          { "nome": "Zara", "url": "https://www.zara.com/br/" },
          { "nome": "Renner", "url": "https://www.lojasrenner.com.br" },
          { "nome": "Riachuelo", "url": "https://www.riachuelo.com.br" }
        ]
      },
      {
        titulo: "Aconchego Urbano",
        descricao: "Produção clássica de meia-estação apresentando um sobretudotrench coat longo tom bege cáqui sobre regata cinza e calça jeans clara de cintura alta com pernas retas.",
        lojas: [
          { "nome": "Zara", "url": "https://www.zara.com/br/" },
          { "nome": "Renner", "url": "https://www.lojasrenner.com.br" },
          { "nome": "Riachuelo", "url": "https://www.riachuelo.com.br" }
        ]
      }
    ]
  },
  {
    id: "trending-now",
    nome: "Trending Now",
    looks: [
      {
        titulo: "Romantic Puff & Bermudas",
        descricao: "Um visual romântico e contemporâneo que combina um cropped lilás de laise com decote quadrado e marcantes mangas bufantes estruturadas a uma bermuda alfaiatada bege de cintura alta com cinto encapado, criando uma silhueta jovem e cheia de frescor para o dia a dia.",
        lojas: [
          { "nome": "FARM", "url": "https://www.farmrio.com.br/" },
          { "nome": "ZARA", "url": "https://www.zara.com/br/" },
          { "nome": "AMARO", "url": "https://amaro.com/" }
        ]
      },
      {
        titulo: "Elegância Verde Oliva & Branco",
        descricao: "Uma composição refinada e delicada composta por uma blusa em tom verde oliva com drapeados e mangas curtas volumosas, harmonizada perfeitamente com uma calça de alfaiataria branca de cintura alta marcada por cinto largo e salto fino nude, perfeita para eventos sociais ou ambiente corporativo.",
        lojas: [
          { "nome": "Renner", "url": "https://www.lojasrenner.com.br/" },
          { "nome": "AMARO", "url": "https://amaro.com/" },
          { "nome": "ZARA", "url": "https://www.zara.com/br/" }
        ]
      },
      {
        titulo: "Minimalismo Fluido & Cropped",
        descricao: "Um visual leve com pegada minimalista que apresenta uma regata branca fluida com detalhes delicados de babados e gola rendada, combinada a uma calça pantacourt preta reta e tênis casual pastel, ideal para quem busca conforto com um toque romântico discreto.",
        lojas: [
          { "nome": "Riachuelo", "url": "https://www.riachuelo.com.br/" },
          { "nome": "C&A", "url": "https://www.cea.com.br/" },
          { "nome": "Dafiti", "url": "https://www.dafiti.com.br/" }
        ]
      },
      {
        titulo: "Streetwear Faux Fur & Denim",
        descricao: "Produção de street style audaciosa e de alto impacto que sobrepõe um volumoso casaco de pele sintética marrom a uma camiseta estampada de tom acinzentado e calça jeans slouchy de lavagem ácida, criando um contraste de texturas perfeito para os dias mais frios na cidade.",
        lojas: [
          { "nome": "ZARA", "url": "https://www.zara.com/br/" },
          { "nome": "Dafiti", "url": "https://www.dafiti.com.br/" },
          { "nome": "Renner", "url": "https://www.lojasrenner.com.br/" }
        ]
      },
      {
        titulo: "Desconstrução Urbana & Linho",
        descricao: "Uma proposta fashionista e experimental que traz uma camisa oversized branca usada de forma aberta como terceira peça sobre top faixa cropped, combinada com saia midi em tom cáqui de amarrações drapeadas e bolsa artesanal de palha para um visual boho-chic moderno.",
        lojas: [
          { "nome": "FARM", "url": "https://www.farmrio.com.br/" },
          { "nome": "ZARA", "url": "https://www.zara.com/br/" },
          { "nome": "AMARO", "url": "https://amaro.com/" }
        ]
      },
      {
        titulo: "Sintetismo Amarelo",
        descricao: "Uma proposta fashionista e experimental que traz uma camisa oversized branca usada de forma aberta como terceira peça sobre top faixa cropped, combinada com saia midi em tom cáqui de amarrações drapeadas e bolsa artesanal de palha para um visual boho-chic moderno.",
        lojas: [
          { "nome": "FARM", "url": "https://www.farmrio.com.br/" },
          { "nome": "ZARA", "url": "https://www.zara.com/br/" },
          { "nome": "AMARO", "url": "https://amaro.com/" }
        ]
      }
    ]
  }

];

const LOOKS_POR_GRUPO = 6;
const IDS_ESTILO = ["romantico", "streetwear", "elegante", "casual", "alternativo"]; /* A a E */
const ESTILOS = {
  romantico: {
    nome: "Romântico", frase: "Delicadeza, laços e tons pastel.",
    desc: "Looks suaves e femininos, com rendas, saias e vestidos.",
    paleta: ["Rosa", "Branco", "Lilás", "Tons pastel"], pecas: ["Vestidos", "Saias", "Blusas com renda"],
    acessorios: ["Laços", "Pérolas", "Colares delicados"], ocasioes: ["Dia a dia: vestido leve com tênis branco", "Festa: vestido delicado com laço"],
    lojas: [
      { nome: "Nome da loja A", url: "https://link-real-da-loja-a.com" },
      { nome: "Nome da loja B", url: "https://link-real-da-loja-b.com" }
    ]
  },
  streetwear: {
    nome: "Streetwear/Urbano", frase: "Peças largas e muita atitude.",
    desc: "Visual urbano, confortável e cheio de personalidade.",
    paleta: ["Preto", "Cinza", "Vermelho", "Cores fortes"], pecas: ["Calça baggy", "Camiseta oversized", "Jaqueta"],
    acessorios: ["Correntes", "Bonés", "Anéis"], ocasioes: ["Dia a dia: baggy, camiseta grande e tênis", "Festa: look urbano com tênis estiloso"]
  },
  elegante: {
    nome: "Elegante/Clássico", frase: "Sofisticação em peças estruturadas.",
    desc: "Estilo arrumado e minimalista, com cortes bem definidos.",
    paleta: ["Preto", "Branco", "Bege", "Tons neutros"], pecas: ["Blazer", "Calça de alfaiataria", "Blusa elegante"],
    acessorios: ["Relógios", "Brincos discretos", "Bolsas elegantes"], ocasioes: ["Dia a dia: alfaiataria com blusa clean", "Festa: vestido elegante ou conjunto"]
  },
  casual: {
    nome: "Casual/Básico", frase: "Conforto e versatilidade.",
    desc: "Looks simples e descomplicados, fáceis de combinar.",
    paleta: ["Azul", "Branco", "Jeans", "Tons básicos"], pecas: ["Jeans", "Camisetas básicas", "Peças versáteis"],
    acessorios: ["Acessórios simples", "Tênis confortável"], ocasioes: ["Dia a dia: jeans, blusinha e tênis", "Festa: combinação simples e bonita"]
  },
  alternativo: {
    nome: "Alternativo/Criativo", frase: "Autenticidade e mistura de estilos.",
    desc: "Looks diferentes, com estampas, sobreposições e peças vintage.",
    paleta: ["Mistura de cores", "Estampas", "Contrastes"], pecas: ["Peças vintage", "Estampas", "Sobreposições"],
    acessorios: ["Maxi brincos", "Peças coloridas", "Acessórios únicos"], ocasioes: ["Dia a dia: sobreposições e estampas", "Festa: mistura de estilos e acessórios marcantes"]
  }
};
const PERGUNTAS = [
  { t: "Qual look você usaria para sair com suas amigas?", o: ["Vestido delicado, saia e acessórios fofos.", "Calça baggy, camiseta oversized e tênis.", "Calça de alfaiataria, blusa elegante e acessórios discretos.", "Jeans, blusinha básica e tênis confortável.", "Peças diferentes, estampas e acessórios chamativos."] },
  { t: "Quais peças você mais gosta de usar?", o: ["Saias, vestidos, rendas e laços.", "Calças largas, camisetas grandes e jaquetas.", "Blazers, calças de alfaiataria e roupas estruturadas.", "Jeans, camisetas básicas e peças versáteis.", "Peças vintage, estampas, sobreposições e acessórios únicos."] },
  { t: "Quais acessórios você escolheria?", o: ["Colares delicados, pérolas e laços.", "Correntes, anéis, bonés e bolsas estilosas.", "Relógios, brincos discretos e bolsas elegantes.", "Acessórios simples que combinem com tudo.", "Maxi brincos, peças coloridas e acessórios diferentes."] },
  { t: "Qual combinação de cores mais te agrada?", o: ["Rosa, branco, lilás e tons pastel.", "Preto, cinza, vermelho e cores fortes.", "Preto, branco, bege e tons neutros.", "Azul, branco, jeans e tons básicos.", "Uma mistura de cores, estampas e contrastes."] },
  { t: "Como você gostaria de se sentir usando suas roupas?", o: ["Delicada, romântica e feminina.", "Confiante, estilosa e cheia de atitude.", "Elegante, sofisticada e arrumada.", "Confortável, natural e descomplicada.", "Criativa, autêntica e diferente."] },
  { t: "Qual look você escolheria para uma festa?", o: ["Um vestido delicado com acessórios fofos.", "Um look urbano com peças largas e tênis estiloso.", "Um vestido elegante ou um conjunto sofisticado.", "Uma combinação simples, bonita e confortável.", "Um look ousado, com mistura de estilos e acessórios marcantes."] },
  { t: "Qual dessas inspirações mais combina com você?", o: ["Looks românticos, delicados e inspirados em tons pastel.", "Streetwear, hip-hop e moda urbana.", "Moda clássica, minimalista e sofisticada.", "Moda casual, básica e confortável.", "Moda alternativa, vintage e criativa."] }
];

/* 2. UTILITÁRIOS */
function el(tag, attrs, ...filhos) {
  const e = document.createElement(tag);
  Object.entries(attrs || {}).forEach(([k, v]) => (k === "class" ? (e.className = v) : e.setAttribute(k, v)));
  filhos.flat().forEach((f) => e.append(f));
  return e;
}
function numero(n) { return String(n).padStart(2, "0"); }
function gerarLooks(base, grupo) {
  return Array.from({ length: LOOKS_POR_GRUPO }, (_, i) => {
    const n = numero(i + 1);
    const dado = (grupo.looks && grupo.looks[i]) || {};
    return {
      titulo: dado.titulo || `${grupo.nome} - Look ${n}`,
      categoria: grupo.nome,
      imagem: `assets/${base}/${grupo.id}/look-${n}.jpg`,
      descricao: dado.descricao || "Descrição do look (texto provisório para aprovação).",
      lojas: dado.lojas || []
    };
  });
}
/* Imagem com placeholder "imagem provisória" se o arquivo não existir */
function criarImagem(src, alt) {
  const fig = el("figure", { class: "imagem" });
  const img = el("img", { src, alt, loading: "lazy" });
  img.addEventListener("error", () => {
    img.remove(); fig.classList.add("sem-imagem");
    fig.append(el("span", { class: "selo" }, "imagem provisória"));
  });
  fig.append(img);
  return fig;
}

/* 3. TEMA CLARO/ESCURO */
function aplicarTema(tema) {
  document.documentElement.setAttribute("data-theme", tema);
  document.getElementById("botao-tema").setAttribute("aria-pressed", String(tema === "dark"));
}
function iniciarTema() {
  let salvo = null;
  try { salvo = localStorage.getItem("tema"); } catch (e) { }
  aplicarTema(salvo === "dark" ? "dark" : "light");
  document.getElementById("botao-tema").addEventListener("click", () => {
    const novo = document.documentElement.getAttribute("data-theme") === "dark" ? "light" : "dark";
    aplicarTema(novo);
    try { localStorage.setItem("tema", novo); } catch (e) { }
  });
}

/* 4. NAVEGAÇÃO E MENU MOBILE */
function iniciarMenu() {
  const botao = document.getElementById("botao-menu"), menu = document.getElementById("menu-principal");
  const definir = (aberto) => {
    menu.classList.toggle("aberto", aberto);
    botao.setAttribute("aria-expanded", String(aberto));
    botao.setAttribute("aria-label", aberto ? "Fechar menu" : "Abrir menu");
    botao.querySelector(".material-symbols-rounded").textContent = aberto ? "close" : "menu";
  };
  botao.addEventListener("click", () => definir(!menu.classList.contains("aberto")));
  menu.addEventListener("click", (e) => { if (e.target.closest("a")) definir(false); });
}

/* 5. FILEIRAS HORIZONTAIS (catálogo e eventos) */
function criarFileira(grupo, looks) {
  const scroller = el("ul", { class: "scroller", "aria-label": grupo.nome });
  looks.forEach((look) => {
    const card = el("button", { class: "card", type: "button" }, criarImagem(look.imagem, ` (${look.categoria})`)); card.addEventListener("click", () => abrirModal(look, card));
    scroller.append(el("li", {}, card));
  });
  const passo = (d) => {
    const primeiroItem = scroller.querySelector("li");
    if (!primeiroItem) return;

    const largura = primeiroItem.getBoundingClientRect().width;
    const gap = parseFloat(getComputedStyle(scroller).columnGap) || 0;

    scroller.scrollBy({
      left: d * (largura + gap),
      behavior: "smooth"
    });
  };
  const ant = el("button", { class: "seta seta-ant", type: "button", "aria-label": `Anterior em ${grupo.nome}` }, "‹");
  const prox = el("button", { class: "seta seta-prox", type: "button", "aria-label": `Próximo em ${grupo.nome}` }, "›");
  ant.addEventListener("click", () => passo(-1)); prox.addEventListener("click", () => passo(1));
  return el("div", { class: "fileira" }, el("h3", {}, grupo.nome), el("div", { class: "fileira-area" }, ant, scroller, prox));
}
function montarCatalogo() {
  const alvo = document.getElementById("catalogo-fileiras");
  CATEGORIAS.forEach((c) => alvo.append(criarFileira(c, gerarLooks("looks", c))));
}

/* 6. MODAL DE DETALHES */
let gatilhoModal = null;
function abrirModal(look, gatilho) {
  gatilhoModal = gatilho;
  const m = document.getElementById("modal-detalhes");
  document.getElementById("modal-imagem").replaceChildren(criarImagem(look.imagem, look.titulo));
  document.getElementById("modal-categoria").textContent = look.categoria;
  document.getElementById("modal-titulo").textContent = look.titulo;
  document.getElementById("modal-descricao").textContent = look.descricao;
  const lista = document.getElementById("modal-lojas-lista");
  lista.replaceChildren();
  if (look.lojas.length) look.lojas.forEach((l) => lista.append(el("li", {}, el("a", { href: l.url, target: "_blank", rel: "noopener" }, l.nome))));
  else lista.append(el("li", { class: "aviso" }, "Lojas ainda não definidas."));
  m.hidden = false; document.body.style.overflow = "hidden";
  m.querySelector(".modal-fechar").focus();
}
function fecharModal() {
  const m = document.getElementById("modal-detalhes");
  if (m.hidden) return;
  m.hidden = true; document.body.style.overflow = "";
  if (gatilhoModal) gatilhoModal.focus();
}
function iniciarModal() {
  const m = document.getElementById("modal-detalhes");
  m.addEventListener("click", (e) => { if (e.target.closest("[data-fechar-modal]")) fecharModal(); });
  document.addEventListener("keydown", (e) => {
    if (m.hidden) return;
    if (e.key === "Escape") return fecharModal();
    if (e.key !== "Tab") return;
    const f = [...m.querySelectorAll("a[href],button")];
    const primeiro = f[0], ultimo = f[f.length - 1];
    if (e.shiftKey && document.activeElement === primeiro) { e.preventDefault(); ultimo.focus(); }
    else if (!e.shiftKey && document.activeElement === ultimo) { e.preventDefault(); primeiro.focus(); }
  });
}

/* 7. QUIZ */
let respostas = [];
function calcularResultado(resp) {
  const pontos = {}; IDS_ESTILO.forEach((id) => (pontos[id] = 0));
  resp.forEach((i) => (pontos[IDS_ESTILO[i]] += 1));
  const max = Math.max(...Object.values(pontos));
  return {
    pontos,
    principais: IDS_ESTILO.filter((id) => pontos[id] === max),
    secundarios: IDS_ESTILO.filter((id) => pontos[id] < max && pontos[id] >= max - 1)
  };
}
function quizIntro() {
  const c = document.getElementById("quiz-container"); respostas = [];
  const b = el("button", { class: "btn btn-primary", type: "button" }, "Começar");
  b.addEventListener("click", () => quizPergunta());
  c.replaceChildren(el("p", { class: "quiz-intro" }, "Qual estilo mais combina com você ou com o que você gostaria de transmitir?"), b);
}
function quizPergunta() {
  const n = respostas.length, p = PERGUNTAS[n], c = document.getElementById("quiz-container");
  const barra = el("div", { class: "progresso", role: "progressbar", "aria-valuemin": "0", "aria-valuemax": String(PERGUNTAS.length), "aria-valuenow": String(n) }, el("span", { style: `width:${(n / PERGUNTAS.length) * 100}%` }));
  const opcoes = el("div", { class: "opcoes" });
  p.o.forEach((texto, i) => {
    const b = el("button", { class: "opcao", type: "button", "aria-pressed": "false" }, `${"ABCDE"[i]}) ${texto}`);
    b.addEventListener("click", () => { respostas.push(i); respostas.length === PERGUNTAS.length ? quizResultado() : quizPergunta(); });
    opcoes.append(b);
  });
  const voltar = el("button", { class: "btn", type: "button" }, "Voltar");
  voltar.addEventListener("click", () => { respostas.pop(); n === 0 ? quizIntro() : quizPergunta(); });
  c.replaceChildren(barra, el("p", {}, `Pergunta ${n + 1} de ${PERGUNTAS.length}`), el("h3", { tabindex: "-1" }, p.t), opcoes, el("div", { class: "quiz-nav" }, voltar));
  c.querySelector("h3").focus({ preventScroll: true });
}
function listaChips(itens) { return el("ul", { class: "chips" }, itens.map((i) => el("li", {}, i))); }
function blocoPrincipal(id) {
  const s = ESTILOS[id];
  const galeria = el("div", { class: "galeria" }, Array.from({ length: LOOKS_POR_GRUPO }, (_, i) => criarImagem(`assets/resultados/${id}/look-${numero(i + 1)}.jpg`, `Inspiração ${s.nome} ${i + 1}`)));
  return el("article", { class: "resultado-bloco" },
    el("h3", {}, s.nome), el("p", {}, s.desc), el("p", { class: "prov" }),
    el("h4", {}, "Paleta de cores"), listaChips(s.paleta), el("h4", {}, "Peças essenciais"), listaChips(s.pecas),
    el("h4", {}, "Acessórios característicos"), listaChips(s.acessorios),
    el("h4", {}, "Looks para diferentes ocasiões"), el("ul", {}, s.ocasioes.map((o) => el("li", {}, o))),
    el("h4", {}, "Inspirações"), galeria,
  );
}
function quizResultado() {
  const r = calcularResultado(respostas), c = document.getElementById("quiz-container");
  c.replaceChildren(el("h3", { tabindex: "-1" }, r.principais.length > 1 ? "Seus estilos principais" : "Seu estilo principal"), ...r.principais.map(blocoPrincipal));
  if (r.secundarios.length) {
    c.append(el("h3", {}, "Estilos secundários"), el("div", { class: "sec-lista" }, r.secundarios.map((id) =>
      el("div", { class: "sec-card" }, el("h4", {}, ESTILOS[id].nome), el("p", {}, ESTILOS[id].frase), el("p", {}, `Pontuação: ${r.pontos[id]}`)))));
  }
  const refazer = el("button", { class: "btn btn-primary", type: "button" }, "Refazer o quiz");
  refazer.addEventListener("click", quizIntro);
  c.append(refazer); c.querySelector("h3").focus();
}

/* 10. TELA DE LOADING */
function aguardarImagens(limiteMs = 20000) {
  const imgs = [...document.querySelectorAll("img")];
  /* Lazy loading não carrega o que está fora da tela; aqui queremos tudo de uma vez */
  imgs.forEach((img) => img.setAttribute("loading", "eager"));

  const total = imgs.length;
  const texto = document.getElementById("loader-progresso");
  let feitas = 0;

  const promessas = imgs.map((img) => new Promise((resolve) => {
    const fim = () => {
      feitas += 1;
      if (texto) texto.textContent = `(${feitas} de ${total})`;
      resolve();
    };
    if (img.complete) return fim();
    img.addEventListener("load", fim, { once: true });
    img.addEventListener("error", fim, { once: true }); /* imagem ausente não trava o loading */
  }));

  /* Segurança: se algo demorar demais, libera o site mesmo assim */
  const limite = new Promise((resolve) => setTimeout(resolve, limiteMs));
  return Promise.race([Promise.all(promessas), limite]);
}

function esconderLoader() {
  const loader = document.getElementById("loader");
  if (!loader || loader.hidden) return;
  loader.classList.add("loader-saindo");
  document.body.classList.remove("carregando");
  setTimeout(() => { loader.hidden = true; }, 400);
}

/* 9. INICIALIZAÇÃO */
function iniciar() {
  setTimeout(esconderLoader, 25000); /* garantia contra travamento */
  iniciarTema(); iniciarMenu(); iniciarModal(); montarCatalogo(); quizIntro();
  /* montarEventos(); */ /* ative na Etapa 5, quando EVENTOS existir */
  aguardarImagens().then(esconderLoader);
} if (typeof document !== "undefined") document.addEventListener("DOMContentLoaded", iniciar);

