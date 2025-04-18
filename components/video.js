"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";

const Video = ({ videoSrc, imageSrc, price, href, title, videoTitle }) => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false); // For video modal
  const [isBuyModalOpen, setIsBuyModalOpen] = useState(false); // For buy now modal
  const [isAnimating, setIsAnimating] = useState(false);
  const videoRef = useRef(null); // Reference for video in modal

  // Open video modal when video is clicked
  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    setTimeout(() => {
      setIsAnimating(true);
      // Play the video with audio when the modal opens
      if (videoRef.current) {
        videoRef.current.play();
      }
    }, 0);
  };

  // Open buy modal when "Buy Now" is clicked
  const openBuyModal = () => {
    setIsBuyModalOpen(true);
    setTimeout(() => {
      setIsAnimating(true);
    }, 0);
  };

  // Close either modal
  const closeModal = () => {
    setIsAnimating(false);
    setTimeout(() => {
      setIsVideoModalOpen(false);
      setIsBuyModalOpen(false);
      // Pause the video if the video modal is being closed
      if (videoRef.current) {
        videoRef.current.pause();
      }
    }, 300);
  };

  useEffect(() => {
    if (isVideoModalOpen || isBuyModalOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflowY = "hidden";
    } else {
      document.body.style.overflow = "";
      document.documentElement.style.overflowY = "";
    }

    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflowY = "";
    };
  }, [isVideoModalOpen, isBuyModalOpen]);

  return (
    <div className="flex-1 rounded-2xl border border-grey-500 mx-auto w-[300px] sm:w-full" id="our-videos">
      <div className="flex h-full rounded-2xl flex-col pb-5">
        <div className="relative flex flex-col justify-between flex-grow">
          {/* Video thumbnail, click to open video modal */}
          <video
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-t-2xl cursor-pointer"
            onClick={openVideoModal} // Click video to open video modal
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 mb-3">
            <Image src={imageSrc} width={75} height={75} alt="Product Image" />
          </div>
        </div>

        <div className="text-center">
          <h5 className="mt-10 mb-5">
            {title}{" "}
            <strong className="text-customeGreen text-lg">{price}</strong>
          </h5>

          {/* Buy Now button opens buy modal */}
          <button
            className="bg-customeGreen transform motion-safe:hover:scale-110 hover:bg-black text-white px-8 py-1 rounded-2xl border-1"
            onClick={openBuyModal}
          >
            Buy Now
          </button>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`bg-white p-8 rounded-xl shadow-lg relative text-center transition-transform transform ${
              isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            <h3 className="text-xl font-bold mb-4 text-2xl font-bold">
              {videoTitle}
            </h3>
            <div className="mt-4 mx-auto w-24 h-1 bg-customeBlue rounded"></div>

            {/* Video in modal with audio */}
            <video
              ref={videoRef}
              src={videoSrc}
              controls
              className="mt-5 rounded-t-2xl w-[200px] h-[350px] sm:w-[250px] sm:h-[400px]" // Mobile and desktop-specific width and height
            />

            <button
              className="absolute top-2 right-2 bg-customeGreen transform motion-safe:hover:scale-110 hover:bg-black text-white p-2 rounded-2xl"
              onClick={closeModal}
            >
              X
            </button>
          </div>
        </div>
      )}

      {/* Buy Now Modal */}
      {isBuyModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div
            className={`bg-white p-4 sm:p-8 rounded-1x1 sm:rounded-xl shadow-lg relative text-center transition-transform transform ${
              isAnimating ? "scale-100 opacity-100" : "scale-95 opacity-0"
            } max-h-full sm:max-h-[90vh] overflow-y-auto`}
            style={{ transition: "transform 0.3s ease, opacity 0.3s ease" }}
          >
            <h3 className="text-xl font-bold mb-4 text-2xl font-bold">
              Buy THINKLife Care <br />
              Product
            </h3>
            <div className="mt-4 mx-auto w-24 h-1 bg-customeBlue rounded"></div>
            <div className="flex justify-center">
              <Image
                className="m-5"
                src={imageSrc}
                width={200}
                height={200}
                alt="Product Image"
              />
            </div>

            <p className="mb-5 text-2xl text-customeBlue">
              You selected {title} and Product price is:
              <span className="text-customeGreen"> {price}.</span> <br />
            </p>
            <p className="mb-5">
              <strong>
                Proceed to your order by choosing any below option:
              </strong>
            </p>

            <button
              className="absolute top-2 right-2 bg-customeGreen transform motion-safe:hover:scale-110 hover:bg-black text-white p-2 rounded-2xl"
              onClick={closeModal}
            >
              X
            </button>

            <a
              className="m-5 transform motion-safe:hover:scale-110 inline-block bg-customeGreen hover:bg-black text-white px-8 py-1 rounded-2xl border-1"
              href={href}
            >
              Order with Amazon
            </a>
            <a
              className="m-5 transform motion-safe:hover:scale-110 inline-block bg-customeGreen hover:bg-black text-white px-8 py-1 rounded-2xl border-1"
              href={`https://wa.me/9112040097?text=${encodeURIComponent(
                "Hello, I would like to order this product."
              )}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Order with WhatsApp
            </a>

            <a
              className="m-5 transform motion-safe:hover:scale-110 inline-block bg-customeGreen hover:bg-black text-white px-8 py-1 rounded-2xl border-1"
              href={href}
            >
              Order with Facebook
            </a>
            <a
              className="m-5 transform motion-safe:hover:scale-110 inline-block bg-customeGreen hover:bg-black text-white px-8 py-1 rounded-2xl border-1"
              href={href}
            >
              Order with Instagram
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default Video;
