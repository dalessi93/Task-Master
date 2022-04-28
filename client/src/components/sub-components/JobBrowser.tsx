import { usePostFilter } from "./PostFilter";
import { PostView } from "./PostView";

export function JobBrowser(props: any){
    const {render, category, suburb, state} = usePostFilter()
    return(
        <div>
            {render}
            <PostView category={category} suburb={suburb} state={state} id={null}/>
        </div>
    )
}