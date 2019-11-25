# NY Times

Sample app to show a list of articles, that shows details when items on the list are tapped.

## Running the project

Assuming you have all the requirements installed, you can setup and run the project by running:

- `yarn install` to install the dependencies
- run the following steps for your platform

### iOS

- `cd ios`
- `pod install` to install pod dependencies
- `cd ..` to come back to the root folder
- `yarn start` to start the metro bundler, in a dedicated terminal

### Android

- only the first time you run the project, you need to generate a debug key with :
  - `cd android/app`
  - `keytool -genkey -v -keystore debug.keystore -storepass android -alias androiddebugkey -keypass android -keyalg RSA -keysize 2048 -validity 10000`
  - `cd ../..` to come back to the root folder
- `react-native run-android` to run the Android application (remember to start a simulator or connect an Android phone)