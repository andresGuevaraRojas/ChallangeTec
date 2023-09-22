import {ApiEndpoint} from "../config"

export type UserGetResponse = {
    name: {
        title: string,
        first: string,
        last: string
    },
    email:string,
    picture:{
        large:string
        medium: string
        thumbnail: string
    }
}

export type UsersGetResponse = {
    results:UserGetResponse[]
}

export type User = {
    title: string,
    first: string,
    last: string,
    email:string,
    picture:string
}

export async function getUsers(count=10):Promise<User[]> {
    const response = await fetch(`${ApiEndpoint}/?results=${count}`)
    const responseJson = await response.json() as UsersGetResponse
    return responseJson.results.map(item=>({
      ...item.name,
      email:item.email,
      picture:item.picture.thumbnail
    }))
}