// var items = db.pokemons.find({ HP: {$gte: 40}}, {_id: 0, Name: 1, HP: 1}).skip(0).limit(100).sort({Name: 1})
// items.forEach(item => {
//     item.nome = item.Name
//     delete item.Name
//     printjson(item)
// })
 
db.pokemons.aggregate([
    {
        $match: {HP: {$gte: 40}},

    }, 
    {
        $project: {
            _id: 0,
            HP: 1,
            nome: '$Name'
        }
    },
    { 
        $skip: 0
    }, 
    {
        $limit: 100
    },
    {
        $sort: {nome: 1}
    }
])