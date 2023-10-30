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
      label: <a href="https://nammqi.uz/kafedry-1">KAFEDRLAR</a>,

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
    label: <a href="https://nammqi.uz/contact">ALOQA</a>
  },
  {
    key: '23',
    label: <a href="https://nammqi.uz/">VIRTUAL QABULHONA</a>,
  },
  {
    key: '24',
    label: <a href="https://nammqi.uz/">TELEFON RAQAMLAR</a>,
  },
  ],

]

export const itemsRu = [

  [
    {
      key: '1',
      title: "Структура",
      label: <a href="https://nammqi.uz/kafedry-1">ОТДЕЛЕНИЯ</a>,

    },

    {
      key: '2',
      label: <a href='https://nammqi.uz/universitet-ustavi'>УСТАВ ИНСТИТУТА</a>,
    },
    {
      key: '3',
      label: <a href='https://nammqi.uz/institut-haqida'>ОБ ИНСТИТУТЕ</a>,
    },
    {
      key: '4',
      label: 'ЛИДЕРСТВО',
      children: [
        {
          key: '1',
          label: <a href="https://nammqi.uz/rektor">РЕКТОР</a>,
        },
        {
          key: '2',
          label: <a href="https://nammqi.uz/1-i-prorektor-po-delam-molodezi-i-duxovno-prosvetitelskoi-rabote"> ПЕРВЫЙ ПРОРЕКТОР ПО ДЕЛАМ МОЛОДЕЖИ И ДУХОВНО-ВОСВИТИТЕЛЬНОЙ РАБОТЕ</a>,
        },
        {
          key: '3',
          label: <a href="https://nammqi.uz/prorektor-po-ucebnoi-rabote">ПРОРЕКТОР ПО УЧЕБНОЙ ВОПРОСАМ</a>,
          
        },
        {
          key: '4',
          label: <a href="https://nammqi.uz/ilmiy-ishlar-va-innovatsiyalar-boyicha-prorektor"> ПРОРЕКТОР ПО НАУЧНОЙ РАБОТЕ И ИННОВАЦИЯМ</a>,
        },
      ],
    },
    {
      key: '5',
      label: <a href='https://nammqi.uz/fakultety'>ФАКУЛЬТЕТЫ</a>,
    },
  ],




  [{
    key: '5',
    title: "Активность",
    label: 'НАУЧНАЯ ДЕЯТЕЛЬНОСТЬ',
    children: [
      {
        key: '1',
        label: <a href="https://nammqi.uz/hamkorlik-ishlari">КООПЕРАТИВНЫЕ ДЕЛА</a>,
      },
      {
        key: '2',
        label: <a href="https://nammqi.uz/malaka-oshirish">ПРОФЕССИОНАЛЬНОЕ ПОВЫШЕНИЕ И ПЕРЕПОДГОТОВКА</a>,
      },
      {
        key: '3',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">ИННОВАЦИОННЫЕ РАБОТЫ</a>,
      },
      {
        key: '4',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">ИННОВАЦИОННЫЕ РАБОТЫ</a>,
      },
    ],
  },
  {
    key: '6',
    label: 'МЕЖДУНАРОДНЫЕ ОТНОШЕНИЯ',
    children: [
      {
        key: '1',
        label: <a href="https://nammqi.uz/hamkorlik-ishlari">КООПЕРАТИВНЫЕ ДЕЛА </a>,
      },
      {
        key: '2',
        label: <a href="https://nammqi.uz/malaka-oshirish">ПРОФЕССИОНАЛЬНОЕ ПОВЫШЕНИЕ И ПЕРЕПОДГОТОВКА</a>,
      },
      {
        key: '3',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">ИННОВАЦИОННЫЕ РАБОТЫ</a>,
      },
      {
        key: '4',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">ИННОВАЦИОННЫЕ РАБОТЫ</a>,
      },
    ],
  }
  ],


  [{
    key: '9',
    title: "Образование",
    label: <a href="http://video.nammqi.uz/">ВИДЕО-УРОКИ</a>,
  },

  {
    key: '9',
    label: 'СТЕПЕНЬ БАКАЛАВРА',
    children: [
      {
        key: '10',
        label: <a href="https://nammqi.uz/call-center-studentam">КОЛЛ-ЦЕНТР ДЛЯ СТУДЕНТОВ</a>,
      },
      {
        key: '11',
        label: <a href="https://nammqi.uz/o-vnutrennix-procedurax-instituta-dlya-studentov-namisi">ИНСТРУКЦИИ</a>,
      },
      {
        key: '12',
        label: <a href="http://tizim.nammqi.uz/dars-jadvali/">РАСПИСАНИЕ ЗАНЯТИЙ</a>,
      },
    ],

  },

  {
    key: '9',
    label: <a href="https://nammqi.uz/magistratura">ВЫПУСКНОЕ ОТДЕЛЕНИЕ</a>,
  },

  ],



  [{
    key: '13',
    title: "Заявитель",
    label: <a href="https://nammqi.uz/qabul-komissiyasi-1" >ПРИЕМНАЯ КОМИССИЯ</a>
  },
  {
    key: '15',
    label: <a href="https://nammqi.uz/korsatmalar" >ИНСТРУКЦИИ</a>,
  },
  {
    key: '16',
    label: <a href="https://nammqi.uz/bakalavriat" > СТЕПЕНЬ БАКАЛАВРА </a>,
  },
  {
    key: '17',
    label: <a href="https://nammqi.uz/magistratura-2" >СТЕПЕНЬ МАГИСТРА</a>,
  },
  ],



  [{
    key: '17',
    title: "Новости",
    label: <a href="https://nammqi.uz/news" >НОВОСТИ</a>,
  },
  {
    key: '20',
    label: <a href="https://nammqi.uz/elonlar" >ОБЪЯВЛЕНИЯ</a>,
  },
  {
    key: '21',
    label: <a href="https://nammqi.uz/galleries">ФОТОГАЛЕРЕЯ</a>,
  },

  ],



  [{
    key: '21',
    title: "Связь",
    label: <a href="https://nammqi.uz/contact">КОММУНИКАЦИЯ</a>
  },
  {
    key: '23',
    label: <a href="https://nammqi.uz/">ВИРТУАЛЬНЫЙ ПРИЕМ</a>,
  },
  {
    key: '24',
    label: <a href="https://nammqi.uz/">ТЕЛЕФОННЫЕ НОМЕРА</a>,
  },
  ],

]

