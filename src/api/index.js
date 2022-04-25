import requests from "@/api/requests";

export const reqCategoryList = () => requests({
    url: '/api/product/getBaseCategoryList',
    method: 'get',
})