import React from 'react';

function Analiticas(props) {

    function handleClick() {
        props.history.push('/');
    }

    return <div>
        <h1>Analiticas</h1>
        {/*<Button onClick={handleClick} variant="contained" color="primary">Ir a graficas</Button>*/}

    </div>
}

export default Analiticas;