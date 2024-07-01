import React from "react";
import "./Faq.scss";
import { Helmet } from "react-helmet-async";

const Faq = ({ title }) => {
  if (window !== undefined) {
    window.scrollTo(0, 0);
  }
  return (
    <>
      <Helmet>
        <title>{title || "FAQs"}</title>
      </Helmet>
      <div className="pagecover">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <h1>FAQs (All your doubts resolved)</h1>
            </div>
          </div>
        </div>
      </div>

      <div className="tandcpage" id="faq_container">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-12">
              <ol className="faqui" id="faqUi">
                <li>
                  <div className="boldfont">
                    Why VAT is being quoted in final order calculation in app?
                  </div>
                  <p>
                    Luxyara is fully GST compliant, the current version of app
                    you are using needs to be upgraded to Android & iOS app
                    version 1.9.4 & 2.88 respectively for the correct verbiage.
                    Further - even if order is placed from older versions -
                    final invoice received will be as per GST norms & fully
                    compliant.
                  </p>
                </li>
                <li>
                  <div className="boldfont">How to delete user account ?</div>
                  <p>
                  To request for user account and data deletion, please write to hi@luxyaragroup.io We will revert with resolution within 48 hours.
                  </p>
                </li>
                <li>
                  <div className="boldfont">
                    I’m sure about the size and fit of the your choice size.
                  </div>
                  <p>
                    At Luxyara, we offer products in verious sizes –  Click the ‘Size Chart’ link at the bottom of the page to know your size. -100% of our customers find a Perfect size product to be the best fit.
                  </p>
                </li>
                <li>
                  <div className="boldfont">
                    What if I buy any product & they don’t fit me?
                  </div>
                  <p>
                  Don’t worry! It is our responsibility to get the perfect product . In the rare circumstance that your product don’t fit properly, we make it extremely easy for you to exchange or return the product . If you face any difficulty, just call us at +91, 8090522232 We have a No Questions Asked Return Policy - 14 Days for any our product . We provide instant money back or store credit on return.
                  </p>
                </li>
                <li>
                  <div className="boldfont">
                    Will the surgical belt have my prescription?
                  </div>
                  <p>
                  You can buy your choice fitted with your prescription or even the a part of your requirement . We custom-make for your choice, or progressive prescriptions across all powers. Our Products are ~50% cheaper than market average, since we bypass intermediaries – and best of all, we charge the same price, regardless of your power!
                  </p>
                </li>
                <li>
                  <div className="boldfont">
                  Will Luxyara be able to make my complex requirement ?
                  </div>
                  <p>
                  At Luxyara, we stock all powers – simple and complex. The unique robotic technology used in our lab ensures that the most complex powers are fitted perfectly, ensuring 100% error-free product. Our 10 lakh+ customers can vouch for the precision with which we make the thair product !
                  </p>
                </li>
                <li>
                  <div className="boldfont">
                  Where do I submit my choice requirement details?
                  </div>
                  <p>
                  You can submit your choice details after you complete your purchase. We offer multiple options to provide your choice to us – upload a picture, enter it online, email us (hi@luxyaragroup.io) or call us at +91, 8090522232 or Message us +91, 8090522232
                  </p>
                </li>
                <li>
                  <div className="boldfont">
                  I don’t have any choice handy. Is it important to give it right away?
                  </div>
                  <p>
                  It’s ok if you don’t have your choice handy while placing the order. Simply place the order for the as picture and provide your requirements using the links provided in the SMS and email that we send you, post order completion. It’s that simple!
                  </p>
                </li>
                <li>
                  <div className="boldfont">
                  I really, really want to try the feel on before making a purchase!
                  </div>
                  <p>
                  Unsure? in future dear will Use our 3D Try-on! Feature – click ‘3D Try-on!’ on the product page of your chosenany product, follow the instructions, and see a 180 degree view of yourself with your chosen product! Share with your friends and family to find the perfect match! In addition, we offer a unique ‘Free Home Trial’ service, global. Select up to 5 products (from our non-free categories) and our delivery executive will bring them to your doorstep for trial!Click here to try products!
                  </p>
                </li>
                <li>
                  <div className="boldfont">
                  How can I be sure of the quality of the Product?
                  </div>
                  <p>
                  Quality is at the core of Luxyara’s products. Our any product are made from the best quality of genuine meterial and our leather Products are made only from natural leather as like buffallow / cow / Deerskin Hide / Crocodial / bull / Bison / Reindeer Skin  – this makes our products corrosion and breakage resistant. We also offer Lifetime warranty on all our any Product  – in case you have any issues, call us, and we’ll make sure it gets resolved!
                  </p>
                </li>
                <li>
                  <div className="boldfont">
                  What type of leather will you use? I use Natutral Leather of  requirement thikness, anti-fungus.
                  </div>
                  <p>
                  We understand that a product which is make by me good as the best quality . Most anti-fungle and anti bactrial product cost.  At this price we give you robotically fitted, anti-fungal Leather product , with a life time warrenty  than market average. In addition we offer 100% protection on all our Products, similar to what is provided in Products across USA and the Europe & Australia and Global Market.
                  </p>
                </li>
                <li>
                  <div className="boldfont">
                  I haven’t heard of some of the brands available. How does Luxyara determine which brands to stock?
                  </div>
                  <p>
                  All the brands sold on Luxyara are chosen after carefully looking at their product quality, manufacturing processes, and customer service. There are some brands which we have brought to all global people  from countries such as Global Buyer to introduce them to the Global market and you to their superior products.
                  </p>
                </li>
                <li>
                  <div className="boldfont">
                  How many days will they take to make my order?
                  </div>
                  <p>
                  We promise to deliver your purchases to you as quickly as possible. We dispatch your order within ~2-3 days of order confirmation (and receipt of your prescription, if needed), based on the products ordered. It takes 10-12 days to get delivered to you post-dispatch, based on your location.
                  </p>
                </li>
                <li>
                  <div className="boldfont">
                  I don’t like what I have purchased! What is your return policy?
                  </div>
                  <p>
                  We have a No Questions Asked Return Policy - 30 Days for any our Product .
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
