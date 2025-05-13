import Image from "next/image"
import Link from "next/link";

const NotFoundPage = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen text-center p-4"
        >
            <Image
                src='/404_error.svg'
                width={10000}
                height={10000}
                alt="Unauthorized illustration"
                className="w-full h-auto max-w-[400px] mb-4"
            />
            <div className="flex">
            <a
            className="p-2 z-50 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            <Link href="/" target="_self">Go Back</Link>
          </a>
          </div>
        </div>
    )
}

export default NotFoundPage;