import React from 'react';
import { useState ,useEffect,useRef} from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';

import Header from './Components/Header'; // Your Header component
import Home from './Components/Home'; // Your Home component
import Products from './Components/Products'; // Your About component
import Cart from './Components/Cart'; // Your Contact component
import Footer from './Components/Footer'
import Notification from './Components/Notification';
import ItemInfo from './Components/ItemInfo'
import About from './Components/About'
import SignUp from './Components/LoginPage'

const tousersList=[
  // Trousers & Chinos
  {
    "id": "TROUSER001",
     "category":"trouser",
    "title": "Wrogn Slim Fit Chinos",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/53/4e/06/534e0652ef42b9669fc33b13d1c29d96.jpg",
    "ratings": 4.5,
    "brand": "Wrogn",
    "price": 899,
    "type": "Chinos"
  },
  {
    "id": "TROUSER002",
	"category":"trouser",
    "title": "H&M Casual Chinos",
    "gender": "female",
    "image_url": " https://i.pinimg.com/474x/f5/2e/b0/f52eb093c6898ed474f83722fffacf24.jpg",
    "ratings": 4.6,
    "brand": "H&M",
    "price": 799,
    "type": "Chinos"
  },
  {
    "id": "TROUSER003",
"category":"trouser",
    "title": "Allen Solly Formal Trousers",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/6d/3e/9f/6d3e9f2f17a03d803cfa311f64b2540a.jpg ",
    "ratings": 4.4,
    "brand": "Allen Solly",
    "price": 1200,
    "type": "Formal Pant"
  },
  {
    "id": "TROUSER004",
"category":"trouser",
    "title": "Wrogn Blue Jeans",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/49/ca/25/49ca2574d0aeffdd674e424b89d6074f.jpg ",
    "ratings": 4.7,
    "brand": "Wrogn",
    "price": 1299,
    "type": "Jeans"
  },
  {
    "id": "TROUSER005",
"category":"trouser",
    "title": "Wrogn Jogger Pants",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/05/72/f2/0572f205a4075c4eeb841d5a48e1e14a.jpg ",
    "ratings": 4.6,
    "brand": "Wrogn",
    "price": 699,
    "type": "Jogger"
  },
  {
    "id": "TROUSER006",
"category":"trouser",
    "title": "Allen Solley Formal Trousers",
    "gender": "female",
    "image_url": " https://i.pinimg.com/474x/89/60/1c/89601c2dceee51d953168094c6f0fa88.jpg",
    "ratings": 4.8,
    "brand": "Allen Solley",
    "price": 1500,
    "type": "Formal Pant"
  },
  {
    "id": "TROUSER007",
"category":"trouser",
    "title": "Us polo Chinos",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/59/a7/5e/59a75eb20f974943ce2a5128912ebaef.jpg ",
    "ratings": 4.5,
    "brand": "Us polo",
    "price": 1499,
    "type": "Chinos"
  },
  {
    "id": "TROUSER008",
"category":"trouser",
    "title": "Wrogn Casual Chinos",
    "gender": "female",
    "image_url": " https://i.pinimg.com/474x/d1/d8/7e/d1d87e901ff78e997cf71f1bf26068e7.jpg",
    "ratings": 4.6,
    "brand": "Wrogn",
    "price": 899,
    "type": "Chinos"
  },
  {
    "id": "TROUSER009",
"category":"trouser",
    "title": "H&M Slim Fit Jeans",
    "gender": "male",
    "image_url": " https://i.pinimg.com/474x/5d/37/f4/5d37f498f9e1b838d3567e21143c0b59.jpg",
    "ratings": 4.4,
    "brand": "H&M",
    "price": 999,
    "type": "Jeans"
  },
  {
    "id": "TROUSER010",
"category":"trouser",
    "title": "H&M Track Pants",
    "gender": "female",
    "image_url": " https://i.pinimg.com/474x/f8/c1/33/f8c1333d821159a8d957af371a0a81ed.jpg",
    "ratings": 4.7,
    "brand": "H&M",
    "price": 799,
    "type": "Jogger"
  },
  {
    "id": "TROUSER011",
"category":"trouser",
    "title": "H&M Black Jeans",
    "gender": "male",
    "image_url": " https://i.pinimg.com/474x/9f/d6/42/9fd64212db8714e7d64710cabbd2abec.jpg",
    "ratings": 4.8,
    "brand": "H&M",
    "price": 1299,
    "type": "Jeans"
  },
  {
    "id": "TROUSER012",
"category":"trouser",
    "title": "H&M Chinos",
    "gender": "female",
    "image_url": " https://i.pinimg.com/474x/53/4e/06/534e0652ef42b9669fc33b13d1c29d96.jpg",
    "ratings": 4.5,
    "brand": "H&M",
    "price": 999,
    "type": "Chinos"
  },
  {
    "id": "TROUSER013",
"category":"trouser",
    "title": "Allen Solley Casual Trousers",
    "gender": "male",
    "image_url": " https://i.pinimg.com/474x/8d/62/7e/8d627e5cf43d5382ef717dcbfa1252e8.jpg",
    "ratings": 4.4,
    "brand": "Allen Solley",
    "price": 1099,
    "type": "Formal Pant"
  },
  {
    "id": "TROUSER014",
"category":"trouser",
    "title": "Us polo Jogger Pants",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/48/a9/6d/48a96db893438392b5013ffcdf4b5941.jpg ",
    "ratings": 4.6,
    "brand": "Us polo",
    "price": 1299,
    "type": "Jogger"
  },
  {
    "id": "TROUSER015",
"category":"trouser",
    "title": "Wrogn Regular Fit Chinos",
    "gender": "male",
    "image_url": " https://i.pinimg.com/474x/8a/56/e3/8a56e38807b2be905be6337643df23c5.jpg",
    "ratings": 4.7,
    "brand": "Wrogn",
    "price": 999,
    "type": "Jogger"
  },
  {
    "id": "TROUSER016",
"category":"trouser",
    "title": "US poloRegular Fit Chinos",
    "gender": "female",
    "image_url": " https://i.pinimg.com/474x/bf/1d/3d/bf1d3dcd59e45d0357370d04573e93f4.jpg",
    "ratings": 4.6,
    "brand": "US polo",
    "price": 849,
    "type": "Jogger"
  },
  {
    "id": "TROUSER017",
"category":"trouser",
    "title": "US polo Jogging Pants",
    "gender": "male",
    "image_url": " https://i.pinimg.com/474x/ec/9f/ca/ec9fca9d632cd768b396e3fc17a5aa7d.jpg",
    "ratings": 4.4,
    "brand": "US polo",
    "price": 799,
    "type": "Jogger"
  },
  {
    "id": "TROUSER018",
"category":"trouser",
    "title": "US polo Skinny Fit Jeans",
    "gender": "female",
    "image_url":  "https://i.pinimg.com/474x/c4/66/67/c46667df1389251fdaebf3c7aa0ab96d.jpg",
    "ratings": 4.7,
    "brand": "US polo",
    "price": 1299,
    "type": "Formal Pant"
  },
  {
    "id": "TROUSER019",
"category":"trouser",
    "title": "H&M Formal Trousers",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/c0/a6/f1/c0a6f1a4ae0267650c8b4637be05885a.jpg ",
    "ratings": 4.5,
    "brand": "H&M",
    "price": 1399,
    "type": "Formal Pant"
  },
  {
    "id": "TROUSER020",
"category":"trouser",
    "title": "Allen Solley Slim Fit Jeans",
    "gender": "female",
    "image_url": " https://i.pinimg.com/474x/40/80/43/408043eebf6985d664627174bee3713f.jpg",
    "ratings": 4.7,
    "brand": "Allen Solley",
    "price": 1299,
    "type": "Formal Pant"
  }
]
const shirtsList = [
  {
    "id": "SHIRT001",
    "title": "H&M Casual Shirt",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/fe/f6/d4/fef6d4f29bf7a8d0c44c1d2a7e1e3aa0.jpg",
    "ratings": 4.7,
    "price": 1200,
    "brand": "H&M",
    "category": "shirt",
    "type": "solid"
  },
  {
    "id": "SHIRT002",
    "title": "Allen Solly Slim Fit Shirt",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/f7/5d/3c/f75d3c779a7efd2fe0ba099d59fe4578.jpg",
    "ratings": 4.5,
    "price": 1500,
    "brand": "Allen Solly",
    "category": "shirt",
    "type": "checks"
  },
  {
    "id": "SHIRT003",
    "title": "H&M Casual Shirt",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/d5/11/1d/d5111dbda9fae30f12f541a17ecf6c36.jpg",
    "ratings": 4.6,
    "price": 1000,
    "brand": "H&M",
    "category": "shirt",
    "type": "printed"
  },
  {
    "id": "SHIRT004",
    "title": "H&M Formal Shirt",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/0e/4d/4d/0e4d4d58817dd3ed4efa062064955eae.jpg",
    "ratings": 4.8,
    "price": 1800,
    "brand": "H&M",
    "category": "shirt",
    "type": "solid"
  },
  {
    "id": "SHIRT005",
    "title": "US polo Slim Fit Shirt",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/dd/b6/b4/ddb6b4415c5311fc482a0962f0451537.jpg",
    "ratings": 4.5,
    "price": 1300,
    "brand": "US polo",
    "category": "shirt",
    "type": "checks"
  },
  {
    "id": "SHIRT006",
    "title": "Us polo Casual Shirt",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/77/6b/58/776b589dc9325760570a8b81041688b2.jpg",
    "ratings": 4.7,
    "price": 2000,
    "brand": "Us polo",
    "category": "shirt",
    "type": "solid"
  },
  {
    "id": "SHIRT007",
    "title": "H&M Button-Up Shirt",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/32/24/98/3224985ab35a8c42419a1d5fa42a3745.jpg",
    "ratings": 4.4,
    "price": 900,
    "brand": "H&M",
    "category": "shirt",
    "type": "printed"
  },
  {
    "id": "SHIRT008",
    "title": "Wrogn Formal Shirt",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/bf/3f/89/bf3f8911865d64c2216f104e59797d8e.jpg",
    "ratings": 4.8,
    "price": 1600,
    "brand": "Wrogn",
    "category": "shirt",
    "type": "solid"
  },
  {
    "id": "SHIRT009",
    "title": "Allen Solly Checkered Shirt",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/18/82/8f/18828f8cce9d068a529dfe95fe0975d7.jpg",
    "ratings": 4.6,
    "price": 1400,
    "brand": "Allen Solly",
    "category": "shirt",
    "type": "checks"
  },
  {
    "id": "SHIRT010",
    "title": "Wrogn Slim Fit Shirt",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/f2/07/8c/f2078c0098ca31aa684cfa42b9f0c8c7.jpg",
    "ratings": 4.7,
    "price": 1300,
    "brand": "Wrogn",
    "category": "shirt",
    "type": "solid"
  },
  {
    "id": "SHIRT011",
    "title": "Wrogn Casual Shirt",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/ed/10/d8/ed10d87cd17f4ca8fd1f55d517c5171c.jpg",
    "ratings": 4.5,
    "price": 1100,
    "brand": "Wrogn",
    "category": "shirt",
    "type": "printed"
  },
  {
    "id": "SHIRT012",
    "title": "US polo Plaid Shirt",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/fa/cd/90/facd909c9d1b0654bd8fc386675e6caa.jpg",
    "ratings": 4.6,
    "price": 1450,
    "brand": "US polo",
    "category": "shirt",
    "type": "checks"
  },
  {
    "id": "SHIRT013",
    "title": "Us polo Formal Shirt",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/d9/80/20/d98020893559057a7d341ad1f1a1caaf.jpg",
    "ratings": 4.7,
    "price": 1700,
    "brand": "Us polo",
    "category": "shirt",
    "type": "solid"
  },
  {
    "id": "SHIRT014",
    "title": "H&M Casual Shirt",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/72/3f/7d/723f7de11c3811d1ba33f4e9e2f5dcfe.jpg",
    "ratings": 4.6,
    "price": 1200,
    "brand": "H&M",
    "category": "shirt",
    "type": "printed"
  },
  {
    "id": "SHIRT015",
    "title": "Wrogn Checkered Shirt",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/f7/0e/c5/f70ec5b2109fbf6174c97a130b4d01ea.jpg",
    "ratings": 4.5,
    "price": 1500,
    "brand": "Wrogn",
    "category": "shirt",
    "type": "checks"
  },
  {
    "id": "SHIRT016",
    "title": "Allen Solly Casual Shirt",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/16/8e/b2/168eb235d88bc8140a75d6cd7a482efc.jpg",
    "ratings": 4.6,
    "price": 1350,
    "brand": "Allen Solly",
    "category": "shirt",
    "type": "solid"
  },
  {
    "id": "SHIRT017",
    "title": "Allen Solly Printed Shirt",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/79/8e/dc/798edc14faf378d769e32faf2c493be6.jpg",
    "ratings": 4.7,
    "price": 1250,
    "brand": "Allen Solly",
    "category": "shirt",
    "type": "solid"
  },
  {
    "id": "SHIRT018",
    "title": "US polo Slim Fit Shirt",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/63/6b/e5/636be52c0b13b3657ff7c00560b4f23b.jpg",
    "ratings": 4.6,
    "price": 1400,
    "brand": "US polo",
    "category": "shirt",
    "type": "checks"
  },
  {
    "id": "SHIRT019",
    "title": "H&M Casual Shirt",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/cd/d0/8f/cdd08fea4705ccf369b7db7e1f061464.jpg",
    "ratings": 4.7,
    "price": 1550,
    "brand": "H&M",
    "category": "shirt",
    "type": "checks"
  },
  {
    "id": "SHIRT020",
    "title": "H&M Checkered Shirt",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/19/f3/3d/19f33d09861b0dafa49680398061dff9.jpg",
    "ratings": 4.8,
    "price": 1900,
    "brand": "H&M",
    "category": "shirt",
    "type": "checks"
  }
];

