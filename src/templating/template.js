const workTemplate =
  "{{#workExperience}}" +
  '<div class="work {{prefix}}-work">' +
  '<a class="{{prefix}}-logo" href="{{url}}" target="_blank"> </a >' +
  '<h2 class="position">{{position}}</h2>' +
  "{{ #contentBlocks }}" +
  '<div class="content-block">' +
  '<img src="{{imgSrc}}" alt="" />' +
  '<div class="text-content">' +
  "<h3>{{ headerPoint }}</h3>" +
  "<p>{{ bodyPoint }}</p>" +
  "</div>" +
  "</div >" +
  "{{ / contentBlocks}}" +
  '<div class="tools-used">' +
  "<h2>Tools Used:</h2 >" +
  "{{ #tools }}" +
  '<img src="/src/images/tool-logos/{{tool}}.png" alt="{{tool}}">' +
  "{{/ tools}}" +
  "</div >" +
  "</div >" +
  "<hr>" +
  "{{/ workExperience}}";

const workData = {
  workExperience: [
    {
      url: "https://prodperfect.com/",
      position: "Product Engineer",
      prefix: "pp",
      contentBlocks: [
        {
          imgSrc: "./images/pp/pp-1.png",
          headerPoint: "Built tools that benefited customer experience",
          bodyPoint:
            "Contributed to architecting and developing, from the ground up, a web app that gave customers insight into how our service was benefiting their development efforts.",
        },
        {
          imgSrc: "./images/pp/pp-2.png",
          headerPoint: "PP Point 2",
          bodyPoint:
            "Built internal CI system to serve as an operations hub to reduce overhead costs of external services and increase the efficiency of customer support teams.",
        },
        {
          imgSrc: "./images/pp/pp-3.png",
          headerPoint: "PP Point 3",
          bodyPoint:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvehicula lacinia placerat. Aliquam dapibus consectetur nibh quis lacinia. Integer eleifend nec risus at dignissim. Mauris a posuere erat, nec luctus tellus. Donec quis tincidunt mi, eget lobortis odio. Donec at feugiat mauris. Vestibulum mollis, enim id lobortis malesuada, dui dolor.",
        },
      ],
      tools: [
        { tool: "react" },
        { tool: "AWS" },
        { tool: "Serverless" },
        { tool: "TestCafe" },
        { tool: "Terraform" },
        { tool: "Node.js" },
        { tool: "Auth0" },
        { tool: "Jest" },
        { tool: "Ant-Design-React-UI" },
      ],
    },
    {
      url: "https://www.massmutual.com/",
      position: "Software Engineer",
      prefix: "mm",
      contentBlocks: [
        {
          imgSrc: "./images/massmutual/mm-1.png",
          headerPoint: "MM Point 1",
          bodyPoint:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvehicula lacinia placerat. Aliquam dapibus consectetur nibh quis lacinia. Integer eleifend nec risus at dignissim. Mauris a posuere erat, nec luctus tellus. Donec quis tincidunt mi, eget lobortis odio. Donec at feugiat mauris. Vestibulum mollis, enim id lobortis malesuada, dui dolor.",
        },
        {
          imgSrc: "./images/massmutual/mm-2.png",
          headerPoint: "MM Point 2",
          bodyPoint:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvehicula lacinia placerat. Aliquam dapibus consectetur nibh quis lacinia. Integer eleifend nec risus at dignissim. Mauris a posuere erat, nec luctus tellus. Donec quis tincidunt mi, eget lobortis odio. Donec at feugiat mauris. Vestibulum mollis, enim id lobortis malesuada, dui dolor.",
        },
        {
          imgSrc: "./images/massmutual/mm-3.png",
          headerPoint: "MM Point 3",
          bodyPoint:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvehicula lacinia placerat. Aliquam dapibus consectetur nibh quis lacinia. Integer eleifend nec risus at dignissim. Mauris a posuere erat, nec luctus tellus. Donec quis tincidunt mi, eget lobortis odio. Donec at feugiat mauris. Vestibulum mollis, enim id lobortis malesuada, dui dolor.",
        },
      ],
      tools: [{ tool: "React" }, { tool: "SASS" }, { tool: "Cloud-CMS" }],
    },
    {
      url:
        "https://financialintelligence.informa.com/products-and-services/data-analysis-and-tools/epfr",
      position: "UI Engineer",
      prefix: "epfr",
      contentBlocks: [
        {
          imgSrc: "./images/epfr/epfr-1.png",
          headerPoint: "EPFR Point 1",
          bodyPoint:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvehicula lacinia placerat. Aliquam dapibus consectetur nibh quis lacinia. Integer eleifend nec risus at dignissim. Mauris a posuere erat, nec luctus tellus. Donec quis tincidunt mi, eget lobortis odio. Donec at feugiat mauris. Vestibulum mollis, enim id lobortis malesuada, dui dolor.",
        },
        {
          imgSrc: "./images/epfr/epfr-2.png",
          headerPoint: "EPFR Point 2",
          bodyPoint:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvehicula lacinia placerat. Aliquam dapibus consectetur nibh quis lacinia. Integer eleifend nec risus at dignissim. Mauris a posuere erat, nec luctus tellus. Donec quis tincidunt mi, eget lobortis odio. Donec at feugiat mauris. Vestibulum mollis, enim id lobortis malesuada, dui dolor.",
        },
      ],
      tools: [
        { tool: "Vue.js" },
        { tool: "SASS" },
        { tool: "Jquery" },
        { tool: "Adobe-Illustrator" },
      ],
    },
  ],
};

const loadTemplate = () => {
  const output = Mustache.render(workTemplate, workData);
  document.getElementById("my-work").innerHTML = output;
};
