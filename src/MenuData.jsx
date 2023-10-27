import TabInfoAll from '../src/components/TabComponents/TabInfoAll';
import TabInfo from '../src/components/TabComponents/TabInfoOne';
import TabInfoTwo from '../src/components/TabComponents/TabInfoTwo';
import TabInfoThree from '../src/components/TabComponents/TabInfoThree';
import TabInfoFour from '../src/components/TabComponents/TabInfoFour';
import TabInfoFive from '../src/components/TabComponents/TabInfoFive';
import TabInfoSix from '../src/components/TabComponents/TabInfoSix';
import TabInfoSeven from '../src/components/TabComponents/TabInfoSeven';
import TabInfoEight from '../src/components/TabComponents/TabInfoEight';




import img1 from './assets/images/images1.jpg'
import img2 from './assets/images/images2.jpg'
import img3 from './assets/images/images3.jpg'
import img4 from './assets/images/images4.jpg'
import img5 from './assets/images/images5.jpg'
import img6 from './assets/images/images6.jpg'
import img7 from './assets/images/images7.jpg'
import img8 from './assets/images/images8.jpg'



export const itemsUz = [

  [
    {
      key: '1',
      title: "Tuzilma",
      label: <a href="https://nammqi.uz/kafedry-1" target="_self">KAFEDRLAR</a>,

    },

    {
      key: '2',
      label: <a href='https://nammqi.uz/universitet-ustavi'>INSTITUT USTAVI</a>,
    },
    {
      key: '3',
      label: <a href='https://nammqi.uz/institut-haqida'>INSTITUT HAQIDA</a>,
    },
    {
      key: '4',
      label: 'RAHBARIYAT',
      children: [
        {
          key: '1',
          label: <a href="https://nammqi.uz/rektor">REKTOR</a>,
        },
        {
          key: '2',
          label: <a href="https://nammqi.uz/1-i-prorektor-po-delam-molodezi-i-duxovno-prosvetitelskoi-rabote"> YOSHLAR MASALALARIRI VA MA'NAVIYAT MA'RIFAT ISHLARI BUYICHA BIRINCHI PROREKTOR </a>,
        },
        {
          key: '3',
          label: <a href="https://nammqi.uz/prorektor-po-ucebnoi-rabote"> O'QUV ISHLARU BUYICHA PROREKTOR </a>,
        },
        {
          key: '4',
          label: <a href="https://nammqi.uz/ilmiy-ishlar-va-innovatsiyalar-boyicha-prorektor"> ILMIY ISHLAR VA INNOVATSIYALAR BO'YICHA PROREKTOR</a>,
        },
      ],
    },
    {
      key: '5',
      label: <a href='https://nammqi.uz/fakultety'>FAKULTETLAR</a>,
    },
  ],




  [{
    key: '5',
    title: "Faoliyat",
    label: ' ILMIY FAOLIYAT',
    children: [
      {
        key: '1',
        label: <a href="https://nammqi.uz/hamkorlik-ishlari">HAMKORLIK ISHLARI </a>,
      },
      {
        key: '2',
        label: <a href="https://nammqi.uz/malaka-oshirish">MALAKA OSHIRISH VA QAYTA TAYYORLASH</a>,
      },
      {
        key: '3',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INOVATSION ISHLANMALAR</a>,
      },
      {
        key: '4',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INOVATSION ISHLANMALAR</a>,
      },
    ],
  },
  {
    key: '6',
    label: 'HALQARO ALOQALAR',
    children: [
      {
        key: '1',
        label: <a href="https://nammqi.uz/hamkorlik-ishlari">HAMKORLIK ISHLARI </a>,
      },
      {
        key: '2',
        label: <a href="https://nammqi.uz/malaka-oshirish">MALAKA OSHIRISH VA QAYTA TAYYORLASH</a>,
      },
      {
        key: '3',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INOVATSION ISHLANMALAR</a>,
      },
      {
        key: '4',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INOVATSION ISHLANMALAR</a>,
      },
    ],
  }
  ],


  [{
    key: '9',
    title: "Ta`lim",
    label: <a href="http://video.nammqi.uz/">VIDEODARSLAR</a>,
  },

  {
    key: '9',
    label: 'BAKALAVRIYAT',
    children: [
      {
        key: '10',
        label: <a href="https://nammqi.uz/call-center-studentam">TALABALARGA CALL CENTER</a>,
      },
      {
        key: '11',
        label: <a href="https://nammqi.uz/o-vnutrennix-procedurax-instituta-dlya-studentov-namisi">YO'RIQNOMA</a>,
      },
      {
        key: '12',
        label: <a href="http://tizim.nammqi.uz/dars-jadvali/">DARS JADVALI</a>,
      },
    ],

  },

  {
    key: '9',
    label: <a href="https://nammqi.uz/magistratura">MAGISTIRATURA BO'LIMI</a>,
  },

  ],



  [{
    key: '13',
    title: "Abiturient",
    label: <a href="https://nammqi.uz/qabul-komissiyasi-1" >QABUL KOMISSIYASI</a>
  },
  {
    key: '15',
    label: <a href="https://nammqi.uz/korsatmalar" >KO'RSATMALAR</a>,
  },
  {
    key: '16',
    label: <a href="https://nammqi.uz/bakalavriat" > BAKALAVRIAT </a>,
  },
  {
    key: '17',
    label: <a href="https://nammqi.uz/magistratura-2" >MAGISTIRATURA</a>,
  },
  ],



  [{
    key: '17',
    title: "Yangiliklar",
    label: <a href="https://nammqi.uz/news" >YANGILIKLAR</a>,
  },
  {
    key: '20',
    label: <a href="https://nammqi.uz/elonlar" >E`LONLAR</a>,
  },
  {
    key: '21',
    label: <a href="https://nammqi.uz/galleries">FOTOGALEREYA</a>,
  },

  ],



  [{
    key: '21',
    title: "Bog`lanish",
    label: <a href="https://nammqi.uz/contact" target="_self">ALOQA</a>
  },
  {
    key: '23',
    label: <a href="https://nammqi.uz/" target="_self">VIRTUAL QABULHONA</a>,
  },
  {
    key: '24',
    label: <a href="https://nammqi.uz/" target="_self">TELEFON RAQAMLAR</a>,
  },
  ],

]

