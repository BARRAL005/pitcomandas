import { Product, Comanda, ActivityLog, Customer, ConsignmentOrder } from './types';

export const INITIAL_PRODUCTS: Product[] = [
  // Cervejas
  { id: 'p1', name: 'Cerveja Heineken 600ml', category: 'Cervejas', price: 18.00, description: 'Cerveja Premium Lager Pilsen de garrafa' },
  { id: 'p2', name: 'Cerveja Stella Artois 600ml', category: 'Cervejas', price: 16.00, description: 'Lager belga clássica garrafa' },
  { id: 'p3', name: 'Cerveja Eisenbahn 600ml', category: 'Cervejas', price: 14.00, description: 'Eisenbahn Pilsen puro malte' },
  { id: 'p4', name: 'Chopp Brahma Caneca 400ml', category: 'Cervejas', price: 11.50, description: 'Chopp trincando de gelado servido na caneca zero grau' },
  { id: 'p5', name: 'Cerveja Corona Long Neck 330ml', category: 'Cervejas', price: 12.00, description: 'Servida com rodela de limão' },
  { id: 'p6', name: 'Cerveja Spaten 600ml', category: 'Cervejas', price: 15.00, description: 'Cerveja puro malte Alemã de Munique' },

  // Bebidas não alcoólicas
  { id: 'p7', name: 'Refrigerante Lata 350ml', category: 'Bebidas', price: 6.00, description: 'Coca-Cola, Guaraná, Fanta ou Soda' },
  { id: 'p8', name: 'Suco Natural Prats 300ml', category: 'Bebidas', price: 9.00, description: 'Laranja, Uva ou Limão super refrescante' },
  { id: 'p9', name: 'Água Mineral c/ Gás 500ml', category: 'Bebidas', price: 4.50, description: 'Servida com gelo e limão' },
  { id: 'p10', name: 'Red Bull Energy Drink', category: 'Bebidas', price: 16.00, description: 'Original, Tropical, Melancia ou Coco' },
  { id: 'p11', name: 'Água de Coco Copo 300ml', category: 'Bebidas', price: 8.00, description: 'Suco natural de coco bem gelado' },
  { id: 'p12', name: 'Tônica Schweppes Lata', category: 'Bebidas', price: 6.50, description: 'Água tônica gaseificada' },

  // Destilados / Coquetéis
  { id: 'p13', name: 'Caipirinha Clássica Limão', category: 'Destilados', price: 16.00, description: 'Cachaça artesanal, limão, açúcar e gelo' },
  { id: 'p14', name: 'Gin Tônica Tanqueray', category: 'Destilados', price: 24.00, description: 'Gin premium, Schweppes tônica e especiarias (alecrim, zimbro)' },
  { id: 'p15', name: 'Whisky Red Label Dose 50ml', category: 'Destilados', price: 18.00, description: 'Dose de Scotch Whisky acompanhado de gelo de coco' },
  { id: 'p16', name: 'Campari Dose 50ml', category: 'Destilados', price: 14.00, description: 'Aperitivo amargo clássico com rodela de laranja' },
  { id: 'p17', name: 'Combo Smirnoff + 4 Red Bull', category: 'Destilados', price: 159.00, description: 'Garrafa de Vodka Smirnoff mais 4 latas de energético Red Bull' },

  // Petiscos
  { id: 'p18', name: 'Batata Frita PitStop c/ Cheddar e Bacon', category: 'Petiscos', price: 42.00, description: 'Grande porção de batatas fritas crocantes com creme de cheddar e bacon crocante' },
  { id: 'p19', name: 'Frango a Passarinho Crocante', category: 'Petiscos', price: 46.00, description: 'Porção de frango a passarinho crocante salpicada com alho frito e cheiro verde' },
  { id: 'p20', name: 'Calabresa Acebolada na Chapa', category: 'Petiscos', price: 36.00, description: 'Porção premium fatiada servida com torradas crocantes' },
  { id: 'p21', name: 'Iscas de Tilápia c/ Molho Tártaro', category: 'Petiscos', price: 54.00, description: 'Tilápia fresca empanada em farinha Panko super crocante' },
  { id: 'p22', name: 'Tábua de Frios PitStop', category: 'Petiscos', price: 48.00, description: 'Queijo provolone, salame italiano, azeitonas recheadas, palmito e ovos de codorna' },

  // Outros
  { id: 'p23', name: 'Maço de Cigarros Carlton', category: 'Outros', price: 12.00, description: 'Cigarro de tabaco tradicional' },
  { id: 'p24', name: 'Isqueiro Bic Grande', category: 'Outros', price: 8.00, description: 'Isqueiro tipo flint tradicional' },
  { id: 'p25', name: 'Chiclete Trident Caixa', category: 'Outros', price: 4.00, description: 'Caixa de chicletes refrescantes menta' },

  // Consignados (Para Eventos e Atacado)
  { id: 'p26', name: 'Cerveja Heineken 600ml (Caixa de 24 un)', category: 'Consignados', price: 384.00, description: 'Caixa com 24 garrafas de Heineken 600ml para eventos' },
  { id: 'p27', name: 'Cerveja Stella Artois 600ml (Caixa de 24 un)', category: 'Consignados', price: 336.00, description: 'Caixa com 24 garrafas de Stella Artois 600ml para eventos' },
  { id: 'p28', name: 'Cerveja Spaten 600ml (Caixa de 24 un)', category: 'Consignados', price: 336.00, description: 'Caixa com 24 garrafas de Spaten 600ml para eventos' },
  { id: 'p29', name: 'Cerveja Eisenbahn 600ml (Caixa de 24 un)', category: 'Consignados', price: 288.00, description: 'Caixa com 24 garrafas de Eisenbahn 600ml para eventos' },
  { id: 'p30', name: 'Refrigerante Coca-Cola 2L (Fardo de 6 un)', category: 'Consignados', price: 54.00, description: 'Fardo com 6 garrafas pet de Coca-Cola 2 Litros' },
  { id: 'p31', name: 'Saco de Gelo 10kg', category: 'Consignados', price: 15.00, description: 'Saco com 10kg de gelo em cubo de alta durabilidade' },
  { id: 'p32', name: 'Vasilhame de Engradado (Vazio)', category: 'Consignados', price: 0.00, description: 'Apenas o ativo em comodato (garrafas retornáveis sem líquido)' }
];

