//"https://icanhazdadjoke.com/"

const heading = document.getElementById("get");

async function myfun() {
  const result = await fetch("https://icanhazdadjoke.com", {
    headers: {
      accept: "application/json",
    },
  });

  const jokeResponse = await result.json();

  const joke = jokeResponse.joke;

  heading.innerHTML = joke;
}
