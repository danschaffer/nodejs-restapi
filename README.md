customer-service node app
=========================
Projects from Building [Node.js REST API book](https://www.amazon.com/Building-Node-js-REST-API-Approach-ebook/dp/B07G34CXPQ/ref=sr_1_2?s=digital-text&ie=UTF8&qid=1539558417&sr=1-2&keywords=nodejs&dpID=41tSX0GBYvL&preST=_SY445_QL70_&dpSrc=srch)

initial setup
-------------

~~~~
docker pull mongo
docker pull node

docker run -it --name node -p 3000:3000 node bash
apt-get update
npm install express-generator -g
express customer-service
cd customer-service
npm install
npm audit-fix
npm start
~~~~
