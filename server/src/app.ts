import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';

import { resolvers, typeDefs } from './services';

const PORT = 3000;

const schema = makeExecutableSchema({
  resolvers,
  typeDefs,
});

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true,
}));

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Example app listening at http://localhost:${PORT}/graphql`);
});