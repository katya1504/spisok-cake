import './App.css';
import { useState } from 'react';
import { data } from './data'; 
import { coffee } from './coffee'; 


function App() {
const [cake, setCake] = useState(data);
const [showText, setShowText] = useState(false);
const [cafe, setCafe] = useState(0);
const {imagetwoo}= coffee[cafe];

const removeCake = (id) =>{
  console.log(id)
  let newCake = cake.filter((gift) => gift.id !== id);
  setCake(newCake)
}


const showTextClick = (item) => {
  item.showMore = !item.showMore
  setShowText(!showText)
}

const previos = () =>{
  setCafe((cafe =>{
    cafe --;
    if(cafe <0){
    return coffee.length -1;
    }
    return cafe;
  }))
}

const next = () =>{
setCafe((cafe =>{
  cafe ++;
  if(cafe>coffee.length -1){
    cafe=0;
  }
  return cafe;
}
))

}

  return (
    <div>
<div className="container">
<h1>Топ лучших десертов</h1>
</div>

{cake.map((item => {
  const{id, title, image, description, showMore} =item


return(<div key={id}>
<div className="container">
      <h2>{id} - {title}</h2>
    </div>
 
<div className="container">
      <img src={image} width='400px' height='250px' alt='image'/>
    </div>

    <div className="container">
      <p className='text'>{showMore ? description : description.substring(0,150)+'....'}
      <button className='btn' onClick={() => showTextClick(item)}>{showMore ? 'Свернуть' : 'Продожить'}</button></p>
    </div>

    <div className="container">
<button className='btntwoo' onClick={() => removeCake([id])}>Закрыть</button>
      </div>
    </div>   
)
}))}

<div className="container">
<button onClick={() => setCake([])} className='thwoo'>Закрыть все</button>
      </div>


<div className='container'>
<img className='imagetwoo' src={imagetwoo} width='600px' alt='foto'/>
</div>

<div className='container'>
  <button  className='btntwoo' onClick={previos}>Назад</button>
  <button  className='btntwoo' onClick={next}>Вперед</button>
</div>
</div>
)
}



export default App;
