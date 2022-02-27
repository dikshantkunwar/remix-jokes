export default function NewJoke() {
  return (
    <div>
      <p>Add your own hilarious jooke!!</p>
      <form method="post">
        <input type="text" placeholder="Name" />
        <input type="text" placeholder="Content" />
        <button type="submit" className="button">Add</button>
      </form>
    </div>
    
  )
}