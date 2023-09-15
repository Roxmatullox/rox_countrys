function getData(url , callback) {
  let promise = new Promise((resolve , reject)=>{
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function (){
      if (xhr.readyState == 4 && xhr.status == 200) {
        let r = xhr.response
        let response = JSON.parse(r)
        resolve(response , xhr.status )
      } else if(xhr.readyState == 4){
        reject(xhr.statusText , xhr.status)
      }
    }

    xhr.open("get",url)

    xhr.send()
  })

  return promise
}