import blogsData from "../data/blogs.json"
import BlogCard from "../components/blog/BlogCard"
import Text from "../components/reusable/Text"

const Blogs = () => {
    return (
        <>
            {/* Header */}
            <div className="bg-[#F4F4F4] flex flex-col lg:flex-row lg:items-center lg:justify-between mb-12 py-16 px-4 sm:px-6 lg:px-20 max-w-7xl mx-auto">

                <div>
                    <Text
                        variant="subtitle"
                        color="primary-light"
                        className="inline-block bg-[#D4E1F5] px-3 py-2 rounded"
                    >
                        {blogsData.sectionBadge}
                    </Text>

                    <Text
                        variant="h2"
                        color="primary"
                        className="mt-4"
                    >
                        {blogsData.title}
                    </Text>
                </div>

                {/* Side Badge */}
                <div className="mt-6 lg:mt-0 bg-white shadow-sm pl-3 pr-6 py-3 rounded-lg text-[#032D60] max-w-[290px] text-right">
                    <Text variant="body-sm" color="primary">
                        {blogsData.sideBadge}
                    </Text>
                </div>

            </div>
            <section className="bg-white pb-20 px-4 sm:px-6 lg:px-20">


                <div className="max-w-7xl mx-auto">

                    {/* Latest Post Title */}
                    <Text
                        variant="h4"
                        color="default"
                        className="mb-6"
                    >
                        Latest Post
                    </Text>

                    {/* Blog Grid */}
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogsData.blogs.map(blog => (
                            <BlogCard key={blog.id} blog={blog} />
                        ))}
                    </div>

                </div>

            </section>
        </>
    )
}

export default Blogs
