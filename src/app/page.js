import Image from "next/image";
import styles from "./page.module.css";
import illustration from './illustration.png'
import Navbar from "./navbar";
import ServiceCard from "./Servicecard";
import img1 from './Frame.png'
import img2 from './Frame (1).png'
import img3 from './Frame (2).png'
import img4 from './Frame (3).png'
import img5 from './Frame (4).png'
import img6 from './Group.png'
import bg from './Frame (5).png'
import img7 from './illustration.png'
import img8 from './illustration2.png'
import img9 from './Mask Group.png'
import Article from "./article";
import article1 from './Mask Group (2).png'
import article2 from './Mask Group (1).png'
import article3 from './image 3.png'
import bg2 from './element.png'
import logo from './Ellipse 8.png'


export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="hero" style={{height:"35vw", padding:'0vw 10vw', alignItems:'center', display:'flex', justifyContent:'space-between'}}>
        <div style={{height:'55%', display:'flex', flexDirection:'column', justifyContent:'space-between', width:'40%'}}>
        <div>
          <h1 style={{fontSize:'2.8vw'}}>Virtual healthcare</h1>
          <h1 style={{fontSize:'2.8vw'}}>For you</h1>
        </div>
        <div>
          <p style={{fontSize:'1.3vw', color:'grey'}}>Trafalgar provides progressive, and affordable <br /> healthcare, accessible on mobile and online <br /> for everyone</p>
        </div>
        <div className="consult">
          <button style={{ borderRadius:'9999px', padding:'15px 30px',}}>Consult today</button>
        </div>
        </div>
        <div>
          <Image src={illustration} style={{width:'41vw', height:'35vw'}}></Image>
        </div>
      </div>
      <section className="services" style={{marginBottom:'4vw'}}>
        <Image src={bg} style={{zIndex:'-1', position:'absolute', width:'50vw', height:'auto'}}></Image>
        <div style={{width:'80%', marginLeft:"auto", marginRight:'auto'}}>
          <div>
            <h1 style={{textAlign:'center', marginBottom:'1.5vw', fontSize:"2vw", marginTop:'5vw'}}>Our services</h1>
            <hr style={{width:'5%', marginLeft:'auto', marginRight:'auto', fontWeight:'bold'}}/>
          </div>
          <div style={{textAlign:'center', fontSize:'1.1vw', color:'grey', margin:'2vw 0px'}}>
            <p>We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment <br /> with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
          </div>
          <div style={{display:'flex', justifyContent:"space-evenly", flexWrap:'wrap', gap:'30px', margin:'4vw 0vw'}}>
            <ServiceCard title={'Search doctor'} content={'Choose your doctor from thousands of specialist, general, and trusted hospitals'} serviceimg={img1}/>
            <ServiceCard title={'Online Pharmacy'} content={'Buy  your medicines with our mobile application with a simple delivery system'} serviceimg={img2}/>
            <ServiceCard title={'Consultation'} content={'Free consultation with our trusted doctors and get the best recomendations'} serviceimg={img3}/>
            <ServiceCard title={'Details info'} content={'Free consultation with our trusted doctors and get the best recomendations'} serviceimg={img4}/>
            <ServiceCard title={'Emergency care'} content={'You can get 24/7 urgent care for yourself or your children and your lovely family'} serviceimg={img5}/>
            <ServiceCard title={'Tracking'} content={'Track and save your medical history and health data'} serviceimg={img6}/>  
          </div>
          <div style={{display:'flex', justifyContent:'center'}}>
          <button style={{fontSize:'1.1vw', borderRadius:'9999px', padding:'0.8vw 2.5vw', textAlign:'center', border:'2px solid #458ff6',}}>Learn more</button>
          </div>
        </div>
      </section>
      <section className="services">
        <div style={{display:'flex', justifyContent:'space-between', width:'80%', marginLeft:'auto', marginRight:'auto', height:'38vw', marginBottom:"10px", alignItems:'center'}}>
          <div><Image src={img7} style={{width:'40vw', height:'auto'}}></Image></div>
          <div style={{width:'35%', height:'50%', display:'flex', flexDirection:'column', justifyContent:'space-between', marginRight:'3vw'}}>
            <h1 style={{fontSize:'2vw'}}>Leading Healthcare Providers</h1>
            <hr style={{width:'15%', fontWeight:'bold'}}/>
            <p style={{fontSize:'1.1vw', color:'grey', lineHeight:'1.8vw'}}>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online for everyone. To us, it’s not just work. We take pride 
            in the solutions we deliver</p>
            <button style={{fontSize:'1.1vw', borderRadius:'9999px', padding:'0.8vw 2.5vw', textAlign:'center',border:'2px solid #458ff6', width:"40%"}}>Learn more</button>  
          </div>
        </div>
      </section>
      <section className="app services" style={{display:"flex", width:'80%', justifyContent:"space-between", marginLeft:'auto', marginRight:'auto', height:'38vw', alignItems:'center'}}>
        <div style={{width:'35%', height:'50%', display:'flex', flexDirection:'column', justifyContent:'space-between', marginLeft:'3vw'}}>
          <h1 style={{fontSize:'2vw'}}>Download our mobile apps</h1>
          <hr style={{width:'15%'}}/>
          <p style={{fontSize:'1.1vw', color:'grey', lineHeight:'1.8vw'}}>Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely</p>
          <button style={{fontSize:'1.1vw', borderRadius:'9999px', padding:'0.8vw 2.5vw', textAlign:'center', border:'2px solid #458ff6', width:'40%'}}>Download</button>
        </div>
        <div>
          <Image src={img8} style={{width:'39vw', height:'auto'}}></Image>
        </div>
      </section>
      <section className="reviews">
        <div style={{width:'70%', backgroundColor:'#458ff6', height:'25vw', border:'none', borderRadius:'20px', marginLeft:'auto', marginRight:'auto'}}>
          <div style={{textAlign:'center'}}>
            <h1 style={{color:'white', padding:'2.5vw', fontSize:'2vw', fontWeight:'normal'}}>What our customers are saying</h1>
            <hr style={{width:'10%', marginLeft:'auto', marginRight:'auto'}} />
          </div>
          <div style={{display:'flex', justifyContent:'space-around', alignItems:'center', height:"55%"}}>
            <div style={{width:'40%', color:"white", lineHeight:'2vw', display:'flex', alignItems:'center', height:'100%', justifyContent:'space-evenly'}}>
              <div>
                <Image src={img9} style={{width:'8vw', height:'auto'}}></Image>
              </div>
              <div>
              <h2 style={{fontWeight:'normal', fontSize:'1.5vw'}}>Edward Newgate</h2>
              <p style={{fontSize:'1.1vw'}}>Founder Circle</p>
              </div>
            </div>
            <div style={{width:'40%'}}>
              <p style={{fontSize:'1.2vw', color:'white', lineHeight:'2vw', textAlign:'justify'}}>“Our dedicated patient engagement app and web portal allow you to access information instantaneously (no tedeous form, long calls, or administrative hassle) and securely”</p>
            </div>
          </div>
        </div>
      </section>
      <div>
        <Image src={bg2} style={{position:'absolute', zIndex:'-1', right:'0', width:'40vw', height:'auto'}}></Image> 
      <section className="articles" style={{display:"flex", justifyContent:'space-around', flexDirection:'column', height:'50vw', margin:'3vw 0vw'}}>
        <div style={{width:'70%', marginRight:'auto', marginLeft:'auto', textAlign:'center' }}>
          <h1>Check out our latest articles</h1>
          <hr style={{width:'10%', margin:'1vw auto'}}/>
        </div>
        <div style={{width:'75%', margin:"0px auto", height:'65%'}}>
        <div style={{display:'flex', justifyContent:'space-around', width:"100%", height:"100%"}}>
          <Article title={'Disease detection, Checkup in Laboratory'} article={'In this case, the role of the health laboratory is very important to do a disease detection...'} articleimg={article1}/>
          <Article articleimg={article2} title={'Herbal medicines that are safe for consumption'} article={'Herbal medicine is very widely used at this time because of its very good for your health...'}/>
          <Article articleimg={article3} title={'Natural care for healthy facial skin'} article={'A healthy lifestyle should start from now and also for your skin health. There are some...'}/>
        </div>
        </div>
        <div style={{display:'flex', justifyContent:'center'}} className="services">
        <button style={{fontSize:'1.1vw', borderRadius:'9999px', padding:'0.8vw 2.5vw', textAlign:'center', border:'2px solid #458ff6', width:'15%', marginLeft:'auto', marginRight:'auto'}}>View All</button>
        </div>
      </section>
      </div>
      <div style={{width:'100%', backgroundColor:'#458ff6', color:'white'}}>
      <section className="footer" style={{display:'flex', justifyContent:"space-around", width:'80%', margin:"0vw auto", padding:"4vw 0vw"}}>
        <div style={{width:'40%', lineHeight:"2vw", fontSize:'1.1vw'}}>
          <span style={{display:'flex', alignItems:"center"}}>
            <div style={{width:'2vw', height:"2vw", borderRadius:"9999px", backgroundColor:'white', display:"flex", justifyContent:"center", alignItems:'center'}}><p style={{color:"#458ff6", fontSize:"1.3vw", fontWeight:'bold'}}>T</p></div>
          <h1 style={{padding:"1.5vw 0vw", paddingLeft:"1vw"}}>Trafalgar</h1>
          </span>
          <p>Trafalgar provides progressive, and affordable healthcare, accessible on mobile and online 
          for everyone</p>
          <p>©Trafalgar PTY LTD 2020. All rights reserved</p>
        </div>
        <div  style={{lineHeight:'2vw'}} className="design">
          <h1 style={{fontSize:'1.5vw'}}>Company</h1>
          <p>About</p>
          <p>Testimonials</p>
          <p>Find a doctor</p>
          <p>Apps</p>
        </div>
        <div  style={{lineHeight:'2vw'}} className="design">
          <h1 style={{fontSize:'1.5vw'}}>Region</h1>
          <p>Indonesia</p>
          <p>Singapore</p>
          <p>Hongkong</p>
          <p>Canad</p>
        </div>
        <div style={{lineHeight:'2vw'}} className="design"> 
          <h1 style={{fontSize:'1.5vw'}}>Help</h1>
          <p>Help center</p>
          <p>Contact Support</p>
          <p>Instructions</p>
          <p>How it works</p>
        </div>
      </section>
      </div>
    </div>
  );
}
