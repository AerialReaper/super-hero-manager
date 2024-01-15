const jsonServer = require('json-server');
const middleware = jsonServer.defaults();
const server = jsonServer.create();

server.use(middleware);
server.use(jsonServer.bodyParser);
const heroesData = require('../server/data/heros');
let idGenerator = heroesData.getHeroes.data.heroes.length;

server.get('/api/getAllHeroes', (req, res, next) => {
    res.status(200).send(heroesData.getHeroes);
});

server.post('/api/getHeroById', (req, res, next) => {
    console.log(heroesData.getHeroes.data)
    console.log(heroesData.getHeroes.data.heroes[req.body.id])
    res.status(200).send(heroesData.getHeroes.data.heroes.find( hero => hero.id === req.body.id));
});

server.post('/api/getHeroesByName', (req, res, next) => {
    const response = heroesData.getHeroes.data.heroes.filter(hero => hero.name.toLowerCase().includes(req.body.search.toLowerCase()))
    res.status(200).send(response);
});

server.post('/api/addNewHero', (req, res, next) => {
    const hero = {
        id: (idGenerator++).toString(),
        name : req.body.heroName.toUpperCase()
    }
    heroesData.getHeroes.data.heroes.push(hero)
    setTimeout(() =>{
        res.status(201).send(hero);
    }, "2000");
});

server.post('/api/modifyHero', (req, res, next) => {
    const hero = heroesData.getHeroes.data.heroes[req.body.hero.id];
    hero.name = req.body.hero.name.toUpperCase();
    setTimeout(() =>{
        res.status(201).send(hero);
    }, "2000");
});

server.delete('/api/deleteHero', (req, res, next) => {
    const index = heroesData.getHeroes.data.heroes.map( hero => hero.id).indexOf(req.body.id);
    heroesData.getHeroes.data.heroes.splice(index, 1);
    res.status(201).send(heroesData.getHeroes);
});

server.listen(3000, () => {
    console.log('JSON server listening on port 3000');
});