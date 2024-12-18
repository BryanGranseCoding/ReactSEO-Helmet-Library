import { useState } from "react";
import { SEO } from "./SEO";

export function Home() {
        const [count, setCount] = useState(0);
        function handleClick() {
            count >= 25 ? alert(`Limit Count Only to 25`) : setCount(count + 2);
        }
    return (
        
        <>
            <SEO 
                title="Home"
                description="This is a Homepage description of Bryan Granse SEO Project"
                keywords={['Bryan', 'project', 'react', 'helmet library']}
                type="article"
            />

            <div>
                <img src="/vite.svg" />
                <h1>Bryan Granse SEO Using Helmet React Library</h1>
                <p>This is a Home page Test.</p>
                <p>Use Chrome Extension <a href="https://chromewebstore.google.com/detail/seo-meta-in-1-click/bjogjfinolnhfhkbipphpdlldadpnmhc" target="_blank" rel="nofollow">"SEO META 1 CLICK"</a></p>
                <button onClick={handleClick}>Click Test: {count}</button>
            </div>
            
        </>
    );
}
 