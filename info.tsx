 import { Mail, Phone, MapPin ,Instagram, Twitter, Linkedin,Github } from 'lucide-react';
import ProfilePic from './see7.jpg'
 function InfoName(){
const InfoStyle = {
    name:'Jane BATAKARIZA',
    


};
const StyleWay={
    background:'lightgrey',
    color:'black',
    fontfamily:'garamond',
    padding:'15px',
border:'1px solid white',
borderradius:'80px',
height:'max-content',
width:'max-content',
textalign:'center',

alignItems:'center',
justifyContent:"center",
marginRight:"20px"
}

return (
    <div style={StyleWay}>
      <div>
         <nav style={{ width:'1500px' , height:'50px', display:"flex", gap:'100px' , textAlign:"center"}}>
<a href="#about" style={{}}>ABOUT</a>    | 
<a href = "#projects">PROJECTS</a> |
<a href = "#contacts">CONTACTS</a> |


         </nav>
         </div>
         <div>
         <section id="about">
          <h2>About me </h2>
          <address>
          <img src={ProfilePic} alt="my picture" style={{width:'100px'}}/>

<p> Jane BATAKARIZA is a young patriotic lady , <br/>whose vision aligns with technology <br/> since she visions to be a good software engineer in the future who is  a fullstack.<br/> Also Jane finds value in leadership as its a way to serve people and ensure their lives are better.</p>
       
        </address>
         </section>
         </div>
         <div>
         <section id="projects" style={{target:'blank'}}>
          
            <p>Projects worked on:</p>
            <ul>

          <li><p> <a href="https://github.com/janebatakariza-hue/Faithfoundation">Foundation project</a></p></li>
          <li><p><a href ="https://github.com/janebatakariza-hue/coffee-shop">Coffee shop</a></p></li>
          </ul>

         </section>
         </div>
        



<div>
<address>
<section id="contacts">
  <h3>Contacts</h3>
  <p><Instagram/><a href="https://www.instagram.com/batakariza40/">instagram</a></p>


<h5><MapPin className="w-5 h-5 text-blue-500"/>Rwanda- Bugesera</h5>
  <h5>
 <Mail className="w-5 h-5 text-blue-500"/>  <a href="https://mail.google.com/mail/u/0/">  janebatakariza@gmail.com</a></h5>
  <h5><Phone className="w-5 h-5 text-blue-500" />+250727983026</h5>
  </section>
  </address>
  </div>
  <div>
    <h4  style={{fontSize:'15px'}}>Skills</h4>
    <button style={{background:'lightblue', color:'blueviolet'}}>React</button>
  
  <button style={{background:'lightblue', color:'blueviolet' , margin:'10px'}}>MSQL</button> 
  <button style={{background:'lightblue', color:'blueviolet' ,  margin:'10px'}}>Node.js</button> <br/>
  <button style={{background:'lightblue', color:'blueviolet' ,  margin:'10px'}}>C & C++</button>
  <button style={{background:'lightblue', color:'blueviolet' ,  margin:'10px'}}>HTML&CSS</button>
  </div>
  
  <div className="available">
    <button style={{background:'lightgreen', color:'lightgoldenrodyellow'}}>Available for work</button>
  </div>
  <hr/>
  <div>
   <footer>
      <a href="https://twitter.com/yourhandle"><Twitter size={24}  style={{ margin:'10px'}}/></a>
      <a href="https://linkedin.com/in/yourprofile"><Linkedin size={24}  style={{ margin:'10px'}}/></a>
      <a href="https://github.com/janebatakariza-hue"><Github size={24} style={{ margin:'10px'}} /></a>
    </footer>
 </div>
  
  
    </div>
)

}
export default InfoName;