export const INITIAL_CUSTOMERS: Customer[] = [
  { id: 'c1', name: 'João Silva', phone: '(11) 98765-4321', email: 'joao.silva@email.com', totalSpent: 412.50, visits: 8 },
  { id: 'c2', name: 'Maria Oliveira', phone: '(11) 97654-3210', email: 'maria.oli@email.com', totalSpent: 285.00, visits: 5 },
  { id: 'c3', name: 'Carlos Souza', phone: '(11) 96543-2109', email: 'carlinhos@email.com', totalSpent: 520.40, visits: 12 },
  { id: 'c4', name: 'Ana Pereira', phone: '(11) 95432-1098', email: 'ana.pereira@email.com', totalSpent: 198.30, visits: 4 },
  { id: 'c5', name: 'Lucas Lima', phone: '(11) 94321-0987', email: 'lucas.lima@email.com', totalSpent: 641.80, visits: 15 },
  { id: 'c6', name: 'Fernanda Costa', phone: '(11) 93210-9876', email: 'nanda.costa@email.com', totalSpent: 320.00, visits: 6 },
  { id: 'c7', name: 'Rafael Martins', phone: '(11) 92109-8765', email: 'rafa.martins@email.com', totalSpent: 410.90, visits: 9 },
  { id: 'c8', name: 'Juliana Alves', phone: '(11) 91098-7654', email: 'juju.alves@email.com', totalSpent: 250.00, visits: 5 }
];

