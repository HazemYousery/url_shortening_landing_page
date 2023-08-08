import React from 'react';
import ReactDOM from 'react-dom/client';

const Elem  =(state)=>{
  const{handlechange,handleSubmit,items}=state;




  const man = items.map(item=>{
    if(document.getElementById('hidden')){
      
    var x = document.getElementById("searchBar").value;
    document.getElementById("hidden").innerHTML = x;
item.name = x;
    }
    return (
        <div key={item.id}>
            {item.name}
            </div>
    )
   })
   
        return (
<div><div className="container">
   
   <div className="row">



       <div className="col-12">
         <a href="#" className='h'>Shortly</a>
           <a href="#"className='a'>Features</a>
           <a href="#" className='z'>Pricing</a>
           <a href="#" className='e'>Resources</a>
           <a href="#" className='m'>Login</a>
           <a href="#" className='e'>Signup</a>
       </div>
   </div>


</div>

<div className="jumbotron-fluid">
   <div className="row">
       <div className="col-6">
           <h2>More Than Just Shorten Links</h2>
           <p>Build your brand's recognition and get detailed insights on how your links are performing</p>
           <button className='start'>Get Started</button>
       </div>
       <div className="col-6">
          <img src="https://cdn.dribbble.com/users/4828924/screenshots/11711486/media/d81302f99608cb0ec1232d1ec7fcbd6a.png?resize=400x0" alt=''/>
       </div>
   </div>
</div>



   <div className="card" id="hazem">
       <div className="card-body" >
<form>
<div className="row">
<div className="col-10">
           <input type="url" placeholder="shorten a link here" id="searchBar"  onChange={handlechange}/>
</div>
   <div className="col-2">
           <button  className='BTN'   id="searchBtn" type="submit" onClick={handleSubmit}> Shorten it</button>
   </div>
</div>
</form>
</div>
   </div>
   <br></br>
<a id='hidden' href='#' ></a>



</div>
)
}

export default Elem;
