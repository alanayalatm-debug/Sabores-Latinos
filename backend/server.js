const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));

const recipes = [
  {
    id: 1,
    title: 'Tacos al Pastor',
    country: 'México',
    description: 'Deliciosos tacos de carne de cerdo adobada, servidos con piña, cebolla y cilantro sobre tortillas de maíz.',
    imageUrl: 'http://localhost:3000/public/images/tacos.png',
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
    ]
  },
  {
    id: 2,
    title: 'Ceviche Peruano',
    country: 'Perú',
    description: 'Pescado fresco marinado en jugo de limón, acompañado de ají, cebolla morada, camote y maíz tostado.',
    imageUrl: 'http://localhost:3000/public/images/ceviche.png',
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
    ]
  },
  {
    id: 3,
    title: 'Arepas Rellenas',
    country: 'Colombia',
    description: 'Masa de maíz dorada a la plancha, crujiente por fuera y suave por dentro, rellena de queso y carne mechada.',
    imageUrl: 'http://localhost:3000/public/images/arepas.png',
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
    ]
  },
  {
    id: 4,
    title: 'Asado Tradicional',
    country: 'Argentina',
    description: 'La máxima expresión de la carne a la parrilla, un ritual culinario inigualable.',
    imageUrl: 'http://localhost:3000/public/images/asado.png',
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
    ]
  },
  {
    id: 5,
    title: 'Empanadas de Pino',
    country: 'Chile',
    description: 'Empanadas horneadas rellenas de carne, cebolla, huevo duro, aceitunas y pasas.',
    imageUrl: 'http://localhost:3000/public/images/empanadas_chile.png',
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
    ]
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
    ]
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
    ]
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
      'Retirar el pescado cocido y en el mismo caldo cocinar la yuca cortada en trozos grandes.',
      'Desmenuzar el pescado en lascas medianas.',
      'Encurtir la cebolla roja picada finamente con limón y sal.',
      'Servir en un plato hondo: la yuca y el caldo caliente, coronar con pescado, cebolla encurtida y cilantro picado.'
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
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
    ]
  }
];

// Endpoint: Obtener todas las recetas (resumen)
app.get('/api/recipes', (req, res) => {
  const basicInfo = recipes.map(r => ({
    id: r.id,
    title: r.title,
    country: r.country,
    description: r.description,
    imageUrl: r.imageUrl,
    prepTime: r.prepTime,
    cookTime: r.cookTime,
    difficulty: r.difficulty
  }));
  res.json(basicInfo);
});

// Endpoint: Obtener receta específica por ID
app.get('/api/recipes/:id', (req, res) => {
  const recipe = recipes.find(r => r.id === parseInt(req.params.id));
  if (recipe) {
    res.json(recipe);
  } else {
    res.status(404).json({ message: 'Receta no encontrada' });
  }
});

app.listen(PORT, () => {
  console.log(`Backend server running at http://localhost:${PORT}`);
});
