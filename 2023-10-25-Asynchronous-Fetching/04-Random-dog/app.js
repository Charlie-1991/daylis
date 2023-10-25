const fetchData = async function () {
  const response = await fetch("https://random-d.uk/api/random");
  const data = await response.json();

  console.log(data.url);

  const main = document.querySelector("main");
  main.innerHTML = `<img scr="${data.url}" alt="RandomDog">`;
};

fetchData();
