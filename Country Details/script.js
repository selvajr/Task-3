
let xhr = new XMLHttpRequest();
xhr.open("GET", "https://restcountries.com/v3.1/all");
xhr.send();

xhr.onload = () => {
  if (xhr.status === 200) {
    const data = JSON.parse(xhr.response);
    data.forEach((country) => {
      console.log(`Country: ${country.name}`);
      console.log(`Region: ${country.region}`);
      console.log(`Sub-region: ${country.subregion}`);
      console.log(`Population: ${country.population}`);
      console.log("--------------------");
    });
  } else {
    console.error("Error fetching data from the API.");
  }
};
