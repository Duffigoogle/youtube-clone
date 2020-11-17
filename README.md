<h1 align="center"> Youtube-clone </h1>

<p align="center">
  <img src="https://img.shields.io/github/issues/Duffigoogle">
  <img src="https://img.shields.io/github/forks/Duffigoogle">
  <img src="https://img.shields.io/github/stars/Duffigoogle">
  <a href="https://opensource.org/licenses/MIT">
    <img src="https://img.shields.io/github/licensed/duffigoogle/youtube-clone?color=%236633cc&logo=mit alt="License">
  </a>
</p>
                                                                                                                     
<hr>

![Youtube logo](https://www.youtube.com/img/desktop/yt_1200.png)

### Using **Reactjs** and **Material UI** for the frontend development.

#### With **Firebase**, the Youtube-clone app will be hosted.

**Order of development.**

- React Application setup: `<npx create-react-app youtube-clone>`.
- Setup Firebase hosting.
  - Go to https://console.firebase.google.com
  - Click **Add Project** or **Create a Project**.
  - Enter a project name.
  - You could opt out to include Google Analytics in the project.
  - Once setup is done... you will be redirected to the dashboard. Go to **Project Settings.**
  - Under **Your Apps**, select the **Web** icon.
  - Enter a name for the app and click **Register App.**
  - Copy the config details that come under the `<firebaseConfig>` variable. This will be used to setup communication between the **Youtube-clone-app** and **Firebase**.
  - Click **Continue to Console** to complete the web app registration.
  - Add Firebase to the Youtube-clone-app using `<npm install --save firebase>` or `<npm install -g firebase>` or `<yarn add firebase>`
  - Inside the `<src>` directory, create a new directory `<Firebase>` and further, create a `<firebaseconfig.js>` file and paste the config details copied from Firebase Web app
    setup.
- Install the other required dependencies for the Youtube- clone-app.
  - Install **react-sass** via ``<npm install node-sass>`
  - install **Material UI** via your terminal/Gitbash `<npx i --save @material-ui/core>`. Check documentations on https://www.material-ui.com
  - Install **axios** via `<npx i --save axios>`
  - Install **react-icons** via ``<npm install react-icons>`
  - Install **semantic-ui-react** via `<npm install semantic-ui-react semantic-ui-css>`
- Create Scaffold of Main and Children Components.
  - `<TopBar>`
    - `<LogoMenu>`
    - `<TopBarSearch>`
    - `<RightMenu>`
      - `<Icons>`
      - `<SignIn>`
  - `<SideBar>`
    - `<MainSideMenu>`
      - `<HomeTrendSubscrip>`
      - `<LibHistoryMenu>`
      - `<SignInComp>`
    - `<BestOfYoutube>`
      - `<YoutubeGenre>`
      - `<BrowseChannels>`
    - `<MoreFromYoutube>`
      - `<PremiumLive>`
      - `<SettingsHelpFeedback>`
      - `<Footer>`
  - `<MainGallery>`
    - `<TagsComp>`
    - `<VideoGallery>`
      - `<Trending>`
      - `<Covid-19>`
      - `<RandomVideos>`

## Getting a Youtube Data API key

1. Head over to the [Google developers console](https://console.developers.google.com)
2. Create a new project by clicking on `Select project` drop down right next to the logo. Click the `New Project` button an give it a speaking name.
3. Select your project by choosing it in the `Select Dropdown` directly next to the logo in the header.
4. Click the `Enable APIs and Services` button
5. Search for `youtube data`
6. Click on the `Youtube Data API vX`
7. Click the blue enable button
8. In the dashboard, click `Credentials` on the left sidebar
9. Click the `Create Credential` button
10. Which API are you using: `Youtube Data API vX`
11. Where will you be calling the API from: `Web browser`
12. What data are you accessing: `Public data`
13. Click the `What credentials do I need button`
14. Copy the API key
