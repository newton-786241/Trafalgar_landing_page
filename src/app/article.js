import Image from "next/image";

const Article = (props) => {
    return ( 
        <div style={{width:'28%', height:'100%', display:'flex', flexDirection:'column', justifyContent:'space-between', boxShadow:'0px 10px 50px lightgrey', borderRadius:'20px', backgroundColor:"white"}} className="articlebox">
            <div style={{height:'50%'}}>
                <Image src={props.articleimg} style={{width:'100%', borderTopLeftRadius:'20px', borderTopRightRadius:"20px", height:'auto'}}></Image>
            </div>
            <div style={{display:'flex', flexDirection:'column', justifyContent:"space-between", height:'50%', padding:'10px'}}>
            <div>
                <h1 style={{fontSize:'1.5vw'}}>{props.title}</h1>
            </div>
            <div>
                <p style={{fontSize:'1.1vw', lineHeight:'1.8vw', color:"lightgrey"}}>{props.article}</p>
            </div>
            <p style={{paddingBottom:"1vw"}}><a href="#" style={{color:'blue',}}>Read more</a></p>
            </div>
        </div>
     );
}
 
export default Article;