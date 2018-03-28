/*
Qual é a quantidade de pokemons por tipo ?
*/
db.pokemons.aggregate([
    {
        $group: {
            _id: '$Type 1',
            quantidade: {$sum: 1}
        }
    }
])