import React from "react";
import Image from "next/image";

export default Event = (props) => {
    console.log(props.data);
    let images = props.data;
    console.log("images");
    return (
        <div className="gap-0 columns-1 md:columns-2 lg:columns-3">
            {images.map((image) => {
                return (
                    <div key={image.key} className="w-auto h-auto p-2">
                        <div
                            className="relative h-0"
                            style={{
                                paddingBottom: `${
                                    (image.height / image.width) * 100
                                }%`,
                            }}
                        >
                            <Image
                                className="rounded-lg"
                                src={image.src}
                                alt={image.alt}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </div>
                    </div>
                );
            })}
        </div>
    );
};
