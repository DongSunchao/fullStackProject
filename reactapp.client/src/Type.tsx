/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ProductType {
    id?: number | string;
    gallery?: string;
    productName?: string;
    price?: number;
    specs?: string;
    currency?: number;
    size?: number;
}
export type GroupProType = ProductType & {

    groupBuyId?: number | string
    salePrice?: string
    limitBuy?: number
    rate?: number
    stock?: number
    order?: number
}
export interface TagType {
    id?: number | string
    name?: string
    pic?: string
    type?: number
    current?: number
    size?: number
}
export interface GroupBuyType {
    id?: number | string
    name?: string
    startTime?: string
    endTime?: string
    state?: number | string
    current?: number
    order?: string
    products?: string
    shop?: string
    slogan?: string
    preTime?: string
    showHome?: string
    tag?: string | number
    target?: number
    limitBuy?: number
    deliverWay?: number
    pickTime?: string
    homePic?: string
    banner?: string
    showType?: number
}

export interface UserType {
    id: number | string
    name: string
    password: string
    email?: string
    phone?: string
    address?: string
    avatar?: string
    role?: number
    state?: number
    current?: number
    size?: number
}
export interface LoginResponseType {
    code?: number
    message?: string
    user?:number|string
    token: string
}
export interface ActionType {
    type: string
    payload?: any
}