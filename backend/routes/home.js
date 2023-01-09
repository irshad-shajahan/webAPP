const express = require('express');
const router = express.Router()


router.get('/', (req, res) => {
    const post = [
        {
          img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1662703015/Croma%20Assets/Communication/Mobiles/Images/261965_a7x8zh.png/mxw_1440,f_autog",
          title: "iPhone 14 Pro",
          description:
          "Explore the magical future of smartphones when you buy the Apple iPhone 14 Pro.",
        },
        {
          img: "https://d2d22nphq0yz8t.cloudfront.net/88e6cc4b-eaa1-4053-af65-563d88ba8b26/https://media.croma.com/image/upload/v1664009036/Croma%20Assets/Communication/Mobiles/Images/243522_0_kjtmol.png/mxw_1440,f_auto",
          title: "iPhone 13 Pro",
          description:
            "Explore the magical future of smartphones when you buy the Apple iPhone 13 Pro.",
        },
        {
          img: "https://elcytec.com/wp-content/uploads/2022/03/iphone-12pro-max1-5.jpg",
          title: "iPhone 12 Pro",
          description:
            "Explore the magical future of smartphones when you buy the Apple iPhone 12 Pro.",
        },
      ];
    console.log('reached');
    
      res.status(200).json(post)
})




module.exports= router;