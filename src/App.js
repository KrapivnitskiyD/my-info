import React from "react";


function AboutMe() {
    const info = {
        fullName: 'Крапивницкий Дмитрий Дмитриевич',
        phone: '0632225551',
        email: 'krapivnitskiy@itstep.academy'
    };

    const infoStyle = {

        display: 'inline-block',
        margin: '20px',
        padding: '10px',
        backgroundColor: '#edffb3',
        borderRadius: '15px',
        boxShadow: '0px 0px 3px gray',
        fontSize: '1.4em',
        fontFamily: 'Courier, monospace'
    };

    return (
        <div style={infoStyle}>
            <h2>{info.fullName}</h2>
            <p><strong>Тел.: </strong>{info.phone}</p>
            <p><strong>Эл. почта: </strong>{info.email}</p>
        </div>
    );
}



function App() {
    return (
        <div>
            <AboutMe></AboutMe>
        </div>
    );
}

export default App;
