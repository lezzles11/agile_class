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

function FormRow({ label }) {
    return (
        <div className="row">
                                    <div className="col-md-12">
                                        <div className="md-form mb-0">
                                            <input
                                                type="text"
                                                id={label}
                                                name={label}
                                                className="form-control"
                                            />
                                            <label for={label} className="">
                                               {label}
                                            </label>
                                        </div>
                                    </div>
                                </div>)
}

export default class ContactUs extends React.Component {

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
                    <div className="row">
                        <div className="col-md-9 mb-md-0 mb-5">
                            <form
                                id="contact-form"
                                name="contact-form"
                                action="mail.php"
                                method="POST"
                            >
                            <FormRow label="*Full Name"/>

                            <FormRow label="*Email"/>

                            <FormRow label="*Password"/>

                            <FormRow label="*Country"/>

                            




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
                            </form>



                            <FormRow label="*Contact Number"/>

                            <FormRow label="*Courses"/>


                            <FormRow label="*Payment Info"/>
<br />

                            <div className="text-center text-md-left">
                                <a
                                    className="btn btn-primary"
                                    onclick="document.getElementById('contact-form').submit();"
                                >
                                    Reset
                                </a>
                                 <a
                                    className="btn btn-primary"
                                    onclick="document.getElementById('contact-form').submit();"
                                >
                                    Register
                                </a>
                            </div>

                            
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}