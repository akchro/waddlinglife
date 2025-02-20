import Image from "next/image";

const Page = () => {
    return (
        <main className={"flex flex-col items-center mt-10px-10 gap-5"}>
            <Image

                src={`/aibp1.jpg`}
                alt={`Panel 1`}
                width={1000}
                height={1000}
                quality={100}
                className={'sm:w-[700px] w-screen'}
            />
            {Array.from({ length: 17 }, (_, index) => {
                const imageNumber = index + 2; // Start from 2 and go up to 18
                return (
                    <Image
                        key={imageNumber}
                        src={`/aib${imageNumber}.jpg`}
                        alt={`Panel ${imageNumber}`}
                        width={1000}
                        height={1000}
                        quality={100}
                        className={'sm:w-[500px] w-screen'}
                    />
                );
            })}
        </main>
    );
};

export default Page;