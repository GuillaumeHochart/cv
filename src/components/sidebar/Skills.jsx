import React from 'react';
import PropTypes from 'prop-types';

type Props = {
  title ?: string,
  list ?: {[string] : Array<string>}
};

const getKeyUpercase = function getKeyUpercase(string : string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

function RenderSkillsForce({force}){
  let list = [];

  for (let i = 0; i < 5; i++) {
    let value = <><i className="fa fa-circle"/> </>;
    if(i<force) {
      value = <><i style={{color:'#2d7788'}} className="fa fa-circle"/> </>
    }
    list.push(value)
  }
  return<div>{list}</div>
}

const renderSkills = function renderLanguage(key : string, entry : any) {


  return (
    <li key={`${key}`}>
      <span style={{fontWeight:"600"}} className="lang-desc">{`· ${getKeyUpercase(key)}: `}</span>
      <ul style={{color:"rgba(255, 255, 255, 0.6)",listStyleType: "none",marginTop: "15px",marginLeft:"5px",padding:"0px"}}>
        {entry.map(e=>{
          return <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
            <li>{e.value}</li>
            <RenderSkillsForce force={e.force}/>
          </div>})}
      </ul>
    </li>
  );
};

const Skills = ({ title, list } : Props) => (
  <div className="skills-container container-block">
    <h2 className="container-block-title" key="lang_header">
      <i className="fa fa-code" />
      {' '}
      {title}
    </h2>
    <ul className="list-unstyled skills-list" key="lang_list">
      {list && list.constructor === Object ? Object.entries(list).map(([key, entry]) => renderSkills(key, entry)) : null }
    </ul>
  </div>
);

export default Skills;

Skills.propTypes = {
  list: PropTypes.shape.isRequired,
  title: PropTypes.string.isRequired,
};

