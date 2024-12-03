import React from 'react'
import './bases/css/style.css'
import img1 from './bases/img/photo_2023-09-07_07-56-17.jpg'
import img2 from './bases/img/photo_2023-10-17_04-59-24.jpg'
import img3 from './bases/img/hhh.jpg'
import img4 from './bases/img/kkk.jpg'
import img5 from './bases/img/random-lines.svg'


export default function Myport() {
  return (
    <div>
       <header class="header" id="header">
      <nav class="nav container">
        <a href="#" class="nav__logo">
          <span class="nav__logo-circle">Y</span>
          <span class="nav__logo-name">Yosef Shimelis.</span>
        </a>

        <div class="nav__menu" id="nav-menu">
          <span class="nav__title">Menu</span>

          <h3 class="nav__name">  Yo.sef</h3>

          <u1 class="nav__list">
            <li class="nav__item">
              <a href="#home" class="nav__link active-">Home</a>
            </li>

            <li class="nav__item">
              <a href="#about" class="nav__link">About Me</a>
            </li>

            <li class="nav__item">
              <a href="#projects" class="nav__link">Projects</a>
            </li>

            <li class="nav__item">
              <a href="#contact" class="nav__link nav__link-button"
                >Contact Me</a
              >
            </li>
          </u1>

         
          <div class="nav__close" id="nav-close">
            <i class="ri-close-line"></i>
          </div>
        </div>

        <div class="nav__buttons">
          
          <i class="ri-moon-line change-theme" id="theme-button"></i>
         
          <div class="nav__toggle" id="nav-toggle">
            <i class="ri-menu-4-line"></i>
          </div>
        </div>
      </nav>
    </header>
    <main>
    <section class="home section" id="home">
        <div class="home__container container grid">
          <h1 class="home__name">Yosef Shimelis.</h1>
          <div class="home__perfil">
            <div class="home__image">
              <img
                src={img1}
                alt="image"
                class="home__img"
              />
              <div class="home__shadow"></div>

              <img
                src="bases/img/curved-arrow (1).svg"
                alt=""
                class="home__arrow"
              />
              <img src={img5} alt="" class="home__line" />

              <div class="geometric-box"></div>
            </div>
            <div class="home__social">
             

              <a
                href="https://www.linkedin.com/in/yosef-shimelis-690b77326/"
                target="_blank"
                class="home__social-link"
              >
                <i class="ri-linkedin-box-line"></i>
              </a>

              <a
                href="https://github.com/jo-it-solution?tab=repositories"
                target="_blank"
                class="home__social-link"
              >
                <i class="ri-github-line"></i>
              </a>
            </div>
          </div>
          <div class="home__info">
            <p class="home__description">
              <b> Computer science</b>,
              <b>(Computer science Focus Area)</b>
              BSc degree holder from Unity University
            </p>
            <a href="#about" class="home__scroll">
              <div class="home__scroll-box">
                <i class="ri-arrow-down-s-line"></i>
              </div>
              <spam class="home__scroll-text">Scroll Down</spam>
            </a>
          </div>
        </div>
      </section>




      <section class="about section" id="about">
        <div class="about__container container grid">
          <h2 class="section__title-1">
            <span>About Me.</span>
          </h2>
          <div class="about__perfil">
            <div class="about__image">
              <img
                src={img2}
                alt="image"
                class="about__img"
              />

              <div class="about__shadow"></div>

              <div class="geometric-box"></div>
              <img
                src="bases/img/random-lines.svg"
                alt=""
                class="about__line"
              />
              <div class="about__box"></div>
            </div>
          </div>

          <div class="about__info">
            <p class="about__description">
              I'm someone who really loves technology and is always excited by
              new ideas. I'm constantly looking for ways to create innovative
              solutions. I enjoy making new tech products, whether that means
              writing software programs, or exploring cutting-edge technologies
              like AI and IoT. I'm good at solving problems and find coding fun.
              Turning creative ideas into real things is really rewarding for
              me. My journey involves always learning, keeping up with the
              latest trends, and working with people who share my interests to
              bring new ideas to life in the world of technology, where things
              are always changing.
            </p>
            
            <u1 class="about__list">
              <li class="about__item">
                <b> MY skill :</b><br />
                <b>Programming Languages</b><br />
                &nbsp;&nbsp;Python,&nbsp;JavaScript,&nbsp;&nbsp;Java&nbsp;and&nbsp;C++

                <br />
                
                  
                  <b>Web Development</b><br />
                  <b>  &nbsp;&nbsp; Frontend</b><br />
                  &nbsp;&nbsp; HTML, &nbsp;CSS,
                  &nbsp;JavaScript,&nbsp;Python&nbsp;and&nbsp;React
                  <br />
                  <b>&nbsp;&nbsp;&nbsp;Backend</b><br />
                  &nbsp;&nbsp;&nbsp;PHP, &nbsp;Node.js&nbsp;and
                  &nbsp;Django,&nbsp;
                  <br />
                
              </li>
            </u1>
            
              
            

            <div class="about__buttons">
              <a href="#contact" class="button">
                <i class="ri-send-plane-line"></i> Contact Me
              </a>

              <a
                href="https://www.linkedin.com/in/yosef-shimelis-690b77326/"
                target="_blank"
                class="button__ghost"
              >
                <i class="ri-linkedin-box-line"></i>
              </a>
            </div>
          </div>
        </div>
      </section>





      <section class="services section" id="services">
        <h2 class="section__title-2">
          <span>Services.</span>
        </h2>
        <div class="services__container container grid">
          <article class="services__card">
            <div class="services__border"></div>

            <div class="services__content">
              <div class="services__icon">
                <div class="services__box"></div>
                <i class="ri-layout-4-line"></i>
              </div>

              <h2 class="services__title">Web Designer</h2>

              <p class="services__description">
                Beautiful and elegant designs with interfaces that are
                intuitive, efficient and pleasant to use for the user.
              </p>
            </div>
          </article>

          <article class="services__card">
            <div class="services__border"></div>

            <div class="services__content">
              <div class="services__icon">
                <div class="services__box"></div>
                <i class="ri-code-box-line"></i>
              </div>
              <h2 class="services__title">Developer</h2>

              <p class="services__description">
                Custom web development tailored to your specifications, designed
                to provide a flawless user experience.
              </p>
            </div>
          </article>

          <article class="services__card">
            <div class="services__border"></div>

            <div class="services__content">
              <div class="services__icon">
                <div class="services__box"></div>
                <i class="ri-planet-line"></i>
              </div>
              <h2 class="services__title">Networking</h2>

              <p class="services__description">
                Building a competent and quality system by working with
                different working groups
              </p>
            </div>
          </article>
        </div>
      </section>





      <section class="projects section" id="projects">
        <h2 class="section__title-1">
          <span>Projects.</span>
        </h2>

        <div class="projects__container container grid">
          <article class="projects__card">
            <div class="projects__image">
              <img
                src={img3}
                alt="image"
                class="projects__img"
              />

              <a href="#" class="projects__button button">
                <i class="ri-arrow-right-up-line"></i>
              </a>
            </div>
            <div class="projects__content">
              <h3 class="projects__subtitle">Website</h3>
              <h2 class="projects__title">House sales and rental Managment System</h2>

              <p class="projects__desciption"></p>
            </div>
            <div class="projects__buttons">
              <a
                href="https://github.com/jo-it-solution/house-sales-and-rental-management-system"
                target="_blank"
                class="projects__link"
              >
                <i class="ri-github-line"></i>View
              </a>

              <a
                href="https://dribbble.com"
                target="_blank"
                class="projects__link"
              >
                <i class="ri-dribbble-lin"></i>
              </a>
            </div>
          </article>

          <article class="projects__card">
            <div class="projects__image">
              <img
                src={img4}
                alt="image"
                class="projects__img"
              />

              <a href="#" class="projects__button button">
                <i class="ri-arrow-right-up-line"></i>
              </a>
            </div>
            <div class="projects__content">
              <h3 class="projects__subtitle">Website</h3>
              <h2 class="projects__title">Ethiopian regional Managment System</h2>
              <p class="projects__desciption"></p>
            </div>
            <div class="projects__buttons">
              <a
                href="https://github.com/jo-it-solution/Ethiopian-regional-management-system"
                target="_blank"
                class="projects__link"
              >
                <i class="ri-github-line"></i>View
              </a>

              <a
                href="https://dribbble.com"
                target="_blank"
                class="projects__link"
              >
                <i class="ri-dribbble-lin"></i>
              </a>
            </div>
          </article>

        </div>
      </section>









      <section class="contact section" id="contact">
        <div class="contact__container grid">
          <div class="contact__data">
            <h2 class="section__title-2">
              <span>Contact Me.</span>
            </h2>

            <p class="contact__description-1">
              I will read all emails. Send me any message you want and I'll get
              back to you
            </p>

            <p class="contact__description-2">
              I need your <b>Name</b> and <b>Email Address</b>, but you won't
              receive anything other than your reply.
            </p>

            <div class="geometric-box"></div>
          </div>

          <div class="contact__mail">
            <h2 class="contact__title">Send Me A Message</h2>

            <form action="" method="POST" class="contact__form" id="contact-form">
              <div class="contact__group">
                <div class="contact__box">
                    <input type="hidden" name="access_key" value="3afe4734-ac3c-457f-98d5-f979f40f747d"/>
                    
                     <input
                    type="text"
                    name="user_name"
                    class="contact__input"
                    id="name"
                    required
                    placeholder="First Name"
                  />
                  <label for="name" class="contact__label">First Name </label>
                </div>

                <div class="contact__box">
                  <input
                    type="email"
                    name="user_email"
                    class="contact__input"
                    id="email"
                    required
                    placeholder="Email Address"
                  />
                  <label for="email" class="contact__label"
                    >Email Address</label
                  >
                </div>
              </div>

              <div class="contact__box">
                <input
                  type="text"
                  name="user_subject"
                  class="contact__input"
                  id="subject"
                  required
                  placeholder="Subject"
                />
                <label for="subject" class="contact__label">Subject</label>
              </div>
              <div class="contact__box contact__area">
                <textarea
                  name="user_message"
                  id="message"
                  class="contact__input"
                  required
                  placeholder="Message"
                ></textarea>
                <label for="message" class="contact__label">Message</label>
              </div>

              <p class="contact__message" id="contact-message"></p>

              <button type="submit" class="contact__button button">
                <i class="ri-send-plane-line"></i>Send Message
              </button>
            </form>
          </div>

          <div class="contact__social">
            <img
              src="bases/img/curved-arrow.svg"
              alt=""
              class="contact__social-arrow"
            />

            <div class="contact__social-data">
              <div>
                <p class="contact__social-description-1">
                  Does not send emails
                </p>

                <p class="contact__social-description-2">
                  Write me on my social networks
                </p>
              </div>

              <div class="contact__social-links">
                <a
                  href="https://www.facebook.com/profile.php?id=61565332140895"
                  target="_blank"
                  class="contact__social-link"
                >
                  <i class="ri-facebook-circle-line"></i>
                </a>

                <a
                  href="https://instagram.com/yosef.4951"
                  target="_blank"
                  class="contact__social-link"
                >
                  <i class="ri-instagram-line"></i>
                </a>

                <a
                  href="https://www.linkedin.com/in/yosef-shimelis-690b77326/"
                  target="_blank"
                  class="contact__social-link"
                >
                  <i class="ri-linkedin-box-line"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </main>


    <footer class="footer">
      <div class="footer__container container grid">
        <u1 class="footer__links">
          <li>
            <a href="#home" class="footer__link">Home</a>
          </li>

          <li>
            <a href="#about" class="footer__link">About</a>
          </li>

          <li>
            <a href="#projects" class="footer__link">Projects</a>
          </li>
        </u1>
        <span class="footer__copy">
          &#169; All Rights Reserved By
          <a href="">Yosef_Shimelis.</a>
        </span>
      </div>
    </footer>


    <a href="" class="scrollup" id="scroll-up">
      <i class="ri-arrow-up-s-line"></i>
    </a>


    <script src=""></script>

    <script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@4/dist/email.min.js"></script>

    <script src="bases/js/main.js"></script>

    </div>
  )
}