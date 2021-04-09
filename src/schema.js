import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "/resolvers";

// definición de tipos
const typeDefs = `

    type Query {
        hello: string
    }

`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
     : resolvers
})