import React from 'react';
import ReactDOM from 'react-dom/client';
import "./App.css"
import image1 from './Images/women-purple.jpg'
import womenimg from './Images/women-img.jpg'
import mentalimg from './Images/mental-health.png'
import physicalimg from './Images/weightlifter.png'
import social from './Images/social-care.png'
import chatbot from './Images/chatbot.png'
import forum from './Images/forum22.png'
import predictor from './Images/pedict2.png'
import tracker from './Images/radar.png'
import quiz from './Images/ideas.png'
function Homepage(){
    return(
        <div className='img-container' >
         <img src={image1} className='bg-img'></img>
         <h1 className='first-heading'> Dedicated to individualized healthcare for every women</h1>
         {/* <button href='' className='services-btn'> View All services</button> */}
         <p className='services-btn'>Our website provides an extensive and complete remedial opportunity to cope with the post partum depression.
</p>
         <section>
         <div className='inner-div'>
         <div className='feature1'>
         
            <img src={mentalimg} className='circular-img1'></img>
         
            <a href='https://www.mentalhealth.org.uk/' > Mental Wellbeing </a>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>

         </div>
         <div className='feature2'>
       
         <img src={physicalimg} className='circular-img2'></img>
            <a href='https://stacks.cdc.gov/view/cdc/63033' > Physical Wellbeing</a>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>

         </div>
         <div className='feature3'>
      
         <img src={social} className='circular-img3'></img>
            <a href='https://www.frontiersin.org/articles/10.3389/fpsyg.2019.01377/full' > Social Wellbeing </a>
            <p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod </p>

         </div>
         
         </div>
         </section>
        
            <div className='about-div'>
                 <img src={womenimg} className='about-img'></img> 
            </div>
            <div className='about-text'>
               <h1>About</h1> 
               <p>The birth of a baby can start a variety of powerful emotions, from excitement and joy to fear and anxiety. But it can also result in something you might not expect — depression.

Most new moms experience postpartum "baby blues" after childbirth, which commonly include mood swings, crying spells, anxiety and difficulty sleeping. Baby blues usually begin within the first 2 to 3 days after delivery and may last for up to two weeks.</p>   
            </div>
         
         
         <section className='our-feature-sec'>
            <h1> Our Features</h1>
            <div className='row'>
               <div>
                <div className='row1'>
                    <div className='inner'>
                       
                        <img src={chatbot}className='row1-logo1'></img>
                        <div className='row1-text'>
                            <h3> Chatbot Chirag </h3>
                            <p> A 24*7 available chatbot for you to talk to. It will help you lessen stress and provide answers to all your queries.</p>
                        </div>
                    </div>
                </div>
                {/* row2 */}
                <div className='row2'>
                    <div className='inner'>
                       
                        <img src={predictor}className='row1-logo1'></img>
                        <div className='row1-text'>
                            <h3> Diseases Predictor</h3>
                            <p> A portal which predicts any disease which you might have on the basis of the symptoms listed out by you.</p>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                <div className='row1'>
                    <div className='inner'>
                       <img src={tracker} className='row1-logo1' ></img>
                        <div className='row1-text'>
                            <h3> Calories Tracker </h3>
                            <p> Keeping a track of your proper nutrition & calories for active boost to mood and energy levels.</p>
                        </div>
                    </div>
                </div>
                {/* row4 */}
                <div className='row2'>
                    <div className='inner'>
                       
                        <img src={tracker} className='row1-logo1'></img>
                        <div className='row1-text'>
                            <h3> Water Intake Tracker</h3>
                            <p> Tracks your water drinking goals for the day and helps you drink enough water so that you stay healthy.</p>
                        </div>
                    </div>
                </div>
                </div>
                <div>
                <div className='row1'>
                    <div className='inner'>
                       
                        <img src={quiz} className='row1-logo1'></img>
                        <div className='row1-text'>
                            <h3> Postpartum Diagnosis Quiz </h3>
                            <p> Providing free medical analysis to understand post pregnancy depressive symptoms.</p>
                        </div>
                    </div>
                </div>
                {/* row6*/}
                <div className='row2'>
                    <div className='inner'>
                    <img src={forum} className='row1-logo1'></img>
                        <div className='row1-text'>
                            <h3> Community Forum</h3>
                            <p> A portal to share experiences, thoughts, and advices related to any topic and create a nice community to support all the women.</p>
                        </div>
                    </div>
                </div>
                </div>
            </div>
         </section>
        
        </div>
        
    )
}
export default Homepage;