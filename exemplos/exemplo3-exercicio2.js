/*
2 - Qual é o nome do pokemon, tipo Fire, que não é um pokemon lendario? ordene pela força de ataque
*/
db.pokemons.aggregate([
    {$match: {'Type 1': 'Fire', Legendary: 'False' }},
    {$project: {'Name': 1, _id: 0 }},
    {$sort: {Attack : 1 }},
])