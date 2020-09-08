import React from 'react';
import './App.scss';
import Card from './components/layout/card/Card';
import Content from './components/layout/content/Content';
import Header from './components/layout/header/Header';

const App: React.FC = () => {
    return (
        <div className="App">
            <Card>
                <Header />
                <Content />
            </Card>
        </div>
    );
};

export default App;
