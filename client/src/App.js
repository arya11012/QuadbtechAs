import './App.css';
import Panels from './components/panels';
import axios from "axios";
import { useState ,useEffect} from 'react';
import Display1 from './components/Display1';
import Display2 from './components/Display2';
import Display0 from './components/Display0';
import Display3 from './components/Display3';
import Header from './components/Header';

function App() {
  
  const [newdata,setData]=useState([]);
  const getData=async()=>{
    const res=await axios.get("http://localhost:3001/top10results");
    if(res.data.result){
      
      setData(res.data.result);
      console.log(res.data);
    }
  }
  useEffect(()=>{
    getData();
    const intervalId = setInterval(getData, 1500);
    return () => clearInterval(intervalId);

  },[])
  const percentage=((a,b)=>{
    const percent=((a-b)/b)*100;
    return percent.toFixed(2);
  })
  const ml=(index)=>{
    if(index===0){
      return "mt-0";
    }
    return "mt-2";
  }
  {/* number,platform,ltp,bsp,diff,savings */}

  return (
    <div  >
      <Header/>
    <Display0/>
    {newdata && newdata.length > 0 && (
      <Display1 sell={newdata[0].sell} day={percentage(newdata[0].last,newdata[0].open)+"%"} />
    )}
    <Display2 />
    
    <Display3/>
    <div className='bg-gray-800 h-100 py-4'>
      
      {
        newdata.map((item,index)=>(
          <><Panels key={item.name} number={index+1} platform={item.base_unit} ltp={"₹"+item.last}  bsp={"₹"+(item.buy)+"/ ₹"+ (item.sell)} diff={percentage(item.last,item.open)+"%"} savings={(item.last-item.open).toFixed(1)} margin={ml(index)}/></>
        ))
      }
    </div>
      
    </div>
  
  );
}

export default App;
