import { ProductItem } from "../global"
import tshirt1 from './../assets/t-shirt1.jpg'
import tshirt2 from './../assets/t-shirt2.jpg'
import tshirt3 from './../assets/t-shirt3.jpg'
import tshirt4 from './../assets/t-shirt4.jpg'
import tshirt5 from './../assets/t-shirt5.jpg'
import tshirt6 from './../assets/t-shirt6.jpg'
import tshirt7 from './../assets/t-shirt7.jpg'
import tshirt8 from './../assets/t-shirt8.jpg'
import tshirt9 from './../assets/t-shirt9.jpg'


const INITIAL_STATE: ProductItem[] = [ 
  
  {
    id: "1",
    title: "Blue t-shirt",
    description: "No fancy sizing charts here, one t-shirt size to rule them all",
    imageUrl: tshirt1,
    price: 399
  },
  {
    id: "2",
    title: "Yellow t-shirt",
    description: "This unique t-shirt is guaranteed to fit nobody, not even new born babies",
    imageUrl: tshirt2,
    price: 499
  },
  {
    id: "3",
    title: "Red t-shirt",
    description: "The only product on our site that might actually be worth buying",
    imageUrl: tshirt3,
    price: 799
  },
  {
    id: "4",
    title: "Green t-shirt",
    description: "No fancy sizing charts here, one t-shirt size to rule them all",
    imageUrl: tshirt4,
    price: 399
  },
  {
    id: "5",
    title: "Black t-shirt",
    description: "This unique t-shirt is guaranteed to fit nobody, not even new born babies",
    imageUrl: tshirt5,
    price: 499
  },
  {
    id: "6",
    title: "Pink t-shirt",
    description: "The only product on our site that might actually be worth buying",
    imageUrl: tshirt6,
    price: 799
  },
  {
    id: "7",
    title: "Purple t-shirt",
    description: "No fancy sizing charts here, one t-shirt size to rule them all",
    imageUrl: tshirt7,
    price: 399
  },
  {
    id: "8",
    title: "White t-shirt",
    description: "This unique t-shirt is guaranteed to fit nobody, not even new born babies",
    imageUrl: tshirt8,
    price: 499
  },
  {
    id: "9",
    title: "Violet t-shirt",
    description: "The only product on our site that might actually be worth buying",
    imageUrl: tshirt9,
    price: 799
  }
]

export { INITIAL_STATE }