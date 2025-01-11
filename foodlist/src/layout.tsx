import {Link, Outlet} from "react-router-dom"



export default function layout(){
    
    return(
      <div>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="d-inline-flex p-2" >
              <Link to="/foodlist/groceryList">Grocery List</Link>
          </div>
          <div className="d-inline-flex p-2" >
              <Link to="/foodlist/foodonstock">Food Inventory</Link>
          </div>
          <div className="d-inline-flex p-2" >
              <Link to="/foodlist/menu">Menu</Link>
          </div>
</nav> 
<Outlet/>
</div>
)}