import React, { Component } from 'react';

export default class About extends Component {
  render() {
    return (
      <>

      <div>
        <div>
          <section className='colorlib-about' data-section='about'>
            <div className='colorlib-narrow-content'>
              <div className='row'>
                <div className='col-md-12'>
                  <div
                    className='row row-bottom-padded-sm animate-box'
                    data-animate-effect='fadeInLeft'
                  >
                    <div className='col-md-12'>
                      <div className='about-desc'>
                        <span className='heading-meta'>About Aimee</span>
                        <h2 className='colorlib-heading'>Who Am I?</h2>
                        <p>
                          I am a student at the University of Oregon ((Go
                          Ducks!)) with Computer Coding and Software Development
                          as my major.I love exploring new technologies,
                          learning new developer languages and finding ways to
                          expand my skills!
                          <p>
                            When I'm not sitting at the computer, you can find
                            me enjoying the outdoors and takin
                          </p>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        
        <section className='colorlib-about'>
          <div className='colorlib-narrow-content'>
            <div className='row'>
              <div
                className='col-md-6 col-md-offset-3 col-md-pull-3 animate-box'
                data-animate-effect='fadeInLeft'
              >
                <span className='heading-meta'>What I do?</span>
                <h2 className='colorlib-heading'>
                  Here are some of my expertise
                </h2>
              </div>
            </div>
            <div className='row row-pt-md'>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-1'>
                  <span className='icon'>
                    <i className='icon-bulb' />
                  </span>
                  <div className='desc'>
                    <h3>Web Development </h3>
                    <p>
                      I have experience building websites both for schooling and
                      academic purposes but also just because IT IS FUN! The
                      website included technologies such as
                      JavaScript,React,HTML and CSS.
                    </p>
                  </div>
                </div>
              </div>
              <div className='col-md-4 text-center animate-box'>
                <div className='services color-5'>
                  <span className='icon'>
                    <i className='icon-data' />
                  </span>
                  <div className='desc'>
                    <h3>Development and Operations</h3>
                    <p>
                      This is a ever continuing field for me. I continue to
                      expand my knowledge and working with different Dev Ops
                      tools.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      </>
    );
  }
}

