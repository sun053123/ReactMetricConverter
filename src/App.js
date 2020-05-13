import React, { Component } from 'react';
import logo from './image/cslogo.jpg';
import Navbars from './component/navbar' ;
import Intro from './component/Jumbotron';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      show : false ,
      Datainput : "" ,
      Meterinput: "" ,
      Graminput: "" ,
      Timeinput: "",
      set1: [],
    };

    this.toggleDiv1 = this.toggleDiv1.bind(this) ;
    this.toggleDiv2 = this.toggleDiv2.bind(this) ;
    this.toggleDiv3 = this.toggleDiv3.bind(this) ;
    this.toggleDiv4 = this.toggleDiv4.bind(this) ;
    this.Meterinput = this.Meterinput.bind(this) ;
    this.Graminput = this.Graminput.bind(this) ;
    this.Timeinput = this.Timeinput.bind(this) ;
    this.Datainput = this.Datainput.bind(this) ;
  } 

  Meterinput(e) {
    this.setState({
      Meterinput: e.target.value 
    }); 
  }
  Graminput(e) {
    this.setState({
      Graminput: e.target.value
    });
  }
  Timeinput(e) {
    this.setState({
      Timeinput: e.target.value
    });
  }
  Datainput(e) {
    this.setState({
      Datainput: e.target.value
    });
  }
  componentDidUpdate() {
    console.log(this.state) ;
  }
  toggleDiv1()  {
    this.setState(prevState1 => ({
      isShow1:!prevState1.isShow1
    }))
  }
  toggleDiv2()  {
    this.setState(prevState2 => ({
      isShow2:!prevState2.isShow2
    }))
  }
  toggleDiv3()  {
    this.setState(prevState3 => ({
      isShow3:!prevState3.isShow3
    }))
  }
  toggleDiv4()  {
    this.setState(prevState4 => ({
      isShow4:!prevState4.isShow4
    }))
  }

  render(){
    return(
      <div className="App"
      href="/components/">          
        <div className="App-header">
         <div className="App-Navbar">  <Navbars /></div> 
        </div>
        <div className="App-Body" >
          <p className="App-Welcome">ComSci SI standard Converter</p>
          <div className="mt-4"> <img src={logo} className="App-logo" alt="logo" /></div> 
          <div className="App-intro"><Intro /> </div>
{/*  Intro ---------------------------------------------------------------*/}  

          <div ><h1 className="TitleHead" >Lenght  </h1></div>
          <form className= "App-converter">
           <input 
             id="Meterinput"
             type="number"
             className= "from-control from-control-lg"
             placeholder="Enter Meter . . ."
             onClick={this.toggleDiv1}
             onChange={this.Meterinput}
            >    
           </input>
          </form> 

          {this.state.isShow1 ?
          <section className="App-lenght" >
          <div id="output1"> 
          <div className="card">
           <div className="card-block">
               <h4>Kilometer : {this.state.Meterinput /1000} km</h4>
               <div id="kmOutput"></div>
               </div>
            </div> 

          <div className="card">
           <div className="card-block">
               <h4>Centimeter : {this.state.Meterinput *100} cm</h4>
               <div id="cmOutput"></div>
               </div>
            </div> 

          <div className="card">
           <div className="card-block">
               <h4>Millimeter : {this.state.Meterinput *1000} mm</h4>
               <div id="mmOutput"></div>
               </div>
            </div> 

          <div className="card">
           <div className="card-block">
               <h4>Micrometer : {this.state.Meterinput /0.0000010000} mc</h4>
               <div id="mcOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Nanometer : {this.state.Meterinput *1000000000} nm</h4>
               <div id="nmOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Mile : {this.state.Meterinput /1609} mi</h4>
               <div id="miOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Yard : {this.state.Meterinput *1.094} yd</h4>
               <div id="ydOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Foot : {this.state.Meterinput *3.281} ft</h4>
               <div id="ftOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>inch : {this.state.Meterinput *39.37} in</h4>
               <div id="inOutput"></div>
               </div>
            </div>

          </div> 
          <hr className="App-endline"/> 
          </section> : null }
 {/*  end of Lenght ---------------------------------------------------------------*/}           

          <div><h1 className="TitleHead" >Weight  </h1></div>
          <form className= "App-converter">
           <input 
             id="Graminput"
             type="number"
             className= "from-control from-control-lg"
             placeholder="Enter Gram . . ."
             onClick={this.toggleDiv2}
             onChange={this.Graminput}
            >    
           </input>
          </form> 

          {this.state.isShow2 ?
        <section className="App-weight" >
          <div id="output2">

           <div className="card">
           <div className="card-block">
               <h4>Milligram : {this.state.Graminput *1000} mg</h4>
               <div id="mgOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Kilogaram : {this.state.Graminput *0.001} kg</h4>
               <div id="kgOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Metric Ton : {this.state.Graminput *0.000001} ton</h4>
               <div id="tonOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Pound : {this.state.Graminput *0.00220462262} lb</h4>
               <div id="lbOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Ounce : {this.state.Graminput *0.0352739619} oz</h4>
               <div id="ozOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Carat : {this.state.Graminput *5} ct</h4>
               <div id="ctOutput"></div>
               </div>
            </div>

          </div>
          <hr className="App-endline"/> 
        </section> : null }
{/*  end of weight ---------------------------------------------------------------*/}

          <div><h1 className="TitleHead" >Time  </h1></div>
          <form className= "App-converter">
           <input 
             id="Timeinput"
             type="number"
             className= "from-control from-control-lg"
             placeholder="Enter Minutes . . ."
             onClick={this.toggleDiv3}
             onChange={this.Timeinput}
            >    
           </input>
          </form>   

        {this.state.isShow3 ?
        <section className="App-time" >
          <div id="output3">

           <div className="card">
           <div className="card-block">
               <h4>Millisecond : {this.state.Timeinput * 60000} ms </h4>
               <div id="msOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Second : {this.state.Timeinput *60} s</h4>
               <div id="sOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Hour : {this.state.Timeinput * 0.0166666667} Hr</h4>
               <div id="HrOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Day : {this.state.Timeinput / 1440} Days</h4>
               <div id="DaysOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Month : {this.state.Timeinput / 43800} Months</h4>
               <div id="MonthOutput"></div>
               </div>
            </div>

          </div>
          <hr className="App-endline"/> 
        </section> : null }
{/*  end of  time ---------------------------------------------------------------*/}  
          
 <div><h1 className="TitleHead" >Data  </h1></div>
          <form className= "App-converter">
           <input 
             id="Datainput"
             type="number"
             className= "from-control from-control-lg"
             placeholder="Enter Mb . . ."
             onClick={this.toggleDiv4}
             onChange={this.Datainput}
            >    
           </input> 
          </form>   

        {this.state.isShow4 ?
        <section className="App-data" >
          <div id="output4">

           <div className="card">
           <div className="card-block">
               <h4>Kilobyte : {this.state.Datainput * 1000} kb </h4>
               <div id="kbOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Gigabyte : {this.state.Datainput /1000} Gb</h4>
               <div id="GbOutput"></div>
               </div>
            </div>

            <div className="card">
           <div className="card-block">
               <h4>Terabyte : {this.state.Datainput / 1000000} Tb</h4>
               <div id="TbOutput"></div>
               </div>
            </div>

          </div>
          <hr className="App-endline"/> 
        </section> : null }
{/*  end of  data ---------------------------------------------------------------*/}  
        </div>  {/*  close body */}  

       <footer className="App-footer"> .
          <hr className="App-endline"/> 
         <a
           className="App-link"
           href="https://courses.lumenlearning.com/introchem/chapter/standard-units-si-units/"
           target="_blank"
           rel="noopener noreferrer"
          >
            Click here to see support 
         </a> 
       </footer>
      </div>
    );
  }
}
export default App;
