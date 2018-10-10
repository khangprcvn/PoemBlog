import React from 'react';

class Contact_Form extends React.Component {
	render() {
		return (
			<section className="bg-light-gray">
				<div className="container">
					<div className="row margin-bottom">
						<div className="col-lg-12 text-center">
							<div className="heading">
								<h2>Contact form</h2>
							</div>
						</div>
						<div className="col-lg-8 mx-auto">
							<form className="contact-form">
								<div className="row">
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="firstname">Firstname</label>
											<input id="firstname" type="text" className="form-control" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="lastname">Lastname</label>
											<input id="lastname" type="text" className="form-control" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="email">Email</label>
											<input id="email" type="text" className="form-control" />
										</div>
									</div>
									<div className="col-md-6">
										<div className="form-group">
											<label htmlFor="subject">Subject</label>
											<input id="subject" type="text" className="form-control" />
										</div>
									</div>
									<div className="col-md-12">
										<div className="form-group">
											<label htmlFor="message">Message</label>
											<textarea id="message" className="form-control" defaultValue={""} />
										</div>
									</div>
									<div className="col-md-12 text-center">
										<button type="submit" className="btn btn-outline-white-primary"><i className="fa fa-envelope-o" /> Send message</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
			</section>



		);
	}
}
export default Contact_Form;