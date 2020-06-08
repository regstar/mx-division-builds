import VueRouter from 'vue-router'
import InventoryGUI from './components/InventoryGUI';
import AwsTest from './components/AwsTest';

// const inventoryGUI = {
//     template: 
// }

const router = new VueRouter({
    routes: [
        {
            path: '/',
            name: 'home',
            component: InventoryGUI
        },
        {
            path: '/test/awsTest',
            name: 'awsTest',
            component: AwsTest,
            props: true
        },
        {
            path: '/build/:encodedBuild',
            name: 'homeId',
            component: InventoryGUI,
            props: true
        }
    ]
});
export default router