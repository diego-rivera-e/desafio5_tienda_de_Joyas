const express = require("express");
const app  = express();
const morgan = require("morgan");
const { getJoyas, getJoyasFiltros} = require("./consultas");

app.use(morgan("dev"))
app.use(express.json())

app.listen(3000, () => {
    console.log("listening on port 3000 http://localhost:3000 ")});

const  middleware= (req, res, next) => {
    const params = req.query
    if(Object.keys(params).length == 0) {
        res.status(500)({ message: "Hay un problema, viene vacio"});    
    }else{
        next();
    }
};

app.get("/joyas", middleware, async (req, res) => {
    try{
    const params = req.query;
    const data = await getJoyas(params)
    res.json(data);
    }catch(error) {
        res.status(500).json({ error: "Hay un problema"});
    }
});


app.get("/joyas/filtros", async (req, res) => {
    try{
    const params = req.query;
    const data = await getJoyasFiltros(params)
    res.json(data);
    }catch(error){
        res.status(500).json({ error: "Hay un problema"});
    }

})




