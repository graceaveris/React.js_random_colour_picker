import React from 'react';

const colour = ( props ) => {

  let newColour = ("rgb(" + props.c1 +", "+ props.c2 +", "+ props.c3 +")");

  const outputstyle = {
	textAlign: 'center',
  fontSize: 'calc(10px + 2vmin)',
  color: 'black',
  paddingTop: '20vw'
  };

  const divstyle = {
  margin: '40px auto',
  backgroundColor: newColour,
  textAlign: 'center',
  width: '50vw',
  height: '50vw',
  borderRadius: '100%',
  display: 'inline-block'
  };


 return (

    <div style={divstyle}
         onClick={props.clicked}>
      <h1 style={outputstyle}>{newColour}</h1>
    </div>

  );
};

export default colour;
