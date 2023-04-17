import GreetingCard from "./GreetingCard"

export default function GreetingList () {
  return (
    <section className="GreetingList">
      <h2>Greeting List </h2>
      <GreetingCard firstName = "David" age = {41}/>
      <GreetingCard firstName = "Jonathan" age = {21}/>
      <GreetingCard firstName = "Jasmine" age = {24}/>
      <GreetingCard firstName = "Barbara" age = {48}/>
    </section>
  )
}