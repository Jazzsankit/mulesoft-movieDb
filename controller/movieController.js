const { v4: uuidv4 } = require('uuid');
const connection = require('../model/dBconnection');

function createMoviePromisified(movieObj){
    return new Promise(function(resolve,reject){
        let {pid,name,actor,actress,director,year } = movieObj;
        let  sql = `INSERT INTO movie(id ,name, actor, actress, director, year) VALUES ( '${pid}' , '${name}', '${actor}' , '${actress}' , '${director}' , '${year}')`
        console.log(sql);
        connection.query(sql , function(error , data){
           if(error){
               reject(error);
           }
           else{
               resolve(data);
           }
    })
})
}

//for inserting movies details
async function createMovie(req,res){
    try {
        let pid=uuidv4();
        // console.log(res.body)
        const {name,actor,actress,director,year} = req.body;
        let postObject = {
            pid,
            name,
            actor,
            actress,
            director,
            year
        }
        let data = await createMoviePromisified(postObject);
        // console.log(data);
        res.status(200).json({
            message:"Movie created!!",
            data
        })
    } catch (error) {
        console.log(error)
        res.json({
            message:"failed to create movie",
            error
        })
    }
}

//for getting all movies details

async function allMovieDetails(req,res){
    let sql=`Select * from movie`;
    connection.query(sql,function(error,data){
        if(error){
            res.json({
                message:"unable to get all details",
                error
            })
        } else{
            res.status(200).json({
                message:"all movie details !!",
                data
            })
        }
    }) 

}

//for getting specific movie details
async function getMovieById(req,res){
    const uid = req.params.uid;
    const sql = `select * from movie where id='${uid}'`
    connection.query(sql,function(error,data){
        if(error){
            res.json({
                message:"unable to get movie details", 
                error
            })
        } else{
            res.status(200).json({
                message:"got movie details !!",
                data
            })
        }
    })
}


module.exports.createMovie = createMovie;
module.exports.getMovieById = getMovieById;
module.exports.allMovieDetails = allMovieDetails;