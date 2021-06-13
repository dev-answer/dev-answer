export default `
type Category {
  title: String! 
}

type Query {
  allCategories: [Category!]!
}
`;
