# Youtube-clone

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
  - install **Material UI** via your terminal/Gitbash <npx i --save @material-ui/core>. Check documentations on https://www.material-ui.com
  - Install **axios** via <npx i --save axios>
- Create Scafold of Main Components.
  - `<Header>`
  - `<SideBar>`
  - `<VideoGallery>`
