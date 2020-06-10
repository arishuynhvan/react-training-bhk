# React Training BHK

## Setup 

### [Expo CLI vs React Native CLI](https://levelup.gitconnected.com/expo-vs-react-native-cli-a-guide-to-bootstrapping-new-react-native-apps-6f0fcafee58f)

- Basically NO Expo, especially if In-app purchases (probably read payment in general) is at the top of must-have features. Just search Expo CLI review on reddit for tons of reasons.
- Expo CLI has inadequate support in Slack channel (and using Slack for a large and growing community is unacceptable, at least they should have some prudence and use Gitter for better info archive)
  
[More detailed rants](https://www.reddit.com/r/reactnative/comments/9z5zdj/im_sorry_but_expo_sucks/)

### [React Native CLI](https://reactnative.dev/docs/environment-setup) in Ubuntu

Well, you still need Android Studio! Surprise?! And a bunch of seemingly unrelated software!

#### NodeJS

[Installed v14.x](https://github.com/nodesource/distributions/blob/master/README.md#deb)

```
# Using Ubuntu
curl -sL https://deb.nodesource.com/setup_14.x | sudo -E bash -
sudo apt-get install -y nodejs
```

#### Java Development Kit
- JDK v8 (OpenJDK)

#### Android Studio

Choose ```Show Package Details``` to make sure the right boxes are checked

- Android SDK (Android 9 (Pie))
- Android SDK Platform (28)
- Android Virtual Device
- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

**Configure ANDROID_HOME environment variable**

Add the following lines to your ```$HOME/<username>/.bashrc``` or ```$HOME/<username>/.bash_profile``` config file:

```bash
export ANDROID_HOME=<path_to_android_SDK_directory>
export PATH=${PATH}:$ANDROID_HOME/tools
export PATH=$PATH:$ANDROID_HOME/emulator
export PATH=$PATH:$ANDROID_HOME/tools/bin
export PATH=${PATH}:$ANDROID_HOME/platform-tools
export JAVA_HOME=/usr/lib/jvm/java-8-oracle
```
#### Watchman

A useful tool to debug ReactJS and Native

**Requirements:**

```bash
sudo apt-get update -y
sudo apt-get install -y <package_name>
```

* libssl-dev
* autoconf
* automake
* libtool
* python-dev

**Build configuration:**

```
        CC = gcc
        CPPFLAGS =  -D_REENTRANT -D_FILE_OFFSET_BITS=64 -D_LARGEFILE_SOURCE
        CFLAGS = -g -O2 -Wall -Wextra -Wdeclaration-after-statement -g -gdwarf-2 -fno-omit-frame-pointer
        CXX = g++
        CXXFLAGS = -g -O2 -Wall -Wextra -g -gdwarf-2 -fno-omit-frame-pointer
        LDFLAGS = 
        prefix: /usr/local
        version: 4.9.0
        state directory: /usr/local/var/run/watchman
```
[**Installation**](https://facebook.github.io/watchman/docs/install/#buildinstall)

```bash
git clone https://github.com/facebook/watchman.git -b v4.9.0 --depth 1
cd watchman
./autogen.sh
./configure
make
sudo make install
```

#### React Native Command Line Interface

Download and execute the stable version of CLI at the time the command is run

```
npx react-native <command>
```
## Create a new application

For example, if the project name is ```elearning```, type 

```bash
npx react native init elearning
```

**Note**
The project name must be alphanumeric only!

**Run React Native**

```bash
npx react-native start
```

**Instructions for emulating on iOS:**

```cd "/mnt/DATA/Official Job/ReactTrainingBHK/elearning" && npx react-native run-ios```

    - or -
    
 ```Open elearning/ios/elearning.xcodeproj in Xcode``` 
 
    - or -
 
 ```run "xed -b ios"```


    • Hit the Run button

**Instructions for emulating on Android:**
    • Have an Android emulator running (quickest way to get started), or a device connected.
    • ```cd "/mnt/DATA/Official Job/ReactTrainingBHK/elearning" && npx react-native run-android```

#### Troubleshooting

**App hangs at Loading ...**

If there are no errors shown in node terminal or console, there is a high chance that the error was caused first by watchman (often shown as error and terminated during the first problematic run)

To fix this, reinstall watchman module (```npm uninstall watchman``` then ```npm install watchman```). If this doesn't work, either debug node modules or just reinstall all node modules in the project. 

**Watchman iNotify exceeded limits**

Sometimes this will go away after android emulator starts running, but if this doesn't, run

```echo fs.inotify.max_user_watches=524288 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p```

[Source](https://github.com/guard/listen/wiki/Increasing-the-amount-of-inotify-watchers)

[Past issue](https://github.com/facebook/watchman/issues/163)

## Build apps

### Apk

Install `react-native` globally

```bash
npm install -g react-native-cli
```
Read the output path where react-native is installed. In my case, it's `usr/bin/react-native`, so I type

```bash
export PATH="usr/bin:$PATH"
```

Inside the react native project, type 1 of the following 3 commands, depending on react-native version and folder structure. I my case, I have `android/app/build/intermediates/assets`, but not `android/app/src/main/assets`, so I chose the 2nd command

```bash
#React-Native 0.59
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/src/main/assets/index.android.bundle --assets-dest ./android/app/src/main/res

#React-Native 0.49.0+
react-native bundle --dev false --platform android --entry-file index.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug

#React-Native 0-0.49.0
react-native bundle --dev false --platform android --entry-file index.android.js --bundle-output ./android/app/build/intermediates/assets/debug/index.android.bundle --assets-dest ./android/app/build/intermediates/res/merged/debug
```

To build the `apk` file,

```bash
$ cd android
#Create debug build:
$ ./gradlew assembleDebug
#Create release build:
$ ./gradlew assembleRelease #Generated `apk` will be located at `android/app/build/outputs/apk
```



## Further readings

[React Native limitations](https://www.simform.com/react-native-limitations-app-development/)

[Build and Install unsigned apk on device without the development server?](https://stackoverflow.com/questions/35283959/build-and-install-unsigned-apk-on-device-without-the-development-server)

[Signed APK](https://reactnative.dev/docs/signed-apk-android)