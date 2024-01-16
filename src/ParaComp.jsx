
function ParaComp({text,state}){
    if(state == 'disabled')
        return <p className={state} ><i className="fa-solid fa-xmark me-2"></i>{text}</p>;
    else 
        return <p className="fw-semibold"><i className="fa-sharp fa-solid fa-check me-2"></i>{text}</p>; 
}

export default ParaComp;