import axios from "axios"
import { useState } from "react"

function App() {
  const [post, setPost] = useState({
    title: '',
    photo: null
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    const formData = new FormData()
    formData.append('post', post.photo)
    const response = await axios.post('http://127.0.0.1:3000/upload', formData, {
      'Content-Type': 'multipart/form-data'
    })

    console.log({ response })
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="title"
          onChange={e => setPost({ ...post, title: e.target.value })} />

        <input type="file" name="photo"
          onChange={e => setPost({ ...post, photo: e.target.files[0] })} />

        <button>Subir</button>
      </form>
    </div>
  )
}

export default App