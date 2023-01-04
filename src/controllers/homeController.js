let getHomePage = (req,res)=>{
    return res.send("hello word") ;
}

module.exports = {
    getHomePage:getHomePage,
}