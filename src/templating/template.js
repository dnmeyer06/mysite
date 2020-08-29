const workTemplate =
  '<div class="section-header">' +
  "<h2>Professional Experience</h2>" +
  "</div>" +
  "{{#workExperience}}" +
  '<div class="work {{prefix}}-work">' +
  "<div>" +
  '<a class="{{prefix}}-logo" href="{{url}}" target="_blank"> </a >' +
  '<h2 class="position">{{position}}</h2>' +
  "{{ #contentBlocks }}" +
  '<div class="content-block">' +
  '<img src="{{imgSrc}}" />' +
  '<div class="text-content">' +
  "<p>{{ bodyPoint }}</p>" +
  "</div>" +
  "</div>" +
  "{{ / contentBlocks}}" +
  '<div class="tools-used">' +
  "<h2>Tools Used:</h2 >" +
  "{{ #tools }}" +
  '<img src="./images/{{tool}}.png" alt="{{tool}}" title="{{tool}}">' +
  "{{/ tools}}" +
  "</div>" +
  "<hr>" +
  "</div>" +
  "</div>" +
  "{{/ workExperience}}";

const workData = {
  workExperience: [
    {
      url: "https://prodperfect.com/",
      position: "Product Engineer",
      prefix: "pp",
      contentBlocks: [
        {
          imgSrc: "./images/pp-1.png",
          headerPoint: "Built tools that benefited customer experience",
          bodyPoint:
            "Contributed to architecting and developing, from the ground up, a web app that gave customers insight into how our service was benefiting their development efforts.",
        },
        {
          imgSrc: "./images/pp-2.png",
          headerPoint: "Created systems to increase internal efficiency",
          bodyPoint:
            "Built internal CI system to serve as an operations hub to reduce overhead costs of external services and increase the efficiency of customer support teams.",
        },
        {
          imgSrc: "./images/pp-3.png",
          headerPoint: "PP Point 3",
          bodyPoint:
            "Conducted user interviews and synthesized findings into action items for the development team.",
        },
      ],
      tools: [
        { tool: "react" },
        { tool: "aws" },
        { tool: "serverless" },
        { tool: "testcafe" },
        { tool: "terraform" },
        { tool: "nodejs" },
        { tool: "auth0" },
        { tool: "jest" },
        { tool: "ant-design-react-ui" },
      ],
    },
    {
      url: "https://www.massmutual.com/",
      position: "Software Engineer",
      prefix: "mm",
      contentBlocks: [
        {
          imgSrc: "./images/mm-1.png",
          headerPoint: "MM Point 1",
          bodyPoint:
            "Designed and built front-end components focusing on stability and versatility used across MassMutual branded sites.",
        },
        {
          imgSrc: "./images/mm-2.png",
          headerPoint: "MM Point 2",
          bodyPoint:
            "Integrated front end HTML and SCSS components with Cloud CMS content management system templates, enabling content creators to spin up new sites with minimum engineering involvement and increase speed of content ideation.",
        },
        {
          imgSrc: "./images/mm-3.png",
          headerPoint: "MM Point 3",
          bodyPoint:
            "Contributed to boilerplate content catalogue adhering to styling and coding standards.",
        },
      ],
      tools: [{ tool: "react" }, { tool: "sass" }, { tool: "cloud-cms" }],
    },
    {
      url:
        "https://financialintelligence.informa.com/products-and-services/data-analysis-and-tools/epfr",
      position: "UI Engineer",
      prefix: "epfr",
      contentBlocks: [
        {
          imgSrc: "./images/epfr-1.png",
          headerPoint: "EPFR Point 1",
          bodyPoint:
            "Executed and contributed to full-stack web development projects, with an emphasis on front end features.",
        },
        {
          imgSrc: "./images/epfr-2.png",
          headerPoint: "EPFR Point 2",
          bodyPoint:
            "Designed and built new customer facing portal hosting multiple products from initial wireframe through release.",
        },
      ],
      tools: [
        { tool: "vuejs" },
        { tool: "sass" },
        { tool: "jquery" },
        { tool: "adobe-illustrator" },
      ],
    },
  ],
};

export const loadTemplate = () => {
  const output = Mustache.render(workTemplate, workData);
  document.getElementById("my-work").innerHTML = output;
};
