/*
    1 - Qual é a o nome dos pokemons com a velocidade menor que 60 ?
*/
db.pokemons.aggregate([
    {$match: {Speed: {$lt: 60}}},
    {$project: {'Name': 1, '_id': 0}}
])	