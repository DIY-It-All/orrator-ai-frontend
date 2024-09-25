import Image from "next/image";

export function Card(props) {
  return (
    <>
      {/* <div className="p-4 md:w-1/3 basis-[90%] md:basis-[unset] mx-auto">
        <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
          <div className="p-6">
            <Image
              src={props.src}
              alt="Text"
              width={20}
              height={20}
              className="" />
            <h1 className="title-font text-lg font-medium text-gray-400 mb-3">
              {props.title}
            </h1>
            <p className="leading-relaxed mb-3">{props.txt}</p>
          </div>
        </div>
      </div> */}
      <div className="card bg-primary text-primary-content  md:w-[calc(33.33%-1rem)] basis-[90%] md:basis-[unset] mx-2">
        <div className="card-body">
          <div className="flex flex-row">
            
            <Image src={props.src} alt="Text" width={20} height={20} className="mx-4"/>
            <h2 className="card-title">{props.title}</h2>
          </div>
          <p>{props.txt}</p>
        </div>
      </div>
    </>
  );
}
