function EventDemo() {

     // function demo{
     //      alert('Welcome')
     // }
     
     const demo = () => {
          alert("Welcome")
     }

     const printData = (event) => {
          // console.log("Type is " + event.type)
          // console.warn("Name is " + event.target.name)
          // console.error("Value is " + event.target.value)
          console.log(event.target.value)
     }

     return ( <t>
          <input type="button" onClick={demo} value="Clickme"/> &nbsp;
          <input type="button" onClick={() => alert("Inline")} value="Inline"/> &nbsp;
          <input type="button" name="btn" value="Btn1" onClick={printData} /><br/><br/>
          Text1 <input type="text" name="txt1" onChange={printData}/> &nbsp;
          Text2 <input type="text" name="txt2" onChange={printData}/>

     </t> );
}

export default EventDemo;