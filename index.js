import React from 'react';
import ReactDOM from 'react-dom';
import "./index.css";
// import App from './App';
import Card from './Card';
import Sdata from './Sdata';


// function ncard(val){
//   return(
    
//     <Card
//         imgsrc={val.imgsrc}
//         title={val.title}
//         sname={val.sname}
//         links={val.links}
//       />
    
//   );
// }

ReactDOM.render(
  <>
    <h1>List of Top 6 Series in 2023 </h1>
    <div className="main"> 
    {/* <div className='cards'>
      <Card
        imgsrc={Sdata[0].imgsrc}
        title={Sdata[0].title}
        sname={Sdata[0].sname}
        links={Sdata[0].links}
      />

      <Card
        imgsrc={Sdata[1].imgsrc}
        title={Sdata[1].title}
        sname={Sdata[1].sname}
        links={Sdata[1].links} />

      <Card
        imgsrc={Sdata[2].imgsrc}
        title={Sdata[2].title}
        sname={Sdata[2].sname}
        links={Sdata[2].links} />
    </div> */}

{/* 
    <div className='cards'>
      <Card
        imgsrc={Sdata[3].imgsrc}
        title={Sdata[3].title}
        sname={Sdata[3].sname}
        links={Sdata[3].links} />

      <Card
        imgsrc={Sdata[4].imgsrc}
        title={Sdata[4].title}
        sname={Sdata[4].sname}
        links={Sdata[4].links} />

      <Card
        imgsrc={Sdata[5].imgsrc}
        title={Sdata[5].title}
        sname={Sdata[5].sname}
        links={Sdata[5].links} />
    </div> */}
  

    {/* {Sdata.map(ncard)} */}
    
    {/* {Sdata.map(function ncard(val){ */}
 
    {Sdata.map((item,index) => {
      return(
      
        <Card item={item} key={index}
        // key = {val.id}
        // imgsrc={val.imgsrc}
        // title={val.title}
        // sname={val.sname}
        // links={val.links}
        
      />
       
      );
    })} 
    
    </div>
    {/* <App/> */}
  </>,
  document.getElementById('root')
);