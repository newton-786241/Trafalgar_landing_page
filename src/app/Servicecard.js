import Image from "next/image";

const ServiceCard = (props) => {
    return ( 
        <div style={{display:'flex', flexDirection:'column', width:'27%',boxShadow:'0px 10px 50px lightgrey', height:"23vw", justifyContent:'center', borderRadius:'20px', backgroundColor:'white'}}>
            <div style={{margin:'1.1vw'}}><Image src={props.serviceimg} style={{height:'5.5vw', width:'auto'}}></Image></div>
            <div><h1 style={{fontSize:'2vw', margin:'1.1vw'}}>{props.title}</h1></div>
            <div><p style={{fontSize:'1.1vw', color:'grey', margin:'1.1vw', lineHeight:"1.8vw"}}>{props.content}</p></div>
        </div>
     );
}
 
export default ServiceCard;