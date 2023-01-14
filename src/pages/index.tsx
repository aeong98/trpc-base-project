import {trpc} from "src/utils/trpc";

export default function MainPage(){
    const greeting = trpc.greeting.useQuery();

    if(!greeting){
        return <div>Loading...</div>
    }

    return(
        <div>
            <p>{greeting.data}</p>
        </div>
    )
}