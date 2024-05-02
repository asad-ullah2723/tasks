import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { MdOutlineMarkEmailRead } from "react-icons/md";
import { MdOutlinePhoneInTalk } from "react-icons/md";
export default function Header() {
  return (
    <div>
      <div style={{backgroundColor:"blue", textAlign:"center", color:"white", textDecoration:"bold", padding:"10px"}}>
Contact us at any time for free Eatmade from First World Van Lines <a>Get Free Estimate </a>
      </div>
      <div class='row' style={{ fontSize:"13px",  fontWeight:"bold", padding:"20px 0px"}}>

        <div class='col-md-4'><div style={{color:"blue", textAlign:"center"}}>info@firstworldvanlines.com</div>
        <div style={{textAlign:"center"}}>Email Address   <MdOutlineMarkEmailRead /></div>
      
        </div>
      
        <div class='col-md-4'style={{textAlign:"center"}}><img src='logo.jpeg'/></div>
        <div class='col-md-4'>
            <div style={{display:"flex", flexDirection:"row", justifyContent:"center"}}>
            <div><MdOutlinePhoneInTalk />
</div>
            <div>
            <div style={{textAlign:"center"}}
        >+844-201-8316</div>
        <div style={{textAlign:"center"}}>phone line</div></div>
        </div>
      
</div>
      </div>
      <div class='row' style={{marginLeft:"500px", marginRight:"500px", fontSize:"13px", padding:"10px", textDecoration:"bold", fontWeight:"bold"}}>

        <div class='col-md' style={{color:"red", textDecoration:"underline"}}>HOME</div>
        <div class='col-md'>SERVICES</div>
        <div class='col-md'>ABOUT US</div>
        <div class='col-md'>CONTACTS</div>
      </div>
    </div>
  )
}
