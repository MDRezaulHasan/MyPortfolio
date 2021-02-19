import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Row,
  Col,
  Image,
  Button,
} from "react-bootstrap";
import { Link } from "react-scroll";
import ScrollToTop from "react-scroll-to-top";
import AOS from "aos";
import "aos/dist/aos.css";
import Loader from "../layout/Loader";
import Message from "../layout/Message";
import Project from "../layout/Project";
import { getProjectList } from "../../redux/actions/projectAction";
import ContactForm from "../layout/ContactForm";
// import { Link } from "react-router-dom";
export default function HomeScreen() {
  AOS.init();
  //////////////////////////////

  const dispatch = useDispatch();
  const listProjects = useSelector((state) => state.listProjects);
  const { loading, projects, error } = listProjects;

  useEffect(() => {
    dispatch(getProjectList());
  }, [dispatch]);

  return (
    <Container >
      <Row className="py-5" id="home">
        <Col md={6} xs={12}>
          <h1>MD REZAUL HASAN</h1>
          <h3 className="py-5">Full Stack Software Developer</h3>
          <Row className="py-3">
            <Col lg={6} md={6} xs={12} className="py-2">
              <Button variant="outline-secondary" block style={{ border: "none" }}>
                <Link to="education" style={{ color: "black" }} spy={true} smooth={true} duration={0}>
                  Education
                </Link>
              </Button>
            </Col>
           
            <Col lg={6} md={6} xs={12} className="py-2">
              <Button variant="outline-secondary" block style={{ border: "none" }}>
                <Link
                  style={{ color: "black" }}
                  to="portofolio"
                  spy={true}
                  smooth={true}
                  duration={0}
                >
                  My Work
                </Link>
              </Button>
            </Col>
          </Row>
          <Row>
            <Col lg={6} md={6} xs={12} className="py-2">
              <Button variant="outline-secondary" block style={{ border: "none" }}>
                <Link
                  style={{ color: "black" }}
                  to="experience"
                  spy={true}
                  smooth={true}
                  duration={0}
                >
                  work experience
                </Link>
              </Button>
            </Col>
             <Col lg={6} md={6} xs={12} className="py-2">
              <Button variant="outline-secondary" block style={{ border: "none" }}>
                <Link
                  style={{ color: "black" }}
                  to="skill"
                  spy={true}
                  smooth={true}
                  duration={0}
                >
                 Skill
                </Link>
              </Button>
            </Col>
          </Row>
           <Row>
            <Col lg={6} md={6} xs={12} className="py-2">
              <Button variant="outline-secondary" block   style={{ border: "none" }}>
                <Link
                  style={{ color: "black" }}
                  to="service"
                  spy={true}
                  smooth={true}
                  duration={0}
                >
                  Service
                </Link>
              </Button>
            </Col>

             <Col lg={6} md={6} xs={12} className="py-2">
              <Button variant="outline-secondary" block   style={{ border: "none" }}>
                <Link
                  style={{ color: "black" }}
                  to="contact"
                  spy={true}
                  smooth={true}
                  duration={0}
                >
                  Conatct me
                </Link>
              </Button>
            </Col>
        
          </Row>
        </Col>
        <Col md={6} xs={12} >
          <Image src="images/myImage.jpg" fluid></Image>
        </Col>
      </Row>
      <hr />
      <Row id="about">
        <Col lg={12}>
          <h1>My Motivation</h1>
        </Col>
        <Col lg={12}>
          <h5 className="py-5">
            <p>
            I love to transform ideas into reality using code. I am passionate about using Javascript,React for web development and Java, C# for developing game. 
            Asp.Net for desktop and web api application.
            </p>
              <p>
                A full-stack software developer means he knows the way of finding a solution for each and every stage of web technology. Writing code on IDE is not an engineering(Software) process. The engineering(Software) process is to know how the data flow is worked behind the scene.
              </p>
              <p>
                 Technology I am following:
                <span className="star">
                MERN stack &
                ASP.NET Sql stack
                </span>
              </p>
             
              <p>
                My communication skill is good for connecting to the fellow members in the group when doing a project. Learning new things and the new platform is my passion.
                My working environment is following agile methodology.  I loved to work with daily updates and want to learn from my mistake.
              </p>
          </h5>
        </Col>
      </Row>
      <hr />

      <Row id="experience">
        <Col lg={12}>
          <h1>My Experiences</h1>
        </Col>
        <Col lg={4}>
          <address>
            <h5 className="py-3">
              KTH Royal Institute of technology  
            </h5>        
              Stockholm, Sweden.
           
             <h6>Master Thesis Student.</h6>
          </address>
            {/* <p>Topic: <b></b></p> */}
            <h5>Jan 2021 - Present.</h5> 
        </Col>
        <Col lg={4}>
          <address>
            <h5 className="py-3">
              CodifyCollege AB.
            </h5>
            Stockholm, Sweden.
             <h6>Trainer & Project Assistant - Full Time.</h6>
          </address>
            <h6>Task: </h6>
            <ul>
              <li>Teaching about fullstack developement with MERN stack.</li>
              <li>Introducing about server technology.</li>
              <li>Teaching about DEVOPS engineering.</li>
              <li>Teaching about agile methodology.</li>
              <li>Working in backend development (Student Portal).</li>
            </ul>
            <h5>OCT 2020 - Jan 2021.</h5> 
        </Col>
        <Col lg={4}>
          <address>
            <h5 className="py-3">
              Dunderdog AB.
            </h5>
            Stockholm, Sweden.
             <h6>Backend developer - Full Time (Intern).</h6>
          </address>
            <h6>Task: </h6>
            <ul>
              <li>Working in backend development of a search engine.</li>
              <li>Debugging the best query for searching and implementing the backend for search engine.</li>
            </ul>
            Link: <Button variant="outline-secondary" style={{ border: "none" }}><a href="https://byggtjanst.se/">byggtjanst</a></Button>
            <h5>Jul 2020 - Oct 2020.</h5> 
        </Col>
        <Button variant="outline-secondary" style={{ border: "none" }}>
          <a href="https://www.linkedin.com/in/rezaul-hasan-437baa190/">  
            <h6>For more experience you can check my linkedin profile.</h6>
          </a>
        </Button>
      </Row>
      <hr />

  <Row id="education">
        <Col lg={12}>
          <h1>My Education</h1>
        </Col>
        <Col lg={6}>
          <address>
            <h5 className="py-3">
              KTH Royal Institute of Technology.
            </h5>           
              Stockholm, Sweden.
          </address>
            <p><b>Masters of science (MSc) in Software Engineering of distributed system.</b></p>
            <h5>Aug 2019 - Present.</h5> 
        </Col>
        <Col lg={6}>
          <address>
            <h5 className="py-3">
             International Islamic University Chittagong.
            </h5>           
              Chittagong, Bangladesh
          </address>
              <p><b>Bachelor of science (BSc) in Computer science and engineering .</b></p>
              <h5>Jun 2013 - Dec 2017</h5> 
        </Col>
     
      </Row>
      <hr />

      <Row
      id="skill"
        className="py-5"
        data-aos="fade-right"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <Col lg={12}>
          <h1 className="py-5">MY SKILLS</h1>
        </Col>
        <Col>
         <h4 className="py-5">Fronend</h4>
          <ul>
          <li><h5 className="pb-3">Html,CSS,SCSS</h5></li>
          <li><h5 className="pb-3">Javascript</h5></li>
          <li><h5 className="pb-3">Reactjs</h5></li>
          <li><h5 className="pb-3">bootstrap</h5></li>
          
        </ul>
        </Col>
        <Col>
         <h4 className="py-5">Backend</h4>
          <ul>
          <li><h5 className="pb-3">C# Asp.net</h5></li>
          <li><h5 className="pb-3">Nodejs</h5></li>
          <li><h5 className="pb-3">Java</h5></li>
          <li><h5 className="pb-3">Python</h5></li>
          <li><h5 className="pb-3">PHP</h5></li>
        </ul>
        </Col>
         <Col>
         <h4 className="py-5">Database Server</h4>
          <ul>
          <li><h5 className="pb-3">SQL Server</h5></li>
          <li><h5 className="pb-3">Mongodb Server</h5></li>
          <li><h5 className="pb-3">MySql Server</h5></li>
          <li><h5 className="pb-3">Tomcat Server</h5></li>
          <li><h5 className="pb-3">Google Firebase</h5></li>
        </ul>
        </Col>
      </Row>
      <Row>
 
        <Col>
          <h4 className="py-5">Extra But Essential</h4>
          <ul>
          <li><h5 className="pb-3">Agile(Jira)</h5></li>
          <li><h5 className="pb-3">Azure DevOps</h5></li>
          <li><h5 className="pb-3">Git</h5></li>
          <li><h5 className="pb-3">Internet Of things (IOT)</h5></li>
        </ul>
        </Col>
      </Row>
      <hr />
      <Row
      id="service"
        //className="background_img"
        data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <Col lg={12} className="p-5">
          <h1 className="text-black">Services</h1>
        </Col>
        <Col lg={6} md={6} xs={12} className="p-5">
          <h3 className=" text-black py-3">Website</h3>
          <ul>
              <li> 
                <h5 className=" text-black">
                    Making nice and scalable client site application. 
                </h5>
              </li>
              <li> 
                <h5 className=" text-black">
                    Making nice and reusable server site application.
                </h5>
              </li>
              <li> 
                <h5 className=" text-black">
                    Implementing backend API (web api).
                </h5>
              </li>
          </ul>
         
        </Col>
        <Col lg={6} md={6} xs={12} className="p-5">
          <h3 className=" text-black py-3">Desktop Application</h3>
           <ul>
              <li> 
                <h5 className=" text-black">
                    Making nice and scalable Point of sale(POS) application. 
                </h5>
              </li>
              <li> 
                <h5 className=" text-black">
                   Desktop game with complex functionality.
                </h5>
              </li>
              <li> 
                <h5 className=" text-black">
                    Implementing backend API for dynamic app(web api + desktop app).
                </h5>
              </li>
          </ul>
        </Col>
          <Col data-aos="fade-left"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center">
          <h3>Other</h3><br/>
          
               <ul>
              <li> 
                 <h5 className=" text-black py-3">Making nice and good backend architecture using MVC and MV-VM.</h5>
              </li>
              <li> 
                <h5 className=" text-black">
                   Backend will be implementing by nice, reusable and perfect design pattern.
                </h5>
              </li>
              <li> 
                <h5 className=" text-black">
                   Helping for buying domain, hosting and server.
                </h5>
              </li>
          </ul>
      </Col>
      </Row>
    
      <hr />
      <Row
        className="py-5"
        id="portofolio"
        data-aos="fade-up"
        data-aos-offset="100"
        data-aos-delay="100"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
        data-aos-mirror="true"
        data-aos-once="true"
        data-aos-anchor-placement="top-center"
      >
        <Col lg={12} className="py-5">
          <h1>MY RECENT WORKS</h1>
        </Col>

        {loading ? (
          <Loader></Loader>
        ) : error ? (
          <Message variant="info">{error}</Message>
        ) : projects.length ? (
          <>
            {projects
              .map((project) => (
                <Col sm={12} md={6} lg={4} key={project._id}>
                  <Project project={project} />
                </Col>
              ))
              .reverse()}
          </>
        ) : (
          <Message>No project uploaded yet</Message>
        )}
      </Row>
      <hr />

      <ContactForm />

      <ScrollToTop smooth color="#343a40" />
    </Container>
  );
}
