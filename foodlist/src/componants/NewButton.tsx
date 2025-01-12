interface NewButtonProps{
    doSomething: () => void;
    name: string;
}



export default function NewButton({doSomething, name}:NewButtonProps){
    return(
        <button type="submit"
        className="btn btn-link"
        style={{marginRight: '10px'}}
        
        onClick={doSomething}
        >{name}</button>
    )
}