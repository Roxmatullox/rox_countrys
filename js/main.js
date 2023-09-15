let countrysRow = document.querySelector(".countrys-row")
let searchInput = document.querySelector(".search-input")
let pagination = document.querySelector(".pagination")
let body = document.querySelector("body")
let darkLight = document.querySelector(".dark-light")
let search = ""

function country(el) {
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


darkLight.addEventListener("click",()=>{
  body.classList.toggle("dark")
})



let active = 1

function getCountry() { 
getData(`https://ap-countries-api.vercel.app/${search == "" ? "all" : `translation/${search}`}?page=${active}&limit=25`).then((res)=>{
  res.data.map((el)=>{
    countrysRow.innerHTML += country(el)
  })

  
pagination.innerHTML =     '<button onclick="getPaginations(`-`)">-</button>'
for (let i = 1; i < res.total/25 ; i++) {
  pagination.innerHTML +=     `<button class="${active == i? "active":""}" onclick='getPaginations(${i})'>${i}</button>`
}
pagination.innerHTML +=     '<button onclick="getPaginations(`+`)">+</button>'


}).catch((err)=>{
  console.log(err);
})
}

getCountry()


searchInput.addEventListener("keyup",function() {
  countrysRow.innerHTML = "" 
  search = this.value
  getCountry()
})


function getPaginations(el) {
  countrysRow.innerHTML = "" 
  if (el == "-") {
    active--
  } else if (el == "+") {
    active++
  } else {
    active = el
  }

  console.log(active);
  getCountry()
}
