import React from "react";

function Image({ link, col }) {
    const height = {
        width: "100%"
    }
    return (
        <div className={col}>
                     <img style={height} className="img-fluid" src={link} href="_blank" />
                     </div>)
}



export default class ContactUs extends React.Component {

        constructor(props) {
            super(props);
            this.state = { fullName: "", password: "" };

            // This binding is necessary to make `this` work in the callback
            this.handleReset = this.handleReset.bind(this);
        }
        handleReset() {
            this.setState(state => ({
                fullName: "",
                password: ""
            }));
        }

        render() {
                return (
                        <div className="container">
                <section className="mb-4">
                <div className="row">
                <div className="col-8">
                    <h2 className="h1-responsive font-weight-bold text-center my-4">
                        Welcome!
                    </h2>
                    <h4 className="h3-responsive font-weight-bold text-center my-4">Register Below To Create Your Account</h4>

                    </div>

                     <Image col="col-3" link="https://www.dropbox.com/s/b8oc7cs3m0gq49k/AdobeStock_303430811.jpeg?raw=1" />
                     
</div>
<br />
<br />
                    <div className="row">

                        <div className="col-md-9 mb-md-0 mb-5">

<h4> Create Your Own Account Below: </h4>
                    </div>
                    </div>
                    <br /><br />
                    <div className="row">
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form
                                id="contact-form"
                                name="contact-form"
                            >


    <div className="row">
                                        <div className="col-3">
                                        *Full Name: 
                                        </div>
                                        <div className="col-6">
                                            <input
                                            onChange={this.state.fullName}
                                                type="text"
                                                id="fullName"
                                                name="fullName"
                                                className="form-control"
                                            />
                                            </div>
                                </div>


                            




                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form">
                                            <textarea
                                                type="text"
                                                id="message"
                                                name="message"
                                                rows="2"
                                                className="form-control md-textarea"
                                            ></textarea>
                                            <label for="message">
                                                *Mailing Address
                                            </label>
                                        </div>
                                    </div>
                                </div>


<br />

                            <div className="text-center text-md-left">
                            <button onClick={this.handleReset} className="btn btn-primary"> Reset </button>

                            <button className="btn btn-primary"> Register </button>
                           
                            </div>

                    
                            </form>        
                        </div>
                    </div>

            <
            /section> <
            /div>
        );
    }
}