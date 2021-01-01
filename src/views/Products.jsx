import React from 'react';
import Select from 'react-select';

import {productsIphone} from '../productsIphone';
import {productsSamsung} from '../productsSamsung';

export class Products extends React.Component {
state = {
  event: ""
}

handleChange = event => {
  this.setState({ event })
  console.log(`Option selected:`, event)
}

  render() {
    const productsSelected = this.state;
    
    return (
        <>
        <div>
        <h1>Apple</h1>
      <Select
        value={this.state.data || ""}
        onChange={this.handleChange}
        options={productsIphone}
      />
        </div>
        
      <div>
      <h1>Samsung</h1>
      <Select
        value={this.state.data || ""}
        onChange={this.handleChange}
        options={productsSamsung}
      />
      </div>
      

      <div>{productsSelected.event.name} </div>
      <div>{productsSelected.event.description} </div>
      <div>
        <img className="imageNone" src={`${productsSelected.event.mainPic}`} alt={productsSelected.event.mainPicName}/> 
      </div>

        {/* <img src={require('../images/img01.jpeg')} alt="image1"/>  */}

        {/* <img src="../images/img01.jpeg" alt="image1"/>  */}


        {/* <img src={ require ('../images/img01.jpeg') } alt="image1" /> */}




     {/* <div>
       {productsMobile.map((event, i) => (
         <div key={i}>
           <h2>{productsSelected.event.label}</h2>
           <img src={productsSelected.event.mainPic} alt="image1"/> 

        </div>
       ))}

       </div>  */}


      </>
    );
  }
}