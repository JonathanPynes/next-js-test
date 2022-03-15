import { createClient } from 'contentful'

const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

export async function getStaticProps() {
  
  const client = createClient({
  space: space,
  accessToken: accessToken,
})

const res = await client.getEntries({ content_type: 'blogPost'})

return {
  props: {
    blogs: res.items
  }
 }

}

export default function Blogs({ blogs }) {
console.log(blogs)
  return (
    <div> Working hard
      {blogs.map(blog => (
        <div key={blog.sys.id}> Title: {blog.fields.blogTitle} <p>Content: {blog.fields.blogPostContent.content[0].content[0].value}</p> <img src={blog.fields.blogPostContentPhoto.fields.file.url}/></div>
      ))}
      <p></p>
       </div>
  )
} 
