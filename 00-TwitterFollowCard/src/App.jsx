import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard'

const users = [
  {
    id: "1",
    userName: "lalu_b",
    name: "Laila Barberan",
    isFollowing: true,
  },
  {
    id: "2",
    userName: "GralRamos",
    name: "General Ramos",
    isFollowing: false,
  },
  {
    id: "3",
    userName: "ricardo",
    name: "Ricardo Libertonto",
    isFollowing: false,
  },
  {
    id: "4",
    userName: "arrobafederico",
    name: "Malo de Mierda",
    isFollowing: true,
  },
];


export function App() {
  return (
    <section className='follow-cards'>
      {
        users.map(({ id,userName, name, isFollowing }) => {
          return (
            <TwitterFollowCard key={id} userName={userName} initialIsFollowing={isFollowing}>
              {name}
            </TwitterFollowCard>
          )
        })
      }
    </section>
  );
}