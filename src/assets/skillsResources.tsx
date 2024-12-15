
const companyLogos = {
  costar: "./company-logos/costarLogo.png",
  cognizant: "./company-logos/cognizantLogo.png",
  epic: "./company-logos/epicLogo.png",
  blackRocket: "./company-logos/blackRocketLogo.png",
}

export const certificationLinks = {
  ckad: "https://ti-user-certificates.s3.amazonaws.com/e0df7fbf-a057-42af-8a1f-590912be5460/0ffb04e7-7031-4883-a692-8019f819d71c-clayton-cunningham-125aff18-7f14-4013-afc3-a81f89250d0f-certificate.pdf",
  ccp: "https://www.credly.com/badges/c080e4ec-a0fb-4bae-8629-fc228c80250d/public_url",
  saa: "https://www.credly.com/badges/74623c57-82c0-4a0d-9cb1-dca0e87690d2/public_url",
}

export type Company = {
  id: string,
  title: string,
  location: string,
  dates: string,
  text: string[],
  logoSrc: string,
}

export const resumeCompanies = [
  {
    id: "1",
    title: "Full Stack Developer",
    location: "CoStar",
    dates: "01/2022 to present",
    text: [
      "Collaborated on full stack architecture and design across multiple teams",
      "Incorporated Javascript programs into scalable AWS Lambda functions",
      "Provided multithreaded bulk API services for faster response times in C#",
      "Maintained stable design monitoring with logging and auditing software",
      "Supported 95% automated coverage with E2E, unit tests, and load testing",
    ],
    logoSrc: companyLogos.costar,
  },
  {
    id: "2",
    title: "Interactive Developer",
    location: "Cognizant",
    dates: "10/2020 to 01/2022",
    text: [
      "Coding with JavaScript modules React.js and Node.js",
      "Built api server configurations for information retrieval",
      "Designed responsive front-end interfaces utilizing information requested from server",
    ],
    logoSrc: companyLogos.cognizant,
  },
  {
    id: "3",
    title: "Software Developer",
    location: "Epic Systems",
    dates: "12/2019 to 9/2020",
    text: [
      "Self-educated for C#, TypeScript, JavaScript, and Mumps",
      "Debugged requested edits and provided solutions for company code",
      "Worked with team to automate populating messages with relevant information",
      "Improved time management and communication skills during Covid-19 quarantine ",
    ],
    logoSrc: companyLogos.epic,
  },
  {
    id: "4",
    title: "Lead Coding Instructor",
    location: "Black Rocket Productions",
    dates: "5/2018 to 8/2018",
    text: [
      "Taught basic game design for over 100 students",
      "Facilitated teamwork and mitigated conflicts among groups",
      "Assisted implementation of a series of websites using JavaScript, HTML and CSS",
      "Identified errors in and instructed proper execution of Python, Lua, and Scratch",
    ],
    logoSrc: companyLogos.blackRocket,
  },
];

export const languages = [
  "Java",
  "C#",
  "Javascript",
  "TypeScript",
  "React.js",
  "Node.js",
  "HTML",
  "YAML",
  "CSS",
  "C",
  "C++",
  "Python",
  "Mumps",
]

export const software = [
  "Git",
  "AWS Lambda",
  "AWS S3",
  "AWS DynamoDB",
  "AWS Cloudwatch",
  "AWS IAM",
  "Kubernetes",
  "Docker",
  "Terraform",
  "Kafka",
  "Eclipse",
  "Visual Studio",
  "Datadog",
  "Snowflake",
  "Jest",
  "Cypress",
  "K6",
  "Rest API's",
]

export const business = [
  "Communication",
  "Organization",
  "Time Management",
  "Critical Thinking",
  "Attention to Detail",
  "Creativity",
  "Need Discovery",
  "Process Mangement",
]

export type ProjectDescription = {
  id: string,
  imageSrc: string,
  link?: string,
  githubLink?: string,
}

export const projectDescriptions = [
  {
    id: "1",
    imageSrc: "tactics.png",
    githubLink: "https://github.com/clayton-cunningham/Tactics",
  },
  {
    id: "2",
    imageSrc: "weather-widget/weatherBackground.jpg",
    link: "https://clayton-cunningham.github.io/weather/",
    githubLink: "https://github.com/clayton-cunningham/weather",
  },
  {
    id: "3",
    imageSrc: "portfolio.png",
    githubLink: "https://github.com/clayton-cunningham/reactPortfolio",
  },
  {
    id: "4",
    imageSrc: "placeRecorder.png",
    link: "https://fullstack-media-frontend.web.app/",
    githubLink: "https://github.com/clayton-cunningham/fullstack-media",
  },
];