type ButtonProps = {
  title : string;
  onClick : ()=> void;
  type? : 'LIGHT' | 'DARK' | 'ALT';
  full? : boolean;
}

const Button = (props:ButtonProps) => {
  return (
    <>
     <button 
      type="submit" 
      className={
        `text-gray-900
        ${props.type == 'DARK' ? 'bg-zinc-950' : props.type == 'ALT' ? 'bg-orange-600' : 'bg-white'} 
        ${props.type == 'DARK' ? 'text-white' : props.type == 'ALT' ? 'text-white' : 'text-black'} 
          focus:outline-none 
        hover:bg-orange-200 
          focus:ring-4 
        focus:ring-gray-200 
          font-medium 
          rounded-lg text-sm px-8 py-2.5 mr-2 mb-2 
        dark:bg-gray-800 
        dark:text-white 
        dark:hover:bg-gray-700 
        dark:focus:ring-gray-700 
        drop-shadow-md
        ${props.full ? 'w-full' : ''}
        `
      }
      onClick={(e)=>{
        e.preventDefault()
        props.onClick()
      }}
     >
        {props.title}
    </button>
    </>
  );
};

export default Button;
