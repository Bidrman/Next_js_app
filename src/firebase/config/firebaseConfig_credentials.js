// nastaveni pro uspesne napojeni moji apppky na firebase

//  firebase CONFIG nesmiii bzt commitnutz, proto se musi p5idat do git ignoru !!!!!!!!!

<!-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries -->
<script src="https://www.gstatic.com/firebasejs/8.2.1/firebase-analytics.js"></script>

<script>
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDEmV-IKf7WR_dd1IIixg0JiDYXfLKtG1U",
    authDomain: "crypto-monitor-72abc.firebaseapp.com",
    projectId: "crypto-monitor-72abc",
    storageBucket: "crypto-monitor-72abc.appspot.com",
    messagingSenderId: "728170856200",
    appId: "1:728170856200:web:8d60c603245f3a263df6bd",
    measurementId: "G-ZCM7RY4Q7F"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>