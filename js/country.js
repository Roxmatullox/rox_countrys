let countryRow = document.querySelector(".countrys-row")


function country1(el) {
  return `
    <div class = "country">
      <a href = 'country.html?country=${el.name.common}'>
      <img src = "${el.flags.svg}"></img>
      <div>
      <h3>${el.name.common}</h3>
      <p>Population : ${el.population}</p>
      <p>Region : ${el.region}</p>
      <p>Capital : ${el.capital}</p>
      </div>
      </a>
    </div>
  `
}

let query = new URLSearchParams(location.search)

let country = query.get("country")

console.log(country);

getData(`https://ap-countries-api.vercel.app/all`).then((res)=>{
  res.data.map((el)=>{
    if (el.name.common == country) {
      countryRow.innerHTML += country1(el)
    }
  })
}).catch((err)=>{
  console.log(err);
})