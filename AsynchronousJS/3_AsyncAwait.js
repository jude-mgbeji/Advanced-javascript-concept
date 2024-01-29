/**
 * Async Await is part of ES8
 * It is built on top of promises
 * Under the hood, an Async function returns a promise
 * the benefit of using Aync await is because it makes the code easier to read
 * NB: The await keyword is used in front of a function that returns a promise
 * Example
 */

const userurl = "https://jsonplaceholder.typicode.com/users"

async function fertchUsers(){
    const resp = await fetch(userurl)
    const data = await resp.json()
    console.log(data[0])
}
fertchUsers()

//similarly, implementing what we had in promise usecase using Async await will look like

const urls = [
    "https://jsonplaceholder.typicode.com/users",
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/albums"
]

const getData = async function (){
    const [users, posts, albums] = await Promise.all(urls.map(url => {
        return fetch(url).then(resp => resp.json())
    }))
    console.log(users)
    console.log(posts)
    console.log(albums)
}
getData()

//Exception handling involves using a try catch i.e

const getData2 = async function (){
    try{
        const [users, posts, albums] = await Promise.all(urls.map(url => {
            return fetch(url).then(resp => resp.json())
        }))
        console.log(users)
        console.log(posts)
        console.log(albums)
    }catch(err){
        console.log("oops", err)
    }
}

//using the for await of feature

const getData3 = async function (){
    try{
        const arrayOfPormise = urls.map(url => fetch(url))
        for (let request of arrayOfPormise){
            const data = (await request).json()
            console.log(data)
        }
    }catch(err){
        console.log("oops", err)
    }
}

