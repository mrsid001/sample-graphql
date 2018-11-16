const graphql = require ('graphql');
const _ = require ('lodash');
const { GraphQLObjectType, GraphQLString, GraphQLSchema } = graphql;

var books = [
{ name:'BookName1', genre:'Thriller', id:'1', author:'Mark Joe'},
{ name:'BookName2', genre:'Horror', id:'2', author:'Henry Park'},
{ name:'BookName3', genre:'Romance', id:'3', author:'Julia Robert'},
{ name:'BookName4', genre:'Suspense', id:'4', author:'John Anthony'}
];


const BookType = new GraphQLObjectType({
name: 'Book',
fields: () => ({
id: { type: GraphQLString},
name: { type: GraphQLString},
genre: { type: GraphQLString},
author: { type: GraphQLString}
    })
});

const RootQuery = new GraphQLObjectType ({
name: 'RootQueryType',
fields: {
book: {
type: BookType,
args: {id: {type: GraphQLString }},
resolve(parent,args){
// code to get data from DB or other source

return _.find(books, { id: args.id });



}
}
}
});
module.exports = new GraphQLSchema({
query: RootQuery
});