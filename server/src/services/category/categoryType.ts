export default `
type Category {
  id: ID!
  title: String! 
}

type Query {
  allCategories: [Category!]!
}
`;
