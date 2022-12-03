import React from "react";


interface CodeBlockProps {
  titleIDs : string
  children : any[]
  className? : string,
  id : string
}

export const CustomCode = (props : { children : any, className : string }) => {
  const newClassName = props.className.replace('lang','language').toLocaleLowerCase();
  return (<code className={newClassName}>{props.children}</code>);
};


const CodeBlock = (props : CodeBlockProps) : JSX.Element => {
  let tabs : JSX.Element[] = []; 
  let tabsContent : JSX.Element[] = []; 
  let titles : string[] = JSON.parse(props.titleIDs);
  props.children.forEach((code,index)=>{
    tabs.push(
      <li className="nav-item" role="presentation" key={titles[index]+props.id+"-tab"}>
        <button className={"nav-link "+ (index === 0 ? 'active' : '')} id={titles[index]+props.id+"-tab"} data-bs-toggle="tab" data-bs-target={"#"+titles[index]+props.id} type="button" role="tab" aria-controls={titles[index]+props.id} aria-selected={(index === 0 ? 'true' : 'false')}>
          {titles[index]}
        </button>
      </li> 
    );
    tabsContent.push(
      <div className={"tab-pane "+ (index === 0 ? 'active' : '')} id={titles[index]+props.id} key={titles[index]+props.id} role="tabpanel" aria-labelledby={titles[index]+props.id+"-tab"} >
        {code}
      </div>
    );
  });

  return (<>
    <div className={`col ${props.className ? props.className : ''} codebox-container`}>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        {tabs.map((tab)=> tab)}
      </ul>
      <div className="tab-content">
        {tabsContent.map((content)=>content)}
      </div> 
    </div>
  </>);
};

export default CodeBlock;