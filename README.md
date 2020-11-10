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
  - install **Material UI** via your terminal/Gitbash `<npx i --save @material-ui/core>`. Check documentations on https://www.material-ui.com
  - Install **axios** via `<npx i --save axios>`
- Create Scaffold of Main and Children Components.
  - `<Header>`
    - `<LogoMenu>`
    - `<Search>`
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