const brandsList = [
  {
    id: 'BRAND001',
    name: 'H&M',
    image_url: 'https://i.pinimg.com/474x/68/a4/62/68a46240a73c2df047a083f6cf20e713.jpg',
  },
  {
    id: 'BRAND002',
    name: 'Allen Solly',
    image_url: 'https://i.pinimg.com/474x/af/f3/c0/aff3c0e9e0d2b8be282d6d73dce0a911.jpg',
  },
  {
    id: 'BRAND003',
    name: 'Wrogn',
    image_url: 'https://i.pinimg.com/474x/b8/36/ea/b836ea8b1ad44ccf933430413f82262b.jpg',
  },
  {
    id: 'BRAND004',
    name: 'Nike',
    image_url: 'https://i.pinimg.com/736x/4b/4d/b2/4b4db23568ac3cddcd6c4c4b15163f32.jpg',
  },
  {
    id: 'BRAND005',
    name: 'US polo',
    image_url: 'https://i.pinimg.com/474x/a8/58/66/a858661d4819a1f8f152955b76f30043.jpg',
  },
  {
    id: 'BRAND006',
    name: 'Puma',
    image_url: 'https://i.pinimg.com/474x/bc/06/cb/bc06cbbd37ca65b3a442a8287bdeec75.jpg'
  },
  {
    id: 'BRAND007',
    name: 'Adidas',
    image_url: 'https://i.pinimg.com/736x/f6/59/5b/f6595bf0ab73b730c41b9584c0e4914b.jpg'
  },
  {
    id: 'BRAND008',
    name: 'Redtape',
    image_url: 'https://i.pinimg.com/736x/35/3f/93/353f93ae64ab127ca051032f623d3f3c.jpg'
  }
]


