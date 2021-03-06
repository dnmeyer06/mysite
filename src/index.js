import { loadTemplate } from './templating/template';
import './styles/scss/style.scss';

//image imports
import pp1 from './images/pp-1.jpg';
import pp2 from './images/pp-2.jpg';
import pp3 from './images/pp-3.jpg';
import mm1 from './images/mm-1.jpg';
import mm2 from './images/mm-2.jpg';
import mm3 from './images/mm-3.jpg';
import epfr1 from './images/epfr-1.jpg';
import epfr2 from './images/epfr-2.jpg';

//tool logo imports
import adobe from './images/adobe-illustrator.png';
import antD from './images/ant-design-react-ui.png';
import auth0 from './images/auth0.png';
import aws from './images/aws.png';
import cloudCMS from './images/cloud-cms.png';
import jest from './images/jest.png';
import jquery from './images/jquery.png';
import nodejs from './images/nodejs.png';
import react from './images/react.png';
import sass from './images/sass.png';
import serverless from './images/serverless.png';
import terraform from './images/terraform.png';
import testcafe from './images/testcafe.png';
import vuejs from './images/vuejs.png';
import resume from './Meyer, Daniel - Resume.pdf';

window.onload = (event) => {
  loadTemplate();
};
