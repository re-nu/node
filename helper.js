import { client } from "./index.js";

 async function updateMovieById(id, data) {
    //db.movies.updateOne({id:"102"},{$set:data});
    return await client.db("b28wd").collection("movies").updateOne({ id: id }, { $set: data });
}
 async function deleteById(id) {
    //db.movies.deleteOne({id:id})
    return await client.db("b28wd").collection("movies").deleteOne({ id: id });
}
 async function getMovieByid(id) {
    // db.movies.findOne({id:"102"}) // mongo command to get movie of id 102
    return await client
        .db("b28wd")
        .collection("movies")
        .findOne({ id: id });
}
 async function createMovies(data) {
    //create movies-db.movies.insertMany(data)
    return await client.db("b28wd").collection("movies").insertMany(data);
}
 async function getAllmovies(filter) {
    //db.movies.find({})
    return await client.db("b28wd").collection("movies").find(filter).toArray();
}

export { getAllmovies, createMovies, getMovieByid, updateMovieById, deleteById };