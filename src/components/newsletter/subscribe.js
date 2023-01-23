import MailchimpSubscribe from "../react-mailchimp-subscribe/index"

const url = "https://nearpays.us11.list-manage.com/subscribe/post?u=32dfa8e357a6762ebbf43cc19&amp;id=10a0106e72&amp;f_id=00b79be0f0";

// simplest form (only email)
const SimpleForm = () => <MailchimpSubscribe url={url}/>

export default SimpleForm;