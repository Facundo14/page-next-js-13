import { PostCard } from "./Card";

async function getPosts(page: number) {
    const postsPerPage = 3;
    const res = await fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/posts?page=${page}&per_page=${postsPerPage}&_embed=wp:featuredmedia`);
    const data = await res.json();
    return data;
}


export default async function ServerPostsList() {
    const posts = await getPosts(1);

    const nextPage = async (page: number) => {
        const posts = await getPosts(page + 1);
        return posts;
    }

    return (
        <section className="animate__animated animate__fadeIn flex flex-col justify-between min-h-[calc(100vh-200px)]">
            <h1 className="text-4xl font-bold text-center mb-5">Blog</h1>
            <div className="flex flex-col justify-center items-center">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                    {posts.map((post: any) => (
                        <PostCard
                            key={post.id}
                            title={post.title.rendered}
                            excerpt={post.excerpt.rendered}
                            date={post.date}
                            slug={post.slug}
                            image={post._embedded
                                ? post._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url
                                : post.featured_media_url
                            }
                        />
                        // <article key={post.id} className="border-slate-900 mb-3">
                        //   <h2>{post.title.rendered}</h2>
                        //   <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
                        //   <a href={post.link}>Leer más</a>
                        // </article>
                    ))}
                </div>
            </div>
            <div className="flex justify-center pb-5">
                {/* <button onClick={prevPage} className="bg-red-500 p-3 rounded-md hover:bg-red-800 dark:bg-red-700 dark:text-white text-white dark:hover:bg-red-900 font-bold" disabled={page === 1}>
            Anterior
        </button> */}
                <button onClick={() => nextPage(1)} className="bg-red-500 p-3 rounded-md hover:bg-red-800 dark:bg-red-700 dark:text-white text-white dark:hover:bg-red-900 ml-5 font-bold">
                    Siguiente
                </button>
            </div>
        </section>
    )
}
