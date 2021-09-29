import React from "react";
import Title from './components/Title';
import ShoppingList from './components/ShoppingList';
import styles from './App.module.css';
import './App.css';

/* A ES6 class style stateful component for the shopping list application */
class App extends React.Component {
  constructor(props)
  {
    /* You should call super(props) before any other statement. 
       Otherwise, this.props will be undefined in the constructor, which can lead to bugs.
    */
    super(props);

    this.state = {
      items: [
        { id: 1, value: 'Milk', qty: 5, unit: 'ltr' },
        { id: 2, value: 'Bananas', qty: 6, unit: 'pcs' },
        { id: 3, value: 'Bread', qty: 3, unit: 'x' },
        { id: 4, value: 'Eggs', qty: 16, unit: 'x' }
      ]
    };
  }

    addCarrots = () => {
      this.setState({ items: [...this.state.items, {id: 5, value: 'Carrot', qty: this.getRandomInt(1, 99), unit: 'x'}]})
    }

    addStrawberry = () => {
      this.setState({ items: [...this.state.items, {id: 6, value: 'Strawberry', qty: this.getRandomInt(1, 99), unit: 'x'}]})
    }

    addYoghurt = () => {
      this.setState({ items: [...this.state.items, {id: 7, value: 'Yoghurt', qty: this.getRandomInt(1, 99), unit: 'x'}]})
    }

    addBeer = () => {
      this.setState({ items: [...this.state.items, {id: 8, value: 'Beer', qty: this.getRandomInt(1, 99), unit: 'x'}]})
    }

    getRandomInt(min, max) { //Tällä funktiolla saadaan random numero annettujen parametrien väliltä
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min) + min);
    }

  render()
  {
    const { applicationDescription, applicationName } = this.props;
    return <div className={ styles.shoppingList }>
      <Title 
        applicationDescription={ applicationDescription }
        applicationName={ applicationName }
      />
      <ShoppingList items={ this.state.items } />
      <button onClick={ this.addCarrots }>Add Carrots!</button>
      <button onClick={ this.addStrawberry }>Add Strawberry!</button>
      <button onClick={ this.addYoghurt }>Add Yoghurt!</button>
      <button onClick={ this.addBeer }>Add Beer!</button>
    </div>
  }
}

export default App;