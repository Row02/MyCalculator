import logo from'./logo.svg';
import './App.css';

function CalButton({label}){
return (
    <button>
        {label}
    </button>
);
}
function CalcDisplay ({display}){
    return(
        <div className = "CalcDisplay">
            {display}
        </div>
    )
} 
export default function App() {
    return (
        <div className= "CalContainer"> 
        <CalcDisplay display = {"Hello World"}/> 
        <div className= "ButtonContainer"> 
            <CalButton label={7}/>
            <CalButton label={8}/>
            <CalButton label={9}/>
            <CalButton label={"+"}/>
            <CalButton label={4}/>
            <CalButton label={5}/>
            <CalButton label={6}/>
            <CalButton label={"-"}/>
            <CalButton label={1}/>
            <CalButton label={2}/>
            <CalButton label={3}/>
            <CalButton label={"*"}/>
            <CalButton label={"C"}/>
            <CalButton label={0}/>
            <CalButton label={"="}/>
            <CalButton label={"÷"}/>
         </div>
        </div>
    );
}

 