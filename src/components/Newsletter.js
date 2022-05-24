import React from 'react'
import SLink from './SLink.js'


class SubscribePage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        emailValue: '',
    };
  }

  componentDidMount(){
     this.emailInput.focus();
  }

    render() {
        return (
					<form action="https://gaia.chat/mailman/cgi-bin/subscribe/canalswans" method="POST" target="blank" noValidate>
                <label htmlFor='MERGE0'>
                    Enter your email:
                    <input
                        ref={(input) => { this.emailInput = input; }}
                        type="email"
                        className="email-input"
                        name="email"
                     />
                </label>
              <input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button"/>
              </form>
        )
    }
}


const Newsletter = () => {
  return (
   <div className="newsletter">
		 <img src="/mfowler/img/peaceful.jpg" className="no-mobile" style={{width: "300px", "float": "left", "margin-right": "80px"}} />
      <div className="form-holder">
				<p style={{"margin-bottom": "15px"}}>
					A mailing list of <a href="https://sunbeam.city/@notplants">@notplants</a>.
				</p>
			<div className="mc-field-group">
				<SubscribePage/>
			</div>
    </div>
   </div>
  )
}

export default Newsletter
