import type { TranslationData } from "../types";

export const translations: Record<"en" | "uz" | "ru", TranslationData> = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Projects",
      experience: "Experience",
      contact: "Contact",
    },
    hero: {
      greeting: "Hello, World.",
      heading1: "Frontend ",
      heading2: "Developer",
      desc: "I focus on building modern, responsive and scalable websites using React, Next.js, and TypeScript. I'm a graduate of Najot Ta'lim and currently interested in the BrSE direction, aiming to grow in that field.",
      viewWork: "View Projects",
    },
    about: {
      title: "About Me",
      desc: "I'm a Frontend Developer focused on building modern, user-friendly and responsive websites. What started as a simple curiosity for coding has become my main profession, and I always strive to build clear, functional interfaces.",
      story: {
        title: "My Journey",
        desc: "My interest in programming started with curiosity about the internet and video games. Over time, this curiosity led me toward frontend development. I've completed an intensive frontend course at Najot Ta'lim and continue working on practical projects.",
      },
      philosophy: {
        title: "My Approach",
        desc: "I pay close attention to writing clean, readable code and to UI/UX details. I like to work in an organized way and I never avoid finding and fixing bugs. I adapt quickly to working independently or as part of a team, depending on the project's needs.",
      },
      beyond: {
        title: "Beyond Coding",
        desc: "My main future goal is to grow as a strong frontend developer, work on large projects, and gain experience in an international IT environment. In my free time, I enjoy watching anime, playing video games, and going for walks.",
      },
    },
    stats: { years: "Years Experience", shipped: "Projects" },
    services: {
      title: "What I Do",
      items: [
        {
          title: "Frontend Development",
          desc: "Building flexible and user-friendly websites using React, Next.js, and TypeScript.",
        },
        {
          title: "State Management",
          desc: "Managing website data and state using Redux Toolkit and TanStack Query.",
        },
        {
          title: "API Integration",
          desc: "Connecting websites to REST APIs and efficiently handling data via Fetch API and TanStack Query.",
        },
        {
          title: "UI Implementation",
          desc: "Turning Figma designs into clean, design-accurate and modern user interfaces.",
        },
      ],
    },
    tech: {
      title: "Skills & Technologies",
      desc: "I use solid and powerful frontend tools to build robust, scalable and efficient applications.",
    },
    technologies: [],
    projects: {
      title: "Selected Projects",
      viewAll: "View all projects",
      items: [
        {
          title: "GreenShop",
          image: "/images/projects/greenshop.png",
          description:
            "A frontend e-commerce exam project built with React, Vite, TypeScript, and Tailwind CSS, featuring a clean and responsive shop layout.",
          tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
          githubLink: "https://github.com/shohruhraimboyev/GreenShop-EXAM",
          liveLink: "https://green-shop-shohruh-exam.vercel.app",
        },
        {
          title: "To-Do App",
          image: "/images/projects/todo.png",
          description:
            "A task management app built with Next.js and TypeScript, where users can add, complete, and delete their daily tasks using API requests.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
          githubLink: "https://github.com/shohruhraimboyev/next-todo-app",
          liveLink: "https://next-todo-app-flame-ten.vercel.app",
        },
        {
          title: "CRM Admin Panel",
          image: "/images/projects/crm.png",
          description:
            "An admin dashboard built with Next.js, TypeScript, TanStack Query, and shadcn/ui for managing customers, orders, and internal data. Note: the UI is currently not fully functional because the backend has been completely shut down by its owner — please review the code itself.",
          tags: ["Next.js", "TypeScript", "TanStack Query", "API", "shadcn/ui"],
          githubLink:
            "https://github.com/shohruhraimboyev/CRM-admin-panel-exam",
          liveLink: "https://crm-exam-shohruh.vercel.app",
        },
      ],
    },
    exp: {
      prof: "Practical Experience",
      edu: "Education",
      items: [
        {
          role: "Frontend Developer",
          company: "Practical Projects",
          duration: "Present",
          description:
            "Although I don't yet have formal experience on commercial projects, I'm constantly working on practical projects to continuously improve my knowledge and skills.",
        },
      ],
      education: [
        {
          degree: "Frontend Development Course (8 months)",
          school: "Najot Ta'lim",
          duration: "07/04/2025 - 02/27/2026",
          description:
            "Successfully completed an 8-month frontend development course and received a specialized certificate.",
        },
      ],
      languages: {
        title: "Languages",
        items: [
          { name: "Uzbek", level: "Native" },
          { name: "Russian", level: "Beginner" },
          { name: "Japanese", level: "A1 (Learning)" },
        ],
      },
    },
    contact: {
      title: "Send a Message",
      desc: "Have a project in mind or want to collaborate? Get in touch with me using the form below.",
      name: "Your Name",
      email: "Your Email",
      subj: "Subject",
      msg: "Your Message",
      send: "Send",
    },
    footer: "Built with React and Tailwind",
  },

  uz: {
    nav: {
      about: "Haqida",
      skills: "Ko'nikmalar",
      projects: "Loyihalar",
      experience: "Tajriba",
      contact: "Aloqa",
    },
    hero: {
      greeting: "Salom, dunyo.",
      heading1: "Frontend ",
      heading2: "Dasturchi",
      desc: "Men React, Next.js va TypeScript yordamida zamonaviy, moslashuvchan va kengaytiriladigan veb-saytlar yaratishga yo'naltirilganman. Najot Ta'lim bitiruvchisiman va hozirda BrSE yo'nalishiga qiziqib, shu sohada rivojlanishni maqsad qilganman.",
      viewWork: "Loyihalarni ko'rish",
    },
    about: {
      title: "Men Haqimda",
      desc: "Men zamonaviy, foydalanuvchiga qulay va responsiv veb-saytlar yaratishga qaratilgan Frontend Dasturchiman. Dasturlashga bo'lgan oddiy qiziqishim bugungi kunda mening asosiy kasbimga aylandi va men doimo tushunarli hamda funksional interfeyslar yaratishga intilaman.",
      story: {
        title: "Mening yo'lim",
        desc: "Dasturlashga bo'lgan qiziqishim dastlab internet va video o'yinlarga bo'lgan qiziqish orqali boshlangan. Keyinchalik bu qiziqish meni frontend yo'nalishiga olib kirdi. Hozirda Najot Ta'lim markazining intensiv frontend kursini tamomlaganman va amaliy loyihalar ustida ishlayapman.",
      },
      philosophy: {
        title: "Ish uslubim",
        desc: "Toza va o'qilishi oson kod yozishga, hamda UI/UX detallariga katta e'tibor beraman. Vazifalarni tartibli tarzda bajarishni yoqtiraman va xatolarni topib tuzatishdan qochmayman. Loyiha talabidan kelib chiqib, mustaqil yoki jamoa tarkibida ishlashga tez moslashaman.",
      },
      beyond: {
        title: "Dasturlashdan tashqari",
        desc: "Kelajakdagi asosiy maqsadim — kuchli frontend developer sifatida katta loyihalarda ishlash va xalqaro IT muhitida tajriba oshirish. Bo'sh vaqtlarimda anime ko'rish, video o'yinlar o'ynash va sayr qilishni yaxshi ko'raman.",
      },
    },
    stats: { years: "Yil tajriba", shipped: "Loyihalar" },
    services: {
      title: "Nima Qilaman",
      items: [
        {
          title: "Frontend Dasturlash",
          desc: "React, Next.js va TypeScript yordamida moslashuvchan va qulay veb-saytlar yaratish.",
        },
        {
          title: "Holatni Boshqarish",
          desc: "Redux Toolkit va TanStack Query yordamida veb-sayt ma'lumotlari va holatini boshqarish.",
        },
        {
          title: "API Integratsiya",
          desc: "Veb-saytlarni REST API'larga ulash hamda Fetch API va TanStack Query orqali ma'lumotlarni samarali boshqarish.",
        },
        {
          title: "UI Yaratish",
          desc: "Figma dizaynlarini toza, dizaynga mos va zamonaviy foydalanuvchi interfeyslariga aylantirish.",
        },
      ],
    },
    tech: {
      title: "Ko'nikmalar va Texnologiyalar",
      desc: "Mustahkam, kengaytiriladigan va samarali ilovalar yaratish uchun asosiy va kuchli frontend vositalaridan foydalanaman.",
    },
    technologies: [],
    projects: {
      title: "Tanlangan Loyihalar",
      viewAll: "Barcha loyihalar",
      items: [
        {
          title: "GreenShop",
          image: "/images/projects/greenshop.png",
          description:
            "React, Vite, TypeScript va Tailwind CSS yordamida yaratilgan frontend imtihon loyihasi — toza va responsiv online do'kon dizayni.",
          tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
          githubLink: "https://github.com/shohruhraimboyev/GreenShop-EXAM",
          liveLink: "https://green-shop-shohruh-exam.vercel.app",
        },
        {
          title: "To-Do App",
          image: "/images/projects/todo.png",
          description:
            "Next.js va TypeScript yordamida qurilgan, API so'rovlari orqali ishlaydigan vazifalar ilovasi — foydalanuvchilar kunlik vazifalarini qo'shishi, bajarishi va o'chirishi mumkin.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
          githubLink: "https://github.com/shohruhraimboyev/next-todo-app",
          liveLink: "https://next-todo-app-flame-ten.vercel.app",
        },
        {
          title: "CRM Admin Panel",
          image: "/images/projects/crm.png",
          description:
            "Next.js, TypeScript, TanStack Query va shadcn/ui yordamida qurilgan, mijozlar, buyurtmalar va ichki ma'lumotlarni boshqarish uchun yaratilgan admin paneli. Eslatma: hozirda UI to'liq ishlamayapti, sababi backend egasi tomonidan butunlay o'chirib qo'yilgan — iltimos, ushbu loyihada kodga e'tibor berishingizni so'rab qolaman.",
          tags: ["Next.js", "TypeScript", "TanStack Query", "API", "shadcn/ui"],
          githubLink:
            "https://github.com/shohruhraimboyev/CRM-admin-panel-exam",
            liveLink: "https://crm-exam-shohruh.vercel.app",
        },
      ],
    },
    exp: {
      prof: "Amaliy Tajriba",
      edu: "Ta'lim",
      items: [
        {
          role: "Frontend Dasturchi",
          company: "Amaliy Loyihalar",
          duration: "Hozirgi vaqt",
          description:
            "Garchi tijorat loyihalarida rasmiy tajribaga ega bo'lmasam-da, bilim va malakamni muttasil oshirish maqsadida doimiy ravishda amaliy loyihalar ustida ish olib bormoqdaman.",
        },
      ],
      education: [
        {
          degree: "Frontend Dasturlash Kursi (8 oylik)",
          school: "Najot Ta'lim",
          duration: "04.07.2025 - 27.02.2026",
          description:
            "Frontend dasturlash bo'yicha 8 oylik kursni muvaffaqiyatli yakunlab, maxsus sertifikatga ega bo'ldim.",
        },
      ],
      languages: {
        title: "Tillar",
        items: [
          { name: "O'zbek tili", level: "Ona tili" },
          { name: "Rus tili", level: "Boshlang'ich" },
          { name: "Yapon tili", level: "A1 (O'rganmoqdaman)" },
        ],
      },
    },
    contact: {
      title: "Xabar Yuborish",
      desc: "Loyihangiz bormi yoki hamkorlik qilmoqchimisiz? Quyidagi forma orqali men bilan bog'laning.",
      name: "Ismingiz",
      email: "Pochtangiz",
      subj: "Mavzu",
      msg: "Xabaringiz",
      send: "Yuborish",
    },
    footer: "React va Tailwind yordamida yaratilgan",
  },

  ru: {
    nav: {
      about: "Обо мне",
      skills: "Навыки",
      projects: "Проекты",
      experience: "Опыт",
      contact: "Контакты",
    },
    hero: {
      greeting: "Привет, мир.",
      heading1: "Frontend ",
      heading2: "Разработчик",
      desc: "Я создаю современные, адаптивные и масштабируемые веб-сайты с использованием React, Next.js и TypeScript. Окончил Najot Ta'lim и сейчас интересуюсь направлением BrSE, стремясь развиваться в этой сфере.",
      viewWork: "Смотреть проекты",
    },
    about: {
      title: "Обо мне",
      desc: "Я Frontend разработчик, сосредоточенный на создании современных, удобных и адаптивных веб-сайтов. То, что начиналось как простой интерес к программированию, стало моей основной профессией, и я всегда стремлюсь создавать понятные и функциональные интерфейсы.",
      story: {
        title: "Мой путь",
        desc: "Мой интерес к программированию начался с любопытства к интернету и видеоиграм. Со временем это привело меня к frontend-разработке. Я прошёл интенсивный курс frontend в Najot Ta'lim и продолжаю работать над практическими проектами.",
      },
      philosophy: {
        title: "Мой подход",
        desc: "Я уделяю большое внимание написанию чистого, читаемого кода и деталям UI/UX. Мне нравится работать организованно, и я никогда не избегаю поиска и исправления ошибок. Я быстро адаптируюсь к самостоятельной работе или работе в команде, в зависимости от требований проекта.",
      },
      beyond: {
        title: "За пределами кода",
        desc: "Моя главная будущая цель — стать сильным frontend-разработчиком, работать над крупными проектами и получить опыт в международной IT-среде. В свободное время я люблю смотреть аниме, играть в видеоигры и гулять.",
      },
    },
    stats: { years: "Лет опыта", shipped: "Проекты" },
    services: {
      title: "Что я делаю",
      items: [
        {
          title: "Frontend разработка",
          desc: "Создание гибких и удобных веб-сайтов с использованием React, Next.js и TypeScript.",
        },
        {
          title: "Управление состоянием",
          desc: "Управление данными и состоянием сайта с помощью Redux Toolkit и TanStack Query.",
        },
        {
          title: "Интеграция API",
          desc: "Подключение сайтов к REST API и эффективная обработка данных через Fetch API и TanStack Query.",
        },
        {
          title: "Реализация UI",
          desc: "Превращение дизайнов Figma в чистые, точные и современные пользовательские интерфейсы.",
        },
      ],
    },
    tech: {
      title: "Навыки и технологии",
      desc: "Я использую надёжные и мощные frontend-инструменты для создания стабильных, масштабируемых и эффективных приложений.",
    },
    technologies: [],
    projects: {
      title: "Избранные проекты",
      viewAll: "Все проекты",
      items: [
        {
          title: "GreenShop",
          image: "/images/projects/greenshop.png",
          description:
            "Экзаменационный frontend-проект интернет-магазина, созданный с React, Vite, TypeScript и Tailwind CSS — чистый и адаптивный дизайн.",
          tags: ["React", "TypeScript", "Vite", "Tailwind CSS"],
          githubLink: "https://github.com/shohruhraimboyev/GreenShop-EXAM",
          liveLink: "https://green-shop-shohruh-exam.vercel.app",
        },
        {
          title: "To-Do App",
          image: "/images/projects/todo.png",
          description:
            "Приложение для управления задачами на Next.js и TypeScript, использующее API-запросы — пользователи могут добавлять, выполнять и удалять ежедневные задачи.",
          tags: ["Next.js", "TypeScript", "Tailwind CSS", "API"],
          githubLink: "https://github.com/shohruhraimboyev/next-todo-app",
          liveLink: "https://next-todo-app-flame-ten.vercel.app",
        },
        {
          title: "CRM Admin Panel",
          image: "/images/projects/crm.png",
          description:
            "Панель администратора на Next.js, TypeScript, TanStack Query и shadcn/ui для управления клиентами, заказами и внутренними данными. Примечание: интерфейс сейчас не полностью работает, так как backend был полностью отключён его владельцем — прошу обратить внимание именно на код этого проекта.",
          tags: ["Next.js", "TypeScript", "TanStack Query", "API", "shadcn/ui"],
          githubLink:
            "https://github.com/shohruhraimboyev/CRM-admin-panel-exam",
            liveLink: "https://crm-exam-shohruh.vercel.app",
        },
      ],
    },
    exp: {
      prof: "Практический опыт",
      edu: "Образование",
      items: [
        {
          role: "Frontend разработчик",
          company: "Практические проекты",
          duration: "По настоящее время",
          description:
            "Хотя у меня пока нет официального опыта работы на коммерческих проектах, я постоянно работаю над практическими проектами для непрерывного улучшения своих знаний и навыков.",
        },
      ],
      education: [
        {
          degree: "Курс Frontend разработки (8 месяцев)",
          school: "Najot Ta'lim",
          duration: "04.07.2025 - 27.02.2026",
          description:
            "Успешно завершил 8-месячный курс frontend-разработки и получил специализированный сертификат.",
        },
      ],
      languages: {
        title: "Языки",
        items: [
          { name: "Узбекский", level: "Родной" },
          { name: "Русский", level: "Начальный" },
          { name: "Японский", level: "A1 (Изучаю)" },
        ],
      },
    },
    contact: {
      title: "Отправить сообщение",
      desc: "Есть проект на уме или хотите сотрудничать? Свяжитесь со мной через форму ниже.",
      name: "Ваше имя",
      email: "Ваша почта",
      subj: "Тема",
      msg: "Ваше сообщение",
      send: "Отправить",
    },
    footer: "Сделано с React и Tailwind",
  },
};
