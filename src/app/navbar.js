import Image from "next/image";
import logo1 from './T.png'

const Navbar = () => {
    return ( 
        <div style={{width:'100%', display:'flex', justifyContent:'space-between', alignItems:'center',padding:'3vw 10vw'}}>
            <div style={{display:'flex', alignItems:"center"}}>
                <div style={{backgroundColor:"#458ff6", width:"2vw", height:'2vw', textAlign:"center", display:"flex", justifyContent:'center', borderRadius:'9999px', alignItems:'center'}}>
                <Image src={logo1}></Image></div>
                <h1 style={{fontSize:'2.2vw', paddingLeft:"5px"}}>Trafalgar</h1>
            </div>
            <div style={{display:'flex', width:'45%', fontSize:'1vw', justifyContent:'space-between'}}>
                <p style={{color:'#458ff6', fontWeight:'bold'}}>Home</p>
                <p>Find a Doctor</p>
                <p>Apps</p>
                <p>Testimonials</p>
                <p>About us</p>
            </div>
        </div>
     );
}
 
export default Navbar;