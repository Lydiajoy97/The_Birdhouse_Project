## Project Name : The Birdhouse Project 

![Responsive](https://res.cloudinary.com/dddbuwhyg/image/upload/v1730372682/Screenshot_2024-10-31_105720_z1zdjq.png)

* [**Live Depolyed site**](https://the-birdhouse-project-b719ced46037.herokuapp.com/)

* [**Project Brief**](#Project-Brief)
The Birdhouse is a platform were users can upload pictures of birds they have spotted. They can post where they have found them which helps other users to spot birds. 
This is to create an online community where people feel safe. This forum will also help boost the users mental health and welbeing by encouraging eachother to go out and spot birds and share the joy with other users.

# **TABLE OF Contents**

* [**User Stories**](#User-Stories)
* [**React Components**](#React-Components)
* [**Libraries contexts and hooks**](#Libraries-contexts-and-hooks)
* [**Wireframes** ](#Frontend-Wireframes)
* [**Structure plan**](#Structure-Plan)
* [ **Testing and Results**](#Testing-and-Results)
* [ **Deployment**](#Deployment)
* [**Credits** ](#Credits)


# User-Stories:
1) As a user I want to be able to create an account and sign in to the platform so that I can add content. 
2) As a user I want to post pictures of the birds that I have spotted. 
3) As a user I want to comment on other users bird pictures. 
4) As a user I want to veiw other users profile and learn more about their interests. 
5) As a user I want to filter posts so that I can see different types of birds. 
6) As a user I want good user experience navagating the website.

# React-Components

- As a user I want to create an account with a profile so that I can display details about myself.

UI Components: AccountCreation.js, Signin.js and CreateProfile.js 

- As a user I want to view other profiles and edit my own.

UI Components: AllProfiles.js, ProfilePosts.js and EditProfileForm.js 

- As a user I want to add posts about the birds that I have spotted and edit them.

UI Components: PostCreateForm.js, BirdDropdown.js, Assests,js and BirdPostEditForm.js.

- As a user I want to veiw other peoples posts and scroll through them so that I can comment on them.

UI Components: BirdPosts.js, BirdPostPage.js, ManyBirdPostPage.js, CommentCreate.js, infiniteScrollComponent.

- As a user I want to veiw other peoples comments and edit and delete my own. 

UI components: Comments.js, EditComments.js, PostDropdown.js

# Libraries-contexts-and-hooks:

- react-infinite-scroll-component:
So that the app can be more user friendly and slick. 

- react-bootstrap:
For the form pages such as creating a bird post and comments. This helps get the structure of the code in place before I customised it. 

- contexts:
CurrentUserContect exposes the user state of the entire app.

- custom hooks:
useCLickOutsideToggle to enable toggle on the navagation menu.
useRedirect to redirect logged in or logged out users.

-chatGBT
To write some of the content on the birdpost to test my project.

# Structure-Plan:
- API structure 
![Models](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722517344/Screenshot_2024-08-01_140209_l775wf.png)

- Frontend Flowchart 
![flowchart](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722516945/Screenshot_2024-08-01_135528_xeubpd.png)

# Design-and-Color-Scheme
![ColorScheme](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722516533/Screenshot_2024-06-22_081217_xuukdr.png)

# Frontend Wireframes
![Documentation1](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722500841/documentation1.png)
![Documentation2](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722500852/documentation2.png)
![Documentation3](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722500863/documentation3.png)

# Future developments 

- Add admin approval to profile posts so that the admin account can monitor what content has been posted. I would also like to fix the bug so that when a user edits thier profile a new one is not created. 

- I also would like to add a redirect page once a user has edited their post. At the moment it gets sent for approval, and that is not communicated with the user. To do this I will redirect the user to Message.js after submission.

- One future development is to have a meet up page where users can arrange a spot to meet up and book a place. There will be an interactive map feature and bookings form. This is the build on the community they have found through the bird spotting page. 

- Another feature development is to add a react-bootstrap carosel on the home page. This will add to user experience and the overall look of the website. 

- I would also like to add a likes feature so that the users can like eachothers posts. 

- Another future devlopment is to add a page footer so that a user can contact The Birdhouse and find the social media pages.

# Testing-and-Results 

Much of the testing has been done during development using devtools. My Api connects to my frontend and I am able to minipulate data. I can veiw my admin console and edit and delete posts on there. 

One of the errors found after deployement is when a user creates a post is that the bird selection on the dropdown menu doesn't get sent to the database and the admin account therefore needs to select a bird choice. I attempted to fix this using a Choicefield instead of a Charfield, but this still showed an error. I also tried to link the birdpost id to the model default, but after doing this is failed to post anything. This error remains unfixed, and I hope to fix it in the future. 

Another error is that a profile is made for the user once their account has been created, this then causes problems when editing that profile. When the user tries to edit the profile, a new one is created and they need to delete the onld one. This relies on the user to spot this & creates a poor user experience. I will add this to a future development to make sure a new profile is not created once a user makes and edit on the profile. 

When a user edits a post, a new post is sent to the database for approval. Although this is fine, it just creates a poor user experience as the user doesn't know that their post has been saved and sent. As a future development I would like to add another 'edit pending' page to communicate well with the user. 

You can veiw my testing results here:

![TestingTable1P5](https://res.cloudinary.com/dddbuwhyg/image/upload/v1730374913/Testing_Table_1_P5_gtmyk6.png)
![TestingTable2P5](https://res.cloudinary.com/dddbuwhyg/image/upload/v1730374914/Testing_Table_2_P5_ki1ghj.png)

https://docs.google.com/document/d/15OvMF0vv1gsvvdaXJHcA-6Pp0M1fpKidckkbuRtrGvM/edit

One error that I ran into was that my drowpdown menu on the createbirdpost page was that I hadn't set setters and used a function instead. To make this work I changed const [bird] to [setBird].

There was also a CSS error on the image for creating a new post because I hadn't set the css width for images. This has now been changed. 

Another problem during deployment was that the user was not getting redirected after deletion or creation of a post, but this has now been solved by adding the redirect. 

Also, the comments were displaying on all pages no matter which post they had wrote on. This is because I had one instance written as 'birdpost' rather than 'post'. This has now been fixed and you can only see the comments for specific pages.

Eslint Validator had no errors:

![Eslint](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722522876/Screenshot_2024-08-01_153410_iju5bs.png)

CSS Validator:

![CSS](https://res.cloudinary.com/dddbuwhyg/image/upload/v1722523353/Screenshot_2024-08-01_154207_g3ccmi.png)

# Deployment

My app is a joint workspace. To deploy I first had to deploy my back-end api to Heroku. To deploy to heroku I needed to set up a new app on Heroku and connect to my github repo. I also needed to set up a new instance on ElephantSQL and set the config vars in both the heroku folder and env.py. I also needed to link my cloudinary account so that my media files can be stored, and then that url was also connected to my heroku account and env.py files. Once this was done I could push any local changes made to my api and see the app running.

To create the react app I set up a frontend folder within my project. In the frontend folder, (navigated by typing cd frontend into the terminal) I installed react using the npx create-react-app command. 
After all the packages were installed I ran the npm start command, and opened my react app in the terminal widow alongside my api. I then contined to create my frontend files.

To depoly my react project I had to combine my front and back end files and set up a base url. first I installed whitenoise and added it to my middleware settings. I then added 'staticfiles and 'build' to my BASE_DIR path and created a static files folder at the root. I also removed the root url path and added an index template path. After this I created api routes for my urls by adding url/ before my url paths excluding admin and the index route. Lastly I copied over my static files using the comand in the supporting documentation. My base url was then added in the axios defaults file as 'api/'. I then added the build script (serve -s build) to the Profile so that my app builds in Heroku. The workspace was then combined and could be pushed and deployed in heroku. 

This lastest version is a resumbit, so to continue devloping the app I removed the base url and api url paths. Once it was ready to be deployed again I deleted my static file folder and opened a new one. I then copied over my static files into that folder and added my base url and api/ to the begining of the url paths. Then I deployed on heroku. I noticed that my deployed app was still an old version, so I disabled the cache, and after doing that, my app has been deployed.

# Credits 

Code Insitutes DRF and Moments Walkthroughs

https://stackoverflow.com/questions/31976722/start-script-missing-error-when-running-npm-start

https://www.w3schools.com/css/css3_transitions.asp

https://builtin.com/software-engineering-perspectives/react-api

https://stackoverflow.com/questions/55308778/typeerror-undefined-is-not-iterable-cannot-read-property-symbolsymbol-iterato

https://legacy.reactjs.org/docs/forms.html

https://cloudinary.com/guides/web-performance/5-ways-to-import-images-in-react-bonus-automation-method

https://www.youtube.com/watch?v=TmsD8QExZ84&t=974s

https://pypi.org/project/django-filter/

https://flaviocopes.com/axios-send-authorization-header/

https://stackoverflow.com/questions/70945123/how-can-i-add-a-image-on-a-post-in-django#:~:text=ImageField(upload_to%3D%22%2Fmedia,code%20should%20be%20like%20this.


For the bird images:

https://pixabay.com/illustrations/upload-internet-web-publish-media-2398772/

https://pixabay.com/photos/tit-great-tit-bird-feathers-8620213/

https://pixabay.com/photos/passerine-bird-wildlife-bird-fauna-7377802/

https://pixabay.com/photos/bird-robin-spring-flowers-perched-2295436/

https://pixabay.com/photos/bird-seagull-flying-wings-gull-3158784/

https://pixabay.com/photos/bird-bath-splashing-bird-in-bath-5290285/ 

https://pixabay.com/photos/blue-tit-tit-bird-animal-feathers-7965696/ 

https://pixabay.com/photos/bird-animal-nature-wildlife-plant-7310393/ 


For bird dropdown component:

https://dev.to/antdp425/populate-dropdown-options-in-react-1nk0

https://stackoverflow.com/questions/31130706/dropdown-in-django-model

https://docs.djangoproject.com/en/5.0/ref/models/fields/#:~:text=choices%20is%20meant%20for%20static,t%20change%20much%2C%20if%20ever.&text=A%20new%20migration%20is%20created,for%20the%20field's%20current%20value.

https://react-bootstrap.netlify.app/docs/forms/select/

approval model:
https://www.youtube.com/watch?v=pwkAMX1zgOI

https://stackoverflow.com/questions/40477245/is-it-possible-to-use-if-else-statement-in-react-render-function 
