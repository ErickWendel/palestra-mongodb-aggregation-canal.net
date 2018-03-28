//5 - Qual é o nome do pokemon com maior numero de vitorias ?
db.combats.aggregate([
    { 
      $group: {
        _id: '$Winner',
        quantidade: { $sum: 1},
      } 
    },

    {
      $sort: { quantidade: -1 }
    }, 
    { $limit: 1},
    {
      $lookup: {
      from: 'pokemons',
      localField: '_id',
      foreignField: '#',
      as: 'pokemon'
      } 
    },
    { $unwind: '$pokemon'},
    { 
      $project: {
        _id: 0,
        nome: '$pokemon.Name',
        quantidade: 1
      }
    }

  ]).pretty()  