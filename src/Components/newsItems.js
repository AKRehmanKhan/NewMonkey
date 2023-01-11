import React from 'react'

export default function newsItems(props)
 {

    let{title,src,des,url,Author,date,source,mode}=props;
     (mode==='dark')?document.body.style.backgroundColor="black":document.body.style.backgroundColor="white";
    return (
        <div>  <div style={{ lineHeight:"20px", borderRadius:"4px 4px 4px 0px",border:"1px solid #272d3d",textAlign:'center',fontSize:"9px",backgroundColor:"red",color:"white",height:"24px", width:"75px",zIndex:"1",position:"relative",left:"142px", top:"20px"}}>{source}</div>
        <div style={(mode==="light")?{position:'relative',border:"2px solid gray",backgroundColor:'white',height:'280px', width:"210px", marginLeft:"0px", marginTop:'7px'}:{ color:"black",position:'relative',border:"2px solid rgb(47, 128, 241)",backgroundColor:'gray',height:'280px', width:"210px", marginLeft:"0px", marginTop:'7px'}}>
         <img style={{height:"120px", width:"206px"}}src={src} alt="" />
         <p style={{marginTop:"5px", marginLeft:"5px", fontWeight:'bold', fontSize:'12px'}}>{title}</p>
         <p style={{marginTop:"-13px", marginRight:"5px", marginLeft:"5px",fontSize:"11px" }}>{des}</p>
         <p style={{ fontWeight:"bold",marginTop:"-12px",marginBottom:"50px", marginRight:"5px", marginLeft:"5px",fontSize:"11px" }}>By {Author} on {date} </p>
         <a href={url} target="_blank" rel="noreferrer">
         <button style={(mode==='dark')?{ color:"white",backgroundColor:"rgb(47, 128, 241)",position:"absolute", bottom:"7px",marginLeft:"5px", border:"2px solid #272d3d"}:{ color:"white",backgroundColor:"rgb(47, 128, 241)",position:"absolute", bottom:"7px",marginLeft:"5px", border:"2px solid gray"}}>Read More</button>
         </a>
      </div>
      </div>
    )
  
}
