const pir = [
  { name: 'Dakisolatieplaat Therma TR 24 1200 x 600 x 70 mm Rd 2,55 pak à 6 pir platen', name_nl: 'Dakisolatieplaat Therma TR 24 1200 x 600 x 70 mm Rd 2,55 pak à 6 pir platen', image: 'https://media.hornbach.nl/hb/packshot/as.46680927.jpg?dvid=8', quantity: 0, price: 134.95, artnum: '5588352' },
  { name: 'IKO PIR Isolatieplaat enertherm gebitumineerd rechte kant Rd 2,20 1200x600x60 mm', name_nl: 'IKO PIR Isolatieplaat enertherm gebitumineerd rechte kant Rd 2,20 1200x600x60 mm', image: 'https://media.hornbach.nl/hb/packshot/as.34770651.jpg?dvid=8', quantity: 0, price: 17.82, artnum: '10368502' },
  { name: 'IKO PIR Isolatieplaat enertherm gebitumineerd rechte kant Rd 2,55 1200x600x70 mm', name_nl: 'IKO PIR Isolatieplaat enertherm gebitumineerd rechte kant Rd 2,55 1200x600x70 mm', image: 'https://media.hornbach.nl/hb/packshot/as.34770642.jpg?dvid=8', quantity: 0, price: 19.78, artnum: '10368503' },
  { name: 'IKO PIR Isolatieplaat enertherm gebitumineerd rechte kant Rd 3,00 1200x600x81 mm', name_nl: 'IKO PIR Isolatieplaat enertherm gebitumineerd rechte kant Rd 3,00 1200x600x81 mm', image: 'https://media.hornbach.nl/hb/packshot/as.34770589.jpg?dvid=8', quantity: 0, price: 22.06, artnum: '10368504' },
  { name: 'IKO PIR Isolatieplaat enertherm gebitumineerd rechte kant Rd 3,70 1200x600x100 mm', name_nl: 'IKO PIR Isolatieplaat enertherm gebitumineerd rechte kant Rd 3,70 1200x600x100 mm', image: 'https://media.hornbach.nl/hb/packshot/as.34770638.jpg?dvid=8', quantity: 0, price: 25.74, artnum: '10368505' },
  { name: 'IKO PIR Isolatieplaat enertherm rechte kant Rd 3,60 1200x600x80 mm', name_nl: 'IKO PIR Isolatieplaat enertherm rechte kant Rd 3,60 1200x600x80 mm', image: 'https://media.hornbach.nl/hb/packshot/as.75723979.jpg?dvid=8', quantity: 0, price: 16.47, artnum: '10732481' },
  { name: 'IKO PIR Isolatieplaat enertherm rechte kant Rd 5,45 1200x600x120 mm', name_nl: 'IKO PIR Isolatieplaat enertherm rechte kant Rd 5,45 1200x600x120 mm', image: 'https://media.hornbach.nl/hb/packshot/as.75733622.jpg?dvid=8', quantity: 0, price: 22.93, artnum: '10732484' },
  { name: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 1,80 1200x600x40 mm', name_nl: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 1,80 1200x600x40 mm', image: 'https://media.hornbach.nl/hb/packshot/as.34565835.jpg?dvid=8', quantity: 0, price: 11.64, artnum: '10368506' },
  { name: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 2,25 1200x600x50 mm', name_nl: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 2,25 1200x600x50 mm', image: 'https://media.hornbach.nl/hb/packshot/as.34692060.jpg?dvid=8', quantity: 0, price: 13.19, artnum: '10368507' },
  { name: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 2,70 1200x600x60 mm', name_nl: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 2,70 1200x600x60 mm', image: 'https://media.hornbach.nl/hb/packshot/as.34692125.jpg?dvid=8', quantity: 0, price: 15.27, artnum: '10368508' },
  { name: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 3,15 1200x600x70 mm', name_nl: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 3,15 1200x600x70 mm', image: 'https://media.hornbach.nl/hb/packshot/as.34692127.jpg?dvid=8', quantity: 0, price: 16.42, artnum: '10368509' },
  { name: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 3,60 1200x600x80 mm', name_nl: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 3,60 1200x600x80 mm', image: 'https://media.hornbach.nl/hb/packshot/as.34681103.jpg?dvid=8', quantity: 0, price: 17.53, artnum: '10368510' },
  { name: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 4,05 1200x600x90 mm', name_nl: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 4,05 1200x600x90 mm', image: 'https://media.hornbach.nl/hb/packshot/as.34685148.jpg?dvid=8', quantity: 0, price: 19.58, artnum: '10368511' },
  { name: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 4,50 1200x600x100 mm', name_nl: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 4,50 1200x600x100 mm', image: 'https://media.hornbach.nl/hb/packshot/as.34686177.jpg?dvid=8', quantity: 0, price: 20.9, artnum: '10368512' },
  { name: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 5,45 1200x600x120 mm', name_nl: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 5,45 1200x600x120 mm', image: 'https://media.hornbach.nl/hb/packshot/as.34687119.jpg?dvid=8', quantity: 0, price: 23.94, artnum: '10368513' },
  { name: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 6,35 1200x600x140 mm', name_nl: 'IKO PIR Isolatieplaat enertherm tong & groef Rd 6,35 1200x600x140 mm', image: 'https://media.hornbach.nl/hb/packshot/as.34691818.jpg?dvid=8', quantity: 0, price: 26.94, artnum: '10368514' },
  { name: 'Mastiekschroot PIR 1200 x 100 x 30 mm', name_nl: 'Mastiekschroot PIR 1200 x 100 x 30 mm', image: 'https://media.hornbach.nl/hb/packshot/as.46377887.jpg?dvid=8', quantity: 0, price: 4.75, artnum: '5578643' }
];

module.exports = pir;  // 导出数据
