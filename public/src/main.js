import Navigo from 'navigo';
import HomePage from './page/Homepage';
const router = new Navigo("/",{linksSelector: "a"});

const print = async(component, id) => {
  document.querySelector("#app").innerHTML = await component.render();
  if(component.afterRender) await component.afterRender(id)
}
router.on ({
  "/": print(HomePage)
})