export const INITIAL_COMANDAS: Comanda[] = [
  {
    id: '0012',
    number: 12,
    customerName: 'João Silva',
    phone: '(11) 98765-4321',
    status: 'open',
    openedAt: '21:05',
    serviceCharge: true,
    items: [
      { productId: 'p1', name: 'Cerveja Heineken 600ml', category: 'Cervejas', price: 18.00, quantity: 4, addedAt: '21:10' },
      { productId: 'p18', name: 'Batata Frita PitStop c/ Cheddar', category: 'Petiscos', price: 42.00, quantity: 1, addedAt: '21:15' },
      { productId: 'p13', name: 'Caipirinha Clássica Limão', category: 'Destilados', price: 16.00, quantity: 2, addedAt: '21:30' },
      { productId: 'p7', name: 'Refrigerante Lata 350ml', category: 'Bebidas', price: 6.00, quantity: 2, addedAt: '21:43' }
    ]
  },
  {
    id: '0011',
    number: 11,
    customerName: 'Maria Oliveira',
    phone: '(11) 97654-3210',
    status: 'open',
    openedAt: '21:12',
    serviceCharge: true,
    items: [
      { productId: 'p2', name: 'Cerveja Stella Artois 600ml', category: 'Cervejas', price: 16.00, quantity: 3, addedAt: '21:15' },
      { productId: 'p20', name: 'Calabresa Acebolada na Chapa', category: 'Petiscos', price: 36.00, quantity: 1, addedAt: '21:20' },
      { productId: 'p11', name: 'Água de Coco Copo 300ml', category: 'Bebidas', price: 8.00, quantity: 1, addedAt: '21:39' }
    ]
  },
  {
    id: '0010',
    number: 10,
    customerName: 'Carlos Souza',
    phone: '(11) 96543-2109',
    status: 'open',
    openedAt: '21:15',
    serviceCharge: true,
    items: [
      { productId: 'p15', name: 'Whisky Red Label Dose 50ml', category: 'Destilados', price: 18.00, quantity: 4, addedAt: '21:18' },
      { productId: 'p9', name: 'Água Mineral c/ Gás 500ml', category: 'Bebidas', price: 4.50, quantity: 4, addedAt: '21:18' },
      { productId: 'p22', name: 'Tábua de Frios PitStop', category: 'Petiscos', price: 48.00, quantity: 1, addedAt: '21:25' }
    ]
  },
  {
    id: '0009',
    number: 9,
    customerName: 'Ana Pereira',
    phone: '(11) 95432-1098',
    status: 'open',
    openedAt: '21:18',
    serviceCharge: false,
    items: [
      { productId: 'p8', name: 'Suco Natural Prats 300ml', category: 'Bebidas', price: 9.00, quantity: 2, addedAt: '21:20' },
      { productId: 'p13', name: 'Caipirinha Clássica Limão', category: 'Destilados', price: 16.00, quantity: 1, addedAt: '21:30' },
      { productId: 'p25', name: 'Chiclete Trident Caixa', category: 'Outros', price: 4.00, quantity: 3, addedAt: '21:35' }
    ]
  },
  {
    id: '0008',
    number: 8,
    customerName: 'Lucas Lima',
    phone: '(11) 94321-0987',
    status: 'open',
    openedAt: '21:20',
    serviceCharge: true,
    items: [
      { productId: 'p1', name: 'Cerveja Heineken 600ml', category: 'Cervejas', price: 18.00, quantity: 6, addedAt: '21:22' },
      { productId: 'p19', name: 'Frango a Passarinho Crocante', category: 'Petiscos', price: 46.00, quantity: 1, addedAt: '21:25' },
      { productId: 'p23', name: 'Maço de Cigarros Carlton', category: 'Outros', price: 12.00, quantity: 2, addedAt: '21:32' },
      { productId: 'p24', name: 'Isqueiro Bic Grande', category: 'Outros', price: 8.00, quantity: 1, addedAt: '21:32' }
    ]
  },
  {
    id: '0007',
    number: 7,
    customerName: 'Fernanda Costa',
    phone: '(11) 93210-9876',
    status: 'open',
    openedAt: '21:22',
    serviceCharge: true,
    items: [
      { productId: 'p14', name: 'Gin Tônica Tanqueray', category: 'Destilados', price: 24.00, quantity: 2, addedAt: '21:24' },
      { productId: 'p20', name: 'Calabresa Acebolada na Chapa', category: 'Petiscos', price: 36.00, quantity: 1, addedAt: '21:26' },
      { productId: 'p7', name: 'Refrigerante Lata 350ml', category: 'Bebidas', price: 6.00, quantity: 3, addedAt: '21:30' }
    ]
  },
  {
    id: '0006',
    number: 6,
    customerName: 'Rafael Martins',
    phone: '(11) 92109-8765',
    status: 'open',
    openedAt: '21:24',
    serviceCharge: true,
    items: [
      { productId: 'p3', name: 'Cerveja Eisenbahn 600ml', category: 'Cervejas', price: 14.00, quantity: 4, addedAt: '21:26' },
      { productId: 'p12', name: 'Tônica Schweppes Lata', category: 'Bebidas', price: 6.50, quantity: 2, addedAt: '21:28' },
      { productId: 'p25', name: 'Chiclete Trident Caixa', category: 'Outros', price: 4.00, quantity: 5, addedAt: '21:28' }
    ]
  },
  {
    id: '0005',
    number: 5,
    customerName: 'Juliana Alves',
    phone: '(11) 91098-7654',
    status: 'open',
    openedAt: '21:25',
    serviceCharge: true,
    items: [
      { productId: 'p5', name: 'Cerveja Corona Long Neck 330ml', category: 'Cervejas', price: 12.00, quantity: 4, addedAt: '21:25' },
      { productId: 'p18', name: 'Batata Frita PitStop', category: 'Petiscos', price: 42.00, quantity: 1, addedAt: '21:25' },
      { productId: 'p10', name: 'Red Bull Energy Drink', category: 'Bebidas', price: 16.00, quantity: 2, addedAt: '21:25' }
    ]
  }
];

