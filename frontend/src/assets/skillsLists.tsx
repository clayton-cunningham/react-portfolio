
export type Company = {
  id: string,
  title: string,
  location: string,
  dates: string,
  text: string[],
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
  },
];
