import React from 'react'; 
import { useState,useEffect} from 'react';
import axios from 'axios';

const App=()=>{ 
  const[data,setData]=useState(null);
 const[loading,setLoading]=useState(true);
 const[error,setError]=useState(null);
 
const checkList =[{description:"Valuation Fee Paid",status:data.ValutionFeePaid
},{description:"UK Resident",status:data.UkResident
},{description:"Risk Rating",status:data.RiskRating
},{description:"LTV",status:data.Ltvbelow60}]

   
const fecthData= async()=>{
 const url="http://localhost:3001/api/applications/getApplicationById/67339ae56d5231c1a2c63639";
 try{
  const response= await axios.get(url); 
  console.log(response.data);
  setData(response.data); 
  setLoading(false)
 }catch(error){
  
  setError(error.message);
 }
  };

  useEffect(()=>{
   fecthData();
   },[]);

  if(loading)return <div className="text-center mt-56 text-3xl">Loading....</div>
  if(error) return <div className="text-center mt-56 text-3xl">Error:{error}</div>
  
  return(
    <div className="w-[50%]  bg-[#333357] p-4 mx-auto mt-32 rounded-sm" >
      <h1 className="text-white text-center text-2xl">Evaluation</h1>
      
      <table className="border-collapse w-full border m-1">
        <thead>
          <tr>
            <th className="border p-1 bg-green-400">id</th>
            <th className="text-black text-md  border p-1 bg-teal-400">Evaluation CheckList</th>
            <th className="bg-amber-300">Status</th>
          </tr>
        </thead>
        <tbody>
          {checkList.map((item,index)=><tr key={index}>
            <td className="border p-1 text-center text-white">{index+1}</td>
            <td className="border col-span-2 text-white text-md p-1">{item.description}</td>
            <td className="text-white p-1 text-center border">{item.status}</td>
          </tr>)}
          
          
        </tbody>
      </table>
    </div>
  )
} 

export default App;