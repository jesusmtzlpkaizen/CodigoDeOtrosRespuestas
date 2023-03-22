/* e la palabra clave await está siendo utilizada fuera de una función async, la variable response no está siendo utilizada para obtener la respuesta,as variables $n, $b, y $l no están seleccionando los elementos correctos del DOM,as cadenas de texto deben ser de backticks (`) en lugar de comillas simples o dobles, para que se pueda utilizar la sintaxis,


*/
const baseEndpoint = "https://api.github.com";
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.querySelector("[name]");
const $b = document.querySelector("#blog");
const $l = document.querySelector(".location");

async function displayUser(username) {
  $n.textContent = "cargando...";
  try {
    const response = await fetch(`${usersEndpoint}/${username}`);
    const data = await response.json();
    console.log(data);
    $n.textContent = `${data.name}`;
    $b.textContent = `${data.blog}`;
    $l.textContent = `${data.location}`;
  } catch (err) {
    handleError(err);
  }
}

function handleError(err) {
  console.log("OH NO!");
  console.log(err);
  $n.textContent = `Algo salió mal: ${err}`;
}

displayUser("stolinski").catch(handleError);
