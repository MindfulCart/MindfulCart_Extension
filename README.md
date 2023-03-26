# MinfulCart_Chrome_Extension <img src="https://github.com/MindfulCart/MindfulCart_Extension/blob/main/assets/mindfulcart_small.png" alt="c" width="40" height="40"/>

# Table of contents
1. [Project Description](#Description)
2. [Inspiration](#Inspiration)
3. [Challenges](#Challenges)
4. [Tech Stack](#Tech)
5. [Team](#team)
6. [Data](#data)
7. [Video](#Video)
8. [How to Install and Run](#install)
9. [Badges](#bandges)

## Poject Description <a name="Description"></a>
Our extension, similar to the Honey Google Chrome extension, is accessible on e-commerce sites, with our current focus being Amazon for the purpose of the hackathon. The MindfulCart extension alerts users in a popup accessible in a single click if any harmful ingredients are present in the products they are browsing. This provides users with valuable information to make informed decisions about the products they purchase and encourages them to choose healthier and more environmentally friendly options.



## Inspriation <a name="Inspiration"></a>

Our motivation for this project stemmed from our struggles to find safe and healthy food and treats for our pets, given the relatively lax regulations for pet food and the prevalence of filler ingredients. 

While our initial inspiration was to address this issue, we ultimately decided to prioritize the development of an ingredient and health-conscious extension/application for humans. Our goal is to promote sustainable and environmentally-friendly purchasing habits, as well as healthy choices for people. In the future, we plan to expand our project to include information and features that cater to pet owners, providing them with reliable information on pet food ingredients and nutritional values! 

## Challenges <a name="Challenges"></a>

Our project comprises both a website and a Google Chrome extension, which were built using Plasmo, React, TypeScript, HTML, CSS, and SASS. While developing our project, we encountered challenges in getting our extension to interact with e-commerce sites like Amazon, as we were working with the Google Chrome API for the first time. As a result, we pivoted from building the extension from scratch to using Plasmo. This helped us overcome the challenges and enabled us to focus on delivering a quality product that empowers users to make informed and sustainable purchasing decisions.

## Tech Stack <a name="Tech"></a>
- <img src="https://img.shields.io/badge/Google_chrome-4285F4?style=for-the-badge&logo=Google-chrome&logoColor=white" />
- <img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
- <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" />
- <img src="https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white" />
- <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" />
- <img src="https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white" />
- <img src="https://img.shields.io/badge/Vite-B73BFE?style=for-the-badge&logo=vite&logoColor=FFD62E" />
- <img src="https://img.shields.io/badge/Plasmo-Chrome%20API%20Framework-blue" />


## Team <a name="team"></a>
<a href="https://github.com/TibaAlanssari">
  <img src="https://avatars.githubusercontent.com/u/55297857?v=4" alt="HTML tutorial" style="width:42px;height:42px;">
</a> 
<a href="https://github.com/Commando-Brando">
  <img src="https://avatars.githubusercontent.com/u/60548867?v=4" alt="HTML tutorial" style="width:42px;height:42px;">
</a> 
<a href="https://github.com/ecalde">
  <img src="https://avatars.githubusercontent.com/u/80291680?v=4" alt="HTML tutorial" style="width:42px;height:42px;">
</a> 

## Data <a name="data"></a>
We sourced our data from various government agencies around the world such as the United States FDA & European FSA.
**General data structure for substance data:**

```json
{
                "id": 1,
                "name": "Aflatoxins",
                "description": "are a group of highly toxic and carcinogenic substances produced by certain species of Aspergillus fungi that commonly contaminate food crops such as peanuts, corn, and other grains. They are potent liver carcinogens and can cause DNA damage, oxidative stress, and immune suppression.",
                "category": "Carcinogen",
                "url": "https://ntp.niehs.nih.gov/ntp/roc/content/profiles/aflatoxins.pdf"
            }

```


## Video <a name="Video"></a>

[Youtube](https://youtu.be/QUo8-nDkUxY)

## How to Install and Run <a name="install"></a>
After downloading source code and downloading `pnpm` if not already installed run the following commands:

`pnpm install`
`pnpm run dev`

Go to chrome extensions and toggle the developer mode radio.
click `load unpacked` and select the `build/chrome-mv3-dev` folder in the project directory.

## Badges <a name="bandges"></a>
![GitHub all releases](https://img.shields.io/github/downloads/ecalde/Chrome_Extension/total?logo=GitHub&style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/ecalde/Chrome_Extension?style=flat-square)
![GitHub commit activity](https://img.shields.io/github/commit-activity/w/ecalde/Chrome_Extension?style=flat-square)
![GitHub contributors](https://img.shields.io/github/contributors/ecalde/Chrome_Extension?style=flat-square)
![GitHub forks](https://img.shields.io/github/forks/ecalde/Chrome_Extension?style=flat-square)
