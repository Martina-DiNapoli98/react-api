import { useState, useEffect } from 'react'

const base_api_url = 'http://localhost:3003'
const posts_endpoint = '/api/v1/posts'


function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetchData(base_api_url + posts_endpoint)
  }, [])

  function fetchData(url) {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setPosts(data)
      })
  }

  return (
    <>
      <main>
        <section className='posts'>
          <div className='container'>
            <div className='row'>

              {
                posts.map((post, index) => (
                  <div className='col' key={index}>
                    <div className='card'>
                      <img className='img-card-body' src={`base_api_url` + `post.image`} alt="" />
                      <div className='card-body'>
                        {post.title}
                      </div>
                    </div>
                  </div>
                ))
              }

            </div>
          </div>
        </section>
      </main >
    </>
  )
}

export default App
