interface MyButtonProps {
    doSomething: () => void;
    name: string;
  }
//this is the button I'm using for my app
export default function MyButton({doSomething, name}: MyButtonProps) {
    return (
        <button 
        type="button"
        onClick={doSomething}

        className="btn btn-link" 
        style={{ marginRight: '10px' } }
        >{name}</button>
    );
}