export default function GreetingCard( {firstName, age}) {
  // const { firstName, age } = props
  // desrtuctred just to get firstName and age instead of writing firstName.props
  return (
    <div className="GreetingCard">
      <h3>Hello {firstName} ({age})!</h3>
    </div>
  )
}