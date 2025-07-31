import whatsapp from './wp.jpeg'

function Home() {
     var a = 10;
     var b = 20;
     var mycolor = {color: 'white', backgroundColor: 'green'}
     return (<>
          <h1>Home</h1>
          A value is {a} <br/>
          B value is {b}
          <p style={{ color: 'red', backgroundColor: 'blue'}}>Hello i am p Tag</p>
          <p style={{ color: 'red', backgroundColor: 'blue'}}>Hello i am p Tag</p>
          <p style={mycolor}>I am p tag again !</p>
          <p style={mycolor}>I am p tag again !</p>
          <p style={mycolor}>I am p tag again !</p>
          <img src={whatsapp}/>
     </>  );
}

export default Home;