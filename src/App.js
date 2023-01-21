function App() {
  return (
    <div className="wrapper clear">
      <header className="d-flex justify-between align-center p-40" >
        <div className="d-flex align-center"> 
        <img width={40} height={40} src="/img/logotip.png" alt="meaw"/>
            <div>
              <h3 className="text-uppercase">React Sneakers</h3>
              <p className="opacity-5">Magazinul cu bocani</p>
            </div>
        </div> 
        <ul className="d-flex">
          <li className="mr-30">
          <img width={18} height={18} src="/img/cart.svg" alt="meaw"/>
            <span>1205 lei</span>
          </li>
          <li>
          <img width={18} height={18} src="/img/user.svg" alt="meaw"/>
          </li>
        </ul>
      </header>
      
      <div className="content p-40">
        <h1 className="mb-40">Toti bocanii</h1>

        <div className="d-flex">
        <div className="card">
          <img width={133} height={112} src="/img/galosi/1.jpg" alt="galosiNr1" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Pret:</span>
              <b>dohuia</b>
            </div>           
            <button className="button">
              <img width={11} height={11}  src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/galosi/2.jpg" alt="galosiNr1" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Pret:</span>
              <b>dohuia</b>
            </div>           
            <button className="button">
              <img width={11} height={11}  src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/galosi/3.jpg" alt="galosiNr1" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Pret:</span>
              <b>dohuia</b>
            </div>           
            <button className="button">
              <img width={11} height={11}  src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>

        <div className="card">
          <img width={133} height={112} src="/img/galosi/4.jpg" alt="galosiNr1" />
          <h5>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className="d-flex justify-between align-center">
            <div className="d-flex flex-column">
              <span>Pret:</span>
              <b>dohuia</b>
            </div>           
            <button className="button">
              <img width={11} height={11}  src="/img/plus.svg" alt="Plus" />
            </button>
          </div>
        </div>
        </div>

      </div>
      
    </div>
  );
}

export default App;