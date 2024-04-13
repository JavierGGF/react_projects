import { TwitterFollowCard } from "./TwitterFollowCard.jsx";
import './App.css';

export function App() {
    return (
        <section className="App">
            <TwitterFollowCard userName="midudev" initialIsFollowing={true} name="Miguel Ángel Duran" />    
            <TwitterFollowCard  userName="JGFontanet" initialIsFollowing={true} name="Javier G. Fontanet" /> 
            <TwitterFollowCard  userName="DianaSedalYanes" initialIsFollowing={true} name="Diana" />
        </section>
  )
}