import "./style.css";
import { useState, useCallback } from "react";

function App() {
  const [navStatus, toggleNav] = useState(false);
  const onClicktoggleNav = useCallback(() => toggleNav((status) => !status), [
    toggleNav,
  ]);

  return (
    <div className="App">
      <header className={"header" + (navStatus ? " mobile-nav--active" : "")}>
        <div className="header__top">
          <div className="header__top__container">
            <div className="header__top__left">
              <img src="img/header-hand.svg" alt="top-1" />
              <img src="img/header-top-title.svg" alt="top-1" />
              <span>Support the Equal Justice Initative.</span>
            </div>
            <div className="header__top__right">
              <span>Donate now</span>
              <img src="img/header-link.svg" alt="donate" />
            </div>
          </div>
        </div>
        <div className="header__content-wrapper">
          <a href="#" className="header__logo">
            <div className="logo__avartar">
              <img src="img/myavatar_small.svg" alt="avartar" />
              <span className="badge"></span>
            </div>
            <img className="logo__title" src="img/title.svg" alt="title" />
          </a>
          <nav className="header__nav">
            <ul className="header__nav__list">
              <li className="header__nav__list__item">
                <a href="#" className="header__nav__link">
                  Intro
                </a>
              </li>
              <li className="header__nav__list__item">
                <a href="#" className="header__nav__link">
                  UX
                </a>
              </li>
              <li className="header__nav__list__item">
                <a href="#" className="header__nav__link">
                  About
                </a>
              </li>
              <li className="header__nav__list__item">
                <a href="#" className="header__nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <button
            className="menu-btn header__menu-btn"
            aria-label="toggle menu button"
            aria-pressed="true"
            onClick={onClicktoggleNav}
          >
            <span
              className="menu-btn__bar menu-btn__bar--1"
              aria-hidden="true"
            ></span>
            <span
              className="menu-btn__bar menu-btn__bar--2"
              aria-hidden="true"
            ></span>
            <span
              className="menu-btn__bar menu-btn__bar--3"
              aria-hidden="true"
            ></span>
          </button>
        </div>
      </header>
      <div className="page-wrapper">
        <section className="section hero">
          <div className="container">
            <div className="hero__avartar__image-wrapper">
              <img src="img/myavatar.svg" alt="hero-avartar-img"></img>
            </div>
            <div className="hero__text-wrapper">
              <h2>Hi, I’m Kasun Suess.</h2>
              <p>
                humbly developing and managing digital products until robots
                take my job from me.{" "}
                <span>But for now, I am living the dream.</span>
              </p>
            </div>
            <div className="hero__back__image-wrapper">
              <img src="img/hero-back.svg" alt="img"></img>
            </div>
          </div>
        </section>
        <section className="section company">
          <div className="container">
            <div className="section__header">
              <h3 className="section__title">
                I work with companies I believe in
              </h3>
              <img src="img/com-img-title.svg" alt="com-image-1"></img>
            </div>
            <p className="section__subtitle">
              I'm a full stack developer currently working as CTO at Wehance
              with a wide collection of skills, an extensive knowledge base and
              more than 8 years of experience in the tech business.
            </p>
            <div className="company__card">
              <div className="company__card__item">
                <img src="img/com-img-1.svg" alt="item-1"></img>
                <h4>Frontend development</h4>
                <p>
                  I'm a full stack developer currently working as CTO at Wehance
                  with a wide collection of skills, an extensive knowledge base
                  and more than 8 years of experience in the tech business.
                </p>
              </div>
              <div className="company__card__item">
                <img src="img/com-img-2.svg" alt="item-2"></img>
                <h4>Backend development</h4>
                <p>
                  I'm a full stack developer currently working as CTO at Wehance
                  with a wide collection of skills, an extensive knowledge base
                  and more than 8 years of experience in the tech business.
                </p>
              </div>
              <div className="company__card__item">
                <img src="img/com-img-3.svg" alt="item-3"></img>
                <h4>Artificial intelligence</h4>
                <p>
                  I'm a full stack developer currently working as CTO at Wehance
                  with a wide collection of skills, an extensive knowledge base
                  and more than 8 years of experience in the tech business.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="section publish">
          <div className="container">
            <div className="section__header">
              <h3 className="section__title">
                I publish my thoughts occasionally
              </h3>
              <img src="img/pub-img-title.svg" alt="publish-image-1"></img>
            </div>
            <p className="section__subtitle">
              I'm a full stack developer currently working as CTO at Wehance
              with a wide collection of skills, an extensive knowledge base and
              more than 8 years of experience in the tech business.
            </p>
            <div className="publish__image-wrapper">
              <img src="img/pub-img.svg" alt="pub-img"></img>
            </div>
          </div>
        </section>
        <section className="section about">
          <div className="container">
            <div className="about__avartar__image-wrapper">
              <img src="img/myavatar.svg" alt="about-img"></img>
            </div>
            <div className="section__header">
              <h3 className="section__title">
                A whole section just about me?!
              </h3>
              <img src="img/about-img-title.svg" alt="tech-image-1"></img>
            </div>
            <p className="section__subtitle">
              I'm a full stack developer currently working as CTO at Wehance
              with a wide collection of skills, an extensive knowledge base and
              more than 8 years of experience in the tech business.
            </p>
            <div className="about__skills__container">
              <h4>Technical Skills</h4>
              <div className="about__skills__item">
                <img src="img/javascript.svg" alt="skill-img-1"></img>
                <p className="language">Javascript</p>
                <p className="type">Service type</p>
                <div className="bottom">
                  <span className="bottom-left">Wehance</span>
                  <span className="bottom-right">#01</span>
                </div>
              </div>
              <div className="about__skills__item">
                <img src="img/react.svg" alt="skill-img-2"></img>
                <p className="language">ReactJS</p>
                <p className="type">Service type</p>
                <div className="bottom">
                  <span className="bottom-left">Wehance</span>
                  <span className="bottom-right">#02</span>
                </div>
              </div>
              <div className="about__skills__item">
                <img src="img/angular.svg" alt="skill-img-3"></img>
                <p className="language">AngularJS</p>
                <p className="type">Service type</p>
                <div className="bottom">
                  <span className="bottom-left">Wehance</span>
                  <span className="bottom-right">#03</span>
                </div>
              </div>
              <div className="about__skills__item">
                <img src="img/svelte.svg" alt="skill-img-4"></img>
                <p className="language">SvelteJS</p>
                <p className="type">Service type</p>
                <div className="bottom">
                  <span className="bottom-left">Wehance</span>
                  <span className="bottom-right">#04</span>
                </div>
              </div>
              <div className="about__skills__item">
                <img src="img/vue.svg" alt="skill-img-5"></img>
                <p className="language">VueJS</p>
                <p className="type">Service type</p>
                <div className="bottom">
                  <span className="bottom-left">Wehance</span>
                  <span className="bottom-right">#05</span>
                </div>
              </div>
              <div className="about__skills__item">
                <img src="img/typescript.svg" alt="skill-img-6"></img>
                <p className="language">Typescript</p>
                <p className="type">Service type</p>
                <div className="bottom">
                  <span className="bottom-left">Wehance</span>
                  <span className="bottom-right">#06</span>
                </div>
              </div>
              <div className="about__skills__item">
                <img src="img/node.svg" alt="skill-img-7"></img>
                <p className="language">NodeJS</p>
                <p className="type">Service type</p>
                <div className="bottom">
                  <span className="bottom-left">Wehance</span>
                  <span className="bottom-right">#07</span>
                </div>
              </div>
              <div className="about__skills__item">
                <img src="img/python.svg" alt="skill-img-8"></img>
                <p className="language">Python</p>
                <p className="type">Service type</p>
                <div className="bottom">
                  <span className="bottom-left">Wehance</span>
                  <span className="bottom-right">#08</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="section chat">
          <div className="container">
            <div className="chat__avartar__image-wrapper">
              <img src="img/myavatar.svg" alt="caht-img-1"></img>
            </div>
            <div className="section__header">
              <h3 className="section__title">Let’s have a chat</h3>
              <img src="img/chat-img-title.svg" alt="chat-image-2"></img>
            </div>
            <p className="section__subtitle">
              I’m always happy to talk about working together, new opportunities
              or just catching up. If you’d like to get in touch, just shoot me
              an email with the link below.
            </p>
            <div className="chat__contact__container">
              <p>Send me an email</p>
              <p>or via phone</p>
              <p>+49 (176) 00 00 00</p>
            </div>
          </div>
        </section>
      </div>
      <footer className="footer">
        <div className="container">
          <nav className="footer__nav">
            <ul className="footer__nav__menu">
              <li className="footer__nav__menu__item">
                <span className="item-number">01</span>
                <a className="footer__nav__link" href="#">
                  Intro
                </a>
              </li>
              <li className="footer__nav__menu__item">
                <span className="item-number">02</span>

                <a className="footer__nav__link" href="#">
                  UX
                </a>
              </li>
              <li className="footer__nav__menu__item">
                <span className="item-number">03</span>

                <a className="footer__nav__link" href="#">
                  About
                </a>
              </li>
              <li className="footer__nav__menu__item">
                <span className="item-number">04</span>

                <a className="footer__nav__link" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="footer__widget">
            <div className="footer__widget__left">
              <div className="white-dot-back"></div>
              <div className="logo-avartar">
                <img src="img/myavatar_small.svg" alt="widget-img"></img>
              </div>
              <div className="white-dot-back"></div>
            </div>
            <div className="footer__widget__right">
              <div className="widget-link-text">
                <p>Built with passion</p>
                <a href="#">hello@kasunsuess.de</a>
              </div>
              <ul className="widget-link-image">
                <li className="widget-link-item">
                  <a href="#">
                    <img src="img/footer-ball.svg" alt="footabll-bas" />
                  </a>
                </li>
                <li className="widget-link-item">
                  <a href="#">
                    <img src="img/footer-tel.svg" alt="tal-bas" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer__copyright">
            <p>Kasun Suess 2020 © All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