export const INITIAL_PAID_COMANDAS: Comanda[] = [
  {
    id: '0004',
    number: 4,
    customerName: 'Marcos Souza',
    status: 'paid',
    openedAt: '19:30',
    closedAt: '21:15',
    paymentMethod: 'PIX',
    items: [
      { productId: 'p17', name: 'Combo Smirnoff + 4 Red Bull', category: 'Destilados', price: 159.00, quantity: 1, addedAt: '19:40' },
      { productId: 'p18', name: 'Batata Frita PitStop c/ Cheddar', category: 'Petiscos', price: 42.00, quantity: 1, addedAt: '19:50' },
      { productId: 'p1', name: 'Cerveja Heineken 600ml', category: 'Cervejas', price: 18.00, quantity: 3, addedAt: '20:15' }
    ],
    serviceCharge: true,
    discount: 10.00
  },
  {
    id: '0003',
    number: 3,
    customerName: 'Roberto Almeida',
    status: 'paid',
    openedAt: '18:15',
    closedAt: '20:45',
    paymentMethod: 'Cartão',
    items: [
      { productId: 'p4', name: 'Chopp Brahma Caneca 400ml', category: 'Cervejas', price: 11.50, quantity: 8, addedAt: '18:30' },
      { productId: 'p20', name: 'Calabresa Acebolada na Chapa', category: 'Petiscos', price: 36.00, quantity: 2, addedAt: '19:00' },
      { productId: 'p7', name: 'Refrigerante Lata 350ml', category: 'Bebidas', price: 6.00, quantity: 3, addedAt: '19:15' }
    ],
    serviceCharge: true
  },
  {
    id: '0002',
    number: 2,
    customerName: 'Patrícia Mendes',
    status: 'paid',
    openedAt: '18:00',
    closedAt: '19:55',
    paymentMethod: 'Dinheiro',
    items: [
      { productId: 'p14', name: 'Gin Tônica Tanqueray', category: 'Destilados', price: 24.00, quantity: 4, addedAt: '18:15' },
      { productId: 'p18', name: 'Batata Frita PitStop c/ Cheddar', category: 'Petiscos', price: 42.00, quantity: 1, addedAt: '18:30' }
    ],
    serviceCharge: false
  },
  {
    id: '0001',
    number: 1,
    customerName: 'Gustavo Santos',
    status: 'paid',
    openedAt: '17:30',
    closedAt: '19:12',
    paymentMethod: 'PIX',
    items: [
      { productId: 'p1', name: 'Cerveja Heineken 600ml', category: 'Cervejas', price: 18.00, quantity: 12, addedAt: '17:40' },
      { productId: 'p21', name: 'Iscas de Tilápia c/ Molho Tártaro', category: 'Petiscos', price: 54.00, quantity: 2, addedAt: '18:00' },
      { productId: 'p23', name: 'Maço de Cigarros Carlton', category: 'Outros', price: 12.00, quantity: 1, addedAt: '18:10' }
    ],
    serviceCharge: true
  }
];

