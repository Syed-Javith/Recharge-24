interface CardProps {
    image: string | undefined;
    title: string;
    events_count: string | undefined;
  }
  
function Card({ image, title, events_count }: CardProps) {
    return (
        <div
        className="relative grid h-[34rem] md:w-full w-auto flex-col items-end justify-center overflow-hidden rounded-xl bg-white bg-clip-border text-center text-gray-700 m-12">
        <div
            id="card-bg"
            style={{"--image-url": `url(${image})`}} 
            className={"absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[image:var(--image-url)] bg-cover bg-clip-border bg-center text-gray-700 shadow-none"}>
            <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
        </div>
        <div className="relative p-6 px-6 py-14 md:px-12">
            <h2 className="mb-6 block font-sans text-4xl font-medium leading-[1.5] tracking-normal text-white antialiased">
            {title}
            </h2>
            <h5 className="block mb-4 font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-gray-400">
            {events_count + " events"}
            </h5>
        </div>
        </div> 
    );
}

export default Card;