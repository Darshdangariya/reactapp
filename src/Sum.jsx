import React from 'react'
class Sum extends React.Component{
    constructor(props){
        super(props)
        this.state = {
          no1: '',
          no2: '',
          ans: ''
        }
    }
    // mydata(e){
    //     this.setState({no1:e.target.value})
    // }

    calculate(operator) {
     var no1 = parseInt(this.state.txt1)
     var no2 = parseInt(this.state.txt2)
     let a

     if(isNaN(no1) || isNaN(no2)) {
          this.setState({ans: "Really Nigga !!!"})
          return;
     }

     switch(operator){
          case '+':
               a = no1 + no2;
               break;
          case '-':
               a = no1 - no2;
               break;
          case '*':
               a = no1 * no2;
               break;
          case '/':
               if (no2 === 0){
                    this.setState({ans: "can't be divided with 0 !!!  Really Nigga, you thought you got me 🤣"})
                    return;
               }else{
                    a = no1 / no2;
               }
               break;
          default:
               this.setState({ans: "Default !! Invalid Operator"})
               return;
     }

     this.setState({ans:"Answer is "+a})

    }

//     doSum(){
//         var no1 = parseInt(this.state.txt1)
//         var no2 = parseInt(this.state.txt2)
//         var c = no1 + no2
//         this.setState({ans:"Sum is "+c})
//     }

    render(){
        return(<>
        <h1>Sum Calculate</h1>
        No1 : <input type='text' 
        onChange={(e)=>this.setState({txt1:e.target.value})}/> &nbsp;
        No2 : <input type='text' 
        onChange={(e)=>this.setState({txt2:e.target.value})}/> <br/>

        <input type='button' value="+" onClick={this.calculate.bind(this ,'+')}/> &nbsp;
        <input type='button' value="-" onClick={this.calculate.bind(this,'-')}/> &nbsp;
        <input type='button' value="*" onClick={this.calculate.bind(this,'*')}/> &nbsp;
        <input type='button' value="/" onClick={this.calculate.bind(this,'/')}/> &nbsp; <br/>
        {this.state.ans}
        </>)
    }
}
export default Sum