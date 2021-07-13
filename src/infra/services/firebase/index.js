import Firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDF_fmdks3oIN311U1eKclr9oRqRD3deR8",
  databaseURL: "https://doctormobile-4d8cf-default-rtdb.firebaseio.com/",
  projectId: "doctormobile-4d8cf",
  appId: "1:1056137639783:android:24242f5c889802332f21c2",
};

export default Firebase.initializeApp(firebaseConfig, "DoctorMobile");