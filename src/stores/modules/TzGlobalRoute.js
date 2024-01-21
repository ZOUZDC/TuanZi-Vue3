import { defineStore } from 'pinia'

export const useTzRoute = defineStore('tzRouter', {
    state: () => ({
        //当前激活路由
        activeRoute:{},
        //所有路由信息
        routes:[],
        //菜单展示路由信息
        menuRoutes:[],
    }),
    getters: {
        getActiveRoute:(state)=>state.activeRoute,
        getRoutes:(state)=>state.routes,
        getRMenuRoutes:(state)=>state.menuRoutes,
    },
    actions: {
        setActiveRoute(activeRoute) {
           this.activeRoute=activeRoute;
        },
        setRoutes(routes){
            this.routes=routes;
        },
        setMenuRoutes(menuRoutes){
            console.info(1111111111)
            this.menuRoutes=menuRoutes;
        }
    },
})
