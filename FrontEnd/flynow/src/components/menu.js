// Router menu

let result = JSON.parse(localStorage.getItem('login'))
const routerss = () => {
    let routers = []
    if(result){
        if(result.quyen===2){
            routers = [{
                key: 1,
                to: "/",
                exact: true,
                icontype: "home",
                name: "Trang Chủ"
            },
            {
                key: 2,
                to: "./flight",
                exact: false,
                icontype: "rocket",
                name: "Chuyến Bay"
            },
            {
                key: 3,
                to: "/employees",
                exact: false,
                icontype: "team",
                name: "Nhân Viên"
            },{
                key: 4,
                to: "/user",
                exact: false,
                icontype: "user",
                name: "Khách Hàng"
            },
            {
                key: 5,
                to: "/order",
                exact: false,
                icontype: "file-text",
                name: "Đơn Hàng"
            },
            {
                key: 6,
                to: "/ticket",
                exact: false,
                icontype: "container",
                name: "Hạng Vé"
            },
            {
                key: 7,
                to: "/airport",
                exact: false,
                icontype: "border",
                name: "Sân Bay"
            },
            {
                key: 8,
                to: "/location",
                exact: false,
                icontype: "environment",
                name: "Chặng Bay"
            }]
            return routers
        }  
        else{
            routers = [{
                key: 1,
                to: "/",
                exact: true,
                icontype: "home",
                name: "Trang Chủ"
            },
            {
                key: 2,
                to: "./flight",
                exact: false,
                icontype: "rocket",
                name: "Chuyến Bay"
            },
            {
                key: 3,
                to: "/user",
                exact: false,
                icontype: "user",
                name: "Khách Hàng"
            },
            {
                key: 4,
                to: "/order",
                exact: false,
                icontype: "file-text",
                name: "Đơn Hàng"
            },
            {
                key: 5,
                to: "/ticket",
                exact: false,
                icontype: "container",
                name: "Hạng Vé"
            },
            {
                key: 6,
                to: "/airport",
                exact: false,
                icontype: "border",
                name: "Sân Bay"
            },
            {
                key: 7,
                to: "/location",
                exact: false,
                icontype: "environment",
                name: "Chặng Bay"
            }]
            return routers
        }
    }

}
const router = routerss()

// const router = [
//     {
//         key: 1,
//         to: "/",
//         exact: true,
//         icontype: "home",
//         name: "Trang Chủ"
//     },
//     {
//         key: 2,
//         to: "./flight",
//         exact: false,
//         icontype: "rocket",
//         name: "Chuyến Bay"
//     },
//     {
//         key: 3,
//         to: "/employees",
//         exact: false,
//         icontype: "team",
//         name: "Nhân Viên"
//     },{
//         key: 4,
//         to: "/user",
//         exact: false,
//         icontype: "user",
//         name: "Khách Hàng"
//     },
//     {
//         key: 5,
//         to: "/order",
//         exact: false,
//         icontype: "file-text",
//         name: "Đơn Hàng"
//     },
//     {
//         key: 6,
//         to: "/ticket",
//         exact: false,
//         icontype: "container",
//         name: "Hạng Vé"
//     },
//     {
//         key: 7,
//         to: "/airport",
//         exact: false,
//         icontype: "border",
//         name: "Sân Bay"
//     },
//     {
//         key: 8,
//         to: "/location",
//         exact: false,
//         icontype: "environment",
//         name: "Chặng Bay"
//     },
// ];
export default router;



