
import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);


import OderOrderManager from "./components/listers/OderOrderCards"
import OderOrderDetail from "./components/listers/OderOrderDetail"

import InventoryInventoryManager from "./components/listers/InventoryInventoryCards"
import InventoryInventoryDetail from "./components/listers/InventoryInventoryDetail"


export default new Router({
    // mode: 'history',
    base: process.env.BASE_URL,
    routes: [
            {
                path: '/oders/orders',
                name: 'OderOrderManager',
                component: OderOrderManager
            },
            {
                path: '/oders/orders/:id',
                name: 'OderOrderDetail',
                component: OderOrderDetail
            },

            {
                path: '/inventories/inventories',
                name: 'InventoryInventoryManager',
                component: InventoryInventoryManager
            },
            {
                path: '/inventories/inventories/:id',
                name: 'InventoryInventoryDetail',
                component: InventoryInventoryDetail
            },



    ]
})
