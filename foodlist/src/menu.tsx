import MenuTable from "./menutable"
import Input from "./componants/input"
export default function menu() {
    return(
        <div className="container-sm">
            <h2>Meal Plan</h2>
        <Input/>
        <MenuTable/>
       
        </div>
    )
}