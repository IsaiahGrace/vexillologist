
// [country name, capital city, country location, capital location, countries which will always appear as possible guesses]
let worldFlags = {
  ad: ["Andorra", "Andorra la Vella", [1.5218, 42.5063], [1.5218, 42.5063], ["Spain", "Portugal", "Moldova"]],
  ae: ["United Arab Emirates", "Abu Dhabi", [53.8478, 23.4241], [54.3773, 24.4539], ["Sudan", "Kuwait", "Egypt"]],
  af: ["Afghanistan", "Kabul", [67.7100, 33.9391], [69.2075, 34.5553], ["Pakistan", "Uzbekistan", "Turkmenistan"]],
  ag: ["Antigua and Barbuda", "Saint John's", [-61.7964, 17.0608], [-61.8468, 17.1274], ["Kiribati", "Seychelles"]],
  al: ["Albania", "Tirana", [20.1683, 41.1533], [19.8187, 41.3275], ["Armenia", "Montenegro"]],
  am: ["Armenia", "Yerevan", [45.0382, 40.0691], [44.5152, 40.1872], ["Bulgaria", "Gabon", "Lithuania", "Romania", "Bolivia"]],
  ao: ["Angola", "Luanda", [17.8739, -11.2027], [13.2302, -8.8147], ["Mozambique"]],
  ar: ["Argentina", "Buenos Aires", [-63.6167, -38.4161], [-58.3816, -34.6037], ["Paraguay", "Uruguay"]],
  at: ["Austria", "Vienna", [14.5501, 47.5162], [16.3738, 48.2082], ["Peru"]],
  au: ["Australia", "Canberra", [133.7751, -25.2744], [149.1310, -35.2802], ["New Zealand", "Papua New Guinea", "Tuvalu", "Fiji", "United Kingdom"]],
  az: ["Azerbaijan", "Baku", [47.5769, 40.1431], [49.8671, 40.4093], ["Kazakhstan", "Turkmenistan", "Uzbekistan", "Armenia"]],
  ba: ["Bosnia and Herzegovina", "Sarajevo", [17.6791, 43.9159], [18.4131, 43.8563], []],
  bb: ["Barbados", "Bridgetown", [-59.5432, 13.1939], [-59.6132, 13.1060], []],
  bd: ["Bangladesh", "Dhaka", [90.3563, 23.6850], [90.4125, 23.8103], ["Palau", "Niger"]],
  be: ["Belgium", "Brussels", [4.4699, 50.5039], [4.3572, 50.8476], ["Germany", "Chad", "Mali", "Romania"]],
  bf: ["Burkina Faso", "Ouagadougou", [-1.5616, 12.2383], [-1.5197, 12.3714], ["Cameroon", "Ghana", "Guinea-Bissau","Myanmar", "Senegal", "Togo"]],
  bg: ["Bulgaria", "Sofia", [25.4858, 42.7339], [23.3219, 42.6977], ["Hungary", "Italy", "Lithuania"]],
  bh: ["Bahrain", "Manama", [50.5577, 26.0667], [26.2235, 50.5876], ["Qatar"]],
  bi: ["Burundi", "Gitega", [29.9189, -3.3731], [29.9246, -3.4273], []],
  bj: ["Benin", "Porto-Novo", [-2.3158, 9.3077], [-2.6289, 6.4969], ["Cameroon","Guinea-Bissau","Ghana","Gabon", "Mali"]],
  bn: ["Brunei", "Bandar Seri Begawan", [114.7277, 4.5353], [114.9398, 4.9031], []],
  bo: ["Bolivia", "La Paz", [-63.5887, -16.2902], [-68.1193, -16.4897], ["Lithuania"]],
  br: ["Brazil", "Brasília", [-51.9253, -14.2350], [-47.8919, -15.7975], []],
  bs: ["Bahamas", "Nassau", [-77.3963, 25.0343], [-77.3504, 25.0443], ["Barbados"]],
  bt: ["Bhutan", "Thimpu", [90.4336, 27.5142], [89.6386, 27.4716], ["Nepal", "China"]],
  bw: ["Botswana", "Gaborone", [24.6849, -22.3285], [25.9231, -24.6282], ["Bahamas", "Somalia"]],
  by: ["Belarus", "Minsk", [27.9534, 53.7098], [27.5590, 53.9006], ["Turkmenistan", "Uzbekistan", "Kazakhstan", "Kyrgyzstan", "Tajikistan", "Afghanistan"]],
  bz: ["Belize", "Belmopan", [-88.4976, 17.1899], [-88.7590, 17.2510], []],
  ca: ["Canada", "Ottawa", [-106.3468, 56.1304], [-75.6972, 45.4215], []],
  cd: ["Democratic Republic of the Congo", "Kinshasa", [21.7587, -4.0383], [15.2663, -4.4419], ["Republic of the Congo"]],
  cf: ["Central African Republic", "Bangui", [20.9394, 6.6111], [18.5582, 4.3947], []],
  cg: ["Republic of the Congo", "Brazzaville", [15.8277, -0.2280], [15.2429, -4.2634], ["Democratic Republic of the Congo"]],
  ch: ["Switzerland", "Bern", [8.2275, 46.8182], [7.4474, 46.9480], ["Denmark"]],
  ci: ["Côte d'Ivoire", "Yamoussoukro", [-5.5471, 7.5400], [-5.2893, 6.8276], ["Ireland", "Italy"]],
  cl: ["Chile", "Santiago", [-71.5430, -35.6751], [-70.6693, -33.4489], []],
  cm: ["Cameroon", "Yaoundé", [12.3547, 7.3697], [11.5021, 3.8480], ["Burkina Faso", "Ghana", "Guinea-Bissau", "Senegal", "Togo"]],
  cn: ["China", "Beijing", [104.1954, 35.8617], [116.4074, 39.9042], ["Vietnam"]],
  co: ["Colombia", "Bogotá", [-74.2973, 4.5709], [-74.0721, 4.7110], ["Venezuela", "Ecuador"]],
  cr: ["Costa Rica", "San José", [-83.7534, 9.7489], [-121.8853, 37.3387], ["Cuba", "Dominican Republic"]],
  cu: ["Cuba", "Havanna", [-77.7812, 21.5218], [-82.3666, 23.1136], ["Bahamas"]],
  cv: ["Cape Verde", "Praia", [-23.0418, 16.5388], [-23.5133, 14.9330], []],
  cy: ["Cyprus", "Nicosia", [33.4299, 35.1264], [33.3823, 35.1856], []],
  cz: ["Czech Republic", "Prague", [15.4730, 49.8175], [14.4378, 50.0755], ["Philippines", "Djibouti"]],
  de: ["Germany", "Berlin", [10.4515, 51.1657], [13.4050, 52.5200], ["Belgium", "Romania"]],
  dj: ["Djibouti", "Djibouti", [42.5903, 11.8251], [43.1456, 11.5721], ["Philippines", "Czech Republic"]],
  dk: ["Denmark", "Copenhagen", [9.5018, 56.2639], [12.5683, 55.6761], ["Sweden", "Norway", "Finland", "Iceland", "Switzerland"]],
  dm: ["Dominica", "Roseau", [-61.3710, 15.4150], [-61.3794, 15.3092], ["Grenada"]],
  do: ["Dominican Republic", "Santo Domingo", [-70.1627, 18.7357], [-69.9312, 18.4861], ["Costa Rica", "Cuba", "Luxembourg", "Panama"]],
  dz: ["Algeria", "Algiers", [1.6596, 28.0339], [3.0588, 36.7538], ["Pakistan", "Azerbaijan", "Libya", "Oman", "Tunisia"]],
  ec: ["Ecuador", "Quito", [-78.1834, 1.8312], [-78.4678, -0.1807], ["Venezuela", "Columbia"]],
  ee: ["Estonia", "Tallinn", [25.0136, 58.5953], [24.7536, 59.4370], ["Lithuania", "Latvia", "Slovakia", "Serbia", "Netherlands"]],
  eg: ["Egypt", "Cairo", [30.8025, 26.8206], [31.2357, 30.0444], ["Sudan", "Iraq", "Kuwait", "Syria", "Iran", "Jordan", "Libya"]],
  er: ["Eritrea", "Asmara", [39.7823, 15.1794], [38.9251, 15.3229], ["Djibouti"]],
  es: ["Spain", "Madrid", [-3.7492, 40.4637], [-3.7038, 40.4168], ["Portugal"]],
  et: ["Ethiopia", "Addis Ababa", [40.4897, 9.1450], [38.7578, 8.9806], ["Morocco", "Ghana", "Mozambique"]],
  fi: ["Finland", "Helsinki", [25.7482, 61.9241], [24.9384, 60.1699], ["Iceland", "Denmark", "Norway", "Sweden", "Switzerland"]],
  fj: ["Fiji", "Suva", [178.0650, -17.7134], [178.4233, -18.1405], ["New Zealand", "Australia", "Micronesia", "Marshall Islands", "Papua New Guinea", "Solomon Islands", "Tuvalu", "United Kingdom"]],
  fm: ["Micronesia", "Palikir", [150.5508, 7.4256], [158.1610, 6.9147], ["Marshall Islands", "Somalia", "Nauru"]],
  fr: ["France", "Paris", [2.2137, 46.2276], [2.3522, 48.8566], ["Luxembourg", "Netherlands"]],
  ga: ["Gabon", "Libreville", [11.6094, -0.8037], [9.4673, 0.4162], ["Lithuania", "Bulgaria", "Armenia", "Guinea-Bissau", "Ghana", "Guinea", "Mauritius"]],
  gb: ["United Kingdom", "London", [-3.4360, 55.3781], [-0.1276, 51.5072], ["New Zealand", "Australia", "Canada"]],
  gd: ["Grenada", "Saint George's", [-61.6790, 12.1165], [-61.7488, 12.0561], ["Guyana", "São Tomé and Príncipe", "Timor-Leste"]],
  ge: ["Georgia", "Tbilisi", [43.3569, 42.3154], [44.8271, 41.7151], ["Monaco", "Andorra", "United Kingdom", "Luxembourg", "Liechtenstein", "San Marino"]],
  gh: ["Ghana", "Accra", [-1.0232, 7.9465], [-0.1870, 5.6037], ["Togo", "Zimbabwe", "Senegal", "São Tomé and Príncipe", "Mali", "Guinea", "Guinea-Bissau", "Ethiopia"]],
  gm: ["Gambia", "Banjul", [-15.3101, 13.4432], [-16.5753, 13.4544], ["Latvia", "Georgia", "Netherlands", "Botswana"]],
  gn: ["Guinea", "Conakry", [-9.6966, 9.9456], [-13.5784, 9.6412], ["Benin", "Ethiopia", "Guinea-Bissau", "Ghana", "Mali", "Senegal", "Togo"]],
  gq: ["Equatorial Guinea", "Malabo", [10.2679, 1.6508], [8.7821, 3.7550], ["Lebanon", "Jordan"]],
  gr: ["Greece", "Athens", [21.8243, 39.0742], [23.7275, 37.9838], ["Finland"]],
  gt: ["Guatemala", "Guatemala City", [-90.2308, 15.7835], [-90.5069, 14.6349], ["Argentina", "Nicaragua", "San Marino"]],
  gw: ["Guinea-Bissau", "Bissau", [-15.1804, 11.8037], [-15.5843, 11.8632], ["Guinea", "Ghana", "Senegal" ,"Togo", "Mali", "Gabon"]],
  gy: ["Guyana", "Georgetown", [-58.9302, 4.8604], [-58.1551, 6.8013], ["São Tomé and Príncipe", "Timor-Leste"]],
  hn: ["Honduras", "Tegucigalpa", [-86.2419, 15.2000], [-87.1715, 14.0650], ["Israel", "Argentina"]],
  hr: ["Croatia", "Zagreb", [15.2000, 45.1000], [15.9819, 45.8150], ["Serbia", "Russia", "Luxembourg", "Netherlands", "Slovakia", "Slovenia"]],
  ht: ["Haiti", "Port-au-Prince", [-72.2852, 18.9712], [-72.3074, 18.5944], ["Liechtenstein"]],
  hu: ["Hungary", "Budapest", [19.5033, 47.1625], [19.0402, 47.4979], ["Italy", "Bulgaria", "India", "Iran"]],
  id: ["Indonesia", "Jakarta", [113.9213, -0.7893], [106.8456, -6.2088], ["Poland", "Monaco"]],
  ie: ["Ireland", "Dublin", [-7.6921, 53.1424], [-6.2603, 53.3498], ["Italy", "India"]],
  il: ["Israel", "Jerusalem", [34.8516, 31.0461], [35.2137, 31.7683], []],
  in: ["India", "New Delhi", [78.9629, 20.5937], [77.2090, 28.6139], ["Ireland", "Italy", "Niger"]],
  iq: ["Iraq", "Baghdad", [43.6793, 33.2232], [44.3661, 33.3152], ["Egypt", "Syria", "Jordan", "United Arab Emirates", "Sudan", "Qatar", "Saudi Arabia"]],
  ir: ["Iran", "Tehran", [53.6880, 32.4279], [51.3347, 35.7219], ["Iraq", "Syria", "Italy", "Saudi Arabia", "Yemen"]],
  is: ["Iceland", "Reykjavik", [-19.0208, 64.9631], [-21.9426, 64.1466], ["Finland", "Norway", "Sweden", "Denmark", "Switzerland"]],
  it: ["Italy", "Rome", [12.5674, 41.8719], [12.4964, 41.9028], ["Ireland", "Iran", "Augusta"]],
  jm: ["Jamaica", "Kingston", [-77.2975, 18.1096], [-76.8099, 18.0179], []],
  jo: ["Jordan", "Amman", [36.2384, 30.5852], [35.9106, 31.9539], ["Iraq", "Kuwait", "Oman", "Iran", "Syria", "Lebanon","Egypt", "Libya"]],
  jp: ["Japan", "Tokyo", [138.2529, 36.2048], [139.6503, 35.6762], ["South Korea", "China", "Vietnam"]],
  ke: ["Kenya", "Nairobi", [37.9062, -0.0236], [36.8219, -1.2921], ["Sudan", "South Sudan", "Eswatini", "Lesotho"]],
  kg: ["Kyrgyzstan", "Bishkek", [74.7661, 41.2044], [74.5698, 42.8746], ["Kazakhstan", "Uzbekistan", "Turkmenistan", "Azerbaijan", "Tajikistan", "Afghanistan", "Pakistan", "North Macedonia"]],
  kh: ["Cambodia", "Phnom Penh", [104.9910, 12.5657], [104.9282, 11.5564], ["Laos", "Vietnam", "Thailand", "Myanmar", "Bhutan", "Malaysia", "Philippines"]],
  ki: ["Kiribati", "Tarawa", [-157.3768, 1.8369], [172.9717, 1.4518], ["Antigua and Barbuda", "Samoa", "Mauritius"]],
  km: ["Comoros", "Moroni", [43.3333, -11.6455], [43.2473, -11.7172], ["Maldives", "Mauritania"]],
  kn: ["Saint Kitts and Nevis", "Basseterre", [-62.7830, 17.3578], [-62.7177, 17.3026], ["Gambia", "Senegal", "Ghana"]],
  kp: ["North Korea", "Pyongyang", [127.5101, 40.3399], [125.8198, 39.0738], ["China", "Vietnam", "Iran"]],
  kr: ["South Korea", "Seoul", [127.7669, 35.9078], [126.9780, 37.5665], ["Japan", "China"]],
  kw: ["Kuwait", "Kuwait City", [47.4818, 29.3117], [47.9774, 29.3759], ["Iraq", "Syria", "Egypt", "United Arab Emirates", "Jordan", "Sudan", "South Sudan"]],
  kz: ["Kazakhstan", "Astana", [66.9237, 48.0196], [71.4704, 51.1605], ["Uzbekistan", "Kyrgyzstan", "Afghanistan", "Pakistan", "Turkmenistan", "Azerbaijan"]],
  la: ["Laos", "Vientiane", [102.4955, 19.8563], [102.6331, 17.9757], ["Thailand"]],
  lb: ["Lebanon", "Beirut", [35.8623, 33.8547], [35.5018, 33.8938], ["Peru"]],
  lc: ["Saint Lucia", "Castries", [-60.9789, 13.9094], [-60.9875, 14.0101], []],
  li: ["Liechtenstein", "Vaduz", [9.5209, 47.1410], [9.5209, 47.1410], ["Haiti", "Monaco", "Andorra", "Luxembourg", "San Marino"]],
  lk: ["Sri Lanka", "Sri Jayawardenepura Kotte", [80.7718, 7.8731], [79.9187, 6.8868], ["Bhutan", "Myanmar", "Mongolia", "Thailand", "Cambodia"]],
  lr: ["Liberia", "Monrovia", [-9.4295, 6.4281], [-10.8074, 6.3156], ["United States", "Malaysia"]],
  ls: ["Lesotho", "Maseru", [28.2336, -29.6100], [27.4869, -29.3151], ["Djibouti", "Eritrea", "Ethiopia"]],
  lt: ["Lithuania", "Vilnius", [23.8813, 55.1694], [25.2797, 54.6872], ["Latvia", "Estonia", "Mali", "Ethiopia", "Bolivia"]],
  lu: ["Luxembourg", "Luexembourg", [6.1296, 49.8153], [6.1319, 49.6116], ["Netherlands", "France", "Russia"]],
  lv: ["Latvia", "Riga", [24.6032, 56.8796], [24.1056, 56.9677], ["Lithuania", "Estonia", "Denmark"]],
  ly: ["Libya", "Tripoli", [17.2283, 26.3351], [13.1913, 32.8872], ["Niger", "Jordan", "Syria"]],
  ma: ["Morocco", "Rabat", [-7.0926, 31.7917], [-6.8498, 33.9716], ["Vietnam", "China"]],
  mc: ["Monaco", "Monaco", [7.4246, 43.7384], [7.4246, 43.7384], ["Poland", "Indonesia"]],
  md: ["Moldova", "Chișinău", [28.3699, 47.4116], [28.8638, 47.0105], ["Monaco", "Andorra", "Armenia"]],
  me: ["Montenegro", "Podgorica", [19.3744, 42.7087], [19.2594, 42.4304], ["Russia", "Belarus", "Albania", "Andorra"]],
  mg: ["Madagascar", "Antananarivo", [46.8691, -18.7669], [47.5079, -18.8792], ["Belarus", "Hungary", "Bulgaria"]],
  mh: ["Marshall Islands", "Delap-Uliga-Djarrit", [171.1845, 7.1315], [171.2667, 7.0667], ["Seychelles", "Micronesia", "Nauru"]],
  mk: ["North Macedonia", "Skopje", [21.7453, 41.6086], [21.4254, 41.9981], ["Kyrgyzstan", "Japan"]],
  ml: ["Mali", "Bamako", [-3.9962, 17.5707], [-8.0029, 12.6392], ["Lithuania", "Guinea", "Guinea-Bissau", "Ghana", "Senegal"]],
  mm: ["Myanmar", "Naypyidaw", [95.9560, 21.9162], [96.0785, 19.7633], ["Ghana", "Senegal", "Ethiopia", "Cameroon"]],
  mn: ["Mongolia", "Ulaanbaatar", [103.8467, 46.8625], [106.9057, 47.8864], ["China", "Nepal"]],
  mr: ["Mauritania", "Nouakchott", [-10.9408, 21.0079], [-15.9582, 18.0735], ["Kyrgyzstan", "Algeria", "Azerbaijan"]],
  mt: ["Malta", "Valletta", [14.3754, 35.9375], [14.5146, 35.8989], ["Poland", "Monaco", "Switzerland", "Indonesia"]],
  mu: ["Mauritius", "Port Louis", [57.5522, -20.3484], [57.5012, -20.1609], ["Lithuania", "Gabon", "Chad", "Bolivia"]],
  mv: ["Maldives", "Malé", [73.2207, 3.2028], [73.5093, 4.1755], ["Indonesia", "Pakistan", "Malaysia"]],
  mw: ["Malawi", "Lilongwe", [34.3015, -13.2543], [33.7741, -13.9626], ["Maldives", "Libya", "Mongolia", "Nigeria"]],
  mx: ["Mexico", "Mexico City", [-102.5528, 23.6345], [-99.1332, 19.4326], ["Italy"]],
  my: ["Malaysia", "Kuala Lumpur", [101.9758, 4.2105], [101.7123, 3.1569], ["United States", "Liberia"]],
  mz: ["Mozambique", "Maputo", [35.5296, -18.6657], [32.5732, -25.9692], ["Angola", "South Africa"]],
  na: ["Namibia", "Windhoek", [18.4904, -22.9576], [17.0658, -22.5609], ["Marshall Islands", "Tanzania"]],
  ne: ["Niger", "Niamey", [8.0817, 17.6078], [2.1254, 13.5116], ["Italy", "India", "Ireland", "Côte d'Ivoire"]],
  ng: ["Nigeria", "Abuja", [8.6753, 9.0820], [7.3986, 9.0765], ["Ireland", "Pakistan"]],
  ni: ["Nicaragua", "Managua", [-85.2072, 12.8654], [-86.2362, 12.1150], ["Argentina", "Paraguay", "Honduras", "Guatemala", "El Salvador", "Uruguay"]],
  nl: ["Netherlands", "Amsterdam", [5.2913, 52.1326], [4.9041, 52.3676], ["Luxembourg", "Russia", "France"]],
  no: ["Norway", "Oslo", [8.4689, 60.4720], [10.7522, 59.9139], ["Sweden", "Finland", "Denmark", "Iceland"]],
  np: ["Nepal", "Kathmandu", [84.1240, 28.3949], [85.3240, 27.7172], []],
  nr: ["Nauru", "Yaren", [166.9315, -0.5228], [166.9211, -0.5467], ["Botswana", "Marshall Islands", "Palau"]],
  nz: ["New Zealand", "Wellington", [174.8860, -40.9006], [174.7787, -41.2924], ["Australia", "Fiji", "United Kingdom", "Tuvalu", ]],
  om: ["Oman", "Muscat", [55.9754, 21.4735], [58.3829, 23.5880], ["Qatar", "Bahrain", "Iran"]],
  pa: ["Panama", "Panama City", [-80.7821, 8.5380], [-79.5199, 8.9824], ["Costa Rica"]],
  pe: ["Peru", "Lima", [-75.0152, -9.1900], [-77.0428, -12.0464], ["Mexico", "Poland", "Austria"]],
  pg: ["Papua New Guinea", "Port Moresby", [143.9555, -6.3150], [147.1803, -9.4438], ["New Zealand", "Saint Kitts and Nevis"]],
  ph: ["Philippines", "Manila", [121.7740, 12.8797], [120.9842, 14.5995], ["Czech Republic"]],
  pk: ["Pakistan", "Islamabad", [69.3451, 30.3753], [73.0479, 33.6844], ["Algeria", "Afghanistan", "Tajikistan", "Kyrgyzstan", "Kazakhstan", "Uzbekistan", "Turkmenistan"]],
  pl: ["Poland", "Warsaw", [19.1451, 51.9194], [21.0122, 52.2297], ["Austria", "Monaco", "Indonesia"]],
  pt: ["Portugal", "Lisbon", [-8.2245, 39.3999], [-9.1393, 38.7223], ["Belarus"]],
  pw: ["Palau", "Ngerulmud", [134.5825, 7.5150], [134.6243, 7.5004], ["Afghanistan", "Tajikistan", "Kyrgyzstan", "Kazakhstan", "Uzbekistan", "Turkmenistan"]],
  py: ["Paraguay", "Asunción", [-58.4438, -23.4425], [-57.5759, -25.2637], ["Netherlands", "Russia", "Luxembourg", "Serbia", "Slovakia", "Slovenia"]],
  qa: ["Qatar", "Doha", [51.1839, 25.3548], [51.5310, 25.2854], ["Bahrain"]],
  ro: ["Romania", "Bucharest", [24.9668, 45.9432], [26.1025, 44.4268], ["Mali", "Moldova"]],
  rs: ["Serbia", "Belgrade", [21.0059, 44.0165], [20.4612, 44.8125], ["Slovakia", "Slovenia", "Russia", "Luxembourg", "Netherlands"]],
  ru: ["Russia", "Moscow", [105.3188, 61.5240], [37.6173, 55.7558], ["Slovakia", "Slovenia", "Serbia", "Luxembourg", "Netherlands"]],
  rw: ["Rwanda", "Kigali", [29.8739, -1.9403], [30.0619, -1.9441], ["Solomon Islands", "Afghanistan", "Tajikistan", "Kyrgyzstan", "Kazakhstan", "Uzbekistan", "Turkmenistan"]],
  sa: ["Saudi Arabia", "Riyadh", [45.0792, 23.8859], [46.6753, 24.7136], ["United Arab Emirates", "Yemen", "Oman", "Qatar", "Bahrain", "Kuwait", "Iran", "Iraq"]],
  sb: ["Solomon Islands", "Honiara", [160.1562, -9.6457], [159.9729, -9.4456], ["Rwanda"]],
  sc: ["Seychelles", "Victoria", [55.4920, -4.6796], [55.4513, -4.6191], ["Tanzania"]],
  sd: ["Sudan", "Khartoum", [30.2176, 12.8628], [32.5599, 15.5007], ["Egypt", "Iraq", "Jordan", "Kuwait", "Syria", "United Arab Emirates"]],
  se: ["Sweden", "Stockholm", [18.6435, 60.1282], [18.0686, 59.3293], ["Norway", "Finland", "Denmark", "Iceland", "Switzerland"]],
  sg: ["Singapore", "Singapore", [103.8198, 1.3521], [103.8198, 1.3521], ["Indonesia", "Poland", "Monaco", "Türkiye"]],
  si: ["Slovenia", "Ljubljana", [14.9955, 46.1512], [14.5058, 46.0569], ["Slovakia", "Serbia", "Russia", "Netherlands", "Luxembourg"]],
  sk: ["Slovakia", "Bratislava", [19.6990, 48.6690], [17.1077, 48.1486], ["Slovenia", "Serbia", "Russia", "Netherlands", "Luxembourg"]],
  sl: ["Sierra Leone", "Freetown", [-11.7799, 8.4606], [-13.2317, 8.4657], ["Luxembourg", "Netherlands", "Estonia", "Lithuania", "Latvia"]],
  sm: ["San Marino", "San Marino", [12.4578, 43.9424], [12.4578, 43.9424], []],
  sn: ["Senegal", "Dakar", [-14.4524, 14.4974], [-17.4677, 14.7167], ["Mali", "Guinea", "Guinea-Bissau", "Ghana", "Ethiopia", "Cameroon", "Burkina Faso", "Benin"]],
  so: ["Somalia", "Mogadishu", [46.1996, 5.1521], [45.3182, 2.0469], ["Israel", "Vietnam", "China"]],
  sr: ["Suriname", "Paramaribo", [-56.0278, 3.9193], [-55.2038, 5.8520], ["Vietnam", "Laos", "Cambodia", "Thailand"]],
  ss: ["South Sudan", "Juba", [31.3070, 6.8770], [31.5713, 4.8594], ["Kenya", "Tanzania", "Uganda", "Ethiopia", "Rwanda", "Burundi"]],
  st: ["São Tomé and Príncipe", "São Tomé", [6.6131, 0.1864], [6.7333, 0.3302], ["Senegal", "Gabon", "Gambia", "Cameroon"]],
  sv: ["El Salvador", "San Salvador", [-88.8965, 13.7942], [-89.2182, 13.6929], ["Argentina", "Nicaragua", "Guatemala", "Paraguay", "Uruguay"]],
  sy: ["Syria", "Damascus", [38.9968, 34.8021], [36.2765, 33.5138], ["Lebanon", "Iraq", "Egypt", "Jordan", "United Arab Emirates", "Sudan", "Yemen"]],
  sz: ["Eswatini", "Mbabane", [31.4659, -26.5225], [31.1367, -26.3054], ["Kenya", "Lesotho", "Djibouti", "Burundi", "Central African Republic"]],
  td: ["Chad", "N'Djamena", [18.7322, 15.4542], [15.0557, 12.1348], ["Mali", "Moldova", "Armenia", "Belgium"]],
  tg: ["Togo", "Lomé", [0.8248, 8.6195], [1.2254, 6.1256], ["Uganda", "Zimbabwe", "Senegal", "Mali"]],
  th: ["Thailand", "Bangkok", [100.9925, 15.8700], [100.5018, 13.7563], ["Serbia", "Slovakia", "Slovenia", "Luxembourg", "Netherlands", "Russia"]],
  tj: ["Tajikistan", "Dushanbe", [71.2761, 38.8610], [68.7870, 38.5598], ["Hungary", "Italy", "Bulgaria", "Armenia", "Azerbaijan"]],
  tl: ["Timor-Leste", "Dili", [125.7275, -8.8742], [125.5603, -8.5569], ["Guyana"]],
  tm: ["Turkmenistan", "Ashgabat", [59.5563, 38.9697], [58.3261, 37.9601], ["Belarus", "Kazakhstan", "Uzbekistan", "Afghanistan", "Tajikistan", "Kyrgyzstan", "Pakistan"]],
  tn: ["Tunisia", "Tunis", [9.5375, 33.8869], [10.1815, 36.8065], ["Türkiye"]],
  to: ["Tonga", "Nuku'alofa", [-175.1982, -21.1790], [-175.2049, -21.1393], ["Switzerland", "Denmark", "Iceland", "Norway", "Sweden", "Finland"]],
  tr: ["Türkiye", "Ankara", [35.2433, 38.9637], [32.8597, 39.9334], ["Tunisia"]],
  tt: ["Trinidad and Tobago", "Port of Spain", [-61.2225, 10.6918], [-61.5086, 10.6603], []],
  tv: ["Tuvalu", "Funafuti", [177.6493, -7.1095], [179.1962, -8.5211], ["United Kingdom", "Australia", "New Zealand", "Solomon Islands", "Marshall Islands", "Fiji", "Vanuatu"]],
  tz: ["Tanzania", "Dodoma", [34.8888, -6.3690], [35.7516, -6.1630], ["South Africa"]],
  ua: ["Ukraine", "Kyiv", [31.1656, 48.3794], [30.5234, 50.4501], []],
  ug: ["Uganda", "Kampala", [32.2903, 1.3733], [32.5825, 0.3476], ["Zimbabwe"]],
  us: ["United States", "Washington DC", [-95.7129, 37.0902], [-77.0369, 38.9072], ["Liberia", "Malaysia"]],
  uy: ["Uruguay", "Montevideo", [-55.7658, -32.5228], [-56.1645, -34.9011], ["Greece"]],
  uz: ["Uzbekistan", "Tashkent", [64.5853, 41.3775], [69.2401, 41.2995], ["Kazakhstan", "Turkmenistan", "Kyrgyzstan", "Tajikistan", "Afghanistan",]],
  vc: ["Saint Vincent and the Grenadines", "Kingstown", [-61.2872, 12.9843], [-61.2248, 13.1600], ["Ghana", "Togo", "Gambia", "Senegal", "Benin", "Burkina Faso"]],
  ve: ["Venezuela", "Caracas", [-66.5897, 6.4238], [-66.9036, 10.4806], ["Columbia", "Ecuador"]],
  vn: ["Vietnam", "Hanoi", [108.2772, 14.0583], [105.8342, 21.0278], ["Morocco", "China", "North Korea"]],
  vu: ["Vanuatu", "Port Vila", [166.9592, -15.3767], [168.3273, -17.7333], ["South Africa"]],
  ws: ["Samoa", "Apia", [-172.1046, -13.7590], [-171.7514, -13.8507], []],
  ye: ["Yemen", "Sana'a", [48.5164, 15.5527], [44.1910, 15.3694], ["United Arab Emirates", "Sudan", "Germany", "Syria", "Iraq", "Jordan", "Kuwait"]],
  za: ["South Africa", "Pretoria", [22.9375, -30.5595], [28.2293, -25.7479], ["Tanzania"]],
  zm: ["Zambia", "Lusaka", [27.8493, -13.1339], [28.3228, -15.3875], ["Kazakhstan", "Uzbekistan", "Kyrgyzstan", "Tajikistan", "Afghanistan", "Turkmenistan", "Belarus"]],
  zw: ["Zimbabwe", "Harare", [29.1549, -19.0154], [31.0492, -17.8216], ["Uganda"]]
};

