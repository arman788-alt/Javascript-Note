
// fatch --> api ke call kore then api server side theke data niye ashe.
// fatch er maddhome api ke call korle api server reqst jawar age ekta promise kore jay either data te dibe na hoi dibena. hoi promise resolve(success) hobe na hole promise reject hobe, reject hole 1ta error/time out msg pabo.

fetch("https://jsonplaceholder.typicode.com/users")
  .then((res) => res.json())
  .then((data) => {
    console.log(data)

    // call arrew-function: function er maddhome server side er data gula parameter hisebe niye jabo.
    displayData(data);
  })

  //jodi promise reject hoi, then je error thake seta show korbe
  .catch((err) => {
    console.log(err);
  });





//userData(jeta server side theke ashtese by api) holo ekti array , oy array theke single object ashbe jeta forEach loop theke ek ekti element ekare bair hbe.
const displayData = (userData) => {
  const container = document.getElementById("userData-container");

  userData.forEach((element) => {

    // proti ta object er jonno 1ta kore div create krbo, oy div er innerHTML e object er property gulo rakhbo.
    const div = document.createElement("div");
    div.classList.add("userCls");
   

    // add dynamic value  by templete string.
    div.innerHTML = `
             <h4>${element.id}</h4>
             <h4>${element.name}</h4>
             <h4>${element.email}</h4>
             <h4>${element.phone}</h4>
             <h4>${element.username}</h4>
             <h4>${element.address.city}</h4>
             <p>${element.company.name}</p>


        `;

    // proti ta div container ke, parent(section) container er bitor rakhbo.
    container.appendChild(div);
  });
};
