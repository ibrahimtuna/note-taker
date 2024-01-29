## Installation Steps
- First, be sure you have done with React Native Enviorement Setup [Enviorement Setup for React Native](https://reactnative.dev/docs/environment-setup)
- Clone repo and run `npm install` or `yarn` after than run `cd ios && pod install`

## IOS Run
- Open `NoteTakingApp.xcworkspace` file with xCode from `/ios` folder.
- Wait for indexing and hit run button from top bar.

Or simply you may run that command `npx react-native run-ios`. Also, you may specify simulator with adding `--simulator="iPhone 13"` text end of line.

## Android Run
- Open Android Studio and click "Open" from "File" menu, then select `/android` folder into app files.
- Wait for indexing and hit run button from top bar.

Or simply you may run that command `npx react-native run-android`.


## Running on real device
- You may check this link for running application into real device. [Running On Device](https://reactnative.dev/docs/running-on-device)

## Notes
- I used RN-0.71.X at project because the microsoft documentation says its currently most stable version for MacOS. [link](https://microsoft.github.io/react-native-windows/docs/rnm-getting-started)
- Tests are not completed.

## Prerequisites

- [Node.js > 16](https://nodejs.org) and npm (Recommended: Use [nvm](https://github.com/nvm-sh/nvm))
- [Watchman](https://facebook.github.io/watchman)
- [Xcode 15](https://developer.apple.com/xcode)
- [Cocoapods 1.14.3](https://cocoapods.org)
- [JDK > 11](https://www.oracle.com/java/technologies/javase-jdk11-downloads.html)
- [Android Studio and Android SDK](https://developer.android.com/studio)

## Base dependencies

- [react-native-navigation]([https://github.com/axios/axios](https://github.com/react-navigation/react-navigation)) for navigation.
- [redux](https://redux.js.org/) for state management.
