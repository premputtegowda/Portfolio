import React from 'react';

const Contact = () => {

    return (
        <section className='section-contact'>
            <div className="row">
                <div className="contact">
                    <div className='contact-form'>
                        <form action="#" className="form">
                        <div className="u-margin-bottom-medium">
                            <h2 className="heading-secondary" >
                            Contact
                            </h2>
                        </div>
                            <div className="form-group">
                                <input type="text"
                                        name='name'
                                        id='name'
                                        placeholder="Name"
                                        className="form-input"
                                        />
                                        <label htmlFor='name' className="form-label">Name</label>
                                
                            </div>
                            <div className="form-group">
                                <input type="text"
                                        name='email'
                                        id='email'
                                        placeholder="Email"
                                        className="form-input"
                                        />
                                <label htmlFor='email' className="form-label">Email</label>
                                
                            </div>
                            <div className="form-group">
                                <textarea
                                        name='message'
                                        id='message'
                                        placeholder="Message"
                                        className="form-input"
                                        >
                                </textarea>
                                <label htmlFor='message' className="form-label">Message</label>
                        
                            </div>
                            <div className="form-group">
                                <button className="btn btn--black u-margin-bottom-medium">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
     
    )
}

export default Contact;
