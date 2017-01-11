import Home from './components/Home.vue'
import Porfolio from './components/portfolio/Portfolio.vue'
import Stocks from './components//stocks/Stocks.vue'



export const routes = [

  {path: '/', component: Home},
  {path: '/portfolio', component: Porfolio},
  {path: '/stocks', component: Stocks},
  
]
