export interface ProjectSection {
  title: string;
  contentHtml: string;
}

export interface ProjectData {
  id: string;
  title: string;
  subtitle: string;
  logo: string;
  heroImage: string;
  overviewText: string;
  techStack: string[];
  sections: ProjectSection[];
  resultsList: string[];
  brandColor?: string;
}

export const projects: ProjectData[] = [
  {
    "id": "babaCasino",
    "brandColor": "rgba(255, 215, 0, 0.5)",
    "title": "Baba Casino",
    "subtitle": "Premier Social Sweepstakes Platform tailored for the US market, featuring a dual-currency system and a cross-platform gaming experience.",
    "logo": "../media/Baba Casino/400x400ia-75.webp",
    "heroImage": "../media/Baba Casino/Baba_Wild_Slot_image.png",
    "overviewText": "",
    "techStack": [
      "Desktop",
      "Mobile",
      "Python",
      "Playwright",
      "MongoDB",
      "Kibana"
    ],
    "sections": [
      {
        "title": "Overview",
        "contentHtml": "<div class=\"scope-card\">\n                    <p style=\"color: var(--text-main); font-size: 1.1rem; line-height: 1.8;\">\n                        Baba Casino is a premier social sweepstakes platform tailored for the US market. The application\n                        features a dual-currency system (Gold Coins and Sweeps Coins) and provides a legally compliant,\n                        cross-platform gaming experience across Web, Mobile Web (WebView), and Native environments.\n                    </p>\n                </div>"
      },
      {
        "title": "Core QA Responsibilities",
        "contentHtml": "<p style=\"color: var(--text-muted); font-size: 1.1rem; margin-bottom: 2rem;\">\n                    Managed end-to-end Quality Assurance for a high-traffic gaming ecosystem, ensuring seamless\n                    integration between frontend features and complex backend services.\n                </p>\n\n                <div class=\"scope-grid\">\n                    <div class=\"scope-card\">\n                        <h4>Payment &amp; Compliance</h4>\n                        <ul>\n                            <li>Validated 3rd-party payment gateways (Nuvei, GIDX, Skrill) and KYC flows.</li>\n                            <li>Executed 3DS verification tests.</li>\n                            <li>Ensured secure transaction handling compliant with US regulations.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>LiveOps &amp; Engagement</h4>\n                        <ul>\n                            <li>Verified real-time features including leaderboards, tournaments, and mini-games.</li>\n                            <li>Tested promotional systems (coupons, daily rewards).</li>\n                            <li>Validated dynamic pop-up system logic.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Data &amp; Analytics</h4>\n                        <ul>\n                            <li>Performed deep-dive validation of event logging using Snowflake (SQL).</li>\n                            <li>Monitored server health and logs via Kibana.</li>\n                            <li>Ensured data integrity across all environments.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Infrastructure</h4>\n                        <ul>\n                            <li>Validated database persistence (MongoDB, Redis).</li>\n                            <li>Managed feature configurations via Admin environments using JSON/CSV.</li>\n                            <li>Coordinated release deployments.</li>\n                        </ul>\n                    </div>\n                </div>"
      },
      {
        "title": "The \"Plus\" Side: Automation",
        "contentHtml": "<div class=\"automation-section\">\n                    <div class=\"automation-content\">\n                        <h3>Self-Taught Automation Initiative</h3>\n                        <p style=\"text-align: center; color: var(--text-muted); margin-bottom: 2rem;\">\n                            Driven by a desire to optimize repetitive tasks, I independently learned and implemented an\n                            automation layer.\n                        </p>\n                        <div class=\"automation-list\">\n                            <div class=\"automation-item\">\n                                <span class=\"automation-icon\">★</span>\n                                <div>\n                                    <strong style=\"color: #f0f0f0;\">Regression Suite</strong>\n                                    <p style=\"color: var(--text-muted); margin-top: 0.2rem;\">Developed a custom\n                                        automated smoke and regression suite using Python and Playwright with the Pytest\n                                        framework.</p>\n                                </div>\n                            </div>\n                            <div class=\"automation-item\">\n                                <span class=\"automation-icon\">★</span>\n                                <div>\n                                    <strong style=\"color: #f0f0f0;\">AI Integration</strong>\n                                    <p style=\"color: var(--text-muted); margin-top: 0.2rem;\">Leveraged AI tools (Gemini,\n                                        Antigravity) to build small Python utilities to speed up daily manual workflows.\n                                    </p>\n                                </div>\n                            </div>\n                            <div class=\"automation-item\">\n                                <span class=\"automation-icon\">★</span>\n                                <div>\n                                    <strong style=\"color: #f0f0f0;\">Impact</strong>\n                                    <p style=\"color: var(--text-muted); margin-top: 0.2rem;\">Reduced manual time for\n                                        release-day \"sanity\" checks and allowed for faster verification of core gameplay\n                                        flows.</p>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>"
      },
      {
        "title": "Device Lab",
        "contentHtml": "<div class=\"testing-env-grid\">\n                    <div class=\"env-card\">\n                        <div class=\"env-icon-box\">📱</div>\n                        <div class=\"env-details\">\n                            <strong>Mobile Ecosystem</strong>\n                            <span>iOS (iPhone XS through 11+)</span>\n                            <span>Android (Samsung tablets/handsets)</span>\n                            <span>Native Wrapper &amp; WebView</span>\n                        </div>\n                    </div>\n                    <div class=\"env-card\">\n                        <div class=\"env-icon-box\">💻</div>\n                        <div class=\"env-details\">\n                            <strong>Desktop Platforms</strong>\n                            <span>Windows &amp; macOS Cross-browser</span>\n                            <span>Chrome, Safari, Firefox</span>\n                            <span>Responsive Design Validation</span>\n                        </div>\n                    </div>\n                </div>"
      }
    ],
    "resultsList": []
  },
  {
    "id": "bigi",
    "brandColor": "rgba(255, 105, 180, 0.4)",
    "title": "BIGi",
    "subtitle": "Provided QA support for 'BIGi' app, A world of content with all the kids and teenagers' series",
    "logo": "../media/BIGI/hfjon5jIWlPIlWUWWJhy671pkU1Cs_rdhBHR2mky5zPFB4RRu2jGG_wXGtZSEz5ntVw.png",
    "heroImage": "../media/BIGI/hfjon5jIWlPIlWUWWJhy671pkU1Cs_rdhBHR2mky5zPFB4RRu2jGG_wXGtZSEz5ntVw.png",
    "overviewText": "As a QA tester for uTest's website, I was invited to perform professional tests to ensure a bug-free\n                    experience for users while playing video content from the VOD library and live stream features\n                    within the app.",
    "techStack": [
      "Mobile App",
      "VOD/Streaming",
      "Functional",
      "Compatibility",
      "Load Testing"
    ],
    "sections": [
      {
        "title": "Overview",
        "contentHtml": "<p>'BIGi' is a content app designed for kids and teenagers. The app offers a wide range of television\n                    programs, series, movies.</p>\n                <p>The app features exclusive content from social media influencer stars and thousands of hours of\n                    content from both Israel and abroad.</p>\n                <p>With BIGi app users can enjoy the \"children's channel\", the \"LOGI\" channel, and a massive VOD library\n                    on any device, such as a smartphone, tablet, or smart TV, at any time.</p>"
      },
      {
        "title": "Services Offered",
        "contentHtml": "<div class=\"services-grid\">\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Functional.png\" alt=\"Functional Tests\" class=\"service-icon\" loading=\"lazy\">\n                        <span class=\"service-name\">Functional Tests</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Mobile GUI.png\" alt=\"Compatibility Tests\" class=\"service-icon\" loading=\"lazy\">\n                        <span class=\"service-name\">Compatibility Tests</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Performance.png\" alt=\"Load tests\" class=\"service-icon\" loading=\"lazy\">\n                        <span class=\"service-name\">Load tests</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/E2E.png\" alt=\"I18N Tests\" class=\"service-icon\" loading=\"lazy\">\n                        <span class=\"service-name\">I18N Tests</span>\n                    </div>\n                </div>"
      },
      {
        "title": "Project Scope",
        "contentHtml": "<p style=\"margin-bottom: 2rem;\">The entire app is in scope!<br>\n                    The goal of this test cycle is to identify any issues related to its core functionality.<br>\n                    I will be testing all of its features and functionalities such as:</p>\n\n                <div class=\"scope-grid\">\n                    <!-- Registration Card -->\n                    <div class=\"scope-card\">\n                        <h4>🔐 Registration</h4>\n                        <ul>\n                            <li>Registration process</li>\n                            <li>Choose a free plan</li>\n                        </ul>\n                    </div>\n\n                    <!-- Login Card -->\n                    <div class=\"scope-card\">\n                        <h4>👤 Login</h4>\n                        <ul>\n                            <li>Login with existing accounts</li>\n                            <li>Login with free accounts</li>\n                        </ul>\n                    </div>\n\n                    <!-- Forgot Password Card -->\n                    <div class=\"scope-card\">\n                        <h4>🔑 Forgot Password</h4>\n                        <ul>\n                            <li>Click on forgot password</li>\n                            <li>Reset password</li>\n                            <li>Create a new password</li>\n                            <li>Log in with new password</li>\n                        </ul>\n                    </div>\n\n                    <!-- Playback Card -->\n                    <div class=\"scope-card\">\n                        <h4>▶️ Playback</h4>\n                        <ul>\n                            <li>Play live channel</li>\n                            <li>Play free VOD asset</li>\n                            <li>Play Paid VOD asset</li>\n                        </ul>\n                    </div>\n\n                    <!-- Misc Card -->\n                    <div class=\"scope-card\">\n                        <h4>⚙️ Miscellaneous</h4>\n                        <ul>\n                            <li>Add new profile</li>\n                            <li>Delete a profile</li>\n                            <li>Change platform language</li>\n                        </ul>\n                    </div>\n                </div>"
      },
      {
        "title": "Components Scope",
        "contentHtml": "<div class=\"components-cloud\">\n                    <span class=\"component-tag\">Categories</span>\n                    <span class=\"component-tag\">Contact &amp; Support</span>\n                    <span class=\"component-tag\">Countdown Feature</span>\n                    <span class=\"component-tag\">Design</span>\n                    <span class=\"component-tag\">Live Shows</span>\n                    <span class=\"component-tag\">Main Page</span>\n                    <span class=\"component-tag\">Menu</span>\n                    <span class=\"component-tag\">Player Functionality</span>\n                    <span class=\"component-tag\">Search</span>\n                    <span class=\"component-tag\">Series</span>\n                    <span class=\"component-tag\">Settings</span>\n                    <span class=\"component-tag\">Social Media Links</span>\n                    <span class=\"component-tag\">Splash Screen</span>\n                </div>"
      },
      {
        "title": "Device Scope",
        "contentHtml": "<div class=\"testing-env-grid\">\n                    <div class=\"env-card\">\n                        <div class=\"env-icon\">📱</div>\n                        <div class=\"env-details\">\n                            <strong>Android Phone – Galaxy s22 Ultra, 5G</strong>\n                            <span>OS version: Android 13, One UI 5.1</span>\n                            <span>'BIGi' Application</span>\n                        </div>\n                    </div>\n                </div>"
      },
      {
        "title": "In Numbers",
        "contentHtml": "<div class=\"stats-grid\">\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">1</span>\n                        <span class=\"stat-label\">App Tested</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">2</span>\n                        <span class=\"stat-label\">Hours Duration</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">9</span>\n                        <span class=\"stat-label\">Functional Defects</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">11</span>\n                        <span class=\"stat-label\">Exploratory Defects</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">40</span>\n                        <span class=\"stat-label\">Tests Total</span>\n                    </div>\n                </div>"
      },
      {
        "title": "Documents",
        "contentHtml": "<p>\n                    As a result of customer's privacy agreement, I am unable to provide full details or attach any\n                    testing documents related to the testing process.\n                </p>"
      },
      {
        "title": "Gallery",
        "contentHtml": "<div class=\"gallery-grid bigi-gallery\">\n                    <div class=\"gallery-item\">\n                        <img src=\"../media/BIGI/Screenshot_20230407_154230_BIGI.jpg\" alt=\"BIGI Screenshot 1\" loading=\"lazy\">\n                        <div class=\"gallery-overlay\"><span class=\"view-btn\">View</span></div>\n                    </div>\n                    <div class=\"gallery-item\">\n                        <img src=\"../media/BIGI/Screenshot_20230407_155624_BIGI.jpg\" alt=\"BIGI Screenshot 2\" loading=\"lazy\">\n                        <div class=\"gallery-overlay\"><span class=\"view-btn\">View</span></div>\n                    </div>\n                    <div class=\"gallery-item\">\n                        <img src=\"../media/BIGI/Screenshot_20230407_154959_BIGI.jpg\" alt=\"BIGI Screenshot 3\" loading=\"lazy\">\n                        <div class=\"gallery-overlay\"><span class=\"view-btn\">View</span></div>\n                    </div>\n                </div>"
      }
    ],
    "resultsList": [
      "20 bugs were found, including 9 high-priority issues that could lead to financial loss.",
      "Clear instructions were given to recreate the issues and aid in their quick resolution.",
      "Good communication between me and development teams helped ensure high quality and user\n                        satisfaction."
    ]
  },
  {
    "id": "carrefour",
    "brandColor": "rgba(0, 100, 255, 0.4)",
    "title": "Carrefour",
    "subtitle": "In this QA job, I was invited to participate in a functional cycle for the new 'Carrefour' Website.",
    "logo": "../media/Carrefour/logo.png",
    "heroImage": "../media/Carrefour/Capture.JPG",
    "overviewText": "The main goal was to identify any core functionality issues in the shopping experience. I had the\n                    opportunity to test the Website specific on desktop environment.",
    "techStack": [
      "E-commerce",
      "Functional",
      "Regression"
    ],
    "sections": [
      {
        "title": "Overview",
        "contentHtml": "<p>Carrefour is a leading retail company that has recently launched in Israel.</p>\n                <p>The website offers a wide range of products, including groceries, household items, electronics, and\n                    more. Users can easily navigate through different categories and make online purchases.</p>\n                <p>Carrefour provides a convenient and user-friendly shopping experience, with secure payment options\n                    and reliable delivery services.</p>"
      },
      {
        "title": "Services Offered",
        "contentHtml": "<div class=\"services-grid\">\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/E2E.png\" alt=\"E2E Tests\" class=\"service-icon\">\n                        <span class=\"service-name\">E2E</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Exploratory.png\" alt=\"Exploratory Testing\" class=\"service-icon\">\n                        <span class=\"service-name\">Exploratory</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/regression.png\" alt=\"Regression Testing\" class=\"service-icon\">\n                        <span class=\"service-name\">Regression</span>\n                    </div>\n                </div>"
      },
      {
        "title": "Project Scope",
        "contentHtml": "<p>Focusing on regression testing tasks such as:</p>\n                <div class=\"components-cloud\">\n                    <span class=\"component-tag\">Sign-up/Login</span>\n                    <span class=\"component-tag\">Delivery</span>\n                    <span class=\"component-tag\">Checkout/Cart</span>\n                    <span class=\"component-tag\">Order Editing</span>\n                    <span class=\"component-tag\">Cancellation</span>\n                    <span class=\"component-tag\">Search/Filter</span>\n                    <span class=\"component-tag\">Previous Orders</span>\n                    <span class=\"component-tag\">Coupons</span>\n                    <span class=\"component-tag\">Purchase Lists</span>\n                </div>\n                <p style=\"margin-top: 1.5rem;\">I followed the provided instructions, claimed test cases, performed\n                    additional exploratory testing, and reported bugs with clear reproduction steps.</p>"
      },
      {
        "title": "Device Scope",
        "contentHtml": "<div class=\"testing-env-grid\">\n                    <div class=\"env-card\">\n                        <div class=\"env-icon\">💻</div>\n                        <div class=\"env-details\">\n                            <strong>Microsoft Surface Book</strong>\n                            <span>OS version: Windows 10 Pro - 22H2</span>\n                            <span>Test Link For the Website</span>\n                        </div>\n                    </div>\n                </div>"
      },
      {
        "title": "In Numbers",
        "contentHtml": "<div class=\"stats-grid\">\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">1</span>\n                        <span class=\"stat-label\">Website Tested</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">4</span>\n                        <span class=\"stat-label\">Hours Duration</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">3</span>\n                        <span class=\"stat-label\">Functional Defects</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">1</span>\n                        <span class=\"stat-label\">Exploratory Defect</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">1</span>\n                        <span class=\"stat-label\">Visual Defect</span>\n                    </div>\n                </div>"
      },
      {
        "title": "Documents",
        "contentHtml": "<div class=\"results-section\" style=\"margin-top: 2rem;\">\n                    <p style=\"text-align: center; font-style: italic; color: var(--text-muted);\">\n                        As a result of customer's privacy agreement, I am unable to provide full details or attach any\n                        testing documents related to the testing process.\n                    </p>\n                </div>"
      }
    ],
    "resultsList": []
  },
  {
    "id": "leumi-goodies",
    "brandColor": "rgba(0, 200, 150, 0.4)",
    "title": "Leumi Goodies",
    "subtitle": "Provided QA support for the mobile application \"לאומי גודיז\", which provides users benefits for\n                    credit card purchases and digital transactions.",
    "logo": "../media/Leumi Goodies/1200x600wa (1).png",
    "heroImage": "../media/Leumi Goodies/Body_13.jpg",
    "overviewText": "As a QA tester for uTest's website, I was invited to perform professional tests to ensure a bug-free\n                    experience for users while redeem their accumulated \"Goodies\".",
    "techStack": [
      "Integration Testing",
      "Mobile App",
      "Real-time Updates"
    ],
    "sections": [
      {
        "title": "Overview",
        "contentHtml": "<p>\"Leumi Goodies\" is a unique program that allows bank Leumi customers to accumulate \"Goodies\" on\n                    credit card purchases.</p>\n                <p>Accumulation of \"Goodies\" on credit card expenses begins when the expenses on the credit cards reach\n                    an amount of 2,000 ₪ per month, up to 8,000 ₪.</p>\n                <p>The \"Leumi Goodies\" application allows the redemption of accumulated \"Goodies\" for a wide range of\n                    benefits from various content realms, such as movies, concerts, shows, food, fashion, beauty and\n                    grooming, vacations and spas, gyms and country clubs, and more.</p>"
      },
      {
        "title": "Services Offered",
        "contentHtml": "<div class=\"services-grid\">\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/E2E.png\" alt=\"E2E Tests\" class=\"service-icon\">\n                        <span class=\"service-name\">E2E</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Functional.png\" alt=\"Functional Tests\" class=\"service-icon\">\n                        <span class=\"service-name\">Functional Tests</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Performance.png\" alt=\"Performance Tests\" class=\"service-icon\">\n                        <span class=\"service-name\">Performance</span>\n                    </div>\n                </div>"
      },
      {
        "title": "Project Scope",
        "contentHtml": "<p>The entire app is in scope! The goal of this test cycle is to identify any issues related to its core\n                    Components:</p>\n\n                <div class=\"scope-grid\">\n                    <div class=\"scope-card\">\n                        <h4>Home Page</h4>\n                        <ul>\n                            <li>Search</li>\n                            <li>My Goodies Balance</li>\n                            <li>Goodies Reset Date</li>\n                            <li>Display Gift Cards</li>\n                            <li>Display Benefits</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Gift Cards</h4>\n                        <ul>\n                            <li>Valid Gift Card Details</li>\n                            <li>Total Payment Display</li>\n                            <li>Payment Selection</li>\n                            <li>Purchase Confirmation</li>\n                            <li>Transaction Cancellation</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Benefits</h4>\n                        <ul>\n                            <li>Valid Benefit Details</li>\n                            <li>Total Payment Display</li>\n                            <li>Purchase Confirmation</li>\n                            <li>Benefit Cancellation</li>\n                            <li>Cancellation Confirmation</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Profile</h4>\n                        <ul>\n                            <li>Profile Picture</li>\n                            <li>Credit Card Details</li>\n                            <li>My Mobile Number</li>\n                            <li>My Settings</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Wallet</h4>\n                        <ul>\n                            <li>My Purchases</li>\n                            <li>My History</li>\n                            <li>Repeat Purchase Option</li>\n                            <li>Transaction Cancellation</li>\n                        </ul>\n                    </div>\n                </div>"
      },
      {
        "title": "Device Scope",
        "contentHtml": "<div class=\"testing-env-grid\">\n                    <div class=\"env-card\">\n                        <div class=\"env-icon\">📱</div>\n                        <div class=\"env-details\">\n                            <strong>Android Phone</strong>\n                            <span>Galaxy S22 Ultra, 5G</span>\n                            <span>OS: Android 13, One UI 5.1</span>\n                            <span>'Leumi Goodies' Application</span>\n                        </div>\n                    </div>\n                </div>"
      },
      {
        "title": "In Numbers",
        "contentHtml": "<div class=\"stats-grid\">\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">1</span>\n                        <span class=\"stat-label\">App Tested</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">2</span>\n                        <span class=\"stat-label\">Hours Duration</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">2</span>\n                        <span class=\"stat-label\">Functional Defects</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">1</span>\n                        <span class=\"stat-label\">Performance Defect</span>\n                    </div>\n                </div>"
      },
      {
        "title": "Documents",
        "contentHtml": "<div class=\"results-section\" style=\"margin-top: 2rem;\">\n                    <p style=\"text-align: center; font-style: italic; color: var(--text-muted);\">\n                        As a result of customer's privacy agreement, I am unable to provide full details or attach any\n                        testing documents related to the testing process.\n                    </p>\n                </div>"
      }
    ],
    "resultsList": []
  },
  {
    "id": "paybox",
    "brandColor": "rgba(0, 243, 255, 0.4)",
    "title": "Paybox",
    "subtitle": "Comprehensive QA support for Paybox - a leading mobile payment app with 3.2 billion ILS transferred\n                    in 2021.",
    "logo": "../media/Paybox/logo.png",
    "heroImage": "",
    "overviewText": "",
    "techStack": [
      "FinTech",
      "Mobile App",
      "QA Engineering",
      "API Testing"
    ],
    "sections": [
      {
        "title": "Overview",
        "contentHtml": "<p>\n                    I Developed and executed test plans for the \"Voucher Carousel\" Component. Using the 'Postman' tool,\n                    I executed API Tests, preventing critical bugs that could cause financial losses for over 1.5\n                    million users.\n                </p>\n                <img src=\"../media/Paybox/InShot_20240619_233324222-ezgif.com-crop.gif\" alt=\"Paybox App Demo\" class=\"project-media\">\n                <p>The voucher carousel is the part of the app that allows users to:</p>\n                <ul>\n                    <li>Earn points with every purchase and convert them into money.</li>\n                    <li>Send various types of vouchers as holiday or birthday gifts from the user's account to friends\n                        who also have the app installed.</li>\n                    <li>Pay with the accumulated vouchers at selected supermarkets, stores, and Brands.</li>\n                </ul>"
      },
      {
        "title": "Services Offered",
        "contentHtml": "<div class=\"services-grid\">\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/api.png\" alt=\"API\" class=\"service-icon\">\n                        <span class=\"service-name\">API</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/CRUD.png\" alt=\"CRUD\" class=\"service-icon\">\n                        <span class=\"service-name\">CRUD</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Exploratory.png\" alt=\"Exploratory\" class=\"service-icon\">\n                        <span class=\"service-name\">Exploratory</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/E2E.png\" alt=\"E2E\" class=\"service-icon\">\n                        <span class=\"service-name\">E2E</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Mobile GUI.png\" alt=\"UI\" class=\"service-icon\">\n                        <span class=\"service-name\">UI</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Integration.png\" alt=\"Integration\" class=\"service-icon\">\n                        <span class=\"service-name\">Integration</span>\n                    </div>\n                </div>"
      },
      {
        "title": "Device Scope",
        "contentHtml": "<div class=\"tech-stack\" style=\"justify-content: flex-start;\">\n                    <span class=\"tech-badge\">✔ Pixel 5</span>\n                    <span class=\"tech-badge\">✔ Pixel 6 Pro</span>\n                    <span class=\"tech-badge\">✔ iPhone 13</span>\n                </div>"
      },
      {
        "title": "Project Scope",
        "contentHtml": "<div class=\"scope-grid\">\n                    <div class=\"scope-card\">\n                        <h4>\"Voucher Carousel\" Section</h4>\n                        <p style=\"margin-bottom: 1rem; color: var(--text-muted); font-size: 0.9rem;\">Allows payment\n                            using the user's vouchers:</p>\n                        <ul>\n                            <li>Adding a new voucher.</li>\n                            <li>Splitting vouchers (&gt; 1500 ILS).</li>\n                            <li>Activating a voucher.</li>\n                            <li>Locked voucher.</li>\n                            <li>Deleting a voucher.</li>\n                            <li>Redemption &amp; Refund processes.</li>\n                            <li>Voucher details.</li>\n                            <li>Sending/Canceling to a friend.</li>\n                            <li>Action history.</li>\n                            <li>List of accepting networks.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Vouchers Section (Main)</h4>\n                        <ul>\n                            <li>Total amount of all vouchers.</li>\n                            <li>Action history.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Secondary Screens</h4>\n                        <ul>\n                            <li>\"Terms of Use\" approval screen.</li>\n                            <li>Updating the network database.</li>\n                        </ul>\n                    </div>\n                </div>\n\n                <div style=\"text-align: center; margin-top: 3rem;\">\n                    <img src=\"../media/Paybox/unnamed.gif\" alt=\"Voucher Carousel\" class=\"project-media\" style=\"margin: 0 auto; width: 100%; max-width: 250px;\">\n                    <p class=\"media-caption\">Voucher Carousel Feature</p>\n                </div>"
      },
      {
        "title": "API Testing",
        "contentHtml": "<p>\n                    In the \"real world\", actions such as redeeming a voucher, refund, or canceling sending to a friend,\n                    are typically API calls triggered by the system at the checkout counter of a store.\n                </p>\n                <p>\n                    However, in the testing environment, I used the SDK version of the app and utilized\n                    <strong>Postman</strong> to simulate these actions.\n                </p>\n                <p>\n                    By sending API requests through Postman, I could replicate these scenarios and verify that the\n                    system behaves correctly. I used Postman to test the voucher redemption process, ensuring that when\n                    a voucher is redeemed, it correctly updates the system and processes the payment. Similarly, I\n                    tested the refund and canceling sending to a friend process to ensure that these actions were\n                    handled smoothly and the system reverted the changes accurately.\n                </p>"
      },
      {
        "title": "UI Testing",
        "contentHtml": "<img src=\"../media/Paybox/unnamed (1).gif\" alt=\"UI Testing\" class=\"project-media\">\n                <p>\n                    I conducted UI tests covering all scenarios and screens where the vouchers are displayed. This was\n                    done to ensure the correct display of all 22 types of vouchers and to verify that the information is\n                    presented without distortion, and that no elements overlap or hide each other.\n                </p>"
      },
      {
        "title": "C.R.U.D & Database Integration",
        "contentHtml": "<p>\n                    The application is in its maintenance phase, so occasionally, calls are received from customers who\n                    have made transactions and purchases using the app, experiencing various issues or errors. As a QA\n                    engineer with access to the customer database, I am responsible for tracing the steps and actions\n                    performed by the customers based on the information recorded in the company's database. This\n                    involves integrating between several databases to try to identify and understand the bugs that\n                    ultimately led to the failures. This is done to ensure that if an issue did occur, it is confirmed\n                    and promptly fixed in collaboration with the developers.\n                </p>"
      },
      {
        "title": "Integration Testing",
        "contentHtml": "<p>\n                    I ensured that every user operation, such as purchases and transactions, was accurately and\n                    consistently reflected in the database. This included verifying that data was correctly written,\n                    updated, and retrieved from the database without discrepancies.\n                </p>"
      },
      {
        "title": "End-to-End Tests",
        "contentHtml": "<p>\n                    I performed End-to-End tests focusing on Boundary Value Analysis and ensured vouchers were split\n                    when their amounts exceeded 1500 ILS.\n                </p>\n                <p>\n                    For example, a voucher of 3000 ILS should split into two 1500 ILS vouchers, and a 3100 ILS voucher\n                    should split into two 1500 ILS vouchers and one 100 ILS voucher. This involved testing edge cases\n                    around the 1500 ILS boundary to confirm that the splitting logic functioned accurately and\n                    consistently.\n                </p>\n                <p>\n                    Additionally, I tested vouchers with an identification mechanism requiring activation before use. I\n                    verified that if a user entered the wrong identification code three times, the voucher would be\n                    blocked. This included testing the correct activation process and the blocking mechanism to ensure\n                    the system effectively prevented unauthorized use after repeated incorrect attempts.\n                </p>"
      },
      {
        "title": "Exploratory Testing",
        "contentHtml": "<p>\n                    I performed exploratory tests by interacting with the app in creative and unconventional ways to\n                    identify potential issues that might not be detected by formal testing methods. This involves\n                    thinking outside the box and experimenting with different features, navigation paths, and user\n                    interactions to uncover hidden bugs and usability problems.\n                </p>"
      },
      {
        "title": "Tools Used",
        "contentHtml": "<div class=\"tech-stack\" style=\"justify-content: flex-start; margin-bottom: 2rem;\">\n                    <span class=\"tech-badge\">JIRA + AIO Test</span>\n                    <span class=\"tech-badge\">Postman</span>\n                    <span class=\"tech-badge\">Paybox SDK</span>\n                </div>"
      },
      {
        "title": "In Numbers",
        "contentHtml": "<div class=\"stats-grid\">\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">2</span>\n                        <span class=\"stat-label\">QA Engineers</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">4</span>\n                        <span class=\"stat-label\">Test Environments</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">100+</span>\n                        <span class=\"stat-label\">Defects Detected</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">800+</span>\n                        <span class=\"stat-label\">Total Tests</span>\n                    </div>\n                    <div class=\"stat-item\" style=\"grid-column: 1 / -1;\">\n                        <span class=\"stat-number\">24/7</span>\n                        <span class=\"stat-label\">Support Service Availability</span>\n                    </div>\n                </div>"
      }
    ],
    "resultsList": [
      "Enhanced \"Voucher Carousel\" quality and a detailed testing report with all the findings\n                        presented to the client (Paybox).",
      "Support, and quick response during the maintenance phase of the application - addressing every\n                        request until a complete fix to the issue is found."
    ]
  },
  {
    "id": "planet",
    "brandColor": "rgba(255, 50, 50, 0.4)",
    "title": "Planet",
    "subtitle": "Provided QA support for 'PLANET' premier cinema chain\n                    of the ticketing services.",
    "logo": "../media/PLANET/logo.png",
    "heroImage": "../media/PLANET/Sala_kinowa_2.jpg",
    "overviewText": "As part of the QA course we were asked to perform professional tests, ensuring 'bug-free operation'\n                    of online ticket purchasing application.",
    "techStack": [
      "Ticketing Services",
      "Web Application",
      "Accessibility"
    ],
    "sections": [
      {
        "title": "Overview",
        "contentHtml": "<p>\n                    'PLANET' offering a world-class experience with the finest cinema complexes and latest innovations\n                    that provide an exceptional viewing experience, from giant screens, advanced sound systems and\n                    luxurious roomy seating to the most advanced ticketing services in the world and maximum\n                    accessibility for disabled persons.\n                </p>"
      },
      {
        "title": "Services Offered",
        "contentHtml": "<div class=\"services-grid\">\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Functional.png\" alt=\"Functional Tests\" class=\"service-icon\">\n                        <span class=\"service-name\">Functional Tests</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Mobile GUI.png\" alt=\"Compatibility Tests\" class=\"service-icon\">\n                        <span class=\"service-name\">Compatibility Tests</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Performance.png\" alt=\"Load Tests\" class=\"service-icon\">\n                        <span class=\"service-name\">Load Tests</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/E2E.png\" alt=\"I18N Tests\" class=\"service-icon\">\n                        <span class=\"service-name\">I18N Tests</span>\n                    </div>\n                </div>"
      },
      {
        "title": "Project Scope",
        "contentHtml": "<p>\n                    To cope with the project, a team of 3 QA engineers and 1 manager were assigned, the manager was\n                    responsible for quality level within software product:\n                </p>\n                <p>\n                    A web application operating on HTML 5, cross-platform, devices and Browsers. It's functionality is\n                    'seating management' system, so that the client can choose which seats in the theater they want to\n                    sit on in advance, and to pay for the tickets and seating positions using the application.\n                </p>\n                <p>\n                </p><p>\n                    We started testing the Web application with the help of the following devices and browsers:\n                </p>\n                <div class=\"testing-env-grid\">\n                    <div class=\"env-card\">\n                        <div class=\"env-icon\">💻</div>\n                        <div class=\"env-details\">\n                            <strong>Workstations</strong>\n                            <span>Microsoft Surface Book (Win 10 Pro)</span>\n                            <span>Lenovo Yoga (Win 11)</span>\n                        </div>\n                    </div>\n                    <div class=\"env-card\">\n                        <div class=\"env-icon\">📱</div>\n                        <div class=\"env-details\">\n                            <strong>Mobile Devices</strong>\n                            <span>Galaxy S22 Ultra (Android 13)</span>\n                            <span>iPhone 12 (iOS 16)</span>\n                        </div>\n                    </div>\n                    <div class=\"env-card\">\n                        <div class=\"env-icon\">🌐</div>\n                        <div class=\"env-details\">\n                            <strong>Browsers</strong>\n                            <span>Chrome, Firefox, Opera</span>\n                            <span>(Tested on all devices)</span>\n                        </div>\n                    </div>\n                </div>\n                <p>\n                    After studying the requirements, writing test cases, the engineers provided the following QA\n                    support:\n                </p>\n\n                <div class=\"scope-grid\">\n                    <div class=\"scope-card\">\n                        <h4>Functional Testing</h4>\n                        <ul>\n                            <li><strong>Scope:</strong> GUI, E2E, Accessibility.</li>\n                            <li><strong>Coverage:</strong> Verified annual ticket purchasing flow end-to-end (positive &amp;\n                                negative).</li>\n                            <li><strong>Finding:</strong> Critical defect found in Venue 13 (seating plan mismatch vs\n                                reality), potentially causing revenue loss.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Accessibility</h4>\n                        <ul>\n                            <li><strong>Tools:</strong> Accessibility Toolbar.</li>\n                            <li>Tested all toolbar options ensuring compliance with Israeli Internet Association\n                                standards.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Compatibility Testing</h4>\n                        <ul>\n                            <li><strong>Goal:</strong> Consistent UX across browsers/OS.</li>\n                            <li>Executed E2E flows on various devices/browsers to detect cross-platform defects.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Load Testing</h4>\n                        <ul>\n                            <li><strong>Tool:</strong> JMeter.</li>\n                            <li>Simulated concurrent users to find capacity peaks.</li>\n                            <li>Benchmarked performance against competitor cinema websites.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>I18N Testing</h4>\n                        <ul>\n                            <li><strong>Languages:</strong> Hebrew &amp; English.</li>\n                            <li><strong>Defect:</strong> Interface language reverts from EN to HE automatically when\n                                navigating pages (Medium Priority).</li>\n                        </ul>\n                    </div>\n                </div>"
      },
      {
        "title": "Tools",
        "contentHtml": "<div class=\"tech-stack\" style=\"justify-content: flex-start;\">\n                    <span class=\"tech-badge\">✔ JIRA + Xray</span>\n                    <span class=\"tech-badge\">✔ JMeter</span>\n                </div>"
      },
      {
        "title": "In Numbers",
        "contentHtml": "<div class=\"stats-grid\">\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">1</span>\n                        <span class=\"stat-label\">Software Products Tested</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">2</span>\n                        <span class=\"stat-label\">Months Duration</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">3</span>\n                        <span class=\"stat-label\">QA Engineers</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">112</span>\n                        <span class=\"stat-label\">Tests in Total</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">10</span>\n                        <span class=\"stat-label\">Defects Detected</span>\n                    </div>\n                </div>"
      },
      {
        "title": "Documents",
        "contentHtml": "<div style=\"text-align: center; margin-top: 1.5rem; display: flex; justify-content: center; gap: 1rem; flex-wrap: wrap;\">\n                    <a href=\"https://docs.google.com/document/d/1vlIZK8mEth4kbjR6vOErbhC0TMLPTBq5/edit?usp=sharing&amp;ouid=118407128876216779267&amp;rtpof=true&amp;sd=true\" target=\"_blank\" class=\"btn btn-primary\" style=\"display: flex; align-items: center; gap: 0.5rem;\">\n                        <span>📄</span> STP Document\n                    </a>\n                    <a href=\"https://panawel.atlassian.net/issues/?filter=10002\" target=\"_blank\" class=\"btn btn-secondary\" style=\"display: flex; align-items: center; gap: 0.5rem;\">\n                        <span>🐞</span> STD (Jira)\n                    </a>\n                    <a href=\"https://docs.google.com/presentation/d/1UwXk9olrP9YOevqtbAeRtbp-MaAmy_gExiznoLx2yGw/edit?usp=sharing\" target=\"_blank\" class=\"btn btn-secondary\" style=\"display: flex; align-items: center; gap: 0.5rem;\">\n                        <span>📊</span> STR Document\n                    </a>\n                </div>"
      }
    ],
    "resultsList": [
      "Enhanced ticketing services quality and a detailed usability testing report with all the\n                        findings."
    ]
  },
  {
    "id": "signal",
    "title": "Signal",
    "subtitle": "Increasing the number of tests by 50% within a given timeframe",
    "logo": "../media/Singal/logo.png",
    "heroImage": "../media/Singal/signal-on-phone-handheld-hero-smaller.jpg",
    "overviewText": "In my first year as a QA engineer, my curiosity about the world of QA grew, along with my desire to\n                    learn and explore the field of testing. I read about various types of testing and techniques, and I\n                    self-learned an AI tool called 'Maestro' and combined it with 'Appium' to utilize it for mobile\n                    automation testing of 'Signal' app. This allowed me to increase the number of tests that could be\n                    completed within the same timeframe, alongside manual testing.",
    "techStack": [
      "Python",
      "Appium",
      "Maestro",
      "Mobile Automation",
      "Privacy"
    ],
    "sections": [
      {
        "title": "Overview",
        "contentHtml": "<p>\n                    'Signal' is a messaging app focused on privacy. It's free, easy to use, open-source, and features\n                    strong end-to-end encryption to keep communications completely private.\n                </p>"
      },
      {
        "title": "Services Offered",
        "contentHtml": "<div class=\"services-grid\">\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Mobile Automation Tests.png\" alt=\"Mobile Automation\" class=\"service-icon\">\n                        <span class=\"service-name\">Mobile Automation Tests</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/E2E.png\" alt=\"E2E\" class=\"service-icon\">\n                        <span class=\"service-name\">E2E</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Exploratory.png\" alt=\"Exploratory\" class=\"service-icon\">\n                        <span class=\"service-name\">Exploratory Tests</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/installation.png\" alt=\"Installation\" class=\"service-icon\">\n                        <span class=\"service-name\">Installation Tests</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Component.png\" alt=\"Component\" class=\"service-icon\">\n                        <span class=\"service-name\">Component</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Mobile GUI.png\" alt=\"UI\" class=\"service-icon\">\n                        <span class=\"service-name\">UI</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/regression.png\" alt=\"Regression\" class=\"service-icon\">\n                        <span class=\"service-name\">Regression</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Integration.png\" alt=\"Integration\" class=\"service-icon\">\n                        <span class=\"service-name\">Integration Tests</span>\n                    </div>\n                </div>"
      },
      {
        "title": "Device Scope",
        "contentHtml": "<div class=\"tech-stack\" style=\"justify-content: flex-start;\">\n                    <span class=\"tech-badge\">✔ Pixel 5</span>\n                    <span class=\"tech-badge\">✔ Pixel 6 Pro</span>\n                    <span class=\"tech-badge\">✔ Samsung Galaxy s22 Ultra</span>\n                </div>"
      },
      {
        "title": "Project Scope",
        "contentHtml": "<p>The development team provided me with an APK file of our internal 'Signal' version, which I tested\n                    before it was rolled out to our customers worldwide:</p>\n\n                <div class=\"scope-grid\">\n                    <div class=\"scope-card\">\n                        <h4>Integration Features</h4>\n                        <ul>\n                            <li><strong>Focus:</strong> New integration between Signal and internal classified products.\n                            </li>\n                            <li>Tested unique features unavailable in the Play Store version.</li>\n                            <li>Ensured no functionality loss during integration.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>End-to-End Tests</h4>\n                        <ul>\n                            <li><strong>Scenarios:</strong> User registration, OTP verification, messaging.</li>\n                            <li><strong>Features:</strong> Audio/Video calls, groups, media sharing.</li>\n                            <li>Verified app scalability in split-screen/landscape modes.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Component Testing</h4>\n                        <ul>\n                            <li><strong>Breakdown:</strong> Screen-by-screen element analysis.</li>\n                            <li><strong>Documentation:</strong> Detailed JIRA reports with reproduction steps &amp; media.\n                            </li>\n                            <li>Verified functional behavior of individual UI components.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>UI Testing</h4>\n                        <ul>\n                            <li><strong>Visuals:</strong> Buttons, text fields, layout correctness.</li>\n                            <li><strong>i18n:</strong> Validated display in different languages.</li>\n                            <li>Ensured responsiveness across diverse devices.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Installation Testing</h4>\n                        <ul>\n                            <li><strong>Lifecycle:</strong> Install, Update, Uninstall.</li>\n                            <li>Verified stability across different OS versions and device types.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Regression &amp; Exploratory</h4>\n                        <ul>\n                            <li><strong>Regression:</strong> 600+ test cases run per new version/fix.</li>\n                            <li><strong>Exploratory:</strong> Creative usage to uncover edge-case defects.</li>\n                            <li>Ensured new features didn't break existing core functions.</li>\n                        </ul>\n                    </div>\n                </div>"
      },
      {
        "title": "Automation",
        "contentHtml": "<p>The efficiency and coverage of my testing efforts was greatly improved by basic automation tests. I\n                    automated a lot of test cases for Signal application using 'Maestro' AI tool which was also used\n                    together with 'Appium'. This included automating repetitive test cases such as message sending and\n                    receiving, calls, groups, user registration processes, and more...</p>\n                <p>I wrote python scripts to simulate various end-user scenarios to ensure that updates didn't affect\n                    the app's functionality.</p>\n                <p>This helped shorten regression testing periods and allowing new builds to be quickly checked.</p>\n                <div class=\"media-gif-row\">\n                    <img src=\"../media/Singal/InShot_20240617_012257532-ezgif.com-optimize.gif\" alt=\"Signal Demo 2\" class=\"project-media\">\n                    <img src=\"../media/Singal/InShot_20240617_012818390-ezgif.com-optimize.gif\" alt=\"Signal Demo 3\" class=\"project-media\">\n                </div>\n                <p style=\"text-align: center; color: var(--text-muted); font-size: 0.9rem; margin-top: 0.5rem; font-style: italic;\">\n                    Automated Android testing with direct Jira failure reporting.\n                </p>"
      },
      {
        "title": "Tools",
        "contentHtml": "<div class=\"tech-stack\" style=\"justify-content: flex-start; margin-bottom: 2rem;\">\n                    <span class=\"tech-badge\">JIRA + AIO Test</span>\n                    <span class=\"tech-badge\">Appium</span>\n                    <span class=\"tech-badge\">Python + Pycharm</span>\n                    <span class=\"tech-badge\">Maestro</span>\n                </div>"
      },
      {
        "title": "In Numbers",
        "contentHtml": "<div class=\"stats-grid\">\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">1</span>\n                        <span class=\"stat-label\">QA engineer</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">4</span>\n                        <span class=\"stat-label\">Test Environments</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">5</span>\n                        <span class=\"stat-label\">Months (Running)</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">10+</span>\n                        <span class=\"stat-label\">Builds</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">100+</span>\n                        <span class=\"stat-label\">Defects Detected</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">600+</span>\n                        <span class=\"stat-label\">Total Tests</span>\n                    </div>\n                </div>"
      },
      {
        "title": "Documents",
        "contentHtml": "<div style=\"text-align: center; margin-top: 1.5rem;\">\n                    <a href=\"https://github.com/panawel/SignalAutomation\" target=\"_blank\" class=\"btn btn-primary\" style=\"background-color: #3b82f6; margin-bottom: 1rem;\">\n                        Automation Files (GitHub)\n                    </a>\n                </div>"
      }
    ],
    "resultsList": [
      "The automation tests quickly identified critical bugs and issues before the app was released and\n                        installed on customers' devices.",
      "Detailed documentation of over 100 bugs helped quickly fix all the issues, which enhanced the\n                        quality and reliability of the 'Signal' app."
    ]
  },
  {
    "id": "smart-crm",
    "title": "Smart CRM",
    "subtitle": "Boosting quality for Customer Relationship Management mobile app.",
    "logo": "../media/SMART CRM/logo.png",
    "heroImage": "../media/SMART CRM/2023-07-03 01_02_19.067+0300.jpg",
    "overviewText": "Provided testing support and Design QA to assist the startup in identifying critical bugs and\n                    fixing them before releasing a new version to the Play Store.",
    "techStack": [
      "Data Integrity",
      "Workflow Testing",
      "Automation",
      "B2B Application"
    ],
    "sections": [
      {
        "title": "Overview",
        "contentHtml": "<!-- Quote Block Design -->\n                <div class=\"quote-container\">\n                    <span class=\"quote-icon\">❝</span>\n                    <div class=\"quote-text-restored\">\n                        Wow! I skimmed through your STD document in Jira to see your bugs Reports - you did an amazing\n                        job!\n                        It looks really impressive, detailed, and understandable!\n                        <br><br>\n                        Well done! I will definitely go through all the bugs systematically and make sure to fix them\n                        before the next release.\n                        <br><br>\n                        Truly, hats off to you! In your recommendations, you can put my phone number :-)\n                    </div>\n                    <div class=\"quote-author-restored\">\n                        ✎ CEO of the 'Smart CRM' startup company\n                    </div>\n                </div>"
      },
      {
        "title": "Services Offered",
        "contentHtml": "<div class=\"services-grid\">\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Mobile%20apps%20testing.png\" alt=\"Mobile Tests\" class=\"service-icon\">\n                        <span class=\"service-name\">Mobile Tests</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/E2E.png\" alt=\"E2E Tests\" class=\"service-icon\">\n                        <span class=\"service-name\">E2E</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Exploratory.png\" alt=\"Exploratory\" class=\"service-icon\">\n                        <span class=\"service-name\">Exploratory</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Interruption.png\" alt=\"Interruption\" class=\"service-icon\">\n                        <span class=\"service-name\">Interruption</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/CRUD.png\" alt=\"CRUD\" class=\"service-icon\">\n                        <span class=\"service-name\">CRUD</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Security.png\" alt=\"Security\" class=\"service-icon\">\n                        <span class=\"service-name\">Security</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Backup%20%26%20Restore.png\" alt=\"Backup &amp; Restore\" class=\"service-icon\">\n                        <span class=\"service-name\">Backup &amp; Restore</span>\n                    </div>\n                    <div class=\"service-card\">\n                        <img src=\"../media/symbols/Integration.png\" alt=\"Integration\" class=\"service-icon\">\n                        <span class=\"service-name\">Integration</span>\n                    </div>\n                </div>"
      },
      {
        "title": "Device Scope",
        "contentHtml": "<div class=\"tech-stack\" style=\"justify-content: flex-start;\">\n                    <span class=\"tech-badge\">✔ OnePlus Nord CE 2</span>\n                    <span class=\"tech-badge\">✔ Samsung Galaxy S22 Ultra</span>\n                    <span class=\"tech-badge\">✔ Redmi Note 7</span>\n                    <span class=\"tech-badge\">✔ Samsung DEX</span>\n                </div>"
      },
      {
        "title": "Project Scope",
        "contentHtml": "<p>The Smart CRM company and its development team provided an APK file of the upcoming version\n                    (pre-release) for testing to achieve established business goals:</p>\n                <ul class=\"check-list\">\n                    <li>Focus on new features not available in the current Play Store version.</li>\n                    <li>Ensure reduction in defects and bugs that could lead to failures and disruptions in user\n                        experience.</li>\n                    <li>Avoid expensive post-release defect fixing.</li>\n                </ul>"
      },
      {
        "title": "The Testing Process - B2B Application",
        "contentHtml": "<p>The execution phase was divided into 2 rounds:</p>\n\n                <div style=\"display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 2rem; margin-top: 2rem; margin-bottom: 3rem;\">\n                    <div style=\"background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);\">\n                        <span class=\"round-badge\">Round 1</span>\n                        <h3 style=\"margin-top: 0.5rem;\">Functional Testing</h3>\n                        <p>Localization, GUI, Compatibility, End-to-End, Usability, Exploratory, CRUD.</p>\n                    </div>\n                    <div style=\"background: rgba(255,255,255,0.02); padding: 1.5rem; border-radius: 8px; border: 1px solid rgba(255,255,255,0.05);\">\n                        <span class=\"round-badge\">Round 2</span>\n                        <h3 style=\"margin-top: 0.5rem;\">Non-Functional Testing</h3>\n                        <p>Integration, Authorization, Network, I18N, Interruption, Installation Testing, Backup &amp;\n                            Restore, Security.</p>\n                    </div>\n                </div>"
      },
      {
        "title": "Testing Methodology",
        "contentHtml": "<div class=\"scope-grid\">\n\n                    <div class=\"scope-card\">\n                        <h4>End-to-End (E2E)</h4>\n                        <ul>\n                            <li><strong>Leads:</strong> Adding/Editing leads.</li>\n                            <li><strong>Communication:</strong> Sending WhatsApp without saving contact.</li>\n                            <li><strong>Subscription:</strong> purchasing &amp; checking limitations.</li>\n                            <li><strong>Boundary:</strong> Challenging system behavior.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Integration</h4>\n                        <ul>\n                            <li><strong>Device:</strong> Browser integration.</li>\n                            <li><strong>External:</strong> WhatsApp template messaging.</li>\n                            <li>Ensured correct data flow between system &amp; 3rd parties.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Gateway &amp; Payments</h4>\n                        <ul>\n                            <li><strong>Calculations:</strong> Premium plans, discounts, promotions.</li>\n                            <li><strong>Flow:</strong> Play Store purchasing process alignment.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>I18N (Global)</h4>\n                        <ul>\n                            <li><strong>Adaptation:</strong> Filter screens, Subscription screens.</li>\n                            <li><strong>Layout:</strong> Floating widget display.</li>\n                            <li>Validated menus &amp; contacts across languages/locales.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Backup &amp; Restore</h4>\n                        <ul>\n                            <li><strong>Integrity:</strong> Cloud data transmission validity.</li>\n                            <li><strong>Recovery:</strong> Verified restore after crash/device switch.</li>\n                            <li>Tested across accounts &amp; devices to mitigate data loss.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>C.R.U.D</h4>\n                        <ul>\n                            <li><strong>Users:</strong> Registration, Login, Auth.</li>\n                            <li><strong>Data:</strong> Account updates &amp; subscription status reflection.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Interruption Testing</h4>\n                        <ul>\n                            <li><strong>Audio:</strong> Voice dictation vs Music/Calls.</li>\n                            <li><strong>UI:</strong> Widget collisions.</li>\n                            <li><strong>System:</strong> Notification handling.</li>\n                        </ul>\n                    </div>\n\n                    <div class=\"scope-card\">\n                        <h4>Security</h4>\n                        <ul>\n                            <li><strong>Access:</strong> Unauthorized access resilience.</li>\n                            <li><strong>Privacy:</strong> Data leak prevention.</li>\n                            <li><strong>Encryption:</strong> Secure backup &amp; transfer.</li>\n                        </ul>\n                        <div class=\"tech-stack\" style=\"justify-content: flex-start; margin-top: 1rem;\">\n                            <span class=\"tech-badge\">JIRA + Xray</span>\n                            <span class=\"tech-badge\">MEmu Play</span>\n                            <span class=\"tech-badge\">Fiddler</span>\n                        </div>\n                    </div>\n\n                </div>"
      },
      {
        "title": "In Numbers",
        "contentHtml": "<div class=\"stats-grid\">\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">1</span>\n                        <span class=\"stat-label\">Software Product</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">2</span>\n                        <span class=\"stat-label\">Weeks Duration</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">2</span>\n                        <span class=\"stat-label\">QA Engineers</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">4</span>\n                        <span class=\"stat-label\">Test Environments</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">48</span>\n                        <span class=\"stat-label\">Defects Detected</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">6</span>\n                        <span class=\"stat-label\">Critical Defects</span>\n                    </div>\n                    <div class=\"stat-item\">\n                        <span class=\"stat-number\">620+</span>\n                        <span class=\"stat-label\">Tests in Total</span>\n                    </div>\n                </div>"
      },
      {
        "title": "Documents",
        "contentHtml": "<div style=\"text-align: center; margin-top: 1.5rem; display: flex; justify-content: center; gap: 1rem;\">\n                    <a href=\"https://docs.google.com/document/d/1FdG3eTan7XD_xlk-hrDJ2ctbsWfQw39pTwLuF4bzE_w/edit?usp=sharing\" target=\"_blank\" class=\"btn btn-primary\" style=\"display: flex; align-items: center; gap: 0.5rem;\">\n                        <span>📄</span> STP Document\n                    </a>\n                    <a href=\"https://docs.google.com/presentation/d/1ppRLioak4nNha0YNADaPnTD9OCKdHuFW/edit?usp=sharing&amp;ouid=118407128876216779267&amp;rtpof=true&amp;sd=true\" target=\"_blank\" class=\"btn btn-secondary\" style=\"display: flex; align-items: center; gap: 0.5rem;\">\n                        <span>📊</span> STR Document\n                    </a>\n                </div>"
      }
    ],
    "resultsList": [
      "QA testing successful in identifying critical bugs before Play Store release.",
      "Significantly enhanced overall app quality and user experience, aligning with business\n                        objectives.",
      "Received positive feedback from the CEO motivating further development in software quality\n                        testing."
    ]
  }
];
