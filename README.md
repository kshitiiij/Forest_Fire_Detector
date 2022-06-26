<h1 align="center">
  Early Forest Fire Detector
</h1>

<h3 align="center">
  "Stop the forest fire before it's too late..."
</h3>
<br/>
<br/>

<h3>
This repository is the overview part.
</h3>
<br/>

[Swith To Frontend Repo](https://github.com/ishanExtreme/Forest_Fire_Detector/tree/frontend)
<br/>

[Swith To Backend Repo](https://github.com/ishanExtreme/Forest_Fire_Detector/tree/backend)
<br/>
<br/>

### Purpose
> Our project is an **Early Forest Fire Detection** and alarming tool, which using the CNN architecture 
detects the smoke in the image provided to it through satellites(a sun synchronous satellite) and will 
alert the authorities concerned immediately allowing them to take action before the fire becomes 
uncontrollable.


### Methodology

>**Model**
>- We have used [USTC_SmokeRS](https://complex.ustc.edu.cn/sjwwataset/list.htm) consisting of 6225 RGB images from six classes including Cloud, Dust, Haze, Land, Seaside, and Smoke. The spatial resolution of each image is 1 km. 
>- We have used AlexNet architecture with colered image and got an accuracy of about 91% on validation set.

>**Backend API**
>- We used the trained model in a python based framework(Django) and made an API that will accept the image in a POST request and will give response as the predicted class. 
>- A python based framework since we trained model on TensorFlow python library hence it was easier and faster to use same language for setting up API.

>**Frontend**
>- We used react and tailwind UI to quickly build a basic frontend for our project.


###  Features
> 1. Accuracy of Validation Data results: **loss: 0.3719 Accuracy: 0.9107**, Train Data results: **loss: 0.3506 Accuracy: 0.8943**.
> 2. Prediction endpoint.
> 3. Detects using Smoke which is the first sign of forest fire.
> 4. Alert the concerned authorities after detection to take proper action.

###  Tech Stack Used
> 1. Front End: front end is made using **React(TypeScript)**  and **Tailwind** for designing components. 
> 2. Back End: back end is REST based using **Django**.
> 3. Model: Architecture used is *AlexNet*.


###  Running Locally
> #### Setting up backend
>- Step-1: Download the model from [here](https://drive.google.com/file/d/1OeKLmlx25cM0sTBrU1wxGDYcV4UINZHN/view?usp=sharing).
>- Step-2: Extract model to "model" folder inside "forest_fire" directory(where setting folder is located)
>- Step-3: Create a new enviroment and run `pip install -r requiremets.txt`.
>- Step-4: Run `python manage.py runserver`.  

> #### Setting up frontend
>- Step-1: Run `npm i`.
>- Step-2 Run `npm start`.
    npm i

### Contributing
> Contributions, issues and features requests are welcome!

<h2 align='center'>
  Do star ⭐ the repo if you like the project
</h2>
   


