import { axiosInstance } from "./config";

export const getBannersRequest = () => 
   axiosInstance.get('/banners')

export const getGoodsRequest = () => 
    axiosInstance.get('/Goods')

export const getGoodsMenuListRequest = () => 
    axiosInstance.get('/GoodsMenu')

export const getClassifyListRequest = () =>
    axiosInstance.get('/classify')