import { url } from 'inspector';
import { cwd } from 'process';

//  outputDir = cwd()

const getLoadUrl = (linkName) => {
  const urlLink = new URL(linkName);
  const getHost = `${urlLink.host}/${urlLink.pathname}`;
  const reg = /[^a-zA-z0-9]/gi;
  const filteredUrl = getHost.split(reg).filter((item) => item !== '').join('-');
  const res = `${filteredUrl}.html`;
  console.log(res);
};

export default getLoadUrl;
//  https://github.com/Nesaq/backend-project-lvl3 + .html;
