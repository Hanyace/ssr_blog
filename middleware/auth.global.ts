// 路由拦截

export default defineNuxtRouteMiddleware((to, from) => {
    if (to.path == '/about') {
        return abortNavigation('不允许访问') // 中断导航
    }
    // 在实际应用中，你可能不会将每个路由重定向到 `/`
    if (to.path !== '/') {
        return navigateTo('/')
    }
})