import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import 'bootstrap/js/dist/scrollspy'



export default function Home() {
  return (
    
  <div className={styles.container}>
      <nav id = "navigation" class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Navigation</a>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#about">About Me</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#experience">Experience</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#projects">Projects</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#contact">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div data-spy="scroll" data-target="#navigation" data-offset="0">
  


      <a id="about" name = "about">
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
        <h1 class="display-4">Aarush Agrawal</h1>
        <p class="lead">Hi! My name is Aarush Agrawal. I am a first year Computer Science and Engineering major at UC Davis. As of right now, I am into web development, but I am looking to explore other fields as well.
            In my free time, I like to play sports, exercise, hang out with friends, and code. I am a fast and dedicated learner who always likes to learn new things.</p>
      </div>
      </div>
          <p> 
          </p>
          </a>
        
        <a id ="experience" name = "experience">
          <div>
          Tech Stack:
          <ul>
            Frontend: React.js, Next.js HTML/CSS, JavaScript, React Native
          </ul>
          <ul>
            Backend: Node.JS, 
          </ul>
          </div>
          <div>
            <strong>Experience:</strong>
          </div>
            <div>
            AggieWorks: Software Engineer(Jan 2022 - Present)

          <ul>
            <li>
              Currently working on the frontend of an iOS app using React Native
            </li>
            <li>
              Worked on animations and stylings
            </li>
            <li>
              Made a responsive single page class review form which takes in user data regarding classes and displays it at the bottom of the page
            </li>
            <li>
              Incorporated input validation
            </li>
            <li>
              Technologies used: GitHub, React Native, React.js, Bootstrap
            </li>
          </ul>

          </div>
          <div>
            #include: Technical Cohort Member(September 2021-Present)
            <ul>
              <li>
                Made the backend portion of a URL shortening website
              </li>
              <li>
                Used Express and Node.js to create a RESTful API 
              </li>
              <li>
                Made custom endpoints which sent or received various HTTP requests from an external API
              </li>
              <li>
                Currently using Strapi to work on the backend portion of a client website
              </li>
              <li>
                Technologies used: Node.js, Postman, Strapi, Heroku
              </li>
            </ul>
          </div>
        </a>

        <a id = "projects" name = "projects">
        <strong>Projects</strong>
            <div>Coming Soon!</div>
            <p>As of right now, I have no finished personal projects outside of clubs. Although, I have a project that I completed for AggieWorks myself
              , which is linked <a href="https://github.com/aarush65/AggieWorksProject">here</a> .No ReadMe was added because the project was very informal.</p>
        </a>
        



    <a id = "contact" name = "contact">
      <footer className={styles.footer}>
        <p>Email: aaagrawal@ucdavis.edu
        <a href="https://www.linkedin.com/in/aarush-agrawal-b0bb331b0/">Linkedln</a>
        <a href="https://github.com/aarush65">GitHub</a>
        </p>
      </footer>
      </a>
    </div>
    </div>

  )
}
