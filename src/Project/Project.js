import React from 'react';
import './project.css'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Project() {
  return (
    <div className='project'>

  
              <h1 data-aos='fade-right' >My <span style={{color : 'rgb(84, 0, 240)'}}>Project</span>  </h1>
 <section>
 <div className='about'>
<div class="card-group ">
  <div data-aos='fade-up' class="card mx-3 bg-dark my-3">
    <a href='https://stunner-clone.web.app/' target="_blank">
    <img src="data:image/png;base64,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" class="card-img-top" alt="..."/>
    <div class="card-body" style={{backgroundColor : 'rgb(35, 21, 63)'}}>
    <h5 class="card-title" > stunner vision </h5>

    </div>
</a>
  </div>
  <div data-aos='fade-up' class="card mx-3 bg-dark my-3">
    <a href='https://github.com/umerprogramm/HumChat' target="_blank">
    <img src="https://png.pngtree.com/element_our/png_detail/20181229/vector-chat-icon-png_302635.jpg" class="card-img-top" alt="..."/>
    <div class="card-body" style={{backgroundColor : 'rgb(35, 21, 63)'}}>
    <h5 class="card-title" > HumChat </h5>
    </div>
    </a>
  </div>
  <div data-aos='fade-up' class="card mx-3 bg-dark my-3">
    <a href='https://fast-food-43754.web.app/' target="_blank">
    <img src="https://www.templateonweb.com//upload/web/templates/screenshots/thumbnails_800/108-fast-food-website-template-home.jpg" class="card-img-top" alt="..."/>
    <div class="card-body" style={{backgroundColor : 'rgb(35, 21, 63)'}}>
    <h5 class="card-title"> Fast Food </h5>
    </div>
    </a>
  </div>
</div>
</div>
</section>
    </div>
  
  )
}
