export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/posts');
    const posts = await res.json();
  
    return {
      props: {
        posts,
      },
    };
  }
  
  export default function UserPage({ posts }) {

    return<>Hooo</>
  }