import React from 'react';
import AppRouter from "./router/AppRouter";
import Header from "./components/header/Header";

function App() {
    return (
        <>
            <Header />
            <AppRouter/>
        </>
    );
}

export default App;
