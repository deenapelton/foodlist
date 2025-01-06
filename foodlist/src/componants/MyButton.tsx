interface MyButtonProps {
    doSomething: () => void;
    name: string;
  }

export default function MyButton({doSomething, name}: MyButtonProps) {
    return (
        <button 
        type="button"
        onClick={doSomething}

        className="btn btn-secondary " 
        style={{ marginRight: '10px' } }
        >{name}</button>
    );
}