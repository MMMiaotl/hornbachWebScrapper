const muurverf = [
  { name: 'ALABASTINE 2in1 Muurverf vlekken voor nicotine-, roet- en lekkagevlekken helder wit 2,5 l', name_nl: 'ALABASTINE 2in1 Muurverf vlekken voor nicotine-, roet- en lekkagevlekken helder wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.53567963.jpg?dvid=8', quantity: 0, price: 39.49, artnum: '7649017' },
  { name: 'ALABASTINE 2in1 Muurverf vlekken voor nicotine-, roet- en lekkagevlekken helder wit 5 l', name_nl: 'ALABASTINE 2in1 Muurverf vlekken voor nicotine-, roet- en lekkagevlekken helder wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.53568061.jpg?dvid=8', quantity: 0, price: 62.95, artnum: '7649018' },
  { name: 'ALABASTINE Muurverf 2in1 badkamer en keuken helder wit 1 l', name_nl: 'ALABASTINE Muurverf 2in1 badkamer en keuken helder wit 1 l', image: 'https://media.hornbach.nl/hb/packshot/as.53518326.jpg?dvid=8', quantity: 0, price: 20.39, artnum: '4100009' },
  { name: 'ALABASTINE Muurverf 2in1 badkamer en keuken helder wit 2,5 l', name_nl: 'ALABASTINE Muurverf 2in1 badkamer en keuken helder wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.53518342.jpg?dvid=8', quantity: 0, price: 43.95, artnum: '4100010' },
  { name: 'ALABASTINE Muurverf 2in1 voor vlekken spuitbus wit 500 ml', name_nl: 'ALABASTINE Muurverf 2in1 voor vlekken spuitbus wit 500 ml', image: 'https://media.hornbach.nl/hb/packshot/as.53576110.jpg?dvid=8', quantity: 0, price: 15.95, artnum: '7453756' },
  { name: 'ALABASTINE Muurverf 2in1 voor vochtige muren helder wit 2,5 l', name_nl: 'ALABASTINE Muurverf 2in1 voor vochtige muren helder wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.53575127.jpg?dvid=8', quantity: 0, price: 48.49, artnum: '5198127' },
  { name: 'ALABASTINE Muurverf alles-in-1 renovatie helder wit 2,5 l', name_nl: 'ALABASTINE Muurverf alles-in-1 renovatie helder wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.53575130.jpg?dvid=8', quantity: 0, price: 52.75, artnum: '5198126' },
  { name: 'ALABASTINE Muurverf alles-in-1 renovatie helder wit 5 l', name_nl: 'ALABASTINE Muurverf alles-in-1 renovatie helder wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.46866088.jpg?dvid=8', quantity: 0, price: 79.95, artnum: '7649019' },
  { name: 'ALABASTINE Muurverf sneldrogend wit 5 l', name_nl: 'ALABASTINE Muurverf sneldrogend wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.46060249.jpg?dvid=8', quantity: 0, price: 27.95, artnum: '6357354' },
  { name: 'BUILD Badkamer & keukenverf RAL 9001 2,5 l', name_nl: 'BUILD Badkamer & keukenverf RAL 9001 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.59263666.jpg?dvid=8', quantity: 0, price: 36.29, artnum: '10652050' },
  { name: 'BUILD Badkamer & keukenverf RAL 9001 750 ml', name_nl: 'BUILD Badkamer & keukenverf RAL 9001 750 ml', image: 'https://media.hornbach.nl/hb/packshot/as.59263662.jpg?dvid=8', quantity: 0, price: 13.49, artnum: '10652127' },
  { name: 'BUILD Badkamer & keukenverf RAL 9003 2,5 l', name_nl: 'BUILD Badkamer & keukenverf RAL 9003 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.59263667.jpg?dvid=8', quantity: 0, price: 36.29, artnum: '10652076' },
  { name: 'BUILD Badkamer & keukenverf RAL 9003 750 ml', name_nl: 'BUILD Badkamer & keukenverf RAL 9003 750 ml', image: 'https://media.hornbach.nl/hb/packshot/as.59263663.jpg?dvid=8', quantity: 0, price: 13.49, artnum: '10652125' },
  { name: 'BUILD Badkamer & keukenverf RAL 9010 2,5 l', name_nl: 'BUILD Badkamer & keukenverf RAL 9010 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.59263646.jpg?dvid=8', quantity: 0, price: 36.29, artnum: '10652147' },
  { name: 'BUILD Badkamer & keukenverf RAL 9010 750 ml', name_nl: 'BUILD Badkamer & keukenverf RAL 9010 750 ml', image: 'https://media.hornbach.nl/hb/packshot/as.59263661.jpg?dvid=8', quantity: 0, price: 13.49, artnum: '10652093' },
  { name: 'BUILD Badkamer & keukenverf RAL 9016 2,5 l', name_nl: 'BUILD Badkamer & keukenverf RAL 9016 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.59263664.jpg?dvid=8', quantity: 0, price: 36.29, artnum: '10652051' },
  { name: 'BUILD Badkamer & keukenverf RAL 9016 750 ml', name_nl: 'BUILD Badkamer & keukenverf RAL 9016 750 ml', image: 'https://media.hornbach.nl/hb/packshot/as.59263660.jpg?dvid=8', quantity: 0, price: 13.49, artnum: '10652067' },
  { name: 'BUILD Badkamer & keukenverf wit 2,5 l', name_nl: 'BUILD Badkamer & keukenverf wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.59221214.jpg?dvid=8', quantity: 0, price: 37.29, artnum: '6533746' },
  { name: 'BUILD Badkamer & keukenverf wit 750 ml', name_nl: 'BUILD Badkamer & keukenverf wit 750 ml', image: 'https://media.hornbach.nl/hb/packshot/as.59222342.jpg?dvid=8', quantity: 0, price: 14.49, artnum: '6533745' },
  { name: 'BUILD Isolerende muurverf wit 10 l', name_nl: 'BUILD Isolerende muurverf wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802133.jpg?dvid=8', quantity: 0, price: 160.95, artnum: '6533747' },
  { name: 'BUILD Muurverf extra dekkend RAL 9001 10 l', name_nl: 'BUILD Muurverf extra dekkend RAL 9001 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.59263654.jpg?dvid=8', quantity: 0, price: 60.49, artnum: '10652126' },
  { name: 'BUILD Muurverf extra dekkend RAL 9001 5 l', name_nl: 'BUILD Muurverf extra dekkend RAL 9001 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.59263648.jpg?dvid=8', quantity: 0, price: 33.95, artnum: '10652103' },
  { name: 'BUILD Muurverf extra dekkend RAL 9003 10 l', name_nl: 'BUILD Muurverf extra dekkend RAL 9003 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.59263655.jpg?dvid=8', quantity: 0, price: 60.49, artnum: '10652104' },
  { name: 'BUILD Muurverf extra dekkend RAL 9003 5 l', name_nl: 'BUILD Muurverf extra dekkend RAL 9003 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.59263651.jpg?dvid=8', quantity: 0, price: 33.95, artnum: '10652161' },
  { name: 'BUILD Muurverf extra dekkend RAL 9005 10 l', name_nl: 'BUILD Muurverf extra dekkend RAL 9005 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.59263659.jpg?dvid=8', quantity: 0, price: 74.75, artnum: '10652073' },
  { name: 'BUILD Muurverf extra dekkend RAL 9005 5 l', name_nl: 'BUILD Muurverf extra dekkend RAL 9005 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.59263657.jpg?dvid=8', quantity: 0, price: 44.95, artnum: '10652110' },
  { name: 'BUILD Muurverf extra dekkend RAL 9010 10 l', name_nl: 'BUILD Muurverf extra dekkend RAL 9010 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.59263653.jpg?dvid=8', quantity: 0, price: 60.49, artnum: '10652063' },
  { name: 'BUILD Muurverf extra dekkend RAL 9010 5 l', name_nl: 'BUILD Muurverf extra dekkend RAL 9010 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.59263647.jpg?dvid=8', quantity: 0, price: 33.95, artnum: '10652151' },
  { name: 'BUILD Muurverf extra dekkend RAL 9016 10 l', name_nl: 'BUILD Muurverf extra dekkend RAL 9016 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.59263652.jpg?dvid=8', quantity: 0, price: 60.49, artnum: '10652164' },
  { name: 'BUILD Muurverf extra dekkend RAL 9016 5 l', name_nl: 'BUILD Muurverf extra dekkend RAL 9016 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.59223013.jpg?dvid=8', quantity: 0, price: 33.95, artnum: '10652119' },
  { name: 'BUILD Muurverf extra dekkend wit 10 l', name_nl: 'BUILD Muurverf extra dekkend wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.46541288.jpg?dvid=8', quantity: 0, price: 60.49, artnum: '6533737' },
  { name: 'BUILD Muurverf extra dekkend wit 5 l', name_nl: 'BUILD Muurverf extra dekkend wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.46541288.jpg?dvid=8', quantity: 0, price: 33.95, artnum: '6533736' },
  { name: 'BUILD Muurverf extra reinigbaar mat RAL 9001 10 l', name_nl: 'BUILD Muurverf extra reinigbaar mat RAL 9001 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802082.jpg?dvid=8', quantity: 0, price: 103.95, artnum: '10664129' },
  { name: 'BUILD Muurverf extra reinigbaar mat RAL 9001 5 l', name_nl: 'BUILD Muurverf extra reinigbaar mat RAL 9001 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802076.jpg?dvid=8', quantity: 0, price: 53.95, artnum: '10664153' },
  { name: 'BUILD Muurverf extra reinigbaar mat RAL 9003 10 l', name_nl: 'BUILD Muurverf extra reinigbaar mat RAL 9003 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802086.jpg?dvid=8', quantity: 0, price: 103.95, artnum: '10664130' },
  { name: 'BUILD Muurverf extra reinigbaar mat RAL 9003 5 l', name_nl: 'BUILD Muurverf extra reinigbaar mat RAL 9003 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802077.jpg?dvid=8', quantity: 0, price: 53.95, artnum: '10664126' },
  { name: 'BUILD Muurverf extra reinigbaar mat RAL 9010 10 l', name_nl: 'BUILD Muurverf extra reinigbaar mat RAL 9010 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802090.jpg?dvid=8', quantity: 0, price: 103.95, artnum: '10664131' },
  { name: 'BUILD Muurverf extra reinigbaar mat RAL 9010 5 l', name_nl: 'BUILD Muurverf extra reinigbaar mat RAL 9010 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802078.jpg?dvid=8', quantity: 0, price: 53.95, artnum: '10664127' },
  { name: 'BUILD Muurverf extra reinigbaar mat RAL 9016 10 l', name_nl: 'BUILD Muurverf extra reinigbaar mat RAL 9016 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802091.jpg?dvid=8', quantity: 0, price: 103.95, artnum: '10664132' },
  { name: 'BUILD Muurverf extra reinigbaar mat RAL 9016 5 l', name_nl: 'BUILD Muurverf extra reinigbaar mat RAL 9016 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802080.jpg?dvid=8', quantity: 0, price: 53.95, artnum: '10664128' },
  { name: 'BUILD Muurverf extra reinigbaar mat wit 10 l', name_nl: 'BUILD Muurverf extra reinigbaar mat wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802132.jpg?dvid=8', quantity: 0, price: 103.95, artnum: '6533744' },
  { name: 'BUILD Muurverf extra reinigbaar mat wit 5 l', name_nl: 'BUILD Muurverf extra reinigbaar mat wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802130.jpg?dvid=8', quantity: 0, price: 53.95, artnum: '6533743' },
  { name: 'BUILD Muurverf isolerend mat RAL 9001 10 l', name_nl: 'BUILD Muurverf isolerend mat RAL 9001 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802092.jpg?dvid=8', quantity: 0, price: 160.95, artnum: '10664133' },
  { name: 'BUILD Muurverf isolerend mat RAL 9003 10 l', name_nl: 'BUILD Muurverf isolerend mat RAL 9003 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802094.jpg?dvid=8', quantity: 0, price: 160.95, artnum: '10664134' },
  { name: 'BUILD Muurverf isolerend mat RAL 9010 10 l', name_nl: 'BUILD Muurverf isolerend mat RAL 9010 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802095.jpg?dvid=8', quantity: 0, price: 160.95, artnum: '10664135' },
  { name: 'BUILD Muurverf isolerend mat RAL 9016 10 l', name_nl: 'BUILD Muurverf isolerend mat RAL 9016 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.61802100.jpg?dvid=8', quantity: 0, price: 160.95, artnum: '10664136' },
  { name: 'BUILD Project-voordeelbox Badkamer & Keuken muurverf RAL 9001 2,5 l', name_nl: 'BUILD Project-voordeelbox Badkamer & Keuken muurverf RAL 9001 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.83436687.jpg?dvid=8', quantity: 0, price: 47.95, artnum: '12052411' },
  { name: 'BUILD Project-voordeelbox Badkamer & Keuken muurverf RAL 9003 2,5 l', name_nl: 'BUILD Project-voordeelbox Badkamer & Keuken muurverf RAL 9003 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.83437453.jpg?dvid=8', quantity: 0, price: 47.95, artnum: '12052390' },
  { name: 'BUILD Project-voordeelbox Badkamer & Keuken muurverf RAL 9010 2,5 l', name_nl: 'BUILD Project-voordeelbox Badkamer & Keuken muurverf RAL 9010 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.83436651.jpg?dvid=8', quantity: 0, price: 47.95, artnum: '12052405' },
  { name: 'BUILD Project-voordeelbox Badkamer & Keuken muurverf RAL 9016 2,5 l', name_nl: 'BUILD Project-voordeelbox Badkamer & Keuken muurverf RAL 9016 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.83436666.jpg?dvid=8', quantity: 0, price: 47.95, artnum: '12052413' },
  { name: 'BUILD Project-voordeelbox Badkamer & Keuken muurverf wit 2,5 l', name_nl: 'BUILD Project-voordeelbox Badkamer & Keuken muurverf wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.83436621.jpg?dvid=8', quantity: 0, price: 47.95, artnum: '12052400' },
  { name: 'BUILD Project-voordeelbox Woon- & Slaapkamer extra dekkende muurverf RAL 9001 5 l', name_nl: 'BUILD Project-voordeelbox Woon- & Slaapkamer extra dekkende muurverf RAL 9001 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.83441377.jpg?dvid=8', quantity: 0, price: 44.95, artnum: '12052409' },
  { name: 'BUILD Project-voordeelbox Woon- & Slaapkamer extra dekkende muurverf RAL 9003 5 l', name_nl: 'BUILD Project-voordeelbox Woon- & Slaapkamer extra dekkende muurverf RAL 9003 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.95696031.jpg?dvid=8', quantity: 0, price: 44.95, artnum: '12052391' },
  { name: 'BUILD Project-voordeelbox Woon- & Slaapkamer extra dekkende muurverf RAL 9005 5 l', name_nl: 'BUILD Project-voordeelbox Woon- & Slaapkamer extra dekkende muurverf RAL 9005 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.83441390.jpg?dvid=8', quantity: 0, price: 44.95, artnum: '12052396' },
  { name: 'BUILD Project-voordeelbox Woon- & Slaapkamer extra dekkende muurverf RAL 9010 5 l', name_nl: 'BUILD Project-voordeelbox Woon- & Slaapkamer extra dekkende muurverf RAL 9010 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.83441371.jpg?dvid=8', quantity: 0, price: 44.95, artnum: '12052395' },
  { name: 'BUILD Project-voordeelbox Woon- & Slaapkamer extra dekkende muurverf RAL 9016 5 l', name_nl: 'BUILD Project-voordeelbox Woon- & Slaapkamer extra dekkende muurverf RAL 9016 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.83441375.jpg?dvid=8', quantity: 0, price: 44.95, artnum: '12052402' },
  { name: 'BUILD Project-voordeelbox Woon- & Slaapkamer extra dekkende muurverf wit 5 l', name_nl: 'BUILD Project-voordeelbox Woon- & Slaapkamer extra dekkende muurverf wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.83441369.jpg?dvid=8', quantity: 0, price: 44.95, artnum: '12052397' },
  { name: 'BUILD Ultra Flex-2530 muurverf RAL 9001 10 l', name_nl: 'BUILD Ultra Flex-2530 muurverf RAL 9001 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.79944499.jpg?dvid=8', quantity: 0, price: 109.95, artnum: '12011496' },
  { name: 'BUILD Ultra Flex-2530 muurverf RAL 9003 10 l', name_nl: 'BUILD Ultra Flex-2530 muurverf RAL 9003 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.79944522.jpg?dvid=8', quantity: 0, price: 109.95, artnum: '12011498' },
  { name: 'BUILD Ultra Flex-2530 muurverf RAL 9010 10 l', name_nl: 'BUILD Ultra Flex-2530 muurverf RAL 9010 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.79944543.jpg?dvid=8', quantity: 0, price: 109.95, artnum: '12011499' },
  { name: 'BUILD Ultra Flex-2530 muurverf RAL 9016 10 l', name_nl: 'BUILD Ultra Flex-2530 muurverf RAL 9016 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.79944587.jpg?dvid=8', quantity: 0, price: 109.95, artnum: '12011494' },
  { name: 'BUILD Ultra Flex-2530 muurverf wit 10 l', name_nl: 'BUILD Ultra Flex-2530 muurverf wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.79944487.jpg?dvid=8', quantity: 0, price: 109.95, artnum: '12011491' },
  { name: 'BUILD Ultra ISO-2510 isolerende muurverf RAL 9001 5 l', name_nl: 'BUILD Ultra ISO-2510 isolerende muurverf RAL 9001 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.79943872.jpg?dvid=8', quantity: 0, price: 84.95, artnum: '12011492' },
  { name: 'BUILD Ultra ISO-2510 isolerende muurverf RAL 9003 5 l', name_nl: 'BUILD Ultra ISO-2510 isolerende muurverf RAL 9003 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.79943943.jpg?dvid=8', quantity: 0, price: 84.95, artnum: '12011487' },
  { name: 'BUILD Ultra ISO-2510 isolerende muurverf RAL 9010 5 l', name_nl: 'BUILD Ultra ISO-2510 isolerende muurverf RAL 9010 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.79944247.jpg?dvid=8', quantity: 0, price: 84.95, artnum: '12011493' },
  { name: 'BUILD Ultra ISO-2510 isolerende muurverf RAL 9016 5 l', name_nl: 'BUILD Ultra ISO-2510 isolerende muurverf RAL 9016 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.79944162.jpg?dvid=8', quantity: 0, price: 84.95, artnum: '12011490' },
  { name: 'BUILD Ultra ISO-2510 isolerende muurverf wit 5 l', name_nl: 'BUILD Ultra ISO-2510 isolerende muurverf wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.79943822.jpg?dvid=8', quantity: 0, price: 84.95, artnum: '12011500' },
  { name: 'BUILD Ultra Pearl-2520 muurverf RAL 9001 10 l', name_nl: 'BUILD Ultra Pearl-2520 muurverf RAL 9001 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.79944388.jpg?dvid=8', quantity: 0, price: 89.95, artnum: '12011489' },
  { name: 'BUILD Ultra Pearl-2520 muurverf RAL 9003 10 l', name_nl: 'BUILD Ultra Pearl-2520 muurverf RAL 9003 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.79944421.jpg?dvid=8', quantity: 0, price: 89.95, artnum: '12011488' },
  { name: 'BUILD Ultra Pearl-2520 muurverf RAL 9010 10 l', name_nl: 'BUILD Ultra Pearl-2520 muurverf RAL 9010 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.79944444.jpg?dvid=8', quantity: 0, price: 89.95, artnum: '12011497' },
  { name: 'BUILD Ultra Pearl-2520 muurverf RAL 9016 10 l', name_nl: 'BUILD Ultra Pearl-2520 muurverf RAL 9016 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.79944475.jpg?dvid=8', quantity: 0, price: 89.95, artnum: '12011495' },
  { name: 'BUILD Ultra Pearl-2520 muurverf wit 10 l', name_nl: 'BUILD Ultra Pearl-2520 muurverf wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.79944072.jpg?dvid=8', quantity: 0, price: 89.95, artnum: '12011501' },
  { name: 'BUILD Ultra Unimat-2540 muurverf RAL 9001 10 l', name_nl: 'BUILD Ultra Unimat-2540 muurverf RAL 9001 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.80054035.jpg?dvid=8', quantity: 0, price: 69.95, artnum: '12014948' },
  { name: 'BUILD Ultra Unimat-2540 muurverf RAL 9003 10 l', name_nl: 'BUILD Ultra Unimat-2540 muurverf RAL 9003 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.80054036.jpg?dvid=8', quantity: 0, price: 69.95, artnum: '12014936' },
  { name: 'BUILD Ultra Unimat-2540 muurverf RAL 9010 10 l', name_nl: 'BUILD Ultra Unimat-2540 muurverf RAL 9010 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.80054037.jpg?dvid=8', quantity: 0, price: 69.95, artnum: '12014944' },
  { name: 'BUILD Ultra Unimat-2540 muurverf RAL 9016 10 l', name_nl: 'BUILD Ultra Unimat-2540 muurverf RAL 9016 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.80054038.jpg?dvid=8', quantity: 0, price: 69.95, artnum: '12014942' },
  { name: 'BUILD Ultra Unimat-2540 muurverf wit 10 l', name_nl: 'BUILD Ultra Unimat-2540 muurverf wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.80054034.jpg?dvid=8', quantity: 0, price: 69.95, artnum: '12014941' },
  { name: 'DE MUURVERFFABRIEK Supreme-dek Clean muurverf RAL 9001 10 l', name_nl: 'DE MUURVERFFABRIEK Supreme-dek Clean muurverf RAL 9001 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.63532703.jpg?dvid=8', quantity: 0, price: 50.95, artnum: '10581653' },
  { name: 'DE MUURVERFFABRIEK Supreme-dek Clean muurverf RAL 9003 10 l', name_nl: 'DE MUURVERFFABRIEK Supreme-dek Clean muurverf RAL 9003 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.63532806.jpg?dvid=8', quantity: 0, price: 50.95, artnum: '10581655' },
  { name: 'DE MUURVERFFABRIEK Supreme-dek Clean muurverf RAL 9010 10 l', name_nl: 'DE MUURVERFFABRIEK Supreme-dek Clean muurverf RAL 9010 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.63532701.jpg?dvid=8', quantity: 0, price: 50.95, artnum: '10581651' },
  { name: 'DE MUURVERFFABRIEK Supreme-dek Clean muurverf RAL 9016 10 l', name_nl: 'DE MUURVERFFABRIEK Supreme-dek Clean muurverf RAL 9016 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.63532797.jpg?dvid=8', quantity: 0, price: 50.95, artnum: '10581654' },
  { name: 'DE MUURVERFFABRIEK Supreme-dek Clean muurverf wit 10 l', name_nl: 'DE MUURVERFFABRIEK Supreme-dek Clean muurverf wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.63532679.jpg?dvid=8', quantity: 0, price: 50.95, artnum: '10581650' },
  { name: 'DE MUURVERFFABRIEK Supreme-dek muurverf RAL 9001 10 l', name_nl: 'DE MUURVERFFABRIEK Supreme-dek muurverf RAL 9001 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.63532825.jpg?dvid=8', quantity: 0, price: 34.95, artnum: '4610010' },
  { name: 'DE MUURVERFFABRIEK Supreme-dek muurverf RAL 9003 10 l', name_nl: 'DE MUURVERFFABRIEK Supreme-dek muurverf RAL 9003 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.63532833.jpg?dvid=8', quantity: 0, price: 34.95, artnum: '4610012' },
  { name: 'DE MUURVERFFABRIEK Supreme-dek muurverf RAL 9010 10 l', name_nl: 'DE MUURVERFFABRIEK Supreme-dek muurverf RAL 9010 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.63532459.jpg?dvid=8', quantity: 0, price: 34.95, artnum: '4610009' },
  { name: 'DE MUURVERFFABRIEK Supreme-dek muurverf RAL 9016 10 l', name_nl: 'DE MUURVERFFABRIEK Supreme-dek muurverf RAL 9016 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.63532831.jpg?dvid=8', quantity: 0, price: 34.95, artnum: '4610011' },
  { name: 'DE MUURVERFFABRIEK Supreme-dek muurverf wit 10 l', name_nl: 'DE MUURVERFFABRIEK Supreme-dek muurverf wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.63532675.jpg?dvid=8', quantity: 0, price: 34.95, artnum: '4610008' },
  { name: 'FLEXA Powerdek muren & plafonds wit 10 l + 25%', name_nl: 'FLEXA Powerdek muren & plafonds wit 10 l + 25%', image: 'https://media.hornbach.nl/hb/packshot/as.57153312.jpg?dvid=8', quantity: 0, price: 39.75, artnum: '8593652' },
  { name: 'FLEXA Powerdek muren & plafonds wit RAL 9010 10 l + 25%', name_nl: 'FLEXA Powerdek muren & plafonds wit RAL 9010 10 l + 25%', image: 'https://media.hornbach.nl/hb/packshot/as.57153322.jpg?dvid=8', quantity: 0, price: 39.75, artnum: '8593656' },
  { name: 'HISTOR Monodek Bathroom Muurverf schimmelbestendig RAL 9010 2,5 l', name_nl: 'HISTOR Monodek Bathroom Muurverf schimmelbestendig RAL 9010 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.11870615.jpg?dvid=8', quantity: 0, price: 40.95, artnum: '10303415' },
  { name: 'HISTOR Monodek Bathroom Muurverf schimmelbestendig wit 2,5 l', name_nl: 'HISTOR Monodek Bathroom Muurverf schimmelbestendig wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.11870614.jpg?dvid=8', quantity: 0, price: 40.95, artnum: '10303418' },
  { name: 'HISTOR Monodek Clean Muurverf RAL 9010 2,5 l', name_nl: 'HISTOR Monodek Clean Muurverf RAL 9010 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.11870612.jpg?dvid=8', quantity: 0, price: 43.49, artnum: '10303417' },
  { name: 'HISTOR Monodek Clean Muurverf Wit 2,5 l', name_nl: 'HISTOR Monodek Clean Muurverf Wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.11870613.jpg?dvid=8', quantity: 0, price: 43.49, artnum: '10303416' },
  { name: 'HISTOR Monodek Muurverf latex mat RAL 9010 2,5 l', name_nl: 'HISTOR Monodek Muurverf latex mat RAL 9010 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.11870611.jpg?dvid=8', quantity: 0, price: 27.49, artnum: '10303414' },
  { name: 'HISTOR Monodek Muurverf latex mat RAL 9010 5 l', name_nl: 'HISTOR Monodek Muurverf latex mat RAL 9010 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.19511341.jpg?dvid=8', quantity: 0, price: 36.75, artnum: '10310471' },
  { name: 'HISTOR Monodek Muurverf latex mat wit 2,5 l', name_nl: 'HISTOR Monodek Muurverf latex mat wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.11870608.jpg?dvid=8', quantity: 0, price: 27.49, artnum: '10303419' },
  { name: 'HISTOR Monodek Muurverf latex mat wit 5 l', name_nl: 'HISTOR Monodek Muurverf latex mat wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.19511340.jpg?dvid=8', quantity: 0, price: 36.75, artnum: '10310450' },
  { name: 'HISTOR Monodek Muurverf verkeerswit RAL 9016 12,5 l', name_nl: 'HISTOR Monodek Muurverf verkeerswit RAL 9016 12,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.74774050.jpg?dvid=8', quantity: 0, price: 38.45, artnum: '10725518' },
  { name: 'HISTOR Monodek Muurverf wit 10 l + 25%', name_nl: 'HISTOR Monodek Muurverf wit 10 l + 25%', image: 'https://media.hornbach.nl/hb/packshot/as.50795485.jpg?dvid=8', quantity: 0, price: 38.45, artnum: '5819877' },
  { name: 'HISTOR Monodek Revolution Muurverf RAL 9010 5 l', name_nl: 'HISTOR Monodek Revolution Muurverf RAL 9010 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.6935379.jpg?dvid=8', quantity: 0, price: 47.95, artnum: '10289567' },
  { name: 'HISTOR Monodek Revolution Muurverf RAL 9016 5 l', name_nl: 'HISTOR Monodek Revolution Muurverf RAL 9016 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.6935380.jpg?dvid=8', quantity: 0, price: 47.95, artnum: '10289487' },
  { name: 'HISTOR Monodek Revolution Muurverf mat wit 5 l', name_nl: 'HISTOR Monodek Revolution Muurverf mat wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.6935378.jpg?dvid=8', quantity: 0, price: 47.95, artnum: '10289504' },
  { name: 'HORNBACH Isoleerverf wit 10 l', name_nl: 'HORNBACH Isoleerverf wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.87239208.jpg?dvid=8', quantity: 0, price: 74.95, artnum: '3809820' },
  { name: 'HORNBACH Isoleerverf wit 5 l', name_nl: 'HORNBACH Isoleerverf wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.87662254.jpg?dvid=8', quantity: 0, price: 38.95, artnum: '535693' },
  { name: 'HORNBACH Latex wit 10 l', name_nl: 'HORNBACH Latex wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.87239508.jpg?dvid=8', quantity: 0, price: 17.49, artnum: '4122787' },
  { name: 'HORNBACH Latex wit 2,5 l', name_nl: 'HORNBACH Latex wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.88502991.jpg?dvid=8', quantity: 0, price: 6.49, artnum: '4122785' },
  { name: 'HORNBACH Latex wit 5 l', name_nl: 'HORNBACH Latex wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.87662457.jpg?dvid=8', quantity: 0, price: 11.95, artnum: '4122786' },
  { name: 'HORNBACH Meister Polar muurverf spatvrij wit 1 l', name_nl: 'HORNBACH Meister Polar muurverf spatvrij wit 1 l', image: 'https://media.hornbach.nl/hb/packshot/as.93333020.jpg?dvid=8', quantity: 0, price: 11.75, artnum: '10360377' },
  { name: 'HORNBACH Meister Polar muurverf spatvrij wit 12 l', name_nl: 'HORNBACH Meister Polar muurverf spatvrij wit 12 l', image: 'https://media.hornbach.nl/hb/packshot/as.89528423.jpg?dvid=8', quantity: 0, price: 37.95, artnum: '10360382' },
  { name: 'HORNBACH Meister Polar muurverf spatvrij wit 2,5 l', name_nl: 'HORNBACH Meister Polar muurverf spatvrij wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.91855476.jpg?dvid=8', quantity: 0, price: 19.95, artnum: '10360379' },
  { name: 'HORNBACH Meister Polar muurverf spatvrij wit 5 l', name_nl: 'HORNBACH Meister Polar muurverf spatvrij wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.90815240.jpg?dvid=8', quantity: 0, price: 28.95, artnum: '10360378' },
  { name: 'HORNBACH Muurverf Meister Polar RAL 9010 wit 10 l + 25%', name_nl: 'HORNBACH Muurverf Meister Polar RAL 9010 wit 10 l + 25%', image: 'https://media.hornbach.nl/hb/packshot/as.89513486.jpg?dvid=8', quantity: 0, price: 37.95, artnum: '8585166' },
  { name: 'HORNBACH Muurverf Meister Polar plus conserveringsmiddelvrij wit 1 l', name_nl: 'HORNBACH Muurverf Meister Polar plus conserveringsmiddelvrij wit 1 l', image: 'https://media.hornbach.nl/hb/packshot/as.46522370.jpg?dvid=8', quantity: 0, price: 13.75, artnum: '6409073' },
  { name: 'HORNBACH Muurverf Meister Polar plus conserveringsmiddelvrij wit 10 l', name_nl: 'HORNBACH Muurverf Meister Polar plus conserveringsmiddelvrij wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.46868615.jpg?dvid=8', quantity: 0, price: 57.95, artnum: '6246050' },
  { name: 'HORNBACH Muurverf Meister Polar plus conserveringsmiddelvrij wit 2,5 l', name_nl: 'HORNBACH Muurverf Meister Polar plus conserveringsmiddelvrij wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.46522767.jpg?dvid=8', quantity: 0, price: 24.95, artnum: '6409074' },
  { name: 'HORNBACH Muurverf Meister Polar plus conserveringsmiddelvrij wit 5 l', name_nl: 'HORNBACH Muurverf Meister Polar plus conserveringsmiddelvrij wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.46523082.jpg?dvid=8', quantity: 0, price: 38.95, artnum: '6409075' },
  { name: 'HORNBACH Muurverf Pearl wit 1 l', name_nl: 'HORNBACH Muurverf Pearl wit 1 l', image: 'https://media.hornbach.nl/hb/packshot/as.47165804.jpg?dvid=8', quantity: 0, price: 19.95, artnum: '8669913' },
  { name: 'HORNBACH Muurverf Pearl wit 10 l', name_nl: 'HORNBACH Muurverf Pearl wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.84998948.jpg?dvid=8', quantity: 0, price: 74.95, artnum: '8666151' },
  { name: 'HORNBACH Muurverf Pearl wit 2,5 l', name_nl: 'HORNBACH Muurverf Pearl wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.46573725.jpg?dvid=8', quantity: 0, price: 39.95, artnum: '6007704' },
  { name: 'HORNBACH Muurverf Pearl wit 5 l', name_nl: 'HORNBACH Muurverf Pearl wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.87662792.jpg?dvid=8', quantity: 0, price: 52.95, artnum: '8669914' },
  { name: 'HORNBACH Speciaal latex glans wit 10 l', name_nl: 'HORNBACH Speciaal latex glans wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.85094662.jpg?dvid=8', quantity: 0, price: 54.95, artnum: '3111931' },
  { name: 'HORNBACH Speciaal latex glans wit 2,5 l', name_nl: 'HORNBACH Speciaal latex glans wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.88502296.jpg?dvid=8', quantity: 0, price: 22.95, artnum: '3166594' },
  { name: 'HORNBACH Speciaal latex glans wit 5 l', name_nl: 'HORNBACH Speciaal latex glans wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.87280322.jpg?dvid=8', quantity: 0, price: 36.95, artnum: '3111986' },
  { name: 'HORNBACH Speciaal latex zijdeglans wit 10 l', name_nl: 'HORNBACH Speciaal latex zijdeglans wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.84990747.jpg?dvid=8', quantity: 0, price: 49.95, artnum: '4678781' },
  { name: 'HORNBACH Speciaal latex zijdeglans wit 2,5 l', name_nl: 'HORNBACH Speciaal latex zijdeglans wit 2,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.87130696.jpg?dvid=8', quantity: 0, price: 20.95, artnum: '4678749' },
  { name: 'HORNBACH Speciaal latex zijdeglans wit 5 l', name_nl: 'HORNBACH Speciaal latex zijdeglans wit 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.87668757.jpg?dvid=8', quantity: 0, price: 32.95, artnum: '4678780' },
  { name: 'MODULAN 3001 Object wit muurverf 12,5 l', name_nl: 'MODULAN 3001 Object wit muurverf 12,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.51066938.jpg?dvid=8', quantity: 0, price: 29.95, artnum: '4611892' },
  { name: 'MODULAN 3001 Object wit muurverf 5 l', name_nl: 'MODULAN 3001 Object wit muurverf 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.51066937.jpg?dvid=8', quantity: 0, price: 15.95, artnum: '4611891' },
  { name: 'MODULAN 3103 Rapid Mat wit muurverf 12,5 l', name_nl: 'MODULAN 3103 Rapid Mat wit muurverf 12,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.55003140.jpg?dvid=8', quantity: 0, price: 59.95, artnum: '10274402' },
  { name: 'MODULAN 3103 Rapid Mat wit muurverf 5 l', name_nl: 'MODULAN 3103 Rapid Mat wit muurverf 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.55003139.jpg?dvid=8', quantity: 0, price: 30.95, artnum: '10274401' },
  { name: 'MODULAN 3201 Expert wit muurverf 12,5 l', name_nl: 'MODULAN 3201 Expert wit muurverf 12,5 l', image: 'https://media.hornbach.nl/hb/packshot/as.122121933.jpg?dvid=8', quantity: 0, price: 69.95, artnum: '4611900' },
  { name: 'MODULAN 3201 Expert wit muurverf 5 l', name_nl: 'MODULAN 3201 Expert wit muurverf 5 l', image: 'https://media.hornbach.nl/hb/packshot/as.122121878.jpg?dvid=8', quantity: 0, price: 36.95, artnum: '4611899' },
  { name: 'PROFIMUR Iso-dek LF 531 isolerende muurverf 12,5 l wit', name_nl: 'PROFIMUR Iso-dek LF 531 isolerende muurverf 12,5 l wit', image: 'https://media.hornbach.nl/hb/packshot/as.87945185.jpg?dvid=8', quantity: 0, price: 189.95, artnum: '10609833' },
  { name: 'PROFIMUR Iso-dek LF 531 isolerende muurverf 5 l wit', name_nl: 'PROFIMUR Iso-dek LF 531 isolerende muurverf 5 l wit', image: 'https://media.hornbach.nl/hb/packshot/as.87945182.jpg?dvid=8', quantity: 0, price: 84.95, artnum: '10609832' },
  { name: 'Pro-White IM muurverf wit 10 l', name_nl: 'Pro-White IM muurverf wit 10 l', image: 'https://media.hornbach.nl/hb/packshot/as.96588091.jpg?dvid=8', quantity: 0, price: 29.95, artnum: '12184779' }
];

module.exports = muurverf;  // 导出数据
