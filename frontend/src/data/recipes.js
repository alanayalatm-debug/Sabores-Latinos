export const recipes = [
  {
    id: 1,
    title: 'Tacos al Pastor',
    country: 'México',
    description: 'Deliciosos tacos de carne de cerdo adobada, servidos con piña, cebolla y cilantro sobre tortillas de maíz.',
    imageUrl: '/images/tacos.png',
    prepTime: '20 min',
    cookTime: '25 min',
    difficulty: 'Media',
    ingredients: [
      { name: 'Carne de cerdo (lomo o pierna)', amount: '1 kg' },
      { name: 'Pasta de achiote', amount: '50 g' },
      { name: 'Chiles guajillo (desvenados)', amount: '3 unidades' },
      { name: 'Piña fresca', amount: '1/2 unidad' },
      { name: 'Tortillas de maíz', amount: '15 unidades' },
      { name: 'Cebolla blanca', amount: '1 unidad grande' },
      { name: 'Cilantro fresco', amount: '1 manojo' }
    ],
    steps: [
      'Preparar el adobo licuando los chiles hidratados, achiote, especias y un poco de vinagre.',
      'Marinar la carne cortada en filetes delgados durante al menos 4 horas.',
      'Cocinar la carne en una sartén caliente o trompo hasta que esté dorada.',
      'Picar la carne cocinada.',
      'Servir sobre tortillas de maíz calientes, adornando con piña, cebolla y cilantro fresco.'
    ],
    history: 'Los Tacos al Pastor son una joya de la gastronomía callejera mexicana. Su origen proviene de la fusión culinaria con la inmigración libanesa en la década de 1960. Los libaneses introdujeron el shawarma en México, utilizando asadores verticales. Con el tiempo, los taqueros mexicanos adaptaron la receta marinando carne de cerdo con achiote y chiles locales, y coronaron el plato con piña, cebolla y cilantro. Hoy en día, es uno de los platos más populares y representativos de México a nivel global.',
    tips: [
      'Marinar la carne durante al menos 12 horas en el refrigerador para que absorba todos los aromas del achiote y los chiles.',
      'Cocinar en una sartén extremadamente caliente o plancha de hierro para lograr bordes crujientes similares al trompo original.',
      'Servir siempre en tortillas de maíz pequeñas y calientes, acompañados de piña fresca y una buena salsa picante.'
    ],
    nutrition: {
      calories: '280 kcal',
      protein: '18 g',
      fat: '12 g',
      carbs: '24 g'
    }
  },
  {
    id: 2,
    title: 'Ceviche Peruano',
    country: 'Perú',
    description: 'Pescado fresco marinado en jugo de limón, acompañado de ají, cebolla morada, camote y maíz tostado.',
    imageUrl: '/images/ceviche.png',
    prepTime: '15 min',
    cookTime: '5 min (marinado)',
    difficulty: 'Fácil',
    ingredients: [
      { name: 'Pescado blanco fresco (corvina o lenguado)', amount: '500 g' },
      { name: 'Limones sutiles', amount: '10 unidades' },
      { name: 'Cebolla morada', amount: '1 unidad grande' },
      { name: 'Ají limo', amount: '1 unidad' },
      { name: 'Cilantro fresco', amount: '2 cucharadas picadas' },
      { name: 'Camote (batata) hervido', amount: '2 unidades' },
      { name: 'Cancha tostada (maíz)', amount: '100 g' }
    ],
    steps: [
      'Cortar el pescado en cubos pequeños y sazonar con sal.',
      'Exprimir los limones sobre el pescado (no exprimir demasiado para evitar amargor).',
      'Añadir ají limo picado finamente y cilantro.',
      'Cortar la cebolla en pluma, lavarla ligeramente e incorporarla al pescado.',
      'Dejar reposar solo unos minutos (leche de tigre).',
      'Servir inmediatamente acompañado de camote y cancha tostada.'
    ],
    history: 'El ceviche peruano es considerado Patrimonio Cultural de la Nación. Su origen se remonta a la cultura Moche hace más de dos mil años, quienes preparaban pescado fresco con el jugo fermentado de una fruta local llamada tumbo. Con la llegada de los españoles, se introdujeron el limón y la cebolla. El plato evolucionó hasta convertirse en una receta simple pero de sabor explosivo, donde la frescura del pescado y la acidez del limón son los protagonistas indiscutibles.',
    tips: [
      'Utilizar pescado blanco de roca muy fresco y de consistencia firme, como la corvina, el lenguado o el mero.',
      'Exprimir los limones suavemente y a mano; si se exprimen demasiado, el jugo liberará los aceites amargos de la cáscara.',
      'Servir de inmediato tras mezclar los ingredientes para evitar que el limón sobrecocine el pescado y pierda su textura ideal.'
    ],
    nutrition: {
      calories: '190 kcal',
      protein: '22 g',
      fat: '3 g',
      carbs: '18 g'
    }
  },
  {
    id: 3,
    title: 'Arepas Rellenas',
    country: 'Colombia',
    description: 'Masa de maíz dorada a la plancha, crujiente por fuera y suave por dentro, rellena de queso y carne mechada.',
    imageUrl: '/images/arepas.png',
    prepTime: '10 min',
    cookTime: '20 min',
    difficulty: 'Fácil',
    ingredients: [
      { name: 'Harina de maíz precocida', amount: '2 tazas' },
      { name: 'Agua tibia', amount: '2.5 tazas' },
      { name: 'Sal', amount: '1 cucharadita' },
      { name: 'Queso mozzarella rallado', amount: '200 g' },
      { name: 'Carne desmechada', amount: '250 g' },
      { name: 'Mantequilla', amount: '2 cucharadas' }
    ],
    steps: [
      'Mezclar la harina de maíz con sal y el agua tibia gradualmente hasta formar una masa suave que no se pegue.',
      'Dejar reposar la masa por 5 minutos.',
      'Formar bolas con la masa y aplastarlas para darles forma de discos gruesos.',
      'Asar las arepas en una plancha o sartén con mantequilla a fuego medio hasta que estén doradas por ambos lados.',
      'Abrirlas con cuidado por la mitad y rellenarlas con queso o la carne de preferencia.',
      'Devolver a la plancha unos minutos para derretir el queso y servir.'
    ],
    history: 'La arepa es un alimento ancestral de origen precolombino en los territorios de las actuales Colombia y Venezuela. Las tribus indígenas molían el maíz entre piedras y cocinaban la masa en planchas de barro llamadas budares. En Colombia, la arepa acompaña el desayuno y las comidas diarias. Su versatilidad permite rellenarla con diversos ingredientes locales como queso fresco, mantequilla, huevos y carnes desmechadas, convirtiéndola en un símbolo de identidad y tradición familiar.',
    tips: [
      'Al mezclar la harina de maíz con agua tibia, amasar muy bien durante 5 minutos para eliminar grumos y lograr una textura suave.',
      'Tapar la masa con un paño húmedo mientras formas las arepas para evitar que se reseque y se agriete al asar.',
      'Asar a fuego medio-bajo en una sartén antiadherente con un poco de mantequilla para conseguir una corteza dorada y crujiente.'
    ],
    nutrition: {
      calories: '320 kcal',
      protein: '14 g',
      fat: '10 g',
      carbs: '45 g'
    }
  },
  {
    id: 4,
    title: 'Asado Tradicional',
    country: 'Argentina',
    description: 'La máxima expresión de la carne a la parrilla, un ritual culinario inigualable.',
    imageUrl: '/images/asado.png',
    prepTime: '30 min',
    cookTime: '90 min',
    difficulty: 'Media',
    ingredients: [
      { name: 'Costillar de res', amount: '1.5 kg' },
      { name: 'Vacio de res', amount: '1 kg' },
      { name: 'Chorizos', amount: '4 unidades' },
      { name: 'Morcillas', amount: '4 unidades' },
      { name: 'Sal gruesa', amount: 'Al gusto' },
      { name: 'Salsa Chimichurri', amount: '1 taza' }
    ],
    steps: [
      'Preparar el fuego con leña o carbón.',
      'Salar la carne con sal gruesa por ambos lados.',
      'Cocinar a fuego lento en la parrilla, primero del lado del hueso.',
      'Voltear cuando los jugos comiencen a salir y dorar.',
      'Cocinar chorizos y morcillas alrededor. Servir con chimichurri.'
    ],
    history: 'El asado argentino es mucho más que una comida; es un ritual social que reúne a familias y amigos. Sus orígenes provienen de los gauchos, los habitantes de las pampas que cocinaban la carne de res al aire libre utilizando leña. La técnica del asado a la parrilla se perfeccionó con los años. La sazón principal es la sal gruesa, permitiendo que destaque la calidad natural de la carne, acompañada de la clásica salsa chimichurri.',
    tips: [
      'Usar brasas de madera dura o carbón vegetal de buena calidad y esperar a que estén cubiertas de ceniza gris antes de colocar la carne.',
      'No pinchar la carne con tenedores durante la cocción para evitar que pierda sus jugos naturales; usar siempre pinzas.',
      'Cocinar con paciencia, colocando los cortes más gruesos y con hueso primero del lado del hueso para una cocción homogénea.'
    ],
    nutrition: {
      calories: '480 kcal',
      protein: '35 g',
      fat: '36 g',
      carbs: '2 g'
    }
  },
  {
    id: 5,
    title: 'Empanadas de Pino',
    country: 'Chile',
    description: 'Empanadas horneadas rellenas de carne, cebolla, huevo duro, aceitunas y pasas.',
    imageUrl: '/images/empanadas_chile.png',
    prepTime: '40 min',
    cookTime: '30 min',
    difficulty: 'Media',
    ingredients: [
      { name: 'Masa para empanadas', amount: '12 discos grandes' },
      { name: 'Carne de res picada', amount: '500 g' },
      { name: 'Cebolla blanca', amount: '3 unidades grandes' },
      { name: 'Huevo duro', amount: '3 unidades' },
      { name: 'Aceitunas negras', amount: '12 unidades' },
      { name: 'Pasas de uva', amount: '50 g' }
    ],
    steps: [
      'Preparar el pino (sofrito de carne picada y mucha cebolla condimentado) un día antes.',
      'Rellenar los discos de masa agregando carne, 1 aceituna, un par de pasas y un cuarto de huevo duro.',
      'Cerrar la empanada y pintar con huevo batido.',
      'Hornear a 200°C por 30 minutos hasta que estén doradas.'
    ],
    history: 'Las empanadas de pino son la preparación típica por excelencia durante las fiestas patrias de Chile. La palabra "pino" proviene del mapudungún "pinu", que hace referencia a trozos de carne guisada. Aunque la empanada tiene raíces españolas y árabes, la versión chilena se caracteriza por su masa horneada crujiente rellena de un guiso sazonado de carne picada de res, abundante cebolla, huevo duro, aceitunas negras y pasas.',
    tips: [
      'Preparar el guiso de carne (pino) el día anterior y refrigerarlo; esto asentará los sabores y hará más fácil el relleno.',
      'Picar la cebolla finamente y cocinarla a fuego lento por bastante tiempo para que resulte tierna y fácil de digerir.',
      'Pintar las empanadas con una mezcla de yema de huevo y leche antes de hornear para lograr un color dorado brillante perfecto.'
    ],
    nutrition: {
      calories: '380 kcal',
      protein: '15 g',
      fat: '16 g',
      carbs: '42 g'
    }
  },
  {
    id: 6,
    title: 'Feijoada',
    country: 'Brasil',
    description: 'Estofado denso y sabroso de frijoles negros con carne de cerdo, acompañado de arroz y farofa.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/90/Feijoada_%C3%A0_transmontada.jpg',
    prepTime: '1 hora (más remojo)',
    cookTime: '2.5 horas',
    difficulty: 'Alta',
    ingredients: [
      { name: 'Frijoles negros', amount: '500 g' },
      { name: 'Costillas de cerdo', amount: '300 g' },
      { name: 'Lomo de cerdo ahumado', amount: '200 g' },
      { name: 'Chorizo brasileño o calabresa', amount: '2 unidades' },
      { name: 'Tocino', amount: '150 g' },
      { name: 'Naranja (para guarnición)', amount: '2 unidades' }
    ],
    steps: [
      'Remojar los frijoles la noche anterior.',
      'Hervir las carnes saladas para quitarles el exceso de sal.',
      'Sofreír ajo, cebolla y tocino, agregar los frijoles y las carnes.',
      'Cocinar a fuego lento durante un par de horas hasta que espese.',
      'Servir caliente con arroz blanco, farofa y gajos de naranja.'
    ],
    history: 'La feijoada es considerada el plato nacional de Brasil. Aunque existe la creencia popular de que fue creada por los esclavos que mezclaban frijoles negros con los restos de carne que no comían los amos, los historiadores señalan que es una adaptación tropical del cocido portugués. El estofado combina frijoles negros con una gran variedad de carnes saladas y ahumadas de cerdo, y se sirve tradicionalmente los sábados junto a arroz, farofa y naranjas.',
    tips: [
      'Remojar los frijoles negros por lo menos 12 horas en el refrigerador para reducir el tiempo de cocción y facilitar la digestión.',
      'Desalar muy bien las carnes saladas hirviéndolas previamente por separado un par de veces para controlar el exceso de sal en el guiso.',
      'Agregar rodajas de naranja entera al estofado durante los últimos minutos de cocción para equilibrar la grasa de las carnes.'
    ],
    nutrition: {
      calories: '450 kcal',
      protein: '28 g',
      fat: '22 g',
      carbs: '38 g'
    }
  },
  {
    id: 7,
    title: 'Pabellón Criollo',
    country: 'Venezuela',
    description: 'Plato nacional venezolano que combina arroz blanco, carne mechada, caraotas negras y tajadas de plátano.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Pabell%C3%B3n_Criollo_Venezolano.jpg/960px-Pabell%C3%B3n_Criollo_Venezolano.jpg',
    prepTime: '40 min',
    cookTime: '1.5 horas',
    difficulty: 'Media',
    ingredients: [
      { name: 'Arroz blanco', amount: '2 tazas' },
      { name: 'Carne de falda (para mechar)', amount: '500 g' },
      { name: 'Caraotas negras (frijoles)', amount: '400 g' },
      { name: 'Plátanos maduros', amount: '2 unidades' },
      { name: 'Cebolla', amount: '2 unidades' },
      { name: 'Pimentón rojo', amount: '1 unidad' }
    ],
    steps: [
      'Cocinar las caraotas en olla de presión hasta que ablanden y luego guisarlas con un sofrito.',
      'Hervir la carne con hierbas, desmecharla al enfriar.',
      'Guisar la carne mechada con un sofrito de cebolla, ajo y pimentón.',
      'Cocinar el arroz blanco tradicional.',
      'Freír tajadas del plátano maduro.',
      'Servir todos los componentes organizados en el plato.'
    ],
    history: 'El pabellón criollo representa la diversidad cultural y racial de Venezuela. Sus cuatro ingredientes principales simbolizan la unión de las culturas europea (arroz blanco), africana (caraotas o frijoles negros), indígena (carne mechada) y los frutos de la tierra americana (plátano maduro frito o tajadas). Se consolidó como plato nacional en el siglo XIX, sirviendo de sustento a las familias del campo por su gran valor energético.',
    tips: [
      'Para que las tajadas de plátano queden perfectas, utiliza plátanos bien maduros (con la cáscara casi negra) para obtener su dulzor característico.',
      'Hervir la carne con cebolla, ajo y pimiento verde; este caldo te servirá luego para guisar la carne desmechada con sofrito.',
      'Sazonar los frijoles negros con comino y un toque de azúcar al final de la cocción para darle el auténtico toque caraqueño.'
    ],
    nutrition: {
      calories: '520 kcal',
      protein: '26 g',
      fat: '18 g',
      carbs: '64 g'
    }
  },
  {
    id: 8,
    title: 'Encebollado',
    country: 'Ecuador',
    description: 'Exquisita sopa de pescado con yuca, cebolla roja encurtida y tomate.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2d/Semifinal_del_Campeonato_del_Encebollado_en_Esmeraldas_2015_%2818062294436%29.jpg/960px-Semifinal_del_Campeonato_del_Encebollado_en_Esmeraldas_2015_%2818062294436%29.jpg',
    prepTime: '20 min',
    cookTime: '40 min',
    difficulty: 'Media',
    ingredients: [
      { name: 'Albacora (atún fresco)', amount: '600 g' },
      { name: 'Yuca fresca', amount: '1 kg' },
      { name: 'Cebollas rojas', amount: '2 unidades grandes' },
      { name: 'Tomates', amount: '3 unidades' },
      { name: 'Cilantro fresco', amount: '1 manojo' },
      { name: 'Limones', amount: '5 unidades' }
    ],
    steps: [
      'Hacer un caldo cocinando el pescado con agua, tomate, cebolla, cilantro y sal.',
      'Retirar el pescado cocido y en el mismo caldo cocinar la yuca corta en trozos grandes.',
      'Desmenuzar el pescado en lascas medianas.',
      'Encurtir la cebolla roja picada finamente con limón y sal.',
      'Servir en un plato hondo: la yuca y el caldo caliente, coronar con pescado, cebolla encurtida y cilantro picado.'
    ],
    history: 'El encebollado es el plato insignia de la costa ecuatoriana, conocido por su sabor reparador y por ser el remedio popular para la resaca. Su origen está en los antiguos pescadores indígenas que cocinaban pescado fresco con yuca en vasijas de barro. Con la llegada de los colonizadores, se incorporó la cebolla encurtida y el limón. Es una sopa sabrosa de atún fresco y yuca, coronada con abundante cebolla encurtida y cilantro.',
    tips: [
      'Cocinar la yuca hasta que esté muy blanda para que suelte almidón y ayude a espesar sutilmente el caldo de pescado.',
      'Servir acompañado de chifles (plátano verde frito en rodajas finas), canguil (palomitas de maíz) o tostado de maíz.',
      'Encurtir la cebolla roja con limón y sal de antemano para que pierda el picor fuerte y aporte una acidez agradable al plato.'
    ],
    nutrition: {
      calories: '310 kcal',
      protein: '25 g',
      fat: '5 g',
      carbs: '42 g'
    }
  },
  {
    id: 9,
    title: 'Salteñas',
    country: 'Bolivia',
    description: 'Empanadas jugosas al horno rellenas de un guiso dulce y picante.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c0/Salte%C3%B1as_de_Bolivia.jpg/960px-Salte%C3%B1as_de_Bolivia.jpg',
    prepTime: '1 hora',
    cookTime: '1 hora (más refrigeración)',
    difficulty: 'Alta',
    ingredients: [
      { name: 'Harina de trigo', amount: '4 tazas' },
      { name: 'Carne picada', amount: '400 g' },
      { name: 'Gelatina sin sabor', amount: '2 cucharadas' },
      { name: 'Papas picadas', amount: '2 tazas' },
      { name: 'Arvejas tiernas', amount: '1 taza' },
      { name: 'Huevos duros', amount: '2 unidades' }
    ],
    steps: [
      'Preparar el jigote (guiso) cocinando la carne, papas, arvejas, ají y caldo mezclado con gelatina.',
      'Dejar enfriar el relleno en el refrigerador toda la noche para que solidifique.',
      'Preparar la masa añadiendo un poco de manteca coloreada con achiote.',
      'Rellenar la masa y hacer un repulgue muy firme en la parte superior.',
      'Hornear a temperatura muy alta (300°C) durante 15 minutos.'
    ],
    history: 'Las salteñas son las empanadas más representativas de Bolivia, consumidas tradicionalmente a media mañana. Su creación se atribuye a Juana Manuela Gorriti, una escritora argentina oriunda de Salta (de ahí el nombre "salteña") que se exilió en Potosí durante el siglo XIX. Gorriti popularizó estas empanadas dulces, picantes y sumamente jugosas, rellenas con un guiso con gelatina que se derrite al hornearse a altas temperaturas.',
    tips: [
      'Preparar el guiso (jigote) un día antes de rellenar la masa para que la gelatina solidifique adecuadamente en el refrigerador.',
      'Al cerrar la empanada, hacer el repulgue en la parte superior y presionar muy bien para evitar que el jugo se escape en el horno.',
      'Hornear a la temperatura máxima permitida por tu horno (280°C o más) para cocinar la masa rápidamente sin derretir el relleno antes de tiempo.'
    ],
    nutrition: {
      calories: '340 kcal',
      protein: '12 g',
      fat: '14 g',
      carbs: '40 g'
    }
  },
  {
    id: 10,
    title: 'Vori Vori',
    country: 'Paraguay',
    description: 'Sopa espesa tradicional paraguaya con nutritivas bolitas de harina de maíz y queso.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Vor%C3%AD_vor%C3%AD_paraguay.jpg/960px-Vor%C3%AD_vor%C3%AD_paraguay.jpg',
    prepTime: '30 min',
    cookTime: '45 min',
    difficulty: 'Media',
    ingredients: [
      { name: 'Pollo en trozos', amount: '500 g' },
      { name: 'Harina de maíz', amount: '2 tazas' },
      { name: 'Queso Paraguay o fresco', amount: '150 g' },
      { name: 'Cebolla', amount: '1 unidad' },
      { name: 'Locote (pimiento verde)', amount: '1 unidad' },
      { name: 'Tomate', amount: '2 unidades' },
      { name: 'Caldo de pollo', amount: '1.5 litros' }
    ],
    steps: [
      'Hacer un sofrito en una olla con la cebolla, locote y tomate picados finamente.',
      'Agregar los trozos de pollo y dorarlos ligeramente, luego verter el caldo hirviendo.',
      'Mientras hierve el caldo, preparar la masa para los vori vori mezclando en un bol la harina de maíz, queso desmenuzado y un poco del caldo caliente.',
      'Amasar hasta lograr consistencia firme y formar bolitas pequeñas (vori vori) con las manos.',
      'Echar las bolitas al caldo hirviendo y cocinar unos minutos hasta que floten en la superficie. Servir bien caliente.'
    ],
    history: 'El vori vori es un plato tradicional de Paraguay muy reconfortante, declarado de Interés Turístico Nacional. Su nombre proviene de la duplicación de la palabra "bolita" en guaraní ("borí"). Consiste en un caldo de pollo espeso y nutritivo en el que se cocinan pequeñas esferas hechas de harina de maíz y queso paraguayo. Es un ejemplo perfecto de la fusión de la cocina indígena guaraní con las tradiciones traídas por los jesuitas.',
    tips: [
      'Utilizar harina de maíz de grano fino y mezclarla con un queso de consistencia semidura y sabor suave para formar las bolitas.',
      'Humedecer la masa de las bolitas con el caldo caliente del guiso para que absorban todo el sabor de las verduras y el pollo.',
      'No hacer las bolitas demasiado grandes para garantizar que se cocinen de manera uniforme hasta el centro sin desarmarse.'
    ],
    nutrition: {
      calories: '290 kcal',
      protein: '16 g',
      fat: '9 g',
      carbs: '36 g'
    }
  },
  {
    id: 11,
    title: 'Chivito',
    country: 'Uruguay',
    description: 'Sándwich contundente de pan tierno relleno de lomito, panceta, queso y más.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/4/48/Chivito1.jpg',
    prepTime: '10 min',
    cookTime: '10 min',
    difficulty: 'Fácil',
    ingredients: [
      { name: 'Panes tortuga o ciabatta', amount: '2 unidades' },
      { name: 'Bifes finos de lomo de res', amount: '200 g' },
      { name: 'Panceta (bacon)', amount: '4 fetas' },
      { name: 'Queso mozzarella', amount: '2 rebanadas' },
      { name: 'Huevos fritos', amount: '2 unidades' },
      { name: 'Lechuga y tomate', amount: 'Al gusto' }
    ],
    steps: [
      'Cocinar los bifes de lomo a la plancha caliente, vuelta y vuelta.',
      'En la misma plancha, freír la panceta hasta que esté crujiente y hacer los huevos fritos.',
      'Calentar ligeramente el pan cortado a la mitad y untarlo con mayonesa.',
      'Armar el sándwich apilando lechuga, tomate, la carne, jamón, queso derretido, panceta y huevo.'
    ],
    history: 'El chivito es el sándwich más popular y representativo de Uruguay, inventado en la década de 1940 en Punta del Este. La leyenda cuenta que una turista del norte argentino pidió carne de chivo (cabrito), pero al no disponer de ella, el dueño del local preparó un pan tostado con manteca, un filete de lomo de res bien jugoso, jamón y queso. El sándwich fue un éxito inmediato y se convirtió en un clásico de la gastronomía rioplatense.',
    tips: [
      'Usar un corte de lomo de res de excelente calidad cortado en bifes delgados para que se cocine rápidamente y quede tierno al morder.',
      'Tostar ligeramente la parte interna del pan con un poco de mantequilla en la misma plancha donde cocinaste la carne para absorber jugos.',
      'Montar el sándwich de forma ordenada para que las capas de panceta, queso fundido, huevo frito, lechuga y tomate se mantengan firmes.'
    ],
    nutrition: {
      calories: '620 kcal',
      protein: '42 g',
      fat: '34 g',
      carbs: '38 g'
    }
  },
  {
    id: 12,
    title: 'Ropa Vieja',
    country: 'Cuba',
    description: 'Carne desmechada cocinada lentamente en una vibrante salsa de tomate y pimientos.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Cubanfood.jpg/960px-Cubanfood.jpg',
    prepTime: '20 min',
    cookTime: '2 horas',
    difficulty: 'Media',
    ingredients: [
      { name: 'Carne de falda de res', amount: '800 g' },
      { name: 'Puré de tomate', amount: '1 taza' },
      { name: 'Pimientos morrones (rojo y verde)', amount: '2 unidades' },
      { name: 'Cebolla blanca', amount: '1 unidad grande' },
      { name: 'Dientes de ajo', amount: '4 unidades' },
      { name: 'Vino blanco', amount: '1/2 taza' }
    ],
    steps: [
      'Hervir la carne en agua con especias hasta que esté muy blanda (aprox 1.5 horas).',
      'Retirar la carne, dejar enfriar un poco y desmecharla en hebras finas.',
      'En una sartén grande, hacer un sofrito con la cebolla, el ajo y los pimientos cortados en juliana.',
      'Agregar la carne desmechada, el puré de tomate, el vino y media taza del caldo de cocción.',
      'Cocinar a fuego lento por 20 minutos hasta que los sabores se integren.'
    ],
    history: 'La ropa vieja es uno de los platos más emblemáticos de la gastronomía cubana. De origen español (específicamente de las islas Canarias), debe su nombre a la apariencia que tiene la carne desmechada tras su larga cocción con pimientos, cebollas y salsa de tomate, que recuerda a montones de ropa usada. En Cuba se adaptó con especias caribeñas y se sirve tradicionalmente con arroz blanco, frijoles negros y plátanos maduros fritos.',
    tips: [
      'Desmechar la carne a mano en hebras finas y largas para conservar la textura clásica de la Ropa Vieja cubana.',
      'Agregar un chorrito de vino blanco o vino seco a la mitad de la cocción de la salsa para resaltar los sabores especiados.',
      'Cocinar a fuego lento durante el paso final para que la carne absorba bien la salsa y no quede seca ni líquida.'
    ],
    nutrition: {
      calories: '380 kcal',
      protein: '32 g',
      fat: '14 g',
      carbs: '28 g'
    }
  },
  {
    id: 13,
    title: 'Mangú con Los Tres Golpes',
    country: 'República Dominicana',
    description: 'Puré de plátanos verdes servido con queso frito, salami y huevos fritos.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/b/be/Mangu_dominicano_--Contenido-_-Lonjas_de_salami_fritas_-Lonjas_de_queso_blanco_-Mangu_o_pur%C3%A9_de_pl%C3%A1tano_verde_-Mantequilla_--Este_es_un_plato_t%C3%ADpico_en_el_desayuno_dominicano_--Rep%C3%BAblica_Dominicana_-_2013-10-08_14-28.jpg',
    prepTime: '15 min',
    cookTime: '20 min',
    difficulty: 'Fácil',
    ingredients: [
      { name: 'Plátanos machos verdes', amount: '4 unidades' },
      { name: 'Mantequilla', amount: '3 cucharadas' },
      { name: 'Cebolla roja', amount: '1 unidad' },
      { name: 'Salami dominicano', amount: '4 rebanadas' },
      { name: 'Queso de freír', amount: '4 rebanadas gruesas' },
      { name: 'Huevos', amount: '2 unidades' }
    ],
    steps: [
      'Pelar los plátanos y hervirlos en agua con sal hasta que estén muy suaves.',
      'Machacar los plátanos calientes agregando la mantequilla y un poco del agua de cocción hasta lograr un puré suave.',
      'Cortar la cebolla en aros y sofreírla en aceite con un chorrito de vinagre.',
      'Freír el salami, el queso (hasta que dore) y los huevos en sartenes aparte.',
      'Servir el puré (mangú) coronado con la cebolla y acompañado de "los tres golpes".'
    ],
    history: 'El mangú es el desayuno dominicano por excelencia. Sus raíces provienen de África Occidental, introducido por los esclavos durante la época colonial, y está relacionado con platos como el fufu. El término popular "los tres golpes" hace referencia a los tres acompañamientos tradicionales: salami frito, queso frito y huevos. Es un plato lleno de energía, sabor y tradición familiar que identifica a los dominicanos en todo el mundo.',
    tips: [
      'Usar agua bien fría o cubitos de hielo al machacar los plátanos verdes; esto ayuda a mantener el puré con una textura suave y sedosa.',
      'Conseguir queso de freír de buena calidad que dore por fuera sin derretirse por completo al contacto con la sartén caliente.',
      'Sofreír los aros de cebolla roja en aceite con vinagre para lograr ese toque crujiente y ácido que equilibra el puré.'
    ],
    nutrition: {
      calories: '540 kcal',
      protein: '22 g',
      fat: '28 g',
      carbs: '52 g'
    }
  },
  {
    id: 14,
    title: 'Mofongo',
    country: 'Puerto Rico',
    description: 'Plátanos verdes fritos y machacados en pilón con ajo y chicharrón.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Mofongo.jpg/960px-Mofongo.jpg',
    prepTime: '15 min',
    cookTime: '15 min',
    difficulty: 'Media',
    ingredients: [
      { name: 'Plátanos machos verdes', amount: '3 unidades' },
      { name: 'Chicharrón de cerdo crujiente', amount: '1 taza' },
      { name: 'Dientes de ajo', amount: '4 unidades' },
      { name: 'Aceite de oliva', amount: '3 cucharadas' },
      { name: 'Aceite para freír', amount: 'Abundante' },
      { name: 'Caldo de pollo', amount: '1/4 de taza' }
    ],
    steps: [
      'Pelar los plátanos, cortarlos en rodajas anchas (2 cm) y freírlos en aceite caliente a fuego medio hasta cocer por dentro, sin dorar demasiado.',
      'En un pilón (mortero grande), machacar los dientes de ajo con un poco de sal.',
      'Agregar las rodajas de plátano caliente y trozos de chicharrón al pilón, machacando vigorosamente.',
      'Añadir el aceite de oliva y el caldo gradualmente para humedecer la masa.',
      'Darle forma de media esfera o cúpula usando el mismo pilón y servir.'
    ],
    history: 'El mofongo es la estrella de la cocina puertorriqueña y un testimonio de la influencia africana en el Caribe. Deriva directamente del fufu africano, que consiste en machacar raíces cocidas. En Puerto Rico, los plátanos verdes se cortan en rodajas, se fríen y luego se machacan en un mortero de madera (pilón) junto con ajo fresco, aceite de oliva y trozos crujientes de chicharrón de cerdo, logrando una combinación sabrosa y texturizada.',
    tips: [
      'Freír los plátanos a fuego medio para que se cocinen completamente por dentro antes de que doren demasiado por fuera.',
      'Machacar los plátanos en el pilón mientras sigan bien calientes; de lo contrario, se volverán duros y difíciles de integrar con el ajo y chicharrón.',
      'Servir el mofongo acompañado de un caldo de pollo caliente al lado para humedecer la masa al comer o rellenarlo de mariscos o carne.'
    ],
    nutrition: {
      calories: '460 kcal',
      protein: '14 g',
      fat: '22 g',
      carbs: '55 g'
    }
  },
  {
    id: 15,
    title: 'Sancocho',
    country: 'Panamá',
    description: 'Caldo de gallina reconfortante con ñame, culantro y maíz.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Sancocho_de_espinazo_de_cerdo.jpg/960px-Sancocho_de_espinazo_de_cerdo.jpg',
    prepTime: '20 min',
    cookTime: '1 hora',
    difficulty: 'Media',
    ingredients: [
      { name: 'Gallina de patio picada', amount: '1 pollo entero' },
      { name: 'Ñame (tubérculo)', amount: '1 kg pelado y picado' },
      { name: 'Hojas de culantro fresco', amount: '10 hojas' },
      { name: 'Cebolla blanca', amount: '1 unidad' },
      { name: 'Ajo machacado', amount: '3 dientes' },
      { name: 'Sal y pimienta', amount: 'Al gusto' }
    ],
    steps: [
      'Sellar los trozos de gallina en la olla con el ajo, la cebolla picada y unas hojas de culantro.',
      'Agregar agua suficiente para cubrir la carne y cocinar a fuego medio hasta que empiece a ablandar.',
      'Incorporar el ñame cortado en trozos medianos y más culantro.',
      'Hervir hasta que el ñame se deshaga parcialmente, espesando naturalmente el caldo.',
      'Servir bien caliente con una porción de arroz blanco al lado.'
    ],
    history: 'El sancocho panameño es un caldo espeso de gallina que se consume como plato principal y es considerado un reconstituyente natural. Su origen es español, similar al cocido, pero en Panamá se adaptó utilizando ñame (un tubérculo que se deshace y espesa la sopa) y culantro, una hierba similar al cilantro pero de sabor más intenso. Es el plato rey en las fiestas familiares, carnavales y días festivos del país.',
    tips: [
      'Usar gallina de patio si es posible, ya que aporta un sabor y grasa más ricos y profundos al caldo en comparación con el pollo común.',
      'No omitir el culantro de hoja ancha, ya que es el ingrediente que le da al sancocho panameño su aroma y sabor característicos.',
      'Dejar hervir a fuego lento para que el ñame se ablande por completo y espese el caldo de manera natural.'
    ],
    nutrition: {
      calories: '340 kcal',
      protein: '24 g',
      fat: '10 g',
      carbs: '38 g'
    }
  },
  {
    id: 16,
    title: 'Gallo Pinto',
    country: 'Costa Rica',
    description: 'Mezcla de arroz y frijoles negros sazonada con la clásica Salsa Lizano.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Gallo_Pinto.jpg/960px-Gallo_Pinto.jpg',
    prepTime: '10 min',
    cookTime: '15 min',
    difficulty: 'Fácil',
    ingredients: [
      { name: 'Arroz blanco cocido (del día anterior)', amount: '2 tazas' },
      { name: 'Frijoles negros cocidos', amount: '1.5 tazas (con caldo)' },
      { name: 'Cebolla finamente picada', amount: '1/2 taza' },
      { name: 'Pimiento rojo (chiltoma)', amount: '1/2 taza' },
      { name: 'Cilantro fresco picado', amount: '1/4 de taza' },
      { name: 'Salsa Lizano (o salsa inglesa dulce)', amount: '3 cucharadas' }
    ],
    steps: [
      'En una sartén grande con aceite caliente, sofreír la cebolla y el pimiento hasta que estén dorados.',
      'Agregar los frijoles cocidos junto con un par de cucharadas de su caldo oscuro.',
      'Incorporar el arroz blanco y mezclar vigorosamente hasta que todo el arroz tome un color homogéneo.',
      'Añadir la Salsa Lizano y continuar mezclando a fuego medio-alto por 3 minutos.',
      'Apagar el fuego, espolvorear el cilantro picado, mezclar y servir.'
    ],
    history: 'El Gallo Pinto es el plato nacional de Costa Rica y el corazón de su gastronomía diaria. Consiste en una combinación equilibrada de arroz y frijoles negros que se sofríen juntos. El plato tiene influencia africana y su nombre se debe a la apariencia moteada que toma el arroz al teñirse con el caldo de los frijoles, asemejándose a las plumas de un gallo pinto. Se sazona indispensablemente con la icónica Salsa Lizano costarricense.',
    tips: [
      'Utilizar arroz blanco que haya sido cocinado el día anterior y refrigerado; esto evita que el Gallo Pinto quede con una textura pastosa.',
      'Incorporar una parte del caldo oscuro de los frijoles al sartén para que el arroz adquiera ese tono característico y un sabor concentrado.',
      'Agregar la Salsa Lizano (o una salsa de estilo inglés dulce y especiada) para lograr el sabor original de Costa Rica.'
    ],
    nutrition: {
      calories: '260 kcal',
      protein: '8 g',
      fat: '4 g',
      carbs: '48 g'
    }
  },
  {
    id: 17,
    title: 'Vigorón',
    country: 'Nicaragua',
    description: 'Plato compuesto por yuca cocida, chicharrón crujiente y ensalada de repollo servido en hoja de plátano.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/09/VIGORON.JPG/960px-VIGORON.JPG',
    prepTime: '20 min',
    cookTime: '30 min',
    difficulty: 'Fácil',
    ingredients: [
      { name: 'Yuca fresca', amount: '1 kg' },
      { name: 'Chicharrón de cerdo (con carne)', amount: '300 g' },
      { name: 'Repollo picado finamente', amount: '3 tazas' },
      { name: 'Tomates picados', amount: '2 unidades' },
      { name: 'Vinagre de manzana o blanco', amount: '3 cucharadas' },
      { name: 'Hojas de plátano limpias', amount: '2 o 3 hojas' }
    ],
    steps: [
      'Pelar la yuca, quitarle la vena central y cocinarla en abundante agua con sal hasta que esté muy blanda.',
      'Preparar la ensalada mezclando el repollo picado con los tomates, vinagre y sal; dejar reposar 10 minutos.',
      'Cortar las hojas de plátano en cuadrados grandes y usarlas como plato o base.',
      'Colocar una cama abundante de yuca caliente sobre la hoja.',
      'Poner encima trozos grandes de chicharrón y coronar todo con una generosa porción de ensalada de repollo.'
    ],
    history: 'El vigorón es una de las comidas callejeras más famosas y deliciosas de Nicaragua, nacida en la ciudad de Granada a principios del siglo XX. Creado por María Luisa Cisneros como una opción económica para los fanáticos del béisbol, su nombre proviene de un tónico reconstituyente de la época. Consiste en una cama de yuca cocida caliente servida sobre hojas de plátano, coronada con chicharrón de cerdo crujiente y una ensalada ácida de repollo y tomate.',
    tips: [
      'Retirar la vena fibrosa central de la yuca antes o después de hervirla para lograr una consistencia suave y fácil de comer.',
      'Servir siempre en hojas de plátano para conservar la humedad de la yuca y aportar un sutil aroma tradicional al plato.',
      'Dejar reposar la ensalada de repollo con el vinagre al menos 10 minutos para que el repollo suavice su textura y absorba el ácido.'
    ],
    nutrition: {
      calories: '490 kcal',
      protein: '18 g',
      fat: '22 g',
      carbs: '54 g'
    }
  },
  {
    id: 18,
    title: 'Baleada',
    country: 'Honduras',
    description: 'Tortilla de harina rellena con frijoles refritos, queso y mantequilla rala.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8d/Baleada.jpg',
    prepTime: '30 min',
    cookTime: '15 min',
    difficulty: 'Media',
    ingredients: [
      { name: 'Harina de trigo', amount: '2 tazas' },
      { name: 'Manteca o aceite vegetal', amount: '3 cucharadas' },
      { name: 'Agua tibia', amount: '1/2 taza' },
      { name: 'Frijoles rojos licuados y refritos', amount: '1 taza' },
      { name: 'Queso rallado (seco o cotija)', amount: '1/2 taza' },
      { name: 'Mantequilla rala (crema espesa hondureña)', amount: '1/2 taza' }
    ],
    steps: [
      'Amasar la harina con la manteca, sal y el agua tibia hasta lograr una masa suave. Dejar reposar 20 minutos.',
      'Formar bolitas de masa y estirarlas a mano para hacer tortillas gruesas de unos 20 cm.',
      'Cocinar las tortillas en un comal o plancha caliente hasta que aparezcan manchas doradas y se inflen ligeramente.',
      'Untar generosamente la tortilla caliente con los frijoles refritos.',
      'Espolvorear el queso, rociar la mantequilla rala y doblar por la mitad para servir.'
    ],
    history: 'La baleada es uno de los platos más populares y representativos de la gastronomía de Honduras, originado en la ciudad de La Ceiba a mediados del siglo XX. Consiste en una tortilla de harina de trigo doblada por la mitad y rellena de frijoles rojos refritos, queso seco rallado y mantequilla rala (crema hondureña). Su nombre popular proviene del aspecto de los frijoles enteros que recuerdan a "balas", convirtiéndose en un ícono culinario nacional.',
    tips: [
      'Amasar bien la harina de trigo con la manteca y dejar reposar la masa al menos 20 minutos para que las tortillas estiren con facilidad a mano.',
      'Cocinar las tortillas a fuego medio-alto en un comal caliente durante poco tiempo para evitar que se endurezcan y se vuelvan quebradizas.',
      'Utilizar frijoles rojos típicos de Centroamérica licuados y bien refritos para lograr el sabor clásico y la consistencia untuosa de la baleada.'
    ],
    nutrition: {
      calories: '330 kcal',
      protein: '9 g',
      fat: '11 g',
      carbs: '48 g'
    }
  },
  {
    id: 19,
    title: 'Pupusas',
    country: 'El Salvador',
    description: 'Tortillas gruesas de maíz rellenas, servidas con curtido y salsa de tomate.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Pupusas_El_Salvador_Centro_America.JPG/960px-Pupusas_El_Salvador_Centro_America.JPG',
    prepTime: '40 min',
    cookTime: '20 min',
    difficulty: 'Media',
    ingredients: [
      { name: 'Harina de maíz precocida (masa)', amount: '3 tazas' },
      { name: 'Quesillo o queso mozzarella', amount: '2 tazas' },
      { name: 'Chicharrón molido', amount: '1 taza' },
      { name: 'Repollo picado (para el curtido)', amount: '2 tazas' },
      { name: 'Zanahoria rallada y vinagre (curtido)', amount: '1 taza' },
      { name: 'Salsa de tomate casera', amount: '1 taza' }
    ],
    steps: [
      'Preparar el curtido mezclando repollo, zanahoria, orégano, sal y vinagre; idealmente el día anterior.',
      'Mezclar la harina de maíz con agua tibia hasta tener una masa moldeable.',
      'Tomar una bola de masa, hacerle un hueco en el centro y colocar el queso y chicharrón.',
      'Cerrar la bola encerrando el relleno y palmearla cuidadosamente para aplanarla.',
      'Cocinar en un comal caliente de 3 a 5 minutos por lado hasta que estén doradas. Servir con salsa y curtido.'
    ],
    history: 'Las pupusas son el plato nacional de El Salvador, con un día nacional celebrado en su honor. Sus orígenes son precolombinos, atribuidos a los pueblos pipiles que habitaban el territorio. Son tortillas gruesas hechas a mano con masa de maíz que se rellenan antes de cocinarse con quesillo, chicharrón molido o frijoles refritos. Se sirven tradicionalmente calientes acompañadas de "curtido" (repollo fermentado en vinagre) y salsa de tomate casera.',
    tips: [
      'Untar las manos con un poco de aceite de cocina para manejar la masa de maíz con facilidad y evitar que se pegue al formar las pupusas.',
      'Cerrar completamente la masa alrededor del relleno para que el queso no se escape y se queme directamente sobre la plancha.',
      'Preparar el curtido de repollo con un día de anticipación para que fermente ligeramente y adquiera su sabor característico.'
    ],
    nutrition: {
      calories: '310 kcal',
      protein: '14 g',
      fat: '12 g',
      carbs: '36 g'
    }
  },
  {
    id: 20,
    title: 'Pepián',
    country: 'Guatemala',
    description: 'Guiso espeso y aromático, hecho a base de semillas tostadas y pollo.',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Cocinando_El_Pepian.jpg/960px-Cocinando_El_Pepian.jpg',
    prepTime: '45 min',
    cookTime: '1 hora',
    difficulty: 'Alta',
    ingredients: [
      { name: 'Pollo en piezas', amount: '1 kg' },
      { name: 'Tomates asados', amount: '5 unidades' },
      { name: 'Pepitoria (semillas de calabaza)', amount: '3 cucharadas' },
      { name: 'Ajonjolí (sésamo)', amount: '2 cucharadas' },
      { name: 'Chiles guaque y pasa', amount: '1 de cada uno' },
      { name: 'Papas y ejotes', amount: '500 g mezclados' }
    ],
    steps: [
      'Cocinar el pollo en agua con sal para obtener caldo.',
      'En un comal o sartén seca, tostar el ajonjolí, la pepitoria, los chiles secos, tomates, ajos y cebolla.',
      'Licuar todos los ingredientes tostados con un poco del caldo de pollo hasta formar un recado (salsa) muy fino.',
      'Colar el recado y agregarlo a la olla con el pollo hirviendo.',
      'Añadir las papas picadas y los ejotes; cocinar a fuego medio hasta que la verdura ablande y el guiso espese.'
    ],
    history: 'El pepián es uno de los platos más antiguos y tradicionales de Guatemala, declarado Patrimonio Cultural de la Nación. Su origen se remonta a la época prehispánica maya, donde se servía en ceremonias religiosas importantes. Tras la conquista, se fusionó con ingredientes españoles. Consiste en un recado o guiso espeso de pollo elaborado a partir de semillas tostadas de calabaza (pepitoria) y sésamo (ajonjolí), chiles y tomates secos.',
    tips: [
      'Tostar las semillas de calabaza y el sésamo a fuego medio con cuidado de no quemarlas, ya que semillas quemadas amargarán el recado.',
      'Licuar los ingredientes asados con caldo de pollo caliente hasta obtener una consistencia extremadamente fina y colarla antes de guisar.',
      'Cocinar las verduras (papas y ejotes) directamente en el recado con el pollo para que absorban todo el sabor del guiso.'
    ],
    nutrition: {
      calories: '390 kcal',
      protein: '28 g',
      fat: '16 g',
      carbs: '32 g'
    }
  }
];
