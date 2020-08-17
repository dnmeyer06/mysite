const workTemplate =
  "{{#workExperience}}" +
  '<div class="work">' +
  '<a class="{{logo}}" href="{{url}}" target="_blank"> </a >' +
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
      logo: "pp-logo",
      url: "https://prodperfect.com/",
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
      contentBlocks: [
        {
          imgSrc: "./images/pp/pp-1.png",
          headerPoint: "PP Point 1",
          bodyPoint:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvehicula lacinia placerat. Aliquam dapibus consectetur nibh quis lacinia. Integer eleifend nec risus at dignissim. Mauris a posuere erat, nec luctus tellus. Donec quis tincidunt mi, eget lobortis odio. Donec at feugiat mauris. Vestibulum mollis, enim id lobortis malesuada, dui dolor.",
        },
        {
          imgSrc: "./images/pp/pp-2.png",
          headerPoint: "PP Point 2",
          bodyPoint:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvehicula lacinia placerat. Aliquam dapibus consectetur nibh quis lacinia. Integer eleifend nec risus at dignissim. Mauris a posuere erat, nec luctus tellus. Donec quis tincidunt mi, eget lobortis odio. Donec at feugiat mauris. Vestibulum mollis, enim id lobortis malesuada, dui dolor.",
        },
        {
          imgSrc: "./images/pp/pp-3.png",
          headerPoint: "PP Point 3",
          bodyPoint:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvehicula lacinia placerat. Aliquam dapibus consectetur nibh quis lacinia. Integer eleifend nec risus at dignissim. Mauris a posuere erat, nec luctus tellus. Donec quis tincidunt mi, eget lobortis odio. Donec at feugiat mauris. Vestibulum mollis, enim id lobortis malesuada, dui dolor.",
        },
      ],
    },
    {
      logo: "mm-logo",
      url: "https://www.massmutual.com/",
      tools: [{ tool: "React" }, { tool: "SASS" }, { tool: "Cloud-CMS" }],
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
    },
    {
      logo: "epfr-logo",
      url:
        "https://financialintelligence.informa.com/products-and-services/data-analysis-and-tools/epfr",
      tools: [
        { tool: "Vue.js" },
        { tool: "SASS" },
        { tool: "Jquery" },
        { tool: "Adobe-Illustrator" },
      ],
      contentBlocks: [
        {
          imgSrc: "./images/epfr/epfr-1.jpg",
          headerPoint: "EPFR Point 1",
          bodyPoint:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvehicula lacinia placerat. Aliquam dapibus consectetur nibh quis lacinia. Integer eleifend nec risus at dignissim. Mauris a posuere erat, nec luctus tellus. Donec quis tincidunt mi, eget lobortis odio. Donec at feugiat mauris. Vestibulum mollis, enim id lobortis malesuada, dui dolor.",
        },
        {
          imgSrc: "./images/epfr/epfr-2.jpg",
          headerPoint: "EPFR Point 2",
          bodyPoint:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sedvehicula lacinia placerat. Aliquam dapibus consectetur nibh quis lacinia. Integer eleifend nec risus at dignissim. Mauris a posuere erat, nec luctus tellus. Donec quis tincidunt mi, eget lobortis odio. Donec at feugiat mauris. Vestibulum mollis, enim id lobortis malesuada, dui dolor.",
        },
      ],
    },
  ],
};

const loadTemplate = () => {
  const output = Mustache.render(workTemplate, workData);
  document.getElementById("my-work").innerHTML = output;
};
