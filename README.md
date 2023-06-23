
<a name="readme-top"></a>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->

# Sociopedia
This is a social media web application. It allows users to sign up, log in, post images with captions, make friends with other users, and like other users' posts. 

### Features
* Login and signup
* Post images and add captions
* Make friends
* Like other users' posts
* See a feed of all posts from your friends
* See a list of all your friends


### Built With

* ![React](https://img.shields.io/badge/react-%23404d59?style=for-the-badge&logo=react&logoColor=%2361DAFB)

* ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
* ![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
* ![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)
* ![Redux](https://img.shields.io/badge/redux-%23404d59?style=for-the-badge&logo=redux&logoColor=%2361DAFB)

* JWT (Json Web Token)

<!-- GETTING STARTED -->
## Getting Started

This is an example of how you setting up project locally.
To get a local copy up and running follow these simple steps.

### Prerequisites


* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. Get a MongoDB Atlas Application connection URL at [https://www.mongodb.com/home](https://www.mongodb.com/home) by creating the database.
2. Clone the repo
   ```sh
   git clone https://github.com/Dharmik3/sociopedia.git
   ```
3. Install NPM packages
   ```sh
   cd client
   npm install

   cd server
   npm install
   ```
4. Create `.env` file and put MongoDB url in `.env in server directory`
   ```js
    MONGO_URL = ENTER YOUR MONGO URL (without inverted commas);
   JWT_SECRET = ENTER YOUR SECRET 
   ```
5. Run  following command in terminal inside client directory
   ```sh
   npm start
   ```
6. Run  following command in terminal inside server directory
   ```sh
   npm run server
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Now you can test your url on your browser url
 ```js
   http://localhost:3000/
   ```
Server is running on 5001 PORT

_For more examples, please refer to the [live link](https://dharmik3.github.io/sociopedia/)_



<img width="1200" alt="productsapi1" src="https://github.com/Dharmik3/sociopedia/blob/main/img1.png">

<img width="1200" alt="productsapi2" src="https://github.com/Dharmik3/sociopedia/blob/main/img2.png">
<img width="1200" alt="productsapi2" src="https://github.com/Dharmik3/sociopedia/blob/main/img3.png">
<div align="center">
<img width="400" alt="productsapi2" src="https://github.com/Dharmik3/sociopedia/blob/main/img4.png" >
</div>

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTRIBUTING -->
## Contributing

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.


<!-- CONTACT -->
## Contact

Dharmik Patel - [@Dharmik](https://twitter.com/dharmikS_patel) - dharmikpatel.pepalla@gmail.com


<p align="right">(<a href="#readme-top">back to top</a>)</p>


[Nodejs.com]: https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white
[Nodejs-url]: https://nodejs.org 
[express.com]: https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white
[express-url]: https://expressjs.com/ 
[mongodb.com]: https://img.shields.io/badge/MongoDB-4EA94B?style=for-the-badge&logo=mongodb&logoColor=white
[mongodb-url]: https://mongodb.com/ 
