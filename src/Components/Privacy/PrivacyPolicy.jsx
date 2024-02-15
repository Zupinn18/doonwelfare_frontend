// PrivacyPolicy.js (Updated content)
import {React,useEffect} from 'react';
import Footer from '../Footer/footer';
import Navbar from '../Navbar/Navbar';

function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
   <>
    <div class="container" style={{paddingTop:"150px"}}>
        <h3 className='fw-bold'>Privacy Policy</h3>
        <p>This Website is owned and operated by Doon Animal Welfare Foundation. We recognize that visitors to our site may be concerned about the information they provide to us and how we treat that information. Doon Animal Welfare Foundation and its associated organizations are committed to ensuring that your privacy is protected. This Privacy Policy addresses those concerns. This policy may be changed or updated from time to time. You should check this page from time to time to ensure that you are happy with any changes.</p>
        
        <h4>Contact Information</h4>
        <p>If you have any questions about our Privacy Policy, you may contact us at:</p>
        <p>
          <strong>Doon Animal Welfare Foundation</strong>
          <br />
          Office Address: Gaushala Shimla Bypass Road,
          <br/>
          Gram Hinduwala Sabhawala,
          Dehradun - 248197 
          <br />
          Email: Doonanimalwelfare@gmail.com
          <br />
          Contact number: +91 7900273333/7900283333
        </p>

        <h4>Personal Information</h4>
        <p>Doon Animal Welfare foundation and its associated organizations use their best efforts to respect the privacy of their online visitors. We do not collect personally identifiable information from individuals unless they provide it to us voluntarily and knowingly. This means we do not require you to register or provide information to us to view our website.</p>
        <p>Doon Animal Welfare foundation and its associated organizations only gather personally identifiable data when voluntarily submitted by a visitor, such as names, addresses, zip/postal codes, and email addresses. We use this information to acknowledge receipt of donations and for donor profile information for tax purposes.</p>
        <p>Doon Animal Welfare foundation and its associated organizations do not sell or trade such information to third parties. We will not share personally identifiable information with third parties unless authorized by the person submitting the information or required by law.</p>

        <h4>Credit Card Information Security</h4>
        <p>Doon Animal Welfare foundation and its associated organizations use industry-standard Secure Sockets Layer (SSL) encryption to protect the security of your transaction and the confidentiality of your personal information. Your credit card information is not sold or traded to third parties. We will not share credit card information with third parties unless required by law.</p>
        <p>If you prefer not to provide credit card information online, you may contribute by sending personal checks or money orders to the address mentioned above.</p>

        <h4>Security</h4>
        <p>We are committed to ensuring that your information is secure. We have put in place suitable physical, electronic, and managerial procedures to safeguard and secure the information we collect online.</p>
        <p></p>
        <p><strong>Donations</strong></p>
        <p>We request information from visitors on our donation form. This information is used for billing purposes and for sending donation receipts. We do not share financial and credit card information with third parties. If the visitor has given permission, we may share their name and contact information with carefully selected organizations and charities we believe our donors would want to know about. We may also provide information on larger donations to appropriate charities and donors for tax purposes.</p>

        <h4>Opt-Out</h4>
        <p>If you supply us with your postal or email address online, you may receive periodic mailings from us about our programs and services. If you do not want to receive these communications, please let us know by emailing us at Doonanimalwelfare@gmail.com or writing to the address mentioned above.</p>

        <h4>Cookies</h4>
        <p>Our website may use cookies to enhance your browsing experience. You can manage your cookie preferences through your browser settings. Cookies are used to collect non-personal information to improve your online experience and facilitate your visit.</p>

        <h4>External Links</h4>
        <p>Our website may contain links to other sites. We are not responsible for their privacy practices. Please review their privacy policies when visiting these websites.</p>

        <h4>Notification of Changes</h4>
        <p>If we change our privacy policy, we will post those changes to this privacy statement to keep you informed about what information we collect and how we use it. We will use information in accordance with the privacy policy under which it was collected.</p>
        
        <h4>Sharing</h4>
        <p>We make every effort to preserve visitor privacy, but we may disclose personal information when required by law.</p>

        <h4>Links</h4>
        <p>Our website contains links to other websites, but we have no control over their content or privacy practices. Please read the privacy statements of each website you visit.</p>

        <h4>Interactive Features</h4>
        <p>From time to time, we may request information from visitors via interactive features, such as surveys or quizzes. Participation in these features is voluntary, and the information is not shared with third parties.</p>
        
        <h4>Referrals</h4>
        <p>If you use our referral service, we may send a one-time email to your friend with an introduction to doon Animal Welfare Foundation. We store this information solely for sending the one-time email and tracking the success of our referral program. Your friend can contact us to request the removal of this information from our database.</p>
    </div>
    <Footer />
   </>
  );
}

export default PrivacyPolicy;
