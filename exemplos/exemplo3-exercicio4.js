/**
 * 4 - Qual é o nome e HP dos vencedores único de combates realizados ?
 */
db.combats.aggregate([
    {
        $lookup: {
            'from': 'pokemons',
            localField: 'Winner',
            foreignField: '#',
            as: 'pokemon'

        },
    },
    {	$unwind: '$pokemon'},
    {
        $project: {
            _id: 0,
            nome: '$pokemon.Name',
            hp: '$pokemon.HP',

        }
    }
    
]).pretty()