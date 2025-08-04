
import { useCallback } from "react";
import { useEffect, useState } from "react";

function ErrorPage() {


    const [count, setCount] = useState(0);
    const increment = () => { setCount(count + 1) };
    const decrement = () => { setCount(count - 1) };
    const resetValue = () => { setCount(0) };


    //clock
    const [time, setTime] = useState<Date | null>(null);
    const [showBadExample, setShowBadExample] = useState(false);
    //const [renderCount, setRenderCount] = useState(0);


   




    useEffect(() => {
        if (!showBadExample) {
            setTime(new Date());
            const timer = setInterval(() => {
                setTime(new Date());
            }, 1000);
            return () => clearInterval(timer);
        }
    }, [showBadExample]);


    //component architecture
    interface ButtonProps {
        variant?: "primary" | "secondary" | "destructive"|"add";
        children: React.ReactNode;
        onClick?: () => void;
        disabled?: boolean;
        type?: "button" | "submit" | "reset";
        style?: React.CSSProperties;
        className?: string;

    }

    function Button({ variant = "primary", children, onClick, disabled, type='button', style, className }: ButtonProps) {
        return (
            <button
                className={`button ${variant} ${className || ""}`}
                onClick={onClick}
                disabled={disabled}
                type={type || "button"}
                style={style}
            >
                {children}
            </button>
        );
    }

    function ButtonShowCase() {
        return (
            <div className="button-showcase">
                <h2>Button Showcase</h2>
                <Button variant="primary" onClick={() => alert("Primary Button Clicked!")}>Primary Button</Button>
                <Button variant="secondary" onClick={() => alert("Secondary Button Clicked!")}>Secondary Button</Button>
                <Button variant="destructive" onClick={() => alert("Destructive Button Clicked!")}>Destructive Button</Button>
                <Button variant="add" onClick={() => alert("add Button Clicked!")}>add Button</Button>
            </div>
        )
    }

    //conditional rendering
    interface User {
        name: string;
        email: string;
    }

     // 修改思路：
     // 1. fetchUser 里 setLoading(false) 应该在 setTimeout 回调的最开始调用，确保每次点击按钮都能正确重置 loading 状态。
     // 2. fetchUser 里 setLoading(true) 应该在每次调用时立即设置，确保点击按钮后 loading 状态为 true。
     // 3. useEffect 依赖项应包含 fetchUser，或直接将 fetchUser 定义为 useCallback。

   
     function UserProfile() {
         const [user, setUser] = useState<User | null>(null);
         const [loading, setLoading] = useState(true);
         const [error, setError] = useState<string | null>(null);
         const [randomNumber, setRandomNumber] = useState<number | null>(null);

         // 用 useCallback 包裹 fetchUser，确保依赖项稳定
         const fetchUser = useCallback(() => {
             setLoading(true); // 每次调用都先设置 loading 为 true
             setError(null);
             setUser(null);
             setRandomNumber(null);

             setTimeout(() => {
                 const random = Math.random();
                 setRandomNumber(random);
                 console.log('Random number: ', random);

                 if (random > 0.7) {
                     setError('Failed to load user data');
                 } else {
                     setUser({ name: 'John Doe', email: 'john@example.com' });
                 }
                 setLoading(false); // 最后设置 loading 为 false
             }, 2000);
         }, []);

         useEffect(() => {
             fetchUser();
         }, [fetchUser]);

         return (
             <div className="widget">
                 <h3>
                     <span className="widget-icon">👤</span>
                     User Profile
                     <span className="pattern-badge">Conditional</span>
                 </h3>

                 {loading && (
                     <div className="text-center p-8">
                         <div className="status-loading">Loading user data...</div>
                     </div>
                 )}

                 {error && (
                     <div className="text-center p-8">
                         <div className="status-error">❌ {error}</div>
                         {randomNumber !== null && (
                             <div className="mt-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                                 Random number: <strong>{randomNumber.toFixed(3)}</strong>
                                 <span style={{ color: '#ff4444' }}> (&gt; 0.7 = Error)</span>
                             </div>
                         )}
                         <Button onClick={fetchUser} variant="secondary" className="mt-4">
                             Try Again
                         </Button>
                     </div>
                 )}

                 {!loading && !error && !user && (
                     <div className="text-center p-8">
                         <div className="status-loading">Please log in</div>
                     </div>
                 )}

                 {user && (
                     <div>
                         <div className="status-success">✅ User loaded successfully!</div>
                         {randomNumber !== null && (
                             <div className="text-center mt-2 text-sm" style={{ color: 'var(--muted-foreground)' }}>
                                 Random number: <strong>{randomNumber.toFixed(3)}</strong>
                                 <span style={{ color: '#22c55e' }}> (≤ 0.7 = Success)</span>
                             </div>
                         )}
                         <div className="mt-4">
                             <p><strong>Name:</strong> {user.name}</p>
                             <p><strong>Email:</strong> {user.email}</p>
                         </div>
                         <Button onClick={fetchUser} variant="secondary" className="mt-4">
                             Reload User
                         </Button>
                     </div>
                 )}
             </div>
         );
     }



    function MyUserProfile() {
        //const [user, setUser] = useState<User | null>(null);
        //const [loading, setLoading] = useState(true);
        //const [error, setError] = useState<string | null>(null);
        //const [randomNumber, setRandomNumber] = useState<number | null>(null);

        //const fetchUser = () => {
        //    setLoading(true);
        //    setError(null);
        //    setUser(null);
        //    setRandomNumber(null)


        //    setTimeout(() => {
        //        const random = Math.random();
        //        setRandomNumber(random);
        //        console.log(`Random number generated: ${random}`);
        //        if (random > 0.9) {
        //            setError(`Failed to fetch user data ${random}`);
        //        } else {
        //            setUser({ name: 'test1', email: '11@qq.com' })
        //        }

        //        setLoading(false);

        //    }, 2000);
        //};

        //useEffect(() => {
        //    fetchUser();
        //}, []);
        




        


        //return (
        //    <div className="user-profile">
        //        <h2>User Profile</h2>
        //        {loading &&<p>Loading...</p>}
        //        {error && (
        //            <div className="error-message">
        //                <div className="error-icon">⚠️</div>
        //                {randomNumber !== null && (
        //                    <div className="error-number">
        //                        randomNumber:<strong>{randomNumber.toFixed(3)}</strong>
        //                        <span style={{ color: 'red' }}> {error}</span>
        //                        </div>
        //                )}
        //                <Button onClick={fetchUser} variant="secondary" style={{ marginLeft: '10px' }}> 
        //                    try again
        //                </Button>
        //            </div>
        //        )}
        //        {user && (
        //            <div>
        //                <p>Name: {user.name}</p>
        //                <p>Email: {user.email}</p>
        //            </div>
        //        )}
        //        {randomNumber !== null && (
        //            <p>Random Number: {randomNumber.toFixed(2)}</p>
        //        )}
        //    </div>
        //)
        return(<div>mytest</div>)

}
    
  











    return (
        <div className="error-page">
            <h1>Page Not Found</h1>
            <p>Sorry, the page you are looking for does not exist.</p>
            <div className="counter">
                <h2>Counter: {count} </h2>
                <button onClick={increment}>Increment</button>
                <button onClick={decrement}>Decrement</button>
                <button onClick={resetValue}>Reset</button>

            </div>


            <div className="clock">
                <h2>Clock: {time ? time.toLocaleTimeString() : "Loading..."}</h2>
                <button onClick={() => setShowBadExample(!showBadExample)}>
                    {showBadExample ? "Hide Bad Example" : "Show Bad Example"}
                </button>
            </div>

            <div className="buttonTest">

                <ButtonShowCase />


                </div>

            <div>
                <MyUserProfile/>
            </div>

            <div>
                <UserProfile />
            </div>


        </div>


    );



    
}
export default ErrorPage;

