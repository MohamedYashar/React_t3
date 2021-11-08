import './App.css';
import React, { useState} from "react";

function App() {
  // array object method Task given by Mentor
  const Users = [
    {
      Mname: "Ironman",
      poster:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT69mnaz2z3AeZitFmqCWJFUeujGjGPJzKfkw&usqp=CAU",
      summary:
        "Marvel's Iron Man 3 - pits brash-but-brilliant industrialist Tony Stark/Iron Man against an enemy whose reach knows no bounds. When Stark finds his personal world destroyed at his enemy hands, he embarks on a harrowing quest to find those responsible. This journey, at every turn, will test his mettle.",
      Ratings: 4
    },
    {
      Mname: "Spiderman",
      poster:
        "https://www.denofgeek.com/wp-content/uploads/2019/07/spider-man-far-from-home-ending-explained.jpg?fit=1920%2C1080",
      summary:
        "Spider-Man is a Marvel commic story, When a human bitten by a genetically modified spider, a nerdy, shy, and awkward high school student gains spider-like abilities that he eventually must use to fight evil as a superhero after tragedy befalls his family.",
      Ratings: 4.2
    },
    {
      Mname: "KungfuPanda",
      poster:
        "https://images.thequint.com/thequint%2F2016-04%2Fd5577dd1-44b1-4527-9cb4-30907717b5b5%2Fkkf3.jpg?rect=0%2C0%2C1820%2C1024",
      summary:
        "Kung Fu Panda is a children movie that has many mature themes. None of them involves what most mature movies do today. These themes are about family, faith and true greatness. One of the keys to the movie is the issue of Shifu lack of belief, both in Oogway and in Po.",
      Ratings: 3.8
    }
  ];
  return (
    <div className="App">
      {Users.map((e) => (
        
        <Movie  Mname={e.Mname} poster={e.poster}  summary={e.summary} Ratings={e.Ratings}  />
        
      ))}
      
      <AddColor/>
      
    </div>
  );
}

// Task Like & DisLike


function Counter (){

  

  const [Like, setLike] = useState(0);
  const [DisLike, setDisLike] = useState(0);


 

  return(
    <div className="counter-container">
      
      <button className= "like-Dislike" onClick = {() => setLike(Like + 1)} > 👍 {Like}</button>      
    
      <button className= "like-Dislike"  onClick = {() => setDisLike(DisLike + 1)} > 👎 {DisLike}</button>     

      
    </div>

    
  );
}



// FINAL TASK GIVEN BY MENTORE DONE HERE

// Task
// 1. List Users  // 2. Movies  // 3. Movie poster
// 4. Movie name // 5. Summary // 6. Rating

function Movie({ Mname, poster, summary, Ratings }) {

  const [show,setShow] = useState(true);
  const styles = { display: show ? "block" : "none"};

  return (
    <div className="container">
      <img height="200" width=" 250" src={poster} alt={Mname} />
      <h3> MovieName: {Mname}</h3>
      <div></div>
      <button onClick= { () =>setShow(!show)}  > {show ? "Hide": "show"} Description</button>
      <p style ={styles} > {summary} </p>
      
      {/* <p> Summary: {summary} </p> */}
      <h5> Ratings: {Ratings}</h5>
      <div className="container-2">
      <Counter  />

      
      </div>
      
    </div>
  );
}


function AddColor (){
  
  
  const [color, setColor] = useState(""); 
  const styles = { backgroundColor: color};

  // const colors = ["red", "orange","yellow","orange"];
  const [colors, setColors] = useState(["red", "orange","yellow","orange"]); 


  return(
    <div>
      <input style ={styles} onChange={(e)=> { setColor(e.target.value) }}  placeholder ="Enter a color"  />

      <button onClick={() => setColors([...colors, color])}>  Add color  </button>

      {  colors.map(  (x)=>  (<ColorBox y={x} />)  )   }
      
      <ColorBox/>
    </div>
  )
}

function ColorBox ({y}){

  const styles ={
    backgroundColor:y ,
    height:"50px",
    width:"200px",
    margin:"10px",
  };

  return (

 <div style= {styles}>  </div>

  )
}

export default App;
