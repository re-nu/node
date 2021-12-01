import express from 'express';
import { getAllmovies, createMovies, getMovieByid, updateMovieById, deleteById } from "../helper.js";
const router=express.Router();

router.get("/",async(request,response)=>{
    console.log(request.query);// get variable after ? i.e /movies?language=english it will return language:english
    //const {language,rating}=request.query;
    const filter=request.query;
    if(filter.rating){
        filter.rating=+filter.rating;
    }
    //console.log(language);

    // let filterMovies=movies;

    // if(language){
    //  filterMovies=filterMovies.filter(mv=>mv.language===language);
    // }
     
    // if(rating){
    //     filterMovies=filterMovies.filter(mv=>mv.rating===+rating);
    //    }

    //db.movies.find({})

    const filterMovies=await getAllmovies(filter); 
    // find method returns cursor i.e pagination , to convert it to array we did toArray                                                                       
    //  console.log(filterMovies);
    response.send(filterMovies);
});

router.post("/", async (request,response)=>{
    const data=request.body
    //create movies-db.movies.insertMany(data)
    const result= await createMovies(data);
    console.log(result)
    response.send(result)
});

router.get("/:id",async (request,response)=>{
    const {id}=request.params;  // to get id variable from url
    // console.log(id);
   
   const movie=await getMovieByid(id)  // client is async ,so use async await
    // const movie=movies.find(mv=>mv.id===id);  //to find the movie of matching id , if not found returns undefined
    movie?response.send(movie):response.status(404).send({msg:"no matching movie found"});
});

router.put("/:id",async(request,response)=>{
    console.log(request.params);
    const {id}=request.params;
    const data=request.body;
    
    const result=await updateMovieById(id, data);
    const movie=await getMovieByid(id);

    response.send(movie);
});

router.delete("/:id",async (request,response)=>{
    const {id}=request.params;

    const result=await deleteById(id);

    result.deletedCount>0?response.send(result):response.status(404).send({message:"no movie found of this id"});
});

export const moviesRouter=router;
