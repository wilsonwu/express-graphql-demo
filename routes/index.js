var express = require('express');

var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');

var router = express.Router();

var schemaHello = buildSchema(`
  type Query {
    hello: String
  }
`);

var rootHello = {
  hello: () => {
    return 'Hello world!';
  },
};
/* GET home page. */
router.post('/hello', graphqlHTTP({
  schema: schemaHello,
  rootValue: rootHello,
  graphiql: true,
}));

module.exports = router;
