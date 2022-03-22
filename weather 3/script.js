const myBtn= document.getElementById ('btn')
const myValue = document.getElementById ('txtvalue')
const temp = document.getElementById('temp')
const DayTemp = document.getElementById ('DayTemp')

function putName (){
  // if (document.getElementById('Cname').innerText !== "") {
     const myValue = document.getElementById ('txtvalue').value;
     const node = document.createTextNode (myValue)
     const element = document.createElement ('h1')
     element.appendChild(node);
     document.getElementById('Cname').appendChild(element)
    // }
      fetch('https://api.openweathermap.org/data/2.5/weather?q='+myValue+'&appid=12001cb3049844d9da860c8a406dd821&units=metric')
        .then(response => response.json())
        .then(data =>{
         const tempValue = data['main']['temp'];
         const dayTempValue = data['weather'][0]['description']
    
         temp.innerHTML = tempValue;
         DayTemp .innerHTML = dayTempValue; 
        })
     
    
}

myBtn.addEventListener('click' , putName)


// async function get (){
// const reponse = await fetch('https://api.openweathermap.org/data/2.5/weather?q='+myValue+'&appid={API key}')
// const data = await response.json()
// return data;
// }
// get().then(response=>{
//   console.log(response)
// })

