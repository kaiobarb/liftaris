import React from 'react';
import "../styles/About.css"

const About = () => {
    return (
        <div className="container">
            <div className="about-card">
                <div className="title">About me</div>
                <div className="columns">
                    <div className="column is-auto">
                        <div className="">
                            I am a self driven programmer interested in Front-End web development and games.
                            <br /><br />
                            <h1 className="is-size-4 ">What can I do?</h1>
                            <hr className="is-primary" />
                            <div className="columns is-multiline">
                                <div className="column is-6">
                                    Programming Languages
                                </div>
                                <div className="column is-6">
                                    C,
                                    JavaScript (React),
                                    Python
                                </div>
                                <div className="column is-6">
                                    Domains
                                </div>
                                <div className="column is-6">
                                    Progressive Web apps, Computer Graphics, Computer Game development and design
                                </div>
                            </div>
                            <br /><br />
                            <h1 className="is-size-4">My Experience</h1>
                            <hr className="is-primary" />

                            <div className="is-size-5 has-text-weight-bold">Programming Assignment Grader - Operating Systems</div>
                            <p className="is-size-7">University of California, Santa Cruz <br />
                            Jan 2019 - Mar 2019 • 3 months</p>
                            Responsible for reviewing, assessing, and giving constructive feedback to students taking CMPS 111: Operating Systems. Assignments all involved modifying the FreeBSD kernel. Assignments were written in C. I helped to design and create metrics for assessing student's work.
                            <br /><br />
                            <div className="is-size-5 has-text-weight-bold">Programming Instructor</div>
                            <p className="is-size-7">iDtech <br />
                            Jun 2018 - Aug 2018 • 3 months</p>
                            Taught Multiple week-long courses:
                            ● Creating Games and Apps with Java (2 weeks),
                            ● Introduction to Python and Circuits (2 weeks),
                            ● Game Design with Minecraft (1 week)
                            <br /><br />
                            <div className="is-size-5 has-text-weight-bold">Programming Assignment Grader - Comparative Programming Languages</div>
                            <p className="is-size-7">University of California, Santa Cruz <br />
                            Jan 2018 – Jun 2018 • 6 mos </p>
                            Responsible for reviewing, assessing, and giving constructive feedback to students taking CMPS112: Comparative Programming Languages. Assessed student's programming strengths in Smalltalk, Ocaml, Prolog, and Haskell
                            <br /><br />
                            <h1 className="is-size-4">Education</h1>
                            <hr className="is-primary" />
                            2015 - 2019 <br />
                            University of California, Santa Cruz - B.S. in Computer Science - 3.16 GPA <br />
                            Notable courses with notable grades and participation:
                            <div className="columns is-multiline">
                                <div className="column">
                                    Web Applications (Capstone)
                                </div>
                                <div className="column is-4">
                                    Artificial Inteligence and Machine Learning
                                </div>
                                <div className="column is-4">
                                    Analysis of Algorithms
                                </div>
                                <div className="column is-4">
                                    Operating Systems (was also a teacher assistant)
                                </div>
                                <div className="column is-12 is-size-7">
                                    Transcript available upon request.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="column is-2">
                        <img className="avatar" src="https://s.gravatar.com/avatar/36bff6d2920237983fdc2e3bbe0d8cf9?s=200"></img>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default About