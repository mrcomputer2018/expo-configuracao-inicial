import AuthStack from "./auth-stack";
import PublicStack from "./public-stack";

export default function RootStack() {
    const user = null;
    
    return (
        <>
            { user ? <AuthStack /> : <PublicStack /> }
        </>
    )
}