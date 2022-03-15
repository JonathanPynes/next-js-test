const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN

const client = require('contentful').createClient({
  space: space,
  accessToken: accessToken,
})

export async function fetchEntries() {
  const blogPost = await client.getEntries({ content_type: 'blogPost'})
  if (blogPost.items) return blogPost.items
  console.log(`Error getting Entries for ${contentType.name}.`)
  console.log(blogPost.items)
}

export default function Blog({ blogPost }) {
    console.log(blogPost.items)
}