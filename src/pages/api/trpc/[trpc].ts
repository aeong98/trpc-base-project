import * as trpcNext from '@trpc/server/adapters/next';
import {createContext} from "src/server/context";
import {appRouter} from "src/server/routers/_app";

export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext,
    onError({error}){
        if(error.code === "INTERNAL_SERVER_ERROR"){
            //에러로깅
            console.log("Something went wrong", error)
        }
    }
})