const shoesList = [
  {
    "id": "SHOE001",
    "title": "Puma Running Shoes",
    "gender": "male",
    "image_url": "https://i.pinimg.com/736x/61/4c/ea/614ceab5b1233572297d79937f032c21.jpg",
    "ratings": 4.7,
    "price": 4000,
    "brand": "Puma",
    "category": "shoe",
    "type": "sports"
  },
  {
    "id": "SHOE002",
    "title": "Adidas Sneakers",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/5c/b0/77/5cb0778ed1f54b6a5113dd9fb4d7ca77.jpg",
    "ratings": 4.5,
    "price": 3500,
    "brand": "Adidas",
    "category": "shoe",
    "type": "sneakers"
  },
  {
    "id": "SHOE003",
    "title": "puma Casual Shoes",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/d2/ed/bb/d2edbb4dfc1c527150744e2f22580f09.jpg",
    "ratings": 4.6,
    "price": 1500,
    "brand": "puma",
    "category": "shoe",
    "type": "casuals"
  },
  {
    "id": "SHOE004",
    "title": "puma Formal Shoes",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/17/e7/ed/17e7ed1cfb2c3f7b34b528b1ff71ab73.jpg",
    "ratings": 4.8,
    "price": 2200,
    "brand": "Puma",
    "category": "shoe",
    "type": "sneakers"
  },
  {
    "id": "SHOE005",
    "title": "Redtape Sports Shoes",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/95/e6/4f/95e64f94dadc99e6732aa73af07634d1.jpg",
    "ratings": 4.5,
    "price": 3500,
    "brand": "Redtape",
    "category": "shoe",
    "type": "sports"
  },
  {
    "id": "SHOE006",
    "title": "Allen Solly Casual Shoes",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/e2/f2/b6/e2f2b6e2e8236c25aaf5f0498d056f7e.jpg",
    "ratings": 4.6,
    "price": 1800,
    "brand": "Allen Solly",
    "category": "shoe",
    "type": "formals"
  },
  {
    "id": "SHOE007",
    "title": "Redtape Sneakers",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/a2/49/b1/a249b1c4c192fe61ea84a04d809c867b.jpg",
    "ratings": 4.7,
    "price": 2900,
    "brand": "Redtape",
    "category": "shoe",
    "type": "sneakers"
  },
  {
    "id": "SHOE008",
    "title": "Puma Casual Shoes",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/57/bc/ef/57bcef428e9d29e5054640e38d78752a.jpg",
    "ratings": 4.5,
    "price": 2200,
    "brand": "Puma",
    "category": "shoe",
    "type": "casuals"
  },
  {
    "id": "SHOE009",
    "title": "Nike Running Shoes",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/22/c1/8d/22c18d4159c3bc41597fd9b09e83d6b4.jpg",
    "ratings": 4.8,
    "price": 3800,
    "brand": "Nike",
    "category": "shoe",
    "type": "sports"
  },
  {
    "id": "SHOE010",
    "title": "US polo Sports Shoes",
    "gender": "female",
    "image_url": "https://i.pinimg.com/736x/ab/a9/2e/aba92ea747c6b5d3d21783beb3675384.jpg",
    "ratings": 4.6,
    "price": 1600,
    "brand": "US polo",
    "category": "shoe",
    "type": "sports"
  },
  {
    "id": "SHOE011",
    "title": "Nike Casual Shoes",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/6e/3f/b7/6e3fb7d6d1a6f8827a4e61e5b9e284f8.jpg",
    "ratings": 4.4,
    "price": 1800,
    "brand": "Nike",
    "category": "shoe",
    "type": "casuals"
  },
  {
    "id": "SHOE012",
    "title": "Redtape Formal Shoes",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/4e/2f/a1/4e2fa18b2611ce1a8d899a5369ec2968.jpg",
    "ratings": 4.7,
    "price": 2400,
    "brand": "Redtape",
    "category": "shoe",
    "type": "formals"
  },
  {
    "id": "SHOE013",
    "title": "Allen Solly Sneakers",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/2e/4f/39/2e4f3963f102e159ba26d14d2be337d6.jpg",
    "ratings": 4.5,
    "price": 2500,
    "brand": "Allen Solly",
    "category": "shoe",
    "type": "formals"
  },
  {
    "id": "SHOE014",
    "title": "Nike Sports Shoes",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/8c/d6/0a/8cd60abbff02606ac9b6d3adf1bad611.jpg",
    "ratings": 4.8,
    "price": 3200,
    "brand": "Nike",
    "category": "shoe",
    "type": "sports"
  },
  {
    "id": "SHOE015",
    "title": "Puma Sneakers",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/a2/49/b1/a249b1c4c192fe61ea84a04d809c867b.jpg",
    "ratings": 4.6,
    "price": 2800,
    "brand": "Puma",
    "category": "shoe",
    "type": "sneakers"
  },
  {
    "id": "SHOE016",
    "title": "Adidas Casual Shoes",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/0e/e8/7e/0ee87eb81f9f266511578e25a0f7d2f1.jpg",
    "ratings": 4.5,
    "price": 2100,
    "brand": "Adidas",
    "category": "shoe",
    "type": "casuals"
  },
  {
    "id": "SHOE017",
    "title": "Nike Formal Shoes",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/15/46/5e/15465e56861dbed54db66a85f5ad292b.jpg",
    "ratings": 4.6,
    "price": 1900,
    "brand": "Nike",
    "category": "shoe",
    "type": "formals"
  },
  {
    "id": "SHOE018",
    "title": "Nike Sneakers",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/ff/82/03/ff8203d816e61ac2d884dad5c1966eef.jpg",
    "ratings": 4.4,
    "price": 2200,
    "brand": "Nike",
    "category": "shoe",
    "type": "sneakers"
  },
  {
    "id": "SHOE019",
    "title": "US polo Casual Shoes",
    "gender": "male",
    "image_url": "https://i.pinimg.com/474x/c6/69/1a/c6691a888c83ca58dcba3d715e3d5f5f.jpg",
    "ratings": 4.7,
    "price": 2700,
    "brand": "US polo",
    "category": "shoe",
    "type": "casuals"
  },
  {
    "id": "SHOE020",
    "title": "Allen Solly Formal Shoes",
    "gender": "female",
    "image_url": "https://i.pinimg.com/474x/ba/11/67/ba1167d3982a132b452c15a0987a2242.jpg",
    "ratings": 4.8,
    "price": 3000,
    "brand": "Allen Solly",
    "category": "shoe",
    "type": "formals"
  }
];

