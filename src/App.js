import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import data from './data';

// Components
import Navigation from './components/Navigation';
import Products from './components/Products';
import ShoppingCart from './components/ShoppingCart';

//Context
import { ProductContext } from './contexts/ProductContext';
import { CartContext } from './contexts/CartContext';

const App = () => {
	const [products] = useState(data);
	const [cart, setCart] = useState([]);

	const addItem = item => {
		const newItem = {
			id: item.id,
			title: item.title,
			price: item.price,
			image: item.image
		}

		setCart([...cart, newItem])
	};

	return (
		<div className="App">
			<Switch>
				<ProductContext.Provider value={{ products, addItem }}>
					<CartContext.Provider value={{ cart }}>
						<Navigation />
							
							{/* Routes */}
							<Route exact path="/">
								<Products />
							</Route>

							<Route path="/cart">
								<ShoppingCart />
							</Route>
						
					</CartContext.Provider>
				</ProductContext.Provider>
			</Switch>
		</div>
	);
}

export default App;
