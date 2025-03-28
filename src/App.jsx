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
        <h1 className='title text-center'>
          Ratatouille a Casa
        </h1>
        <section className='posts'>
          <div className='container'>

            {
              <table className='table table-stripped'>
                <thead>
                  <tr>
                    <th scope='col'>#</th>
                    <th scope='col'>Product</th>
                    <th scope='col'>Image</th>
                    <th scope='col'>Content</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    posts.map((post, index) => (
                      <tr key={`post - ${index}`}>
                        <th scope='row'>{index}</th>
                        <td>{post.title}</td>
                        <td>

                          <img src={base_api_url + post.image} alt={post.title} width={200} />
                        </td>
                        <td>{post.content}</td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
            }

          </div>
        </section>
      </main >
    </>
  )
}

export default App
