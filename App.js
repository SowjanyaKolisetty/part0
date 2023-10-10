import React from 'react';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'; 
const Home = () => <h2>Welcome to the Homepage!</h2>;
const P1 = () => <h3>This is product
1</h3>; const P2 = () => <h3>This is
product 2</h3>;
const Products= () => { 
return(
<div>
<h2>Products</h2>
<ul>
<li>
<Link to="P1">Product 1</Link>
</li>
<li>
<Link to="P2">Product 2</Link>
</li>
</ul>
<Routes>
<Route path="P1" exact element=<P1 /> />
<Route path="P2" exact element=<P2 /> />
</Routes>
</div>
);
};
const App =() => {
return (
<BrowserRouter>
<div>
<h1>My App</h1>
<nav>
<ul>
<li>
<Link to="/">Home</Link>
</li>
<li>
<Link to="/products">Products</Link>
</li>
</ul>
</nav>
<Routes>
<Route path="/" element={<Home />} />
<Route path="/products/*" element={<Products />} />
</Routes>
</div>
</BrowserRouter>
);
};
export default App;