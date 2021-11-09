const  input = document.querySelector("#input");
const  btn = document.querySelector("#btn");
const  result = document.querySelector("#result");
const  total = document.querySelector("#total");
let i = 0;

btn.addEventListener("click", (e)=>{
 
  // result.innerHTML += `<li>${input.value}</li>`
 if(input.value ===  "")return
  createDeleteElements(input.value)
  input.value = ""
})


//create and delete todo
function createDeleteElements(value){
  i++
  const li = document.createElement("li")
  const btn = document.createElement("button")

    li.className = "li"
    li.textContent = value

    btn.className = "btn"
    btn.textContent = `add`
    li.appendChild(btn)



    //remove todo
    btn.addEventListener(`click`,(e)=>{
      i--
      total.innerHTML = i
      result.removeChild(li)
    })
    //toggle class active
    li.addEventListener(`click`,(e)=>{
      li.classList.toggle("li-active")    
    })


    total.innerHTML =i
    result.appendChild(li)
}















