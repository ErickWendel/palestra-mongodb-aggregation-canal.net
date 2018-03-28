// IMPORTAÇÃO
// https://www.kaggle.com/terminus7/pokemon-challenge
/*
mongoimport -d pokemonChallenge -c pokemons --type csv --file pokemon.csv --headerline &&
mongoimport -d pokemonChallenge -c combats --type csv --file combats.csv --headerline &&
mongoimport -d pokemonChallenge -c tests --type csv --file tests.csv --headerline && 
mongo pokemonChallenge
*/

db.pokemons.find()
db.pokemons.findOne()
db.pokemons.find({'Type 1': 'Fire'}).pretty()
db.pokemons.find({ HP: {$gte: 40}}, {_id: 0, Name: 1, HP: 1})
db.pokemons.find({ HP: {$gte: 40}}, {_id: 0, Name: 1, HP: 1}).sort({Name: 1})
db.pokemons.find({ HP: {$gte: 40}}, {_id: 0, Name: 1, HP: 1}).skip(0).limit(100).sort({Name: 1})

// usando var apenas para poder colar varias vezes no terminal
var items = db.pokemons.find({ HP: {$gte: 40}}, {_id: 0, Name: 1, HP: 1}).skip(0).limit(100).sort({Name: 1})
items.forEach(item => {
    item.nome = item.Name
    delete item.Name
    printjson(item)
})
