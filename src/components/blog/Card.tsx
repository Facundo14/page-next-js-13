interface Props {
    title: string,
    excerpt: string,
    image: string,
    date?: string,
    link: string
}
export const PostCard = ({ title, excerpt, image = 'https://placehold.co/600x400', date = '20/20/1225', link }: Props) => {
    return (
        <article className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
            <a href="#">
                <img className="rounded-t-lg w-full h-56" width={450} height={400} src={image} alt={title} />
            </a>
            <div className="p-5">
                <a href="#">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h5>
                </a>
                <p className="h-24 overflow-hidden text-gray-700 dark:text-gray-400">
                    <span dangerouslySetInnerHTML={{ __html: excerpt }} />
                </p>
                <a
                    href={link}
                    className="mt-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-md hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                >
                    Leer mas
                    <svg
                        className="w-3.5 h-3.5 ml-2"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 14 10"
                    >
                        <path
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9"
                        />
                    </svg>
                </a>
            </div>
        </article>

    )
}
