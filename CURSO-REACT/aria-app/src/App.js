import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import React from 'react';
import ItemListContainer from 'components/ItemListContainer';

export default function App() {
  return (
    <div className="App">
        <Navbar />
        <ItemListContainer />
    </div>
  );
}
