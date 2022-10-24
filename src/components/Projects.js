import React from 'react'

// make links as buttons
// make link to new page
const Projects = () => {
  return (
    <div className='projects'>
        <h1>PROJECTS</h1>  
    <div className="iframes">
      <iframe className='projects-iframe'
        width="500"
        height="400"
        src={`https://www.loom.com/embed/b0d6bc55d64a43ccb883be34c0c71c04?hide_owner=true&hide_title=true&hideEmbedTopBar=true`}
        frameBorder="0" 
        title="Capsule Closet Demo"  
        allowfullscreen  
        webkitallowfullscreen 
        mozallowfullscreen   
      />
      <p>A virtual closet organization tool allowing users to add items to their closet and create capsule wardrobes and outfits based on items in their closet. </p>    
      <a href="https://github.com/janice87/my-capsule-closet">GitHub</a>
    <br />
    <iframe
        width="500"
        height="400"
        src={`https://www.loom.com/embed/0536aadb2fea46b6bbf1db92586e1d3a?hide_owner=true&hide_title=true&hideEmbedTopBar=true`}
        frameBorder="0" 
        title="Super Host Demo"  
        allowfullscreen    
        webkitallowfullscreen 
        mozallowfullscreen 
      />
      <p>Full stack web app for hosts to list their rentals. Hosts are able to sign up and login to view, add, edit and delete their list of rentals. </p>
      <a href="https://github.com/janice87/air-superhost">GitHub</a>
      <br />
    <iframe
        width="500"
        height="400"
        src={`https://www.loom.com/embed/78b6644405f3463e8621248538361a3e?hide_owner=true&hide_title=true&hideEmbedTopBar=true`}
        frameBorder="0" 
        title="Super Host Demo"  
        allowfullscreen    
        webkitallowfullscreen 
        mozallowfullscreen 
      />
      <p>Full stack web app created as an online bullet journal allowing users to create todo lists, track moods and post/edit/delete journals. </p>      
      <a href="https://github.com/janice87/phase-3-sinatra-react-frontend">GitHub</a>
      <br />
    </div>
                
    </div>
  )
}

export default Projects