export const INITIAL_LOGS: ActivityLog[] = [
  {
    id: 'log1',
    type: 'add_item',
    title: 'Comanda #0012 atualizada',
    details: 'João Silva adicionou 2 itens',
    value: 34.50,
    timestamp: '21:43'
  },
  {
    id: 'log2',
    type: 'pay',
    title: 'Pagamento recebido',
    details: 'Comanda #0004 paga via PIX',
    value: 134.20,
    timestamp: '21:40'
  },
  {
    id: 'log3',
    type: 'add_item',
    title: 'Comanda #0011 atualizada',
    details: 'Maria Oliveira adicionou 1 item',
    value: 27.00,
    timestamp: '21:39'
  },
  {
    id: 'log4',
    type: 'add_product',
    title: 'Produto cadastrado',
    details: 'Cerveja Heineken 600ml',
    timestamp: '21:20'
  },
  {
    id: 'log5',
    type: 'open',
    title: 'Comanda #0012 aberta',
    details: 'Mesa aberta para João Silva',
    timestamp: '21:05'
  }
];

export const INITIAL_CONSIGNMENTS: ConsignmentOrder[] = [
  {
    id: 'CSG-0001',
    customerName: 'Roberto Vasconcelos',
    phone: '(11) 98877-2233',
    cpf: '123.456.789-00',
    address: 'Av. das Nações, 1420 - Res. Golden',
    eventDate: '2026-06-06',
    deliveryDate: '2026-06-05',
    returnDate: '2026-06-08',
    status: 'consignado',
    createdAt: '11:30',
    updatedAt: '11:30',
    observation: 'Aniversário de 40 anos. Retirar caixas térmicas limpas.',
    createdBy: 'Renan Barral',
    items: [
      { id: 'csgi_1', name: 'Cerveja Heineken 600ml (Caixa de 24 un)', quantityConsigned: 8, quantityReturned: 3, price: 384.00 }, // Consumed 5 caixas
      { id: 'csgi_2', name: 'Refrigerante Coca-Cola 2L (Fardo de 6 un)', quantityConsigned: 12, quantityReturned: 4, price: 54.00 }, // Consumed 8 fardos
      { id: 'csgi_3', name: 'Saco de Gelo 10kg', quantityConsigned: 20, quantityReturned: 0, price: 15.00 } // Consumed 20 (gelo derrete, não retorna)
    ],
    assets: [
      { id: 'csga_1', name: 'Caixa Térmica Metálica 120L', quantity: 2, returned: false, securityDepositValue: 250.00 },
      { id: 'csga_2', name: 'Chapeira / Balcão Chopp', quantity: 1, returned: true, securityDepositValue: 600.00 }
    ]
  },
  {
    id: 'CSG-0002',
    customerName: 'Patrícia Mendes (Casamento)',
    phone: '(11) 99332-1144',
    cpf: '456.789.012-11',
    address: 'Chácara Beija-Flor, Rua das Palmeiras 47',
    eventDate: '2026-05-24',
    deliveryDate: '2026-05-23',
    returnDate: '2026-05-26',
    status: 'finalizado',
    createdAt: '09:15',
    updatedAt: '14:30',
    closedAt: '15:10',
    observation: 'Evento finalizado de forma exemplar. Todos os engradados retornados vazios.',
    createdBy: 'Renan Barral',
    paymentMethod: 'PIX',
    totalPaid: 3240.00,
    items: [
      { id: 'csgi_4', name: 'Cerveja Spaten 600ml (Caixa de 24 un)', quantityConsigned: 15, quantityReturned: 5, price: 336.00 }, // Consumed 10 caixas
      { id: 'csgi_5', name: 'Água Mineral sem Gás 500ml (Fardo de 12 un)', quantityConsigned: 8, quantityReturned: 2, price: 24.05 } // Consumed 6 fardos
    ],
    assets: [
      { id: 'csga_3', name: 'Caixa Térmica Plástica Azul 45L', quantity: 4, returned: true, securityDepositValue: 120.00 }
    ]
  }
];
