import { useAppSelector } from "@/hooks.ts";

const Main = () => {
    const actualUser = useAppSelector((state) => state.user);
    return(
        <div className="flex flex-col justify-center items-center min-h-[100vh]">
            <h1>This is main you can user now the user! { actualUser.name }</h1>
        </div>
    )
}
export default Main;