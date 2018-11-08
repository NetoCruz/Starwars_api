(async function load() {
  // await
  // action
  // terror
  // animation
  async function getData(url) {
    const response = await fetch(url);
    const data = await response.json()
    return data;
  }

  const peopleList = await getData('https://swapi.co/api/people/')
  console.log(peopleList)

  //debugger


  function peopleTemplate(name){
  return(`<a href="" class="post">
      <figure class="post-image">
        <img src="./images/starwars.png">
      </figure>
      <span class="post-overlay">
        <p>
          <span class="post-likes">"${name}"</span>
          <span class="post-comments">10</span>
        </p>
      </span>
    </a>`)
  
}

//peopleList.results.forEach((name)=>{
  //console.log(name)
  //const HTMLString=peopleTemplate(name)
  //console.log(HTMLString);
//})
const listContainer= document.getElementById('list')
peopleList.results.filter((name)=>{
  console.log(name.name)
 const HTMLString=peopleTemplate(name.name)
  //console.log(HTMLString);
  const html= document.implementation.createHTMLDocument();
  html.body.innerHTML= HTMLString;
  listContainer.append(html.body.children[0]);
})

})()//envolver la funcion para que se autoejecute



