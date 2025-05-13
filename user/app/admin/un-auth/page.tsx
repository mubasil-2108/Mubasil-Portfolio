import Image from "next/image"

const UnauthorizedPage = () => {
    return (
        <div
            className="flex flex-col items-center justify-center min-h-screen text-center p-4"
        >
            <Image
                src='/401_unauthorized.svg'
                width={10000}
                height={10000}
                alt="Unauthorized illustration"
                className="w-full h-auto max-w-[400px] mb-4"
            />
            <div className="flex">
            <a
            className="p-2 z-50 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            <a href="/" target="_self">Go Back</a>
          </a>
          </div>
        </div>
    )
}

export default UnauthorizedPage;