export const itemsRu = [

  [
    {
      key: '1',
      title: "Tuzilma Ru",
      label: <a href="https://nammqi.uz/kafedry-1" target="_self">KAFEDRLAR</a>,

    },

    {
      key: '2',
      label: <a href='https://nammqi.uz/universitet-ustavi'>INSTITUT USTAVI</a>,
    },
    {
      key: '3',
      label: <a href='https://nammqi.uz/institut-haqida'>INSTITUT HAQIDA</a>,
    },
    {
      key: '4',
      label: 'RAHBARIYAT',
      children: [
        {
          key: '1',
          label: <a href="https://nammqi.uz/rektor">REKTOR</a>,
        },
        {
          key: '2',
          label: <a href="https://nammqi.uz/1-i-prorektor-po-delam-molodezi-i-duxovno-prosvetitelskoi-rabote"> YOSHLAR MASALALARIRI VA MA'NAVIYAT MA'RIFAT ISHLARI BUYICHA BIRINCHI PROREKTOR </a>,
        },
        {
          key: '3',
          label: <a href="https://nammqi.uz/prorektor-po-ucebnoi-rabote"> O'QUV ISHLARU BUYICHA PROREKTOR </a>,
        },
        {
          key: '4',
          label: <a href="https://nammqi.uz/ilmiy-ishlar-va-innovatsiyalar-boyicha-prorektor"> ILMIY ISHLAR VA INNOVATSIYALAR BO'YICHA PROREKTOR</a>,
        },
      ],
    },
    {
      key: '5',
      label: <a href='https://nammqi.uz/fakultety'>FAKULTETLAR</a>,
    },
  ],




  [{
    key: '5',
    title: "Faoliyat",
    label: ' ILMIY FAOLIYAT',
    children: [
      {
        key: '1',
        label: <a href="https://nammqi.uz/hamkorlik-ishlari">HAMKORLIK ISHLARI </a>,
      },
      {
        key: '2',
        label: <a href="https://nammqi.uz/malaka-oshirish">MALAKA OSHIRISH VA QAYTA TAYYORLASH</a>,
      },
      {
        key: '3',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INOVATSION ISHLANMALAR</a>,
      },
      {
        key: '4',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INOVATSION ISHLANMALAR</a>,
      },
    ],
  },
  {
    key: '6',
    label: 'HALQARO ALOQALAR',
    children: [
      {
        key: '1',
        label: <a href="https://nammqi.uz/hamkorlik-ishlari">HAMKORLIK ISHLARI </a>,
      },
      {
        key: '2',
        label: <a href="https://nammqi.uz/malaka-oshirish">MALAKA OSHIRISH VA QAYTA TAYYORLASH</a>,
      },
      {
        key: '3',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INOVATSION ISHLANMALAR</a>,
      },
      {
        key: '4',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INOVATSION ISHLANMALAR</a>,
      },
    ],
  }
  ],


  [{
    key: '9',
    title: "Ta`lim",
    label: <a href="http://video.nammqi.uz/">VIDEODARSLAR</a>,
  },

  {
    key: '9',
    label: 'BAKALAVRIYAT',
    children: [
      {
        key: '10',
        label: <a href="https://nammqi.uz/call-center-studentam">TALABALARGA CALL CENTER</a>,
      },
      {
        key: '11',
        label: <a href="https://nammqi.uz/o-vnutrennix-procedurax-instituta-dlya-studentov-namisi">YO'RIQNOMA</a>,
      },
      {
        key: '12',
        label: <a href="http://tizim.nammqi.uz/dars-jadvali/">DARS JADVALI</a>,
      },
    ],

  },

  {
    key: '9',
    label: <a href="https://nammqi.uz/magistratura">MAGISTIRATURA BO'LIMI</a>,
  },

  ],



  [{
    key: '13',
    title: "Abiturient",
    label: <a href="https://nammqi.uz/qabul-komissiyasi-1" >QABUL KOMISSIYASI</a>
  },
  {
    key: '15',
    label: <a href="https://nammqi.uz/korsatmalar" >KO'RSATMALAR</a>,
  },
  {
    key: '16',
    label: <a href="https://nammqi.uz/bakalavriat" > BAKALAVRIAT </a>,
  },
  {
    key: '17',
    label: <a href="https://nammqi.uz/magistratura-2" >MAGISTIRATURA</a>,
  },
  ],



  [{
    key: '17',
    title: "Yangiliklar",
    label: <a href="https://nammqi.uz/news" >YANGILIKLAR</a>,
  },
  {
    key: '20',
    label: <a href="https://nammqi.uz/elonlar" >E`LONLAR</a>,
  },
  {
    key: '21',
    label: <a href="https://nammqi.uz/galleries">FOTOGALEREYA</a>,
  },

  ],



  [{
    key: '21',
    title: "Bog`lanish",
    label: <a href="https://nammqi.uz/contact" target="_self">ALOQA</a>
  },
  {
    key: '23',
    label: <a href="https://nammqi.uz/" target="_self">VIRTUAL QABULHONA</a>,
  },
  {
    key: '24',
    label: <a href="https://nammqi.uz/" target="_self">TELEFON RAQAMLAR</a>,
  },
  ],

]

