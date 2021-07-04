import {
  Environment, Network, RecordSource, Store,
} from 'relay-runtime';

const fetchGraphQL = async (query: any, variables: any) => {
  const SERVER_END_POINT = 'http://localhost:3000/graphql';

  try {
    const response = await fetch(SERVER_END_POINT, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
    });

    const data = await response.json();

    return data;
  } catch (err) {
    console.warn(err);
    return null;
  }
};

const fetchRelay = (params: any, variables: any) => fetchGraphQL(params.text, variables);

export default new Environment({
  network: Network.create(fetchRelay),
  store: new Store(new RecordSource()),
});
