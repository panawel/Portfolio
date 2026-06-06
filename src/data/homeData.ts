export interface HomeData {
  hero: {
    title: string;
    subtitle: string;
    milestone: string;
    description: string;
  };
  about: string[];
  stack: {
    categoryTitle: string;
    items: { icon: string; name: string }[];
  }[];
  certificates: {
    title: string;
    provider: string;
    media: { type: 'image' | 'video'; src: string }[];
  }[];
}

export const homeData: HomeData = {
  hero: {
    title: "Idan Pnuel",
    subtitle: "QA Engineer",
    milestone: "8+ Years QA Experience",
    description: "Specializing in reducing bug life cycles and optimizing workflows with AI tools."
  },
  about: [
    "I specialize in reducing bug life cycles and optimizing workflows with AI tools.",
    "Always eager to master new technologies and tackle dynamic challenges.",
    "When I'm not testing, I'm exploring new tech & gaming."
  ],
  stack: [
    {
      categoryTitle: "Test Docs & Bugs Tracking",
      items: [
        { icon: "/media/symbols/myStack/stp.svg", name: "STP" },
        { icon: "/media/symbols/myStack/std.svg", name: "STD" },
        { icon: "/media/symbols/myStack/str.svg", name: "STR" },
        { icon: "/media/symbols/myStack/jira.svg", name: "Jira" },
        { icon: "/media/symbols/myStack/Notion.svg", name: "Notion" },
        { icon: "/media/symbols/myStack/asana.svg", name: "Asana" }
      ]
    },
    {
      categoryTitle: "Automation Tools",
      items: [
        { icon: "/media/symbols/myStack/playwright.svg", name: "Playwright" },
        { icon: "/media/symbols/myStack/pytest.svg", name: "Pytest" },
        { icon: "/media/symbols/myStack/appium.svg", name: "Appium" },
        { icon: "/media/symbols/myStack/maestro.svg", name: "Maestro" }
      ]
    },
    {
      categoryTitle: "Programming",
      items: [
        { icon: "/media/symbols/myStack/Python1.svg", name: "Python" },
        { icon: "/media/symbols/myStack/javascript.svg", name: "JavaScript" },
        { icon: "/media/symbols/myStack/html.svg", name: "HTML" },
        { icon: "/media/symbols/myStack/CSS3.svg", name: "CSS" },
        { icon: "/media/symbols/myStack/git.svg", name: "Git" },
        { icon: "/media/symbols/myStack/sourcetree.svg", name: "Sourcetree" }
      ]
    },
    {
      categoryTitle: "Backend Observability",
      items: [
        { icon: "/media/symbols/myStack/postman.svg", name: "Postman" },
        { icon: "/media/symbols/myStack/mongodb.svg", name: "MongoDB" },
        { icon: "/media/symbols/myStack/redis.svg", name: "Redis" },
        { icon: "/media/symbols/myStack/sql.svg", name: "SSMS" },
        { icon: "/media/symbols/myStack/Kibana1.svg", name: "Kibana" },
        { icon: "/media/symbols/myStack/trackjs-cropped.svg", name: "TrackJS" },
        { icon: "/media/symbols/myStack/snowflake.svg", name: "Snowflake" }
      ]
    }
  ],
  certificates: [
    {
      title: "QA Engineer Certification",
      provider: "'HackerU' College",
      media: [
        { type: 'image', src: "/media/certificates/QA Engineer Certification/20230710_233553.jpg" },
        { type: 'image', src: "/media/certificates/QA Engineer Certification/WhatsApp Image 2023-07-10 at 19.49.16.jpg" },
        { type: 'image', src: "/media/certificates/QA Engineer Certification/WhatsApp Image 2023-07-10 at 20.06.00.jpg" },
        { type: 'image', src: "/media/certificates/QA Engineer Certification/WhatsApp Image 2023-07-10 at 20.08.022.jpg" },
        { type: 'image', src: "/media/certificates/QA Engineer Certification/WhatsApp Image 2023-07-10 at 20.08.39.jpg" },
        { type: 'video', src: "/media/certificates/QA Engineer Certification/presenting_in_class.mp4" }
      ]
    },
    {
      title: "Certificate of Excellence",
      provider: "Channel 13 - News",
      media: [
        { type: 'image', src: "/media/certificates/Certificate of Excellence/2023-03-17 02_24_41.004+0200.jpg" },
        { type: 'image', src: "/media/certificates/Certificate of Excellence/IMG-20220405-WA0019.jpg" },
        { type: 'image', src: "/media/certificates/Certificate of Excellence/IMG-20220405-WA0021.jpg" },
        { type: 'image', src: "/media/certificates/Certificate of Excellence/IMG-20220405-WA0023.jpg" },
        { type: 'image', src: "/media/certificates/Certificate of Excellence/IMG-20220405-WA0028.jpg" },
        { type: 'image', src: "/media/certificates/Certificate of Excellence/WhatsApp Image 2023-04-09 at 11.20.04 (2).jpeg" },
        { type: 'image', src: "/media/certificates/Certificate of Excellence/WhatsApp Image 2023-05-11 at 00.45.27 (2).jpeg" }
      ]
    }
  ]
};