export const itemsEn = [

  [
    {
      key: '1',
      title: "Tuzilma En",
      label: <a href="https://nammqi.uz/kafedry-1" target="_self">KAFEDRLAR</a>,

    },

    {
      key: '2',
      label: <a href='https://nammqi.uz/universitet-ustavi'>INSTITUT USTAVI</a>,
    },
    {
      key: '3',
      label: <a href='https://nammqi.uz/institut-haqida'>INSTITUT HAQIDA</a>,
    },
    {
      key: '4',
      label: 'RAHBARIYAT',
      children: [
        {
          key: '1',
          label: <a href="https://nammqi.uz/rektor">REKTOR</a>,
        },
        {
          key: '2',
          label: <a href="https://nammqi.uz/1-i-prorektor-po-delam-molodezi-i-duxovno-prosvetitelskoi-rabote"> YOSHLAR MASALALARIRI VA MA'NAVIYAT MA'RIFAT ISHLARI BUYICHA BIRINCHI PROREKTOR </a>,
        },
        {
          key: '3',
          label: <a href="https://nammqi.uz/prorektor-po-ucebnoi-rabote"> O'QUV ISHLARU BUYICHA PROREKTOR </a>,
        },
        {
          key: '4',
          label: <a href="https://nammqi.uz/ilmiy-ishlar-va-innovatsiyalar-boyicha-prorektor"> ILMIY ISHLAR VA INNOVATSIYALAR BO'YICHA PROREKTOR</a>,
        },
      ],
    },
    {
      key: '5',
      label: <a href='https://nammqi.uz/fakultety'>FAKULTETLAR</a>,
    },
  ],




  [{
    key: '5',
    title: "Faoliyat",
    label: ' ILMIY FAOLIYAT',
    children: [
      {
        key: '1',
        label: <a href="https://nammqi.uz/hamkorlik-ishlari">HAMKORLIK ISHLARI </a>,
      },
      {
        key: '2',
        label: <a href="https://nammqi.uz/malaka-oshirish">MALAKA OSHIRISH VA QAYTA TAYYORLASH</a>,
      },
      {
        key: '3',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INOVATSION ISHLANMALAR</a>,
      },
      {
        key: '4',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INOVATSION ISHLANMALAR</a>,
      },
    ],
  },
  {
    key: '6',
    label: 'HALQARO ALOQALAR',
    children: [
      {
        key: '1',
        label: <a href="https://nammqi.uz/hamkorlik-ishlari">HAMKORLIK ISHLARI </a>,
      },
      {
        key: '2',
        label: <a href="https://nammqi.uz/malaka-oshirish">MALAKA OSHIRISH VA QAYTA TAYYORLASH</a>,
      },
      {
        key: '3',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INOVATSION ISHLANMALAR</a>,
      },
      {
        key: '4',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INOVATSION ISHLANMALAR</a>,
      },
    ],
  }
  ],


  [{
    key: '9',
    title: "Ta`lim",
    label: <a href="http://video.nammqi.uz/">VIDEODARSLAR</a>,
  },

  {
    key: '9',
    label: 'BAKALAVRIYAT',
    children: [
      {
        key: '10',
        label: <a href="https://nammqi.uz/call-center-studentam">TALABALARGA CALL CENTER</a>,
      },
      {
        key: '11',
        label: <a href="https://nammqi.uz/o-vnutrennix-procedurax-instituta-dlya-studentov-namisi">YO'RIQNOMA</a>,
      },
      {
        key: '12',
        label: <a href="http://tizim.nammqi.uz/dars-jadvali/">DARS JADVALI</a>,
      },
    ],

  },

  {
    key: '9',
    label: <a href="https://nammqi.uz/magistratura">MAGISTIRATURA BO'LIMI</a>,
  },

  ],



  [{
    key: '13',
    title: "Abiturient",
    label: <a href="https://nammqi.uz/qabul-komissiyasi-1" >QABUL KOMISSIYASI</a>
  },
  {
    key: '15',
    label: <a href="https://nammqi.uz/korsatmalar" >KO'RSATMALAR</a>,
  },
  {
    key: '16',
    label: <a href="https://nammqi.uz/bakalavriat" > BAKALAVRIAT </a>,
  },
  {
    key: '17',
    label: <a href="https://nammqi.uz/magistratura-2" >MAGISTIRATURA</a>,
  },
  ],



  [{
    key: '17',
    title: "Yangiliklar",
    label: <a href="https://nammqi.uz/news" >YANGILIKLAR</a>,
  },
  {
    key: '20',
    label: <a href="https://nammqi.uz/elonlar" >E`LONLAR</a>,
  },
  {
    key: '21',
    label: <a href="https://nammqi.uz/galleries">FOTOGALEREYA</a>,
  },

  ],



  [{
    key: '21',
    title: "Bog`lanish",
    label: <a href="https://nammqi.uz/contact" target="_self">ALOQA</a>
  },
  {
    key: '23',
    label: <a href="https://nammqi.uz/" target="_self">VIRTUAL QABULHONA</a>,
  },
  {
    key: '24',
    label: <a href="https://nammqi.uz/" target="_self">TELEFON RAQAMLAR</a>,
  },
  ],

]


