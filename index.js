// const express=require("express");  //import express if type:commonjs
import express, { request, response }  from "express";  // import express if type:module
import { Db, MongoClient } from "mongodb";
import dotenv from 'dotenv';
import { moviesRouter } from "./routes/movies.js";
import cors from 'cors'

dotenv.config();

const app=express();

const PORT=process.env.PORT; //heroku will auto assign available port

app.use(cors());
 app.use(express.json()) //every request inbody is json ,so its inbuild middleware



// const movies=[
//     {"id":"100",
//     "name":"Iron man 2",
//     "poster":"https://m.media-amazon.com/images/M/MV5BMTM0MDgwNjMyMl5BMl5BanBnXkFtZTcwNTg3NzAzMw@@._V1_FMjpg_UX1000_.jpg",
//     "rating":7,
//     "summary":"With the world now aware that he is Iron Man, billionaire inventor Tony Stark (Robert Downey Jr.) faces pressure from all sides to share his technology with the military. He is reluctant to divulge the secrets of his armored suit, fearing the information will fall into the wrong hands. With Pepper Potts (Gwyneth Paltrow) and Rhodes (Don Cheadle) by his side, Tony must forge new alliances and confront a powerful new enemy.",
//     "trailer":"https://www.youtube.com/embed/wKtcmiifycU",
//     language:"english"
//     },

//     {"id":"101",
//     "name":"No Country for Old Men",
//     "poster":"https://upload.wikimedia.org/wikipedia/en/8/8b/No_Country_for_Old_Men_poster.jpg",
//     "rating":8.1,
//     "summary":"A hunter's life takes a drastic turn when he discovers two million dollars while strolling through the aftermath of a drug deal. He is then pursued by a psychopathic killer who wants the money.",
//     "trailer":"https://www.youtube.com/embed/38A__WT3-o0",
//     language:"english"
//      },
     
//      {"id":"102",
//      "name":"Jai Bhim",
//      "poster":"https://m.media-amazon.com/images/M/MV5BY2Y5ZWMwZDgtZDQxYy00Mjk0LThhY2YtMmU1MTRmMjVhMjRiXkEyXkFqcGdeQXVyMTI1NDEyNTM5._V1_FMjpg_UX1000_.jpg",
//      "summary":"A tribal woman and a righteous lawyer battle in court to unravel the mystery around the disappearance of her husband, who was picked up the police on a false case",
//      "rating":8.8,
//      "trailer":"https://www.youtube.com/embed/nnXpbTFrqXA",
//      language:"tamil"
//     },
    
//     {"id":"103",
//     "name":"The Avengers",
//     "rating":8,
//     "summary":"Marvel's The Avengers (classified under the name Marvel Avengers\n Assemble in the United Kingdom and Ireland), or simply The Avengers, is\n a 2012 American superhero film based on the Marvel Comics superhero team\n of the same name.",
//     "poster":"https://terrigen-cdn-dev.marvel.com/content/prod/1x/avengersendgame_lob_crd_05.jpg",
//     "trailer":"https://www.youtube.com/embed/eOrNdBpGMv8",
//     language:"english"
//     },
    
//     {"id":"104",
//     "name":"Interstellar",
//     "poster":"https://m.media-amazon.com/images/I/A1JVqNMI7UL._SL1500_.jpg",
//     "rating":8.6,"summary":"When Earth becomes uninhabitable in the future, a farmer and ex-NASA\n pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team\n of researchers, to find a new planet for humans.",
//     "trailer":"https://www.youtube.com/embed/zSWdZVtXT7E",
//     language:"english"
//     },
    
//     {"id":"105",
//     "name":"Baahubali",
//     "poster":"https://flxt.tmsimg.com/assets/p11546593_p_v10_af.jpg",
//     "rating":8,
//     "summary":"In the kingdom of Mahishmati, Shivudu falls in love with a young warrior woman. While trying to woo her, he learns about the conflict-ridden past of his family and his true legacy.",
//     "trailer":"https://www.youtube.com/embed/sOEg_YZQsTI",
//     language:"hindi"
//      },
     
//      {"id":"106",
//      "name":"Ratatouille",
//      "poster":"https://resizing.flixster.com/gL_JpWcD7sNHNYSwI1ff069Yyug=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzc4ZmJhZjZiLTEzNWMtNDIwOC1hYzU1LTgwZjE3ZjQzNTdiNy5qcGc=",
//      "rating":8,
//      "summary":"Remy, a rat, aspires to become a renowned French chef. However, he fails to realise that people despise rodents and will never enjoy a meal cooked by him.",
//      "trailer":"https://www.youtube.com/embed/NgsQ8mVkN8w",
//      language:"english"
//     }];

    // mongodb+srv://renuka:<password>@cluster0.4sqcd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

    // const MONGO_URL="mongodb://localhost"; // define the mongo url

    // const MONGO_URL="mongodb+srv://renuka:welcome123@cluster0.4sqcd.mongodb.net"
    //to hide password we install dotenv 

    const MONGO_URL=process.env.MONGO_URL;

    async function createConnection(params) {
        const client =new MongoClient(MONGO_URL);  //ASIGN URL 
        await client.connect();  // connect ,it will return permise ,so used async await
        console.log("Mongodb connected");
        return client;
    }

    export const client=await createConnection(); //call the function and wii get client which we can use

app.get("/",(request,response)=>{
    response.send("hello😊!!😊!");
});
 
app.use("/movies",moviesRouter)

const reciepes=[
    {name:"Biryani",
     pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCWMpeGxyNE1jVjX1UfyOBspCrcSvDu0bq4Q&usqp=CAU"
   },
    {name:"Pareen Masala",
     pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT06llP9dJomDH55rwKiJT6DMMfeJ2SzWScNA&usqp=CAU"
   },
    {name:"Tandoori",
     pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE20sYnAOsX0aczYC2eGGslSALVodro5U46w&usqp=CAU"
   },
    {name:"Parotha shwarma",
     pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRa8qXYFXuPE6ccSW_nRjl3HMj4YNqR1PyDeQ&usqp=CAU"
   },
    {name:"Gobi monchurian",
     pic:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRi_PTT8ughHlFC44SSdPXeKb--jOoop4dXkA&usqp=CAU"
   }
  ];

  app.get("/recipes",async(request,response)=>{
      const data=await client.db("b28wd").collection("recipes").find({}).toArray()
      response.send(data);
  })

  app.post("/recipes",async(request,response)=>{
      const data=request.body
      const result=await client.db("b28wd").collection("recipes").insertMany(data);
      response.send(data);
  })

app.listen(PORT,()=>console.log("app is started in ",PORT));


