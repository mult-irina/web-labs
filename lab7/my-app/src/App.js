import React, { useState } from 'react';

function App() {
const [type, setType] = useState('')
const [width, setWidth] = useState('')
const [height, setHeight] = useState('')
const [image, setImage] = useState('')
const [img, setImg] = useState('')
const [number, setNumber] = useState('')

function startSearch(event) { 
event.preventDefault()
if (type.trim()) {
var input_type = null;
var input_number = null;
input_type = type;
input_number = number;
let inputsJSON = {
type: input_type, 
number: input_number,
};
console.log(inputsJSON);
fetch('/api/find', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(inputsJSON)
})
.then(response => {
if(!response.ok) {
console.log(response);
throw new Error(response.statusText)
}
return response;
})
.then(response => response.json())
.then(result => {
console.log(result)
if (result.error !== "image not found")
{
setType(result.type)
setWidth(result.width)
setHeight(result.height)
setImage('')
}
else
setImage('nothing in database')
});
}
}

function sendReq(event) {
event.preventDefault()
if (species.trim()) {
var in_type = null;
var in_width = null;
var in_height = null;
var in_number = null;

var in_type = type;
var in_width = width;
var in_height = height;
var in_number = number;

let inputsJSON = {
type: in_type, 
width: in_width, 
height: in_height,
number: in_number
};
console.log(inputsJSON)
fetch('/api/input', {
method: 'POST',
headers: {
'Content-Type': 'application/json'
},
body: JSON.stringify(animalsJSON)
})
.then(response => {
if(!response.ok) {
throw new Error(response.statusText)
}
return response;
})
.then(response => response.json())
.then(result => {
console.log(result)
if (result.image != null)
{
setImage(result.image)
setImg(result.image)
}
else
setImage('image not found')
});
}
}

return (
<div className="wrapper">
<label>
<br></br>
<a style={{marginLeft: 20}}>Вид животного: </a>
<input
style={{marginLeft: 68}}
value={species} 
onChange={event => setSpecies(event.target.value)} 
/>
<br></br>
<a style={{marginLeft: 20}}>Ширина изображения: </a>
<input
style={{marginLeft: 15}}
value={width} 
onChange={event => setWidth(event.target.value)} 
/>
<br></br>
<a style={{marginLeft: 20}}>Высота изображения: </a>
<input
style={{marginLeft: 23}}
value={height} 
onChange={event => setHeight(event.target.value)} 
/>
<br></br>
<a style={{marginLeft: 20}}>Номер изображения: </a>
<input
style={{marginLeft: 26}}
value={value} 
onChange={event => setValue(event.target.value)} 
/>
<br></br>
<a style={{marginLeft: 20}}>Изображение: </a>
<input
style={{marginLeft: 77}}
value={image} 
onChange={event => setImage(event.target.value)} 
/>
<br></br>
<br></br>

<input 
type="submit" 
style={{marginLeft: 20}}
value="Поиск изображения" 
onClick={sendReq}
/>
<p></p>
<input 
type="submit"
style={{marginLeft: 20}}			
value="Найти недостающие параметры" 
onClick={startSearch}
/><p></p>

<img 
src={img} 
onChange={event => setImg(event.target.value)}
/>
</label>
</div>
); 

}
export default App;

