import { ApolloClient, InMemoryCache } from "@apollo/client"; 

export const client = new ApolloClient({ 
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4oouwdj0pze01z46iuegbqq/master', 
  cache: new InMemoryCache() 
})