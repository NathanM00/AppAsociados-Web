import React from 'react';

function Noticias(props) {

    function handleClick() {
        props.history.push('/');
    }

    return <div>
        <h1>Noticias</h1>
        {/*<Button onClick={handleClick} variant="contained" color="primary">Ir a graficas</Button>*/}

    </div>
}

export default Noticias;