const productsList=[...shirtsList,...tousersList,...shoesList]

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [cartList, setCartList] = useState([]);
  const [notification,setNotification]=useState("")
  const prevCartLength = useRef(cartList.length);

  const showNotification = (message) => {
    setNotification(message);
    setTimeout(() => {
      setNotification(null);
    }, 2000);
  };

  useEffect(() => {
    if (cartList.length > prevCartLength.current) {
      showNotification("added");
    } else if (cartList.length < prevCartLength.current) {
      showNotification("removed");
    }

    prevCartLength.current = cartList.length; // Update previous cart length
  }, [cartList]);


  return (
    <HashRouter>
      <Header isDark={isDark} setIsDark={setIsDark} cartList={cartList}/>
      <Notification notification={notification} isDark={isDark}/>
    
      <Routes>
        <Route path="/" element={<Home brandsList={brandsList} isDark={isDark} />} />
        <Route path="/Shop" element={<Products productsList={productsList} cartList={cartList} setCartList={setCartList} isDark={isDark}/>} />
        <Route path='/product/:id' element={<ItemInfo isDark={isDark} productsList={productsList} cartList={cartList} setCartList={setCartList}/>}/>
        <Route path="/about" element={<About isDark={isDark} />} />
        <Route path="/signup" element={<SignUp isDark={isDark} />} />
        <Route path="/bag" element={<Cart cartList={cartList} isDark={isDark} setCartList={setCartList}/>} />
      </Routes>
      <Footer isDark={isDark}/>
    </HashRouter>
  );
};

export default App;