let usFlags = {
  ak: ["Alaska", "Juneau", [-149.4937, 64.2008], [-134.4201, 58.3005]],
  al: ["Alabama", "Montgomery", [-86.9023, 32.3182], [-86.3077, 32.3792]],
  ar: ["Arkansas", "Little Rock", [-92.2863, 34.5574], [-92.2880, 34.7445]],
  az: ["Arizona", "Phoenix", [-111.0937, 34.0489], [-112.0740, 33.4484]],
  ca: ["California", "Sacramento", [-119.4179, 36.7783], [-121.4944, 38.5816]],
  co: ["Colorado", "Denver", [-105.7821, 39.5501], [-104.9903, 39.7392]],
  ct: ["Connecticut", "Hartford", [-73.0877, 41.6032], [-72.6734, 41.7658]],
  de: ["Delaware", "Dover", [-75.5277, 38.9108], [-75.5244, 39.1582]],
  fl: ["Florida", "Tallahassee", [-81.5158, 27.6648], [-84.2807, 30.4383]],
  ga: ["Georgia", "Atlanta", [-82.9001, 32.1656], [-84.3877, 33.7488]],
  hi: ["Hawaii", "Honolulu", [-155.5828, 19.8968], [-157.8581, 21.3099]],
  ia: ["Iowa", "Des Moines", [-93.0977, 41.8780], [-93.6250, 41.5868]],
  id: ["Idaho", "Boise", [-114.7420, 44.0682], [-116.2023, 43.6150]],
  il: ["Illinois", "Springfield", [-89.3985, 40.6331], [-89.6501, 39.7817]],
  in: ["Indiana", "Indianapolis", [-86.1349, 40.2672], [-86.1581, 39.7684]],
  ks: ["Kansas", "Topeka", [-98.4842, 39.0119], [-95.6752, 39.0473]],
  ky: ["Kentucky", "Frankfort", [-84.2700, 37.8393], [-84.8733, 38.2009]],
  la: ["Louisiana", "Baton Rouge", [-91.9623, 30.9843], [-91.1871, 30.4515]],
  ma: ["Massachusetts", "Boston", [-71.3824, 42.4072], [-71.0589, 42.3601]],
  md: ["Maryland", "Annapolis", [-76.6413, 39.0458], [-76.4922, 38.9784]],
  me: ["Maine", "Augusta", [-69.4455, 45.2538], [-69.7795, 44.3106]],
  mi: ["Michigan", "Lansing", [-85.6024, 44.3148], [-84.5555, 42.7325]],
  mn: ["Minnesota", "Saint Paul", [-94.6859, 46.7296], [-93.0900, 44.9537]],
  mo: ["Missouri", "Jefferson City", [-91.8318, 37.9643], [-92.1735, 38.5767]],
  ms: ["Mississippi", "Jackson", [-89.3985, 32.3547], [-90.1848, 32.2988]],
  mt: ["Montana", "Helena", [-110.3626, 46.8797], [-112.0391, 46.5891]],
  nc: ["North Carolina", "Raleigh", [-79.0193, 35.7596], [-78.6382, 35.7796]],
  nd: ["North Dakota", "Bismarck", [-101.0020, 47.5515], [-100.7877, 46.8055]],
  ne: ["Nebraska", "Lincoln", [-99.9018, 41.4925], [-96.7026, 40.8136]],
  nh: ["New Hampshire", "Concord", [-71.5724, 43.1939], [-71.5376, 43.2081]],
  nj: ["New Jersey", "Trenton", [-74.4057, 40.0583], [-74.7597, 40.2206]],
  nm: ["New Mexico", "Santa Fe", [-105.8701, 34.5199], [-105.9378, 35.6870]],
  nv: ["Nevada", "Carson City", [-116.4194, 38.8026], [-119.7674, 39.1638]],
  ny: ["New York", "Albany", [-74.2179, 43.2994], [-73.7562, 42.6526]],
  oh: ["Ohio", "Columbus", [-82.9071, 40.4173], [-82.9988, 39.9612]],
  ok: ["Oklahoma", "Oklahoma City", [-97.0929, 35.0078], [-97.5164, 35.4676]],
  or: ["Oregon", "Salem", [-120.5542, 43.8041], [-123.0351, 44.9429]],
  pa: ["Pennsylvania", "Harrisburg", [-77.1945, 41.2033], [-76.8867, 40.2732]],
  ri: ["Rhode Island", "Providence", [-71.4774, 41.5801], [-71.4128, 41.8240]],
  sc: ["South Carolina", "Columbia", [-81.1637, 33.8361], [-81.0348, 34.0007]],
  sd: ["South Dakota", "Pierre", [-99.9018, 43.9695], [-100.3538, 44.3668]],
  tn: ["Tennessee", "Nashville", [-86.5804, 35.5175], [-86.7816, 36.1627]],
  tx: ["Texas", "Austin", [-99.9018, 31.9686], [-97.7431, 30.2672]],
  ut: ["Utah", "Salt Lake City", [-111.0937, 39.3210], [-111.8910, 40.7608]],
  va: ["Virginia", "Richmond", [-78.6569, 37.4316], [-77.4360, 37.5407]],
  vt: ["Vermont", "Montpelier", [-72.5778, 44.5588], [-72.5754, 44.2601]],
  wa: ["Washington", "Olympia", [-120.7401, 47.7511], [-122.9007, 47.0379]],
  wi: ["Wisconsin", "Madison", [-88.7879, 43.7844], [-89.4008, 43.0722]],
  wv: ["West Virginia", "Charleston", [-80.4549, 38.5976], [-81.6326, 38.3498]],
  wy: ["Wyoming", "Cheyenne", [-107.2903, 43.0760], [-104.8202, 41.1400]]
};

