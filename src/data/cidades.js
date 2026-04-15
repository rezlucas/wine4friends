// Cidades brasileiras para autocomplete
// Espírito Santo aparece primeiro, depois demais estados por população

const CIDADES_ES = [
  'Vitória, ES',
  'Vila Velha, ES',
  'Serra, ES',
  'Cariacica, ES',
  'Viana, ES',
  'Fundão, ES',
  'Guarapari, ES',
  'Cachoeiro de Itapemirim, ES',
  'Linhares, ES',
  'São Mateus, ES',
  'Colatina, ES',
  'Aracruz, ES',
  'Barra de São Francisco, ES',
  'Nova Venécia, ES',
  'Marataízes, ES',
  'Piúma, ES',
  'Anchieta, ES',
  'Domingos Martins, ES',
  'Santa Maria de Jetibá, ES',
  'Alegre, ES',
];

const CIDADES_SP = [
  'São Paulo, SP',
  'Guarulhos, SP',
  'Campinas, SP',
  'São Bernardo do Campo, SP',
  'Santo André, SP',
  'Osasco, SP',
  'Ribeirão Preto, SP',
  'São José dos Campos, SP',
  'Sorocaba, SP',
  'Mauá, SP',
  'São José do Rio Preto, SP',
  'Mogi das Cruzes, SP',
  'Santos, SP',
  'Diadema, SP',
  'Jundiaí, SP',
  'Piracicaba, SP',
  'Carapicuíba, SP',
  'Bauru, SP',
  'Itaquaquecetuba, SP',
  'São Vicente, SP',
  'Franca, SP',
  'Guarujá, SP',
  'Taubaté, SP',
  'Suzano, SP',
  'Limeira, SP',
  'Praia Grande, SP',
  'Barueri, SP',
  'Taboão da Serra, SP',
  'Americana, SP',
  'Marília, SP',
  'São Carlos, SP',
  'Araraquara, SP',
  'Presidente Prudente, SP',
  'Hortolândia, SP',
  'Rio Claro, SP',
  'Pirituba, SP',
  'Araçatuba, SP',
  'Cotia, SP',
  'Ferraz de Vasconcelos, SP',
  'Botucatu, SP',
];

const CIDADES_RJ = [
  'Rio de Janeiro, RJ',
  'São Gonçalo, RJ',
  'Duque de Caxias, RJ',
  'Nova Iguaçu, RJ',
  'Niterói, RJ',
  'Belford Roxo, RJ',
  'São João de Meriti, RJ',
  'Campos dos Goytacazes, RJ',
  'Petrópolis, RJ',
  'Volta Redonda, RJ',
  'Magé, RJ',
  'Itaboraí, RJ',
  'Mesquita, RJ',
  'Nova Friburgo, RJ',
  'Barra Mansa, RJ',
  'Angra dos Reis, RJ',
  'Nilópolis, RJ',
  'Queimados, RJ',
  'Resende, RJ',
  'Macaé, RJ',
];

const CIDADES_MG = [
  'Belo Horizonte, MG',
  'Uberlândia, MG',
  'Contagem, MG',
  'Juiz de Fora, MG',
  'Betim, MG',
  'Montes Claros, MG',
  'Uberaba, MG',
  'Ribeirão das Neves, MG',
  'Governador Valadares, MG',
  'Ipatinga, MG',
  'Sete Lagoas, MG',
  'Divinópolis, MG',
  'Santa Luzia, MG',
  'Ibirité, MG',
  'Poços de Caldas, MG',
  'Patos de Minas, MG',
  'Pouso Alegre, MG',
  'Teófilo Otoni, MG',
  'Barbacena, MG',
  'Sabará, MG',
];

const CIDADES_BA = [
  'Salvador, BA',
  'Feira de Santana, BA',
  'Vitória da Conquista, BA',
  'Camaçari, BA',
  'Itabuna, BA',
  'Juazeiro, BA',
  'Lauro de Freitas, BA',
  'Ilhéus, BA',
  'Jequié, BA',
  'Teixeira de Freitas, BA',
  'Alagoinhas, BA',
  'Barreiras, BA',
  'Porto Seguro, BA',
  'Simões Filho, BA',
  'Paulo Afonso, BA',
];

const CIDADES_PR = [
  'Curitiba, PR',
  'Londrina, PR',
  'Maringá, PR',
  'Ponta Grossa, PR',
  'Cascavel, PR',
  'São José dos Pinhais, PR',
  'Foz do Iguaçu, PR',
  'Colombo, PR',
  'Guarapuava, PR',
  'Paranaguá, PR',
  'Araucária, PR',
  'Toledo, PR',
  'Apucarana, PR',
  'Pinhais, PR',
  'Campo Largo, PR',
];

const CIDADES_RS = [
  'Porto Alegre, RS',
  'Caxias do Sul, RS',
  'Pelotas, RS',
  'Canoas, RS',
  'Santa Maria, RS',
  'Gravataí, RS',
  'Viamão, RS',
  'Novo Hamburgo, RS',
  'São Leopoldo, RS',
  'Rio Grande, RS',
  'Alvorada, RS',
  'Passo Fundo, RS',
  'Sapucaia do Sul, RS',
  'Uruguaiana, RS',
  'Santa Cruz do Sul, RS',
  'Cachoeirinha, RS',
  'Bagé, RS',
  'Bento Gonçalves, RS',
];

