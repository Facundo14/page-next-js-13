'use client'
import { PostCard } from "@/components/blog/Card";
import { useEffect, useState } from "react";

const PostsList = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [isLastPage, setIsLastPage] = useState(false); // Estado para rastrear si estás en la última página
    const postsPerPage = 6;

    useEffect(() => {
        setLoading(true);

        fetch(`${process.env.NEXT_PUBLIC_WP_API_URL}/wp-json/wp/v2/posts?page=${page}&per_page=${postsPerPage}&_embed=wp:featuredmedia`)
            .then((response) => response.json())
            .then((data) => {
                setPosts(data);
                setLoading(false);
                setIsLastPage(data.length === 0); // Verificar si estás en la última página
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
                setLoading(false);
            });
    }, [page, isLastPage]);

    const nextPage = () => {
        if (!isLastPage) { // Verificar si no estás en la última página antes de actualizar el estado
            setPage((prevPage) => prevPage + 1);
        }
    };

    const prevPage = () => {
        if (page > 1) { // Verificar si no estás en la primera página antes de actualizar el estado
            setPage((prevPage) => prevPage - 1);
        }
    };
    return (
        <section className="animate__animated animate__fadeIn flex flex-col justify-between min-h-[calc(100vh-200px)]">
            <h1 className="text-4xl font-bold text-center mb-5">Blog</h1>
            <div className="flex flex-col justify-center items-center">
                {loading ? (
                    <div>Cargando...</div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
                        {posts.map((post: any) => (
                            <PostCard 
                                key={post.id} 
                                title={post.title.rendered} 
                                excerpt={post.excerpt.rendered} 
                                date={post.date} 
                                link={post.link} 
                                image={ post._embedded 
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
                )}
            </div>
            <div className="flex justify-center pb-5">
                <button onClick={prevPage} className="bg-red-500 p-3 rounded-md hover:bg-red-800 dark:bg-red-700 dark:text-white text-white dark:hover:bg-red-900 font-bold" disabled={page === 1}>
                    Anterior
                </button>
                <button onClick={nextPage} className="bg-red-500 p-3 rounded-md hover:bg-red-800 dark:bg-red-700 dark:text-white text-white dark:hover:bg-red-900 ml-5 font-bold" disabled={isLastPage}>
                    Siguiente
                </button>
            </div>
        </section>
    )
}

export default PostsList