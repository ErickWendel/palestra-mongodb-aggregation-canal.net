//6 - A partir dos primeiros 3000 registros, traga o pokemon do tipo bug e HP maior ou igual a 70 ou tipo Fire e HP maior ou igual a 40 com maior numero de participações em combates.

// db.combats.count({$or: [{ First_pokemon: 140}, {Second_pokemon: 140}]})
db.combats.aggregate(
    [
        { $limit: 3000 },
        {
        $lookup: {
            from: "pokemons",
            localField: "First_pokemon",
            foreignField: "#",
            as: "First_pokemon",
        },
        },
    
        {
        $lookup: {
            from: "pokemons",
            localField: "Second_pokemon",
            foreignField: "#",
            as: "Second_pokemon",
        },
        },
        {
        $match: {
            $or: [
            { "First_pokemon.Type 1": "Bug", "First_pokemon.HP": { $gte: 70 } },
            { "Second_pokemon.Type 1": "Fire", "Second_pokemon.HP": { $gte: 40 } },
            ],
        },
        },
        {
        $project: {
            items: { $concatArrays: ["$First_pokemon", "$Second_pokemon"] },
        },
        },
        {
        $unwind: "$items",
        },
        {
        $project: {
            nome: "$items.Name",
            id: "$items._id",
        },
        },
        // etapa que rodará por todos os registros e fazer a contagem de vezes que aparece
        {
        $group: {
            _id: "$nome",
            count: { $sum: 1 },
        },
        },
        { $sort: { count: -1 } },
        { $limit: 1 },
        
    ]
).pretty();