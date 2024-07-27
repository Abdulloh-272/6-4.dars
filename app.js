const url = "https://jsonplaceholder.typicode.com/users";

const fetchAPI = fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    usersData(data);
    console.log(data);
  });

const users = document.querySelector(".users");
function usersData(fetchData) {
  fetchData.forEach((item) => {
    const card = document.createElement("div");
    const h2 = document.createElement("h2");
    const h3 = document.createElement("h3");
    const h4 = document.createElement("h4");
    const h5 = document.createElement("h5");

    h2.textContent = "Name:" + " " + item.name;
    h3.textContent = "Username:" + " " + item.username;
    h4.textContent = "Email:" + " " + item.email;
    h5.textContent = "Adress:" + " " + item.address.street;
    h2.classList.add("text-xl", "font-bold");
    h3.classList.add("text-lg", "mt-5", "font-medium");
    h4.classList.add("text-lg", "mt-5", "font-medium");
    h5.classList.add("text-lg", "mt-5", "font-medium");

    card.classList.add(
      "px-5",

      "bg-green-500",
      "h-[320px]",
      "w-[370px]",
      "rounded-lg",
      "flex",
      "flex-col",
      "justify-center",
      "items-center"
    );
    card.append(h2, h3, h4, h5);
    users.appendChild(card);
  });
}
