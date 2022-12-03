import React, { useState } from "react";

interface IframesContainerProps {
  id : string
  titleIDs : string
  children : any[]
  className? : string
}

const IframesContainer = (props : IframesContainerProps) : JSX.Element => {
  
  let titles : string[] = JSON.parse(props.titleIDs);
  let buttons : JSX.Element[] = []; 
  let iframesContainers : JSX.Element[] = [];

  const [ selectedOption, setSelectedOption ] = useState(titles[0]);

  props.children.forEach((iframe,index)=>{

    buttons.push(
    <button 
      key={props.id+titles[index]+'-button'}
      type="button"
      className={`btn btn-dark me-3 ${selectedOption === titles[index] ? 'active' : ''}`} 
      onClick={()=>setSelectedOption(titles[index])}
    >
      {titles[index]}
    </button>
    );

    iframesContainers.push(
    <div 
      style={{display: selectedOption === titles[index] ? 'flex' : 'none'}} 
      className="mt-5" 
      key={props.id+titles[index]+'-iframe'}
    >
      {iframe}
    </div>
    );
  });

  return (
  <>
    <div className="d-flex">
      {buttons.map((button)=>button)}
    </div>
    <div className="d-flex flex-column align-items-center">
      {iframesContainers.map((iframeContainer)=>iframeContainer)}
    </div>
  </>);
};

export default IframesContainer;