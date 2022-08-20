import React from 'react';
import ReactDOM from 'react-dom/client';
import EventHandle from './components/EventHandle';
import InputForm from './components/form';
import FunctionComponentsEvent from './components/FunctionComponentsEvent';
import RImage from './components/image';
import NavBAR from './components/nav-bar';
import TableShow from './components/table';
import ListData18 from'./components/ListData18';
import './css/nav-bar.css';
import StyleSheet from './components/StyleSheet';
import FormDyn from './components/FormDyn';
 

 const root = ReactDOM.createRoot(document.getElementById('root'));
 const num=[1,2,3,4,5,6,7];
root.render(    
   <>
  <NavBAR />   
  {/* <RImage/> */}
  {/* <InputForm/>
  <TableShow/> */}
 {/* <FunctionComponentsEvent/>
 <EventHandle number={num}/> */}
 {/* <ListData18/> */}
 <StyleSheet isValid={true}/>
 <FormDyn/>
 </>
);