const CIDADES_PE = [
  'Recife, PE',
  'Jaboatão dos Guararapes, PE',
  'Olinda, PE',
  'Caruaru, PE',
  'Paulista, PE',
  'Petrolina, PE',
  'Cabo de Santo Agostinho, PE',
  'Camaragibe, PE',
  'Garanhuns, PE',
  'Vitória de Santo Antão, PE',
  'Igarassu, PE',
];

const CIDADES_CE = [
  'Fortaleza, CE',
  'Caucaia, CE',
  'Juazeiro do Norte, CE',
  'Maracanaú, CE',
  'Sobral, CE',
  'Crato, CE',
  'Itapipoca, CE',
  'Maranguape, CE',
  'Iguatu, CE',
  'Quixadá, CE',
];

const CIDADES_GO = [
  'Goiânia, GO',
  'Aparecida de Goiânia, GO',
  'Anápolis, GO',
  'Rio Verde, GO',
  'Luziânia, GO',
  'Águas Lindas de Goiás, GO',
  'Valparaíso de Goiás, GO',
  'Trindade, GO',
  'Formosa, GO',
  'Novo Gama, GO',
];

const CIDADES_PA = [
  'Belém, PA',
  'Ananindeua, PA',
  'Santarém, PA',
  'Marabá, PA',
  'Parauapebas, PA',
  'Castanhal, PA',
  'Abaetetuba, PA',
  'Cametá, PA',
  'Marituba, PA',
];

const CIDADES_AM = [
  'Manaus, AM',
  'Parintins, AM',
  'Itacoatiara, AM',
  'Manacapuru, AM',
  'Coari, AM',
];

const CIDADES_SC = [
  'Florianópolis, SC',
  'Joinville, SC',
  'Blumenau, SC',
  'São José, SC',
  'Chapecó, SC',
  'Criciúma, SC',
  'Itajaí, SC',
  'Jaraguá do Sul, SC',
  'Palhoça, SC',
  'Lages, SC',
  'Balneário Camboriú, SC',
];

const CIDADES_MA = [
  'São Luís, MA',
  'Imperatriz, MA',
  'Timon, MA',
  'Caxias, MA',
  'Codó, MA',
  'Paço do Lumiar, MA',
  'Açailândia, MA',
];

const CIDADES_MT = [
  'Cuiabá, MT',
  'Várzea Grande, MT',
  'Rondonópolis, MT',
  'Sinop, MT',
  'Tangará da Serra, MT',
];

const CIDADES_MS = [
  'Campo Grande, MS',
  'Dourados, MS',
  'Três Lagoas, MS',
  'Corumbá, MS',
  'Ponta Porã, MS',
];

const CIDADES_RN = [
  'Natal, RN',
  'Mossoró, RN',
  'Parnamirim, RN',
  'São Gonçalo do Amarante, RN',
  'Ceará-Mirim, RN',
];

const CIDADES_AL = [
  'Maceió, AL',
  'Arapiraca, AL',
  'Rio Largo, AL',
  'Palmeira dos Índios, AL',
];

const CIDADES_PI = [
  'Teresina, PI',
  'Parnaíba, PI',
  'Picos, PI',
  'Floriano, PI',
];

const CIDADES_PB = [
  'João Pessoa, PB',
  'Campina Grande, PB',
  'Santa Rita, PB',
  'Patos, PB',
  'Bayeux, PB',
];

const CIDADES_RO = [
  'Porto Velho, RO',
  'Ji-Paraná, RO',
  'Ariquemes, RO',
  'Vilhena, RO',
];

const CIDADES_TO = [
  'Palmas, TO',
  'Araguaína, TO',
  'Gurupi, TO',
];

const CIDADES_AC = [
  'Rio Branco, AC',
  'Cruzeiro do Sul, AC',
];

const CIDADES_AP = [
  'Macapá, AP',
  'Santana, AP',
];

const CIDADES_RR = [
  'Boa Vista, RR',
];

const CIDADES_SE = [
  'Aracaju, SE',
  'Nossa Senhora do Socorro, SE',
  'Lagarto, SE',
];

const CIDADES_DF = [
  'Brasília, DF',
  'Ceilândia, DF',
  'Taguatinga, DF',
  'Samambaia, DF',
  'Planaltina, DF',
];

// ES primeiro, depois demais estados por relevância
export const CIDADES = [
  ...CIDADES_ES,
  ...CIDADES_SP,
  ...CIDADES_RJ,
  ...CIDADES_MG,
  ...CIDADES_DF,
  ...CIDADES_BA,
  ...CIDADES_PR,
  ...CIDADES_RS,
  ...CIDADES_GO,
  ...CIDADES_SC,
  ...CIDADES_PE,
  ...CIDADES_CE,
  ...CIDADES_PA,
  ...CIDADES_AM,
  ...CIDADES_MA,
  ...CIDADES_MT,
  ...CIDADES_MS,
  ...CIDADES_RN,
  ...CIDADES_PB,
  ...CIDADES_AL,
  ...CIDADES_PI,
  ...CIDADES_SE,
  ...CIDADES_RO,
  ...CIDADES_TO,
  ...CIDADES_AC,
  ...CIDADES_AP,
  ...CIDADES_RR,
];
