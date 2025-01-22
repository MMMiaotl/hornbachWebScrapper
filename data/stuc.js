const stuc = [
  { name: 'EUROCOL 955 Wandostuc 20 kg', name_nl: 'EUROCOL 955 Wandostuc 20 kg', image: 'https://media.hornbach.nl/hb/packshot/as.46080929.jpg?dvid=8', quantity: 0, price: 34.95, artnum: '4614171' },
  { name: 'KNAUF Cementgebonden pleister UP 210 W 25 kg', name_nl: 'KNAUF Cementgebonden pleister UP 210 W 25 kg', image: 'https://media.hornbach.nl/hb/packshot/as.92823846.jpg?dvid=8', quantity: 0, price: 9.95, artnum: '4101155' },
  { name: 'KNAUF Dunpleister FinishPasta 5 kg', name_nl: 'KNAUF Dunpleister FinishPasta 5 kg', image: 'https://media.hornbach.nl/hb/packshot/as.95387251.jpg?dvid=8', quantity: 0, price: 15.45, artnum: '10678499' },
  { name: 'KNAUF Dunpleister Fix en Finish 10 kg', name_nl: 'KNAUF Dunpleister Fix en Finish 10 kg', image: 'https://media.hornbach.nl/hb/packshot/as.46290464.jpg?dvid=8', quantity: 0, price: 17.5, artnum: '4100997' },
  { name: 'KNAUF Dunpleister Fix en Finish 25 kg', name_nl: 'KNAUF Dunpleister Fix en Finish 25 kg', image: 'https://media.hornbach.nl/hb/packshot/as.46293166.jpg?dvid=8', quantity: 0, price: 20.95, artnum: '4101160' },
  { name: 'KNAUF Dunpleister TopFinish 5 kg', name_nl: 'KNAUF Dunpleister TopFinish 5 kg', image: 'https://media.hornbach.nl/hb/packshot/as.47503991.jpg?dvid=8', quantity: 0, price: 11.15, artnum: '10113386' },
  { name: 'KNAUF Gipspleister AquaStuc 25 kg', name_nl: 'KNAUF Gipspleister AquaStuc 25 kg', image: 'https://media.hornbach.nl/hb/packshot/as.46914077.jpg?dvid=8', quantity: 0, price: 17.95, artnum: '6636236' },
  { name: 'KNAUF Handpleister Goudband 25 kg', name_nl: 'KNAUF Handpleister Goudband 25 kg', image: 'https://media.hornbach.nl/hb/packshot/as.46291207.jpg?dvid=8', quantity: 0, price: 13.4, artnum: '4101156' },
  { name: 'KNAUF Handpleister Goudband Quick 25 kg', name_nl: 'KNAUF Handpleister Goudband Quick 25 kg', image: 'https://media.hornbach.nl/hb/packshot/as.46476477.jpg?dvid=8', quantity: 0, price: 13.5, artnum: '6470027' },
  { name: 'KNAUF Hechtpleister Roodband 10 kg', name_nl: 'KNAUF Hechtpleister Roodband 10 kg', image: 'https://media.hornbach.nl/hb/packshot/as.46216312.jpg?dvid=8', quantity: 0, price: 9.95, artnum: '251547' },
  { name: 'KNAUF Hechtpleister Roodband 2,5 kg', name_nl: 'KNAUF Hechtpleister Roodband 2,5 kg', image: 'https://media.hornbach.nl/hb/packshot/as.46289643.jpg?dvid=8', quantity: 0, price: 5.65, artnum: '4100985' },
  { name: 'KNAUF Hechtpleister Roodband 25 kg', name_nl: 'KNAUF Hechtpleister Roodband 25 kg', image: 'https://media.hornbach.nl/hb/packshot/as.46291716.jpg?dvid=8', quantity: 0, price: 17.95, artnum: '4101157' },
  { name: 'KNAUF Hechtschuurpleister Geelband 25 kg', name_nl: 'KNAUF Hechtschuurpleister Geelband 25 kg', image: 'https://media.hornbach.nl/hb/packshot/as.46292109.jpg?dvid=8', quantity: 0, price: 14.7, artnum: '4101158' },
  { name: 'KNAUF Kleefgips Perlfix 25 kg', name_nl: 'KNAUF Kleefgips Perlfix 25 kg', image: 'https://media.hornbach.nl/hb/packshot/as.85230223.jpg?dvid=8', quantity: 0, price: 11.95, artnum: '4100959' },
  { name: 'KNAUF Machinepleister MP75 25 kg', name_nl: 'KNAUF Machinepleister MP75 25 kg', image: 'https://media.hornbach.nl/hb/packshot/as.46674083.jpg?dvid=8', quantity: 0, price: 11.45, artnum: '7171632' },
  { name: 'KNAUF Machinepleister MP75 Diamant 25 kg', name_nl: 'KNAUF Machinepleister MP75 Diamant 25 kg', image: 'https://media.hornbach.nl/hb/packshot/as.49773208.jpg?dvid=8', quantity: 0, price: 13.95, artnum: '5531164' },
  { name: 'KNAUF Renoband Reparatiemiddel 1 liter', name_nl: 'KNAUF Renoband Reparatiemiddel 1 liter', image: 'https://media.hornbach.nl/hb/packshot/as.46630651.jpg?dvid=8', quantity: 0, price: 12.5, artnum: '4161594' },
  { name: 'KNAUF Renoband Reparatiemiddel 4 liter', name_nl: 'KNAUF Renoband Reparatiemiddel 4 liter', image: 'https://media.hornbach.nl/hb/packshot/as.46630651.jpg?dvid=8', quantity: 0, price: 29.95, artnum: '4161595' },
  { name: 'KNAUF Snelpleister Snelband 25 kg', name_nl: 'KNAUF Snelpleister Snelband 25 kg', image: 'https://media.hornbach.nl/hb/packshot/as.46293947.jpg?dvid=8', quantity: 0, price: 16.45, artnum: '4101161' },
  { name: 'KNAUF Stucpasta 20 kg', name_nl: 'KNAUF Stucpasta 20 kg', image: 'https://media.hornbach.nl/hb/packshot/as.81166702.jpg?dvid=8', quantity: 0, price: 44.75, artnum: '7413411' },
  { name: 'KNAUF Stucpasta 5 kg', name_nl: 'KNAUF Stucpasta 5 kg', image: 'https://media.hornbach.nl/hb/packshot/as.81166671.jpg?dvid=8', quantity: 0, price: 13.55, artnum: '7289554' },
  { name: 'MODULAN 5004 Spachtelputz korrelgrootte 1,0 mm 15 kg', name_nl: 'MODULAN 5004 Spachtelputz korrelgrootte 1,0 mm 15 kg', image: 'https://media.hornbach.nl/hb/packshot/as.47221145.jpg?dvid=8', quantity: 0, price: 33.49, artnum: '10498644' },
  { name: 'MODULAN Superfinish 452 fijnplamuur 18 kg', name_nl: 'MODULAN Superfinish 452 fijnplamuur 18 kg', image: 'https://media.hornbach.nl/hb/packshot/as.48521855.jpg?dvid=8', quantity: 0, price: 30.95, artnum: '10356509' }
];

module.exports = stuc;  // 导出数据
