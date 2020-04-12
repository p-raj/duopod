This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `yarn build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
=======
# duopod
Spreading Ideas Across Language Chasm

## Problem Statement

- Generally, the podcasts are available only in a single language, like the books used to be ideas worth spreading are, often, constrained by the language.
- Podcast by a non-native speaker is often skipped over, non-discriminatory, by both the native speakers and other non-native speakers

## Possible Solution

- Podcast app, for the listeners, that supports podcast translation to their preferred language
- A podcast studio for the content creators where they can review the translated content

## Challenges

- Costs associated with running the application is too restrictive
  - Possible Solution: TinyML running on user’s mobile for online inference
- Now that people are not commuting to work, the podcasts are competing for the user’s attention against Netflix, eSports, etc.
- The moat is missing, the idea can be picked and built easily by any of the existing podcast apps
  - Possible solution: could build an SDK and integrate with the existing podcast apps
- The legality around translation and distribution

## Future Directions

- Personalized accent, speed, speech synthesis
  - Premium voiceovers (ref: Morgan Freeman over Google Maps)
  - The automated speech can be too monotonous
  - Noise reduction and quality improvement for podcast creators
- Podcasts can be taken in the next stage of evolution, like the books have; Books now have translated content, the book summaries, the critical reviews etc.
  - Goodreads for Podcast
  - Premium, members-only, forums
    - A listener could ask their own questions to the creators
    - A creator would be able to check the most highlighted and discussed content
  - A listener can highlight (bookmark) and save their content
- Categorize the podcast’s content by 
  - Q&A - user can check out the list of questions discussed and jump over to any specific question
    - Questions or sections of the podcasts as “Stories” (Instagram, Snapchat)
  - Build a knowledge graph of ideas - personal and global
  - Build a personal knowledge base over the subscribed-only content
    - Integration with mind-maps
    - Integration with Anki Flash-Cards

## Extend the platform to video makers, who want to modulate speech

- Further, help video makers develop their own “deepfakes” for transmitting content in multiple languages
- Blogs to podcasts (sort of like audible for blogs)
  - Tweet threads to podcasts
- Offer SDK to apps such as meditation apps, or yoga apps, where the user can personalize the voice (pitch, tone, accent, speed)
- Real-time translation and speech synthesis, integration with Zoom and other communication apps

## How the User App would work?

<img width="1435" alt="Screen Shot 2020-04-10 at 6 36 37 PM" src="https://user-images.githubusercontent.com/40563855/79057792-eb178000-7c82-11ea-97bf-876a1467ddc6.png">

## How the Podcast Stuido App would work?

<img width="1035" alt="Screen Shot 2020-04-10 at 7 42 43 PM" src="https://user-images.githubusercontent.com/40563855/79057791-da670a00-7c82-11ea-9bad-7bdb7d4c347f.png">

# Mobile Client - https://github.com/veris-pr/duopod-client
# Backend  - https://github.com/veris-pr/duopod-server
# ML Pipeline - https://github.com/veris-pr/duopod-ml

