import { PostFilter } from "./PostFilter";
import { PostView } from "./PostView";

export function JobBrowser(){
    return(
        <div>
            <PostFilter/>
            <PostView/>
        </div>
    )
}