export const itemsEn = [

  [
    {
      key: '1',
      title: "Structure",
      label: <a href="https://nammqi.uz/kafedry-1">DEPARTMENTS</a>,

    },

    {
      key: '2',
      label: <a href='https://nammqi.uz/universitet-ustavi'>INSTITUTE'S CHARTER</a>,
    },
    {
      key: '3',
      label: <a href='https://nammqi.uz/institut-haqida'>ABOUT THE INSTITUTE</a>,
    },
    {
      key: '4',
      label: 'LEADERSHIP',
      children: [
        {
          key: '1',
          label: <a href="https://nammqi.uz/rektor">RECTOR</a>,
        },
        {
          key: '2',
          label: <a href="https://nammqi.uz/1-i-prorektor-po-delam-molodezi-i-duxovno-prosvetitelskoi-rabote"> FIRST VICE-RECTOR FOR YOUTH AFFAIRS AND SPIRITUAL EDUCATION WORKS </a>,
        },
        {
          key: '3',
          label: <a href="https://nammqi.uz/prorektor-po-ucebnoi-rabote"> VICE-RECTOR FOR EDUCATIONAL AFFAIRS </a>,
        },
        {
          key: '4',
          label: <a href="https://nammqi.uz/ilmiy-ishlar-va-innovatsiyalar-boyicha-prorektor"> VICE-RECTOR FOR SCIENTIFIC WORKS AND INNOVATIONS</a>,
        },
      ],
    },
    {
      key: '5',
      label: <a href='https://nammqi.uz/fakultety'>FACULTIES</a>,
    },
  ],




  [{
    key: '5',
    title: "Activity",
    label: 'SCIENTIFIC ACTIVITY',
    children: [
      {
        key: '1',
        label: <a href="https://nammqi.uz/hamkorlik-ishlari">COOPERATIVE AFFAIRS </a>,
      },
      {
        key: '2',
        label: <a href="https://nammqi.uz/malaka-oshirish">PROFESSIONAL DEVELOPMENT AND RE-TRAINING</a>,
      },
      {
        key: '3',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INNOVATIVE WORKS</a>,
      },
      {
        key: '4',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INNOVATIVE WORKS</a>,
      },
    ],
  },
  {
    key: '6',
    label: 'INTERNATIONAL RELATIONS',
    children: [
      {
        key: '1',
        label: <a href="https://nammqi.uz/hamkorlik-ishlari">COOPERATIVE AFFAIRS </a>,
      },
      {
        key: '2',
        label: <a href="https://nammqi.uz/malaka-oshirish">PROFESSIONAL DEVELOPMENT AND RE-TRAINING</a>,
      },
      {
        key: '3',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INNOVATIVE WORKS</a>,
      },
      {
        key: '4',
        label: <a href="https://nammqi.uz/inovatsion-ishlanmalar">INNOVATIVE WORKS</a>,
      },
    ],
  }
  ],


  [{
    key: '9',
    title: "Education",
    label: <a href="http://video.nammqi.uz/">VIDEO LESSONS</a>,
  },

  {
    key: '9',
    label: 'BACHELORS DEGREE',
    children: [
      {
        key: '10',
        label: <a href="https://nammqi.uz/call-center-studentam">CALL CENTER FOR STUDENTS</a>,
      },
      {
        key: '11',
        label: <a href="https://nammqi.uz/o-vnutrennix-procedurax-instituta-dlya-studentov-namisi">INSTRUCTIONS</a>,
      },
      {
        key: '12',
        label: <a href="http://tizim.nammqi.uz/dars-jadvali/">CLASS SCHEDULE</a>,
      },
    ],

  },

  {
    key: '9',
    label: <a href="https://nammqi.uz/magistratura">GRADUATE DEPARTMENT</a>,
  },

  ],



  [{
    key: '13',
    title: "Applicant",
    label: <a href="https://nammqi.uz/qabul-komissiyasi-1" >ADMISSION COMMISSION</a>
  },
  {
    key: '15',
    label: <a href="https://nammqi.uz/korsatmalar" >INSTRUCTIONS</a>,
  },
  {
    key: '16',
    label: <a href="https://nammqi.uz/bakalavriat" > BACHELOR'S DEGREE </a>,
  },
  {
    key: '17',
    label: <a href="https://nammqi.uz/magistratura-2" >MASTER'S DEGREE</a>,
  },
  ],



  [{
    key: '17',
    title: "News",
    label: <a href="https://nammqi.uz/news" >NEWS</a>,
  },
  {
    key: '20',
    label: <a href="https://nammqi.uz/elonlar" >ANNOUNCEMENTS</a>,
  },
  {
    key: '21',
    label: <a href="https://nammqi.uz/galleries">PHOTO GALLERY</a>,
  },

  ],



  [{
    key: '21',
    title: "Connection",
    label: <a href="https://nammqi.uz/contact">COMMUNICATION</a>
  },
  {
    key: '23',
    label: <a href="https://nammqi.uz/">VIRTUAL RECEPTION</a>,
  },
  {
    key: '24',
    label: <a href="https://nammqi.uz/">PHONE NUMBERS</a>,
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




export const tabitemsUz = [
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

export const tabitemsRu = [
  {
    key: '1',
    label: 'Показать все',
    children: <TabInfoAll/>,
  },

  {
    key: '2',
    label: 'День учителей и тренеров',
    children: <TabInfo/>,
  },
  {
    key: '3',
    label: 'Преследование и насилие в отношении женщин',
    children: <TabInfoTwo/>,
  },
  {
    key: '4',
    label: 'ГИТАРА ШОУ',
    children: <TabInfoThree/>,
  },
  {
    key: '5',
    label: 'Иди от сердца моего к Родине',
    children: <TabInfoFour/>,
  },
  {
    key: '6',
    label: 'Соревнования по бегу «Новое дыхание»',
    children: <TabInfoFive/>,
  },
  {
    key: '7',
    label: 'Олимпиада пяти инициатив',
    children: <TabInfoSix/>,
  },
  {
    key: '8',
    label: 'Выставка NamMQI на региональной ярмарке труда',
    children: <TabInfoSeven/>,
  },
  {
    key: '9',
    label: 'Начало нового учебного года',
    children: <TabInfoEight/>,
  },
];

export const tabitemsEn = [
  {
    key: '1',
    label: 'Show all',
    children: <TabInfoAll/>,
  },

  {
    key: '2',
    label: 'Day of teachers and coaches',
    children: <TabInfo/>,
  },
  {
    key: '3',
    label: 'Violence and abuse against women',
    children: <TabInfoTwo/>,
  },
  {
    key: '4',
    label: 'THIS IS THE GUITAR',
    children: <TabInfoThree/>,
  },
  {
    key: '5',
    label: 'My heart goes to the Motherland',
    children: <TabInfoFour/>,
  },
  {
    key: '6',
    label: '"New breath" running competition',
    children: <TabInfoFive/>,
  },
  {
    key: '7',
    label: 'Olympiad of five initiatives',
    children: <TabInfoSix/>,
  },
  {
    key: '8',
    label: 'NamMQI exhibition at the regional labor fair',
    children: <TabInfoSeven/>,
  },
  {
    key: '9',
    label: 'The beginning of the new academic year',
    children: <TabInfoEight/>,
  },
];














// export const items = [
//   {
//     key: '1',
//     label: 'Show all',
//     children: <TabInfoAll/>,
//   },

//   {
//     key: '2',
//     label: 'O‘qituvchi va murabbiylar kuni',
//     children: <TabInfo/>,
//   },
//   {
//     key: '3',
//     label: 'Ayollarga qarshi tazyiq va zo‘ravonlik',
//     children: <TabInfoTwo/>,
//   },
//   {
//     key: '4',
//     label: 'GUITAR SHOW',
//     children: <TabInfoThree/>,
//   },
//   {
//     key: '5',
//     label: 'Yuragimdan o‘ting Vatanga',
//     children: <TabInfoFour/>,
//   },
//   {
//     key: '6',
//     label: '“Yangi nafas” yugurish musobaqasi',
//     children: <TabInfoFive/>,
//   },
//   {
//     key: '7',
//     label: 'Besh tashabbus olimpiadasi',
//     children: <TabInfoSix/>,
//   },
//   {
//     key: '8',
//     label: 'NamMQI koʼrgazmasi viloyat mehnat yarmarkasida',
//     children: <TabInfoSeven/>,
//   },
//   {
//     key: '9',
//     label: 'Yangi oʼquv yilining boshlanishi',
//     children: <TabInfoEight/>,
//   },
// ];






