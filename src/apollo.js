import ApolloClient from "apollo-boost";

const client = new ApolloClient({
    uri: "https://movieql.now.sh/",
    resolvers: {
        Movie:{
            isLiked: () => false
        },
        Mutation: {
            togglelikeMovie: (_, {id, isLiked}, {cache}) => {
                cache.writeData({id:`Movie:${id}`, data:{isLiked:!isLiked}})
            }
        }
    }
})


export default client;
