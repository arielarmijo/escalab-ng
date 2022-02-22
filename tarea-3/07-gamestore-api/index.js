const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const port = 3001;
const app = express();

const games = [
  {
    name: 'Super Mario Kart',
    description: 'Juego de aventuras',
    platform: 'Nintendo',
    img: './assets/images/mariokart.jpg'
  },
  {
    name: 'Gran turismo',
    description: 'Juego de carreras',
    platform: 'PlayStation',
    img: './assets/images/gt.jpg'
  },
  {
    name: 'GTA',
    description: 'Juego de aventuras',
    platform: 'Todas las plataformas',
    img: './assets/images/gta.jpg'
  },
  {
    name: 'Mortal Kombat',
    description: 'Juego de peleas',
    platform: 'Todas las plataformas',
    img: './assets/images/mk.jpg'
  },
  {
    name: 'Pokemon',
    description: 'Juego de estrategia y aventura',
    platform: 'Nintendo Switch',
    img: './assets/images/pokemon.jpg'
  }
];

app.use(cors({
  origin: '*'
}));

app.use(bodyParser.json());

app.get('/products', function (req, res) {
  res.send({
    code: 200,
    error: false,
    message: games
  });
});

app.get('/product/:id', function (req, res) {
  const { id } = req.params;
  const game = games[id];
  let response;
  if (game) {
    response = {
      code: 200,
      error: false,
      message: game
    };
  } else {
    response = {
      code: 404,
      error: false,
      message: 'No existe juego con id ' + id
    };
    res.status(404);
  }
  res.send(response);
});

app.post('/product', function (req, res) {
  const { name, description, platform, img } = req.body;
  let response;
  if (!name || !description || !platform || !img) {
    response = {
      code: 400,
      error: true,
      message: 'Falta informacion sobre el juego'
    };
    res.status(400);
  } else {
    games.push({ name, description, platform, img });
    response = {
      code: 201,
      error: false,
      message: 'Juego creado exitosamente.'
    };
    res.status(201);
  }
  res.send(response);
});

app.put('/product/:id', function (req, res) {
  const { id } = req.params;
  const game = games[id];
  let response;
  if (game) {
    const { name: newName, description: newDescription, platform: newPlatform, img: newImg } = req.body;
    const { name: oldName, description: oldDescription, platform: oldPlatform, img: oldImg } = game;
    game.name = newName ?? oldName;
    game.description = newDescription ?? oldDescription;
    game.platform = newPlatform ?? oldPlatform;
    game.img = newImg ?? oldImg;
    response = {
      code: 200,
      error: false,
      message: game
    };
  } else {
    response = {
      code: 404,
      error: false,
      message: 'No existe el juego con id ' + id
    };
    res.status(404);
  }
  res.send(response);
});

app.delete('/product/:id', function (req, res) {
  const { id } = req.params;
  const game = games[id];
  let response;
  if (game) {
    games.splice(id, 1);
    response = {
      code: 200,
      error: false,
      message: 'Juego eliminado'
    };
  } else {
    response = {
      code: 404,
      error: false,
      message: 'No existe el juego con id ' + id
    };
    res.status(404);
  }
  res.send(response);
});

app.listen(port, () => {
  console.log('Game Store API running in port ' + port);
});