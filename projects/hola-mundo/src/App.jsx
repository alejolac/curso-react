import "./App.css"
import { TwitterFollowCard } from "./TwitterFollowCard.jsx"

export default function App() {

  const list = [
    {
      userName: "midudev",
      isFollowing: false,
      name: "Miguel Ángel Durán"
    },
    {
      userName: "AlejoBuc",
      isFollowing: false,
      name: "Alejo Lacroix"
    },
    {
      userName: "PabloFagu",
      isFollowing: false,
      name: "Pablo Fagundez"
    }
  ]

  return (
    <div className="App">
      {
        list.map(({userName, isFollowing, name}) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            isFollowing={isFollowing}
          >
            {name}  
          </TwitterFollowCard>
        ))
      }
    </div>
  )
}


