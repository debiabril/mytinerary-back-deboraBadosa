const controller = {
    getCities: (req, res) => {
        console.log(req);
        res.send("Estás en Cities");
        res.json({
            cities:[
                {name:'Roma'},
                {name: 'Tokyo'},
            ]
        });
    },
    postCities: () => {}, 
    deleteCities: () => {},
}
export default controller;