let acceptableAnswers = {
  'THE BAHAMAS' : 'Bahamas',
  'BOSNIA-HERZEGOVINA': 'Bosnia and Herzegovina',
  'BOSNIA': 'Bosnia and Herzegovina',
  'BRUNEI DARUSSALAM' : 'Brunei',
  'CABO VERDE' : 'Cape Verde',
  'CHISINAU' : 'Chișinău',
  'CAR' : 'Central African Republic',
  "COTE D'IVOIRE" : "Côte d'Ivoire",
  'IVORY COAST' : "Côte d'Ivoire",
  'CZECHIA' : 'Czech Republic',
  'DELAP ULIGA DJARRIT' : 'Delap-Uliga-Djarrit',
  'MAJURO' : 'Delap-Uliga-Djarrit',
  'DRC' : 'Democratic Republic of the Congo',
  'DR CONGO' : 'Democratic Republic of the Congo',
  'CONGO-KINSHASA' : 'Democratic Republic of the Congo',
  'THE GAMBIA' : 'Gambia',
  'GUINEA BISSAU' : 'Guinea-Bissau',
  'SUCRE' : 'La Paz',
  'THE MALDIVES' : 'Maldives',
  'THE MARSHALL ISLANDS' : 'Marshall Islands',
  'LOBAMBA' : 'Mbabane',
  'BURMA' : 'Myanmar',
  'MACEDONIA' : 'North Macedonia',
  'PORT AU PRINCE' : 'Port-au-Prince',
  'CAPE TOWN' : 'Pretoria',
  'BLOEMFONTEIN' : 'Pretoria',
  'CONGO' : 'Republic of the Congo',
  'THE CONGO' : 'Republic of the Congo',
  'CONGO REPUBLIC' : 'Republic of the Congo',
  'CONGO-BRAZZAVILLE' : 'Republic of the Congo',
  'ST KITTS AND NEVIS' : 'Saint Kitts and Nevis',
  'ST. KITTS AND NEVIS' : 'Saint Kitts and Nevis',
  'ST LUCIA' : 'Saint Lucia',
  'ST. LUCIA' : 'Saint Lucia',
  "ST GEORGE'S" : "Saint George's",
  "ST. GEORGE'S" : "Saint George's",
  "ST JOHN'S": "Saint John's",
  "ST. JOHN'S": "Saint John's",
  'ST PAUL' : 'Saint Paul',
  'ST. PAUL' : 'Saint Paul',
  'ST VINCENT AND THE GRENADINES' : 'Saint Vincent and the Grenadines',
  'ST. VINCENT AND THE GRENADINES' : 'Saint Vincent and the Grenadines',
  'SAO TOME' : 'São Tomé',
  'SAO TOME AND PRINCIPE' : 'São Tomé and Príncipe',
  'THE SOLOMON ISLANDS' : 'Solomon Islands',
  'COLOMBO' : 'Sri Jayawardenepura Kotte',
  'EAST TIMOR' : 'Timor-Leste',
  'TURKEY' : 'Türkiye',
  'UAE': 'United Arab Emirates',
  'UK': 'United Kingdom',
  'THE UK': 'United Kingdom',
  'AMERICA' : 'United States',
  'US': 'United States',
  'USA': 'United States',
  'UNITED STATES OF AMERICA': 'United States',
  'WASHINGTON, D.C.' : 'Washington DC',
  'WASHINGTON, DC' : 'Washington DC',
  'WASHINGTON D.C.' : 'Washington DC',
  'DISTRICT OF COLUMBIA' : 'Washington DC',
  'DC' : 'Washington DC'
};