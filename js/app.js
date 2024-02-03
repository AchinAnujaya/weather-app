console.log("hello");

document.getElementById("btn").addEventListener("click", () => {
  let input = document.getElementById("input").value;

  let repo = {
    methord: "GET",
  };
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=b317fbee62eb455abf793339240601&q=${input}`,
    repo
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      // document.getElementById('img').src=data["current"]["condition"]["icon"];
      // document.getElementById("img").src="./1.svg";

      document.getElementById(
        "icon"
      ).src = `https:${data.current.condition.icon}`;

      document.getElementById("temp").innerHTML =
        data["current"]["temp_c"] + " C";
      document.getElementById("location").innerHTML = data["location"]["name"];
      document.getElementById("status").innerHTML =
        data["current"]["condition"]["text"];
      document.getElementById("country").innerHTML =
        data["location"]["country"];
    })
    .then((error) => console.log(error));
});