export const dataAll = [img1,img2,img3,img4,img5,img6,img7,img8]

export const data = [img1]

export const dataTwo = [img2]

export const dataThree =[img3]

export const dataFour =[img4]

export const dataFive =[img5]

export const dataSix =[img6]

export const dataSeven =[img7]

export const dataEight =[img8]





export const items = [
  {
    key: '1',
    label: 'Show all',
    children: <TabInfoAll/>,
  },

  {
    key: '2',
    label: 'O‘qituvchi va murabbiylar kuni',
    children: <TabInfo/>,
  },
  {
    key: '3',
    label: 'Ayollarga qarshi tazyiq va zo‘ravonlik',
    children: <TabInfoTwo/>,
  },
  {
    key: '4',
    label: 'GUITAR SHOW',
    children: <TabInfoThree/>,
  },
  {
    key: '5',
    label: 'Yuragimdan o‘ting Vatanga',
    children: <TabInfoFour/>,
  },
  {
    key: '6',
    label: '“Yangi nafas” yugurish musobaqasi',
    children: <TabInfoFive/>,
  },
  {
    key: '7',
    label: 'Besh tashabbus olimpiadasi',
    children: <TabInfoSix/>,
  },
  {
    key: '8',
    label: 'NamMQI koʼrgazmasi viloyat mehnat yarmarkasida',
    children: <TabInfoSeven/>,
  },
  {
    key: '9',
    label: 'Yangi oʼquv yilining boshlanishi',
    children: <TabInfoEight/>,
  },
];






