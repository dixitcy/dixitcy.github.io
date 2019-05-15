import React, { Component } from 'react'
import './resume.css'

export default class resume extends Component {
  render() {
    return (
      <div className="resume-container">
        <div className="basic-info">
            <div className="name">
                <div className="avatar"></div>
                <div className="name-info">
                <div className="first-name">Dixit</div>
                <div className="title">Freelance web developer
                </div>
                </div>
                
            </div>
            <div className="mission">
                With a diverse experience in building everything from simple landing pages to 
                complex , real-time , multi-featured applications , I'm
                here to <span style={{color : '#005aff'}}> help startups rapidly prototype and ship high-quality web products to their customers.</span>
                
            </div>
        </div>
        <div className="history-container">
            <div className="project-info">
            <div class="project-heading">
            <i style={{marginRight : '10px' , fontSize : '30px'}} className="twa twa-page-facing-up"></i>Project History 
            </div>
                <div className="project">
                    <div className="project-title">
                        Fashtag Universe<span className="tag freelance-tag">Freelance</span><span className="tag">React</span>
                    </div>
                    <div className="project-description">
                        Built an MVP in React for Fashtag , features included a drag and drop content builder
                        with rich media and support for creating surveys , questionnaires , quizzes and WSYWIG editor
                        functionlity
                    </div>
                    <div>
                        Link : <a target="_blank" href="http://www.app.fashtag.info/universe">http://www.app.fashtag.info/universe</a>
                    </div>
                    <div className="reference">
                        Reference : nikhilesh@fashtag.info <span className="time-span">Founder , Fashtag</span>
                    </div>
                </div>
                <div className="project">
                    <div className="project-title">
                        Cofnders <span className="tag freelance-tag">Freelance</span> <span className="tag">Angular</span>
                    </div>
                    <div className="project-description">
                        Built an Angular application to connect founders with investors and talent . This project
                        had a very hard deadline and it was delivered with time to spare.
                    </div>
                    <div>
                        Link : <a target="_blank" href="http://app-dev.cofnders.com">http://app-dev.cofnders.com</a>
                    </div>
                    <div className="reference">
                        Reference : gaayathri@heartux.com <span className="time-span">Founder , Cofnders</span>
                    </div>                    
                </div>
                <div className="project">
                    <div className="project-title">
                        Matchmove <span className="tag freelance-tag">Freelance</span> <span className="tag">Angular</span>
                    </div>
                    <div className="project-description">
                        Worked on multiple Angular projects here , helped them fix critical bugs so they
                        could ship as well as added new features and API integration.
                    </div>
                    <div className="reference">
                        Reference : manik@matchmove.com <span className="time-span">PM , Matchmove , Inc</span>
                    </div>
                    
                </div>
                <div class="project-heading">
            <i style={{marginRight : '10px' , fontSize : '30px'}} className="twa twa-briefcase"></i>
            Tricon Infotech <span className="time-span">2014 - 2018 Dec</span>
            </div>
                <div className="project">
                    <div className="project-title">
                        Medium<span className="tag">React</span>
                    </div>
                    <div className="project-description">
                        Built a fully-featured content framework
                    </div>
                    
                </div>
                <div className="project">
                    <div className="project-title">
                        Lifespan<span className="tag">React</span> <span className="tag">React-animate</span>
                    </div>
                    <div className="project-description">
                        A JSON backed animation builder for teaching psychology with a click-through game.
                    </div>
                    
                </div>
                <div className="project">
                    <div className="project-title">
                        Cherry<span className="tag">React</span><span className="tag">PWA</span>
                    </div>
                    <div className="project-description">
                        Built the progressive web app version of cherry , an internal photo-sharing app
                    </div>
                    
                </div>
                <div className="project">
                    <div className="project-title">
                        Infield<span className="tag">Ember</span><span className="tag">Hybrid-app</span>
                    </div>
                    <div className="project-description">
                        An Ember web application wrapped in Cordova , salesforce for pharmacy reps
                    </div>
                    
                </div>  
                <div className="project">
                    <div className="project-title">
                        Karaoke Garage<span className="tag">Android</span><span className="tag">Intern</span>
                    </div>
                    <div className="project-description">
                        Built the android app version of the web product at KaraokeGarage ,
                        a startup focussed on real-time sing-along application
                    </div>
                    
                </div>                                             
            </div>
            <div className="education-info">
                <div className="education">
                    <div className="contact">
                    <div style={{marginBottom : '10px'}}>
                    <i className="twa twa-round-pushpin"></i> Bangalore , India
                    </div>
                        <div className="email">
                        <i className="twa twa-email"></i> <a href="mailto:dixit.iit@gmail.com">dixit.iit@gmail.com</a> 
                        </div>
                        <div>
                        <i className="twa twa-mobile-phone"></i> <a href="tel:+91-9620418303">+91 9620418303</a> 
                        </div>
                    </div>
                    <div className="education-title">
                    education <i className="twa twa-mortar-board"></i> 
                    </div>
                    <div style={{ textAlign: 'left',marginTop: '10px'}}>
                        <div style={{ fontSize: '20px',marginBottom: '10px'}}>
                        Indian Institute of Technology , Bhubaneswar
                        </div>
                        <div>
                            Electrical Engineering
                            <span className="time-span">
                            - 2014
                        </span>
                        </div>
                        
                        
                    </div>

                    <div className="education-title" style={{marginTop : '30px' , textAlign : 'left' , marginLeft : '0px'}}>
                     skills <i className="twa twa-computer"></i>
                    </div>
                    <ul style={{listStyle : 'none' , textAlign : 'left' , paddingLeft : '0px'}}>
                        <li>
                            <div>
                            React
                            </div>
                            <div>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            </div>
                            
                        </li>
                        <li>
                            
                            <div>
                            Angular
                            </div>
                            <div>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            </div>
                        </li>
                        <li>
                            
                            <div>
                            React Native
                            </div>
                            <div>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            
                            </div>
                        </li>
                        
                        <li>
                            
                            <div>
                            Node JS
                            </div>
                            <div>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            
                            </div>
                        </li>
                        <li>
                            
                            <div>
                            Ember
                            </div>
                            <div>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            <i className="twa twa-star"></i>
                            
                            </div>
                        </li>
                    </ul>

                </div>
                <div className="skills">

                </div>
            </div>
        </div>
      </div>
    )
  }
}
