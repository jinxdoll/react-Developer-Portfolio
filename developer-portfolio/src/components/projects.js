import React, { Component } from 'react';
// import "../../public/css/icon-heroku.css";

export default class Projects extends Component {
  render() {
    return (
      <div>
        <section className='colorlib-work' data-section='projects'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>My Work</span>
                <h2 className='colorlib-heading animate-box'>
                  Recent Projects
                </h2>
              </div>
            </div>
            <div className='row'>



              <div
                className='col-md-4 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <div
                  className='project'
                  style={{ backgroundImage: 'url(images/burger.jpg)' }}
                >
                  <div className='desc'>
                    <div className='con'>
                      <h3>
                        <a href='work.html'>Eat-Da-Burger App </a>
                      </h3>
                      <span>
                        A restaurant app that lets users input the names of
                        burgers they'd like to eat.
                        <br></br>
                        <a href='https://devour-burger-app-mattson.herokuapp.com/'>
                          
                          Click here to view the App on
                          <span class='icon-eye'></span>Heroku
                        </a>
                      </span>
                      <p className='icon'>
                        <span>
                          <a href='https://github.com/jinxdoll/burger'>
                            Click here to go to the 
                            <i className='icon-github' />
                            Github repository
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>



              <div
                className='col-md-4 animate-box'
                data-animate-effect='fadeInRight'
              >
                    <div
                  className='project'
                  style={{ backgroundImage: 'url(images/recipebook.jpg)' }}
                >
                  <div className='desc'>
                    <div className='con'>
                      <h3>
                        <a href='work.html'>Everyday Recipes </a>
                      </h3>
                      <span>
                      An easy to use recipe app that stores and edits all teh recipes you love.The app is designed, tried and tested by developers and users alike who are every day home cooks.
                        <br></br>
                        <a href='https://my-favorite-recipes-app-portla.herokuapp.com/'>
                          
                          Click here to view the App on
                          <span class='icon-eye'></span>Heroku
                        </a>
                      </span>
                      <p className='icon'>
                        <span>
                          <a href='https://github.com/jinxdoll/my-favorite-recipes-app'>
                            Click here to go to the 
                            <i className='icon-github' />
                            Github repository
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-md-4 animate-box'
                data-animate-effect='fadeInTop'
              >
                    <div
                  className='project'
                  style={{ backgroundImage: 'url(images/television.jpg)' }}
                >
                  <div className='desc'>
                    <div className='con'>
                      <h3>
                        <a href='work.html'>Entertainment Guide </a>
                      </h3>
                      <span>
                      A fully responsive application that acts as a entertainment guide to provide movie and television show information using the OMDB API. Search results include active status, scheduled showtime, network and channel info., etc.
                        <br></br>
                        {/* <a href='https://devour-burger-app-mattson.herokuapp.com/'>
                          
                          Click here to view the App on
                          <span class='icon-eye'></span>Heroku
                        </a> */}
                      </span>
                      <p className='icon'>
                        <span>
                          <a href='https://github.com/kytaylor/entertainment-guide'>
                            Click here to go to the
                            <i className='icon-github' />
                            Github repository
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-md-4 animate-box'
                data-animate-effect='fadeInBottom'
              >
                   <div
                  className='project'
                  style={{ backgroundImage: 'url(images/moodring.jpg)' }}
                >
                  <div className='desc'>
                    <div className='con'>
                      <h3>
                        <a href='work.html'>Mood Ring App </a>
                      </h3>
                      <span>
                      The Mood Ring App uses facial recognition technology to capture your expression and then reads your mood. The app then provides related content to help boost or enhance your mood based on the mood read.  
                        <br></br>
                        <a href='https://github.com/haywah27/mood-ring/blob/master/moody-ring.herokuapp.com'>
                          
                          Click here to view the App on
                          <span class='icon-eye'></span>Heroku
                        </a>
                      </span>
                      <p className='icon'>
                        <span>
                          <a href='https://github.com/haywah27/mood-ring'>
                            Click here to go to the
                            <i className='icon-github' />
                            Github repository
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-md-4 animate-box'
                data-animate-effect='fadeInLeft'
              >
                   <div
                  className='project'
                  style={{ backgroundImage: 'url(images/fitness.jpg)' }}
                >
                  <div className='desc'>
                    <div className='con'>
                      <h3>
                        <a href='work.html'>workout App </a>
                      </h3>
                      <span>
                      Keep track of your daily exercise with this fitness application. You can track your daily workout routines.Create and save customized workouts.
                        <br></br>
                        <a href='https://workout-app-mongodb.herokuapp.com/'>
                          
                          Click here to view the App on
                          <span class='icon-eye'></span>Heroku
                        </a>
                      </span>
                      <p className='icon'>
                        <span>
                          <a href='https://github.com/jinxdoll/Workout-App'>
                            Click here to go to the
                            <i className='icon-github' />
                            Github repository
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className='col-md-4 animate-box'
                data-animate-effect='fadeInRight'
              >
                   <div
                  className='project'
                  style={{ backgroundImage: 'url(images/weather.jpg)' }}
                >
                  <div className='desc'>
                    <div className='con'>
                      <h3>
                        <a href='work.html'>How's the weather? App </a>
                      </h3>
                      <span>
                      Responsive application built using React that uses the openWeatherApi to retrieve weather data for the city the user inputs.
                        <br></br>
                        <a href='https://react-hows-the-weather-app.herokuapp.com/'>
                          
                          Click here to view the App on
                          <span class='icon-eye'></span>Heroku
                        </a>
                      </span>
                      <p className='icon'>
                        <span>
                          <a href='https://github.com/jinxdoll/react-HowsTheWeather/tree/main/howstheweather'>
                            Click here to go to the
                            <i className='icon-github' />
                            Github repository
                          </a>
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}
