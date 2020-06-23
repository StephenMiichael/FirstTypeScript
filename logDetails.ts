// Type Alias
type Uid = number | string

function logDetails(uid: Uid, item:string){
    console.log(`A product with ${uid} has a title as ${item}.`)
}

function logInfo(uid: Uid, user: string){
    console.log(`A user with ${uid} has a name as ${user}.`)
}

type Platform = "Windows" | "Linux" | "Mac OS" | "ios"

function renderPlataform(platform: Platform){
    return platform;
}

renderPlataform("ios")

logDetails(123, "Sapato");
logDetails("123", "sapato");

logInfo(123, "William");
logInfo("123", "William");