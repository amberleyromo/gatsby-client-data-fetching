module.exports = {
  siteMetadata: {
    title: 'Gatsby With Client Data Fetching',
    description:
      'A Gatsby example using a GraphQL query at buildtime, and client api request at runtime.',
    author: 'Gatsby Inkteam',
  },
  plugins: [
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'RMAPI',
        fieldName: 'rickAndMorty',
        url: 'https://rickandmortyapi-gql.now.sh/',
      },
    },
  ],
}
