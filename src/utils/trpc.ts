import {httpBatchLink} from "@trpc/client";
import {createTRPCNext} from "@trpc/next";
import type {AppRouter} from '../server/routers/_app';
import superjson from 'superjson';

function getBaseUrl(){
    if(typeof window !== 'undefined'){
        return '';
    }
    return `http://localhost:3000`;
}

export const trpc = createTRPCNext<AppRouter>({
    config({ctx}){
        return {
            transformer: superjson,
            links:[
                httpBatchLink({
                    url: `${getBaseUrl()}/api/trpc`,
                })
            ]
        }
    },
    ssr:false
})