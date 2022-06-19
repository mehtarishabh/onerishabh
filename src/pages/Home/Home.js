import React, { useEffect, useState } from 'react'
import { scroller } from "react-scroll";

import Main from './Main/Main';
import useElementOnScreen from '../../hooks/useElementOnScreen.js';
import SideMenu from '../../ui/SideMenu/SideMenu';
import './Home.scss';

function Home() {
  const [menuItemsClass] = useState(['Home_skills', 'Home_workexp', 'Home_education', 'Home_accolades', 'Home_certifications']);
  const [activeIndex, setActiveIndex] = useState(null);
  const [containerRefs, isVisibleIndex] = useElementOnScreen({
    root: null,
    rootMargin: "0px",
    threshold: 1
  });

  const scrollToSection = (classname, index = null) => {
    if(index !== null) setActiveIndex(index);
    scroller.scrollTo(classname, {
      duration: 1000,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  useEffect(() => {
    if(isVisibleIndex) {
      let index = menuItemsClass.findIndex(ele => ele === isVisibleIndex);
      index = index !== -1 ? index: 1;
      setActiveIndex(index);
    }
  },[isVisibleIndex, menuItemsClass])

  return (
    <div className='Home'>
      <Main onScrolldownClick={() => scrollToSection("Home_skills")}/>
      <div className='Home_stickyContainer'>
        <div className='Home_sideMenu'>
          <SideMenu onSideMenuClick={(index) => scrollToSection(menuItemsClass[index], index)} activeIndex={activeIndex}/>
        </div>
        <section className={menuItemsClass[0]} ref={el => (containerRefs.current = [...containerRefs.current, el])}>
          <h1 className='Home_heading'>Skills</h1>
          <div className='Home_details'>
            <div className='Home_subheading'>Primary Skills</div>
            <div className='Home_text'>Javascript, HTML 5, CSS 3</div>
            <div className='Home_text'>Angular 10, Reactjs</div>
            <div className='Home_subheading'>Secondary Skills</div>
            <div className='Home_text'>AWS cloud services, Nodejs BigQuery, MongoDb, MySql </div>
            <div className='Home_text'>Contentful, Strapi, CloudCMS</div>
          </div>
        </section>
      <section className={menuItemsClass[1]}>
        <h1 className='Home_heading'>Work Experience</h1>
        <div className='Home_details'>

          <div className='Home_subheading' ref={el => (containerRefs.current = [...containerRefs.current, el])}>Y Media Labs (Senior Software Engineer)</div>
            <div className='Home_text'>Feb 2019 - Present</div>
            <div className='Home_text'></div>
            <div className='Home_text'><b>Client - Elevate</b></div>
            <div className='Home_text'>1. Successfully completed the project elevate.com from scratch till the handover by leading a team of 5 developers.</div>
            <div className='Home_text'>2. Involved in understanding requirements, task creation, estimation, allocation to respective teams, PR reviews etc.</div>
            <div className='Home_text'>3. Build various responsive components for the project along with initial setup and defining guidelines etc.</div>
            <div className='Home_text'>4. Worked on components such as navigation menu, quiz animation etc to name a few.</div>
            <div className='Home_text'>Technologies Used - Angular 10, Nodejs, Cloud CMS, Azure</div>
            <div className='Home_text'></div>
            <div className='Home_text'></div>
            <div className='Home_text'><b>Client - Dosist</b></div>
            <div className='Home_text'>1. Completed ecommerce websites dosist.com and dosist.ca from scratch till the handover to the clients.</div>
            <div className='Home_text'>2. Developed various features in the app during the course of development like header, Formula detail, formula finder,
              signup, session management, review order in checkout to name a few.</div>
            <div className='Home_text'>3. Lead the team in absence of team lead to successfully deliver the requirements.</div>
            <div className='Home_text'>Technologies Used - React, Nodejs, Contentful, Google Analytics, Magento, IpStack, Jumio</div>

          <div className='Home_subheading'>Mavenir Systems Pvt. Ltd. (Member of Technical staff 2 - R&D)</div>
            <div className='Home_text'>May 2017 - Jan 2019</div>
            <div className='Home_text'></div>
            <div className='Home_text'>1. Used various views of GoJS to show the hierarchy of different physical devices in different situations.</div>
            <div className='Home_text'>2. Developed map feature to check RRU's locations from CMS(Centralized Management System) UI using Open Street
            Maps, Leaflet and markerCluster.</div>
            <div className='Home_text'>3. Implemented various nodeJs modules to support and enhance the current UI project.</div>
            <div className='Home_text'>4. Did various UI enhancements to support functionalities like download in csv and xml format, operations
            support like reboot, restart of BBU(Baseband Unit)/ RRU(Remote Radio Unit), etc.</div>
            <div className='Home_text'>5. Made UI for leaf-list data type of yang support using angular 4.</div>
            <div className='Home_text'>Technologies Used - Typescript, NodeJs, Angular4, mariaDb, Cvs</div>      

          <div className='Home_subheading'>Mubble Networks Pvt. Ltd. (Product Engineer) </div>
            <div className='Home_text'>Jan 2016 - Mar 2017</div>
            <div className='Home_text'></div>
            <div className='Home_text'>1. Done the setup of BigQuery data on Google studio.</div>
            <div className='Home_text'>2. Handling manual and automated FCM(Firebase Cloud Messaging) notifications using nodejs and google’s BigQuery.</div>
            <div className='Home_text'>3. Written mongoExport for handling aggregate queries UI and command line.</div>
            <div className='Home_text'>4. Written various nodejs scripts.</div>
            <div className='Home_text'>5. Written models, api and UI code in javascript for dashboard and mongoDb connection using already
            available framework of company.</div>
            <div className='Home_text'>6. Involved in AWS services like EC2, EMR, S3, CloudWatch with spark and scala for handling big data stored in s3.</div>
            <div className='Home_text'>7. Worked on Big data report generation using spark, scala, AWS EMR and S3.</div>


          <div className='Home_subheading' ref={el => (containerRefs.current = [...containerRefs.current, el])}>IBM (Application Developer)</div>
            <div className='Home_text'>Jul 2014 - Jan 2016</div>
            <div className='Home_text'></div>
            <div className='Home_text'></div>
            <div className='Home_text'><b>Client - Prudential Financial Ltd.</b></div>
            <div className='Home_text'>1. Written Ant script for building and deploying.</div>
            <div className='Home_text'>2. Implemented Cordova API for Camera and Push Notification. 3. Created adapters for various modules in Worklight.</div>
            <div className='Home_text'></div>
            <div className='Home_text'></div>
            <div className='Home_text'><b>Client - Exxon Mobil</b></div>
            <div className='Home_text'>1. Fixed bugs on the SpeedPass+ app and database handling.</div>
            <div className='Home_text'>2. Worked on Reactjs.</div>
            <div className='Home_text'>3. Used Tealeaf for analytics and Jenkins for automated build and deployment.</div>
        </div>
      </section>
      <section className={menuItemsClass[2]} ref={el => (containerRefs.current = [...containerRefs.current, el])}>
        <h1 className='Home_heading'>Education</h1>
        <div className='Home_details'>
          <div className='Home_subheading'>B. Tech: 
          </div>
          <div className='Home_text'>Computer Science and Engineering NIT Goa</div>
          <div className='Home_text'>CGPA- 7.52/10</div>
          <div className='Home_subheading'>Class XII:
          </div>
          <div className='Home_text'>Modern School, Kota ,Rajasthan</div>
          <div className='Home_text'>Percent- 84.40%</div>
          <div className='Home_subheading'>Class X: </div>
          <div className='Home_text'>Modern School, Kota ,Rajasthan</div>
          <div className='Home_text'>Percent - 77.00%</div>
        </div>
      </section>
      <section className={menuItemsClass[3]} ref={el => (containerRefs.current = [...containerRefs.current, el])}>
        <h1 className='Home_heading'>Accolades</h1>
        <div className='Home_subheading'></div>
        <div className='Home_details'>
          <div className='Home_text'>1. Among top 0.01% out of 13 lakh students in AIEEE exam. </div>
          <div className='Home_text'>2. State level chess player in 2006.</div></div>
      </section>
      <section className={menuItemsClass[4]} ref={el => (containerRefs.current = [...containerRefs.current, el])}>
        <h1 className='Home_heading'>Certifications</h1>
        <div className='Home_subheading'></div>
        <div className='Home_details'>
          <div className='Home_text'>1. Completed <b>AWS Certified Developer - Associate</b> certificate.</div>
          <div className='Home_text'>2. <b>Javascript: the Advanced Concepts</b> by Andrei Neagoi - Udemy Certification</div>
          <div className='Home_text'>3. <b>Advanced CSS and Sass: Flexbox, Grid, Animations and More!</b> By Jonas Schmedtmann - Udemy Certification </div>
          <div className='Home_text'>4. <b>SEO 2022</b> by Arun Nagarathanam - Udemy Certification</div>
        </div>
      </section>
      </div>
    </div>
  );
}

export default Home;
