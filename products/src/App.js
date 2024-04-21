
import './App.css';

function App() {
  return (
    <div className="App">
      <h2>PRODUCTS</h2>

    <section>
     <Product name="vivo" price ="500" />
     <Product name="OPPP" price="400" />
     <Product name="apple" price="600"/>
     </section>
    </div>
  );
}

function Product({name,price}){

  return <div className="Product">
    <h2>{name}</h2>
    <p>{price}</p>
  </div>
}

export default App;
