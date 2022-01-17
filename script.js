const imagem1 = document.querySelector('#img1');
const imagem2 = document.querySelector('#img2');
const imagem3 = document.querySelector('#img3');
const botao = document.querySelector('#botao');
const nomeDoPersonagem1 = document.querySelector('#nome');
const nomeDoPersonagem2 = document.querySelector('#nome2');
const nomeDoPersonagem3 = document.querySelector('#nome3');
const especieDoPersonagem1 = document.querySelector('#especie');
const especieDoPersonagem2 = document.querySelector('#especie2');
const especieDoPersonagem3 = document.querySelector('#especie3');
const status1 = document.querySelector('#status');
const status2 = document.querySelector('#status2');
const status3 = document.querySelector('#status3');

gerarValorAleatorio = () => {
  return Math.floor(Math.random() * 671);
}

traduzidoCondicao = (data) =>
{
  if (data.status == 'Alive') 
  {
    return "Vivo";
  } 

  else if (data.status == 'Dead')
  {
    return "Morto";
  }
  
  else 
  {
    return "Desconhecido";
  }
}

traduzidoEspecie = (data) => {
  if (data.species == 'Human') {
    return "Humano";
  }

  else if (data.species == 'Humanoid') {
    return "Humanoide";
  }

  else if (data.species == 'Mythological Creature') {
    return "Criatura mitologica";
  }

  else if (data.species == 'Alien') {
    return "Alienigena";
  }

  else if (data.species == 'Animal') {
    return "Animal";
  }

  else if (data.species == 'Robot') {
    return "Robo";
  }

  else if (data.species == 'Cronenberg') {
    return "Cronenberg";
  }

  else if (data.species == 'Disease') {
    return "Doenca";
  }

  else if (data.species == 'Planet') {
    return "Planeta";
  }

  else if (data.species == 'Vampire') {
    return "Vampiro";
  }

  else {
    return "Especie dsconhecida";
  }
}

pegarPersonagem1 = () => {
  let numeroAleatorio = gerarValorAleatorio();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      "Content-type": 'application/json'
    }
  }).then((response) => response.json()).then((data) => {
    imagem1.src = data.image;
    imagem1.alt = data.name;
    nomeDoPersonagem1.innerHTML = data.name;
    especie.innerHTML = traduzidoEspecie(data);
    status1.innerHTML = traduzidoCondicao(data);
  });
}


pegarPersonagem2 = () => {
  let numeroAleatorio = gerarValorAleatorio();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      "Content-type": 'application/json'
    }
  }).then((response) => response.json()).then((data) => {
    imagem2.src = data.image;
    imagem2.alt = data.name;
    nomeDoPersonagem2.innerHTML = data.name;
    especie2.innerHTML = traduzidoEspecie(data);
    status2.innerHTML = traduzidoCondicao(data);
  });
}

pegarPersonagem3 = () => {
  let numeroAleatorio = gerarValorAleatorio();
  return fetch(`https://rickandmortyapi.com/api/character/${numeroAleatorio}`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      "Content-type": 'application/json'
    }
  }).then((response) => response.json()).then((data) => {
    imagem3.src = data.image;
    imagem3.alt = data.name;
    nomeDoPersonagem3.innerHTML = data.name;
    especie3.innerHTML = traduzidoEspecie(data);
    status3.innerHTML = traduzidoCondicao(data);
  });
}

botao.addEventListener('click', e => {
  e.preventDefault();
  pegarPersonagem1();
  pegarPersonagem2();
  pegarPersonagem3();
});