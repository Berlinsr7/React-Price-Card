import ParaComp from "./ParaComp";

function Card(props){
    const cardContent = ['50GB Storage','Unlimited Public Projects', 'Community Access', 'Unlimited private Projects', 'Dedicated phone support', 'Free Sub domain', 'Monthly status reports'];
    return (
        <div class="card bounce m-md-0 m-4 shadow-lg">
            <div className="card-body mt-0">
                <p className="text-center mb-0 fw-bold opacity-25">{props.tier}</p>
                <h1 className="text-center">${props.cost}/month</h1>
                <hr/>
                <ParaComp text={props.users}></ParaComp>
                {cardContent.map((ele,index) => {
                    if(props.tier==='PRO')
                        return <ParaComp text={ele}></ParaComp>;
                    else if(props.tier === 'PLUS') 
                        if(index < 6)
                            return <ParaComp text={ele}></ParaComp>;  
                        else
                            return <ParaComp state={'disabled'} text={ele}></ParaComp>;
                    else
                        if(index < 3)
                            return <ParaComp text={ele}></ParaComp>;  
                        else
                            return <ParaComp state={'disabled'} text={ele}></ParaComp>;
                        })}  
                <div className="d-flex justify-content-center">
                    <a className="btn btn-primary fw-bold" style={{width:"24rem", height:"50px",borderRadius:"50px"}}><p className="mt-1">BUTTON</p></a>
                </div>                        
            </div>
        </div>
    )   
}

export default Card;