"use client"
import React from "react"
import ReactPlayer from "react-player"
import { useState, useEffect } from "react"
import Image from "next/image"
import thumbnail_1 from "@/public/images/Thumbnail-1.svg"
import thumbnail_2 from "@/public/images/Thumbnail-2.svg"
import thumbnail_3 from "@/public/images/Thumbnail-3.svg"
import thumbnail_4 from "@/public/images/Thumbnail-4.svg"
import playBtn from "@/public/images/play.svg"
import unmutebtn from "@/public/images/unmute.svg"
import pausebtn from "@/public/images/pause.svg"
import muteBtn from "@/public/images/mute.svg"

let playlist = [
  {
    id: "vid1",
    title: "About You and Your Business",
    url: "https://www.youtube.com/watch?v=kjielW6yXtA",
    img: thumbnail_1,
  },
  {
    id: "vid2",
    title: "Challenges Impacting Your Business",
    url: "https://www.youtube.com/watch?v=kjielW6yXtA",
    img: thumbnail_2,
  },
  {
    id: "vid3",
    title: "Why Remotual VS Cheaper Alternatives",
    url: "https://www.youtube.com/watch?v=t8HrZTLRCeU",
    img: thumbnail_3,
  },
  {
    id: "vid4",
    title: "Services availing from Remotual",
    url: "https://www.youtube.com/watch?v=U8A3-ylf6aM",
    img: thumbnail_4,
  },
  {
    id: "vid5",
    title: "Services availing from Remotual",
    url: "https://www.youtube.com/watch?v=U8A3-ylf6aM",
    img: thumbnail_4,
  },
  {
    id: "vid6",
    title: "Services availing from Remotual",
    url: "https://www.youtube.com/watch?v=U8A3-ylf6aM",
    img: thumbnail_4,
  },
]

export default function Playlist() {
  const [domLoaded, setDomLoaded] = useState(false)
  const [currentVideo, setcurrentVideo] = useState({
    id: "vid1",
    title: "About You and Your Business",
    url: "https://www.youtube.com/watch?v=kjielW6yXtA",
    img: thumbnail_1,
  })

  useEffect(() => {
    setDomLoaded(true)
  }, [])

  const [play, setPlay] = useState(false)
  function changePlay() {
    setPlay(!play)
  }
  const [mute, setMute] = useState(true)
  function changeMute() {
    setMute(!mute)
  }

  function handleVideoChange(currentPlaying) {
    setcurrentVideo(currentPlaying)
  }

  return (
    <div className=" lg:w-11/12 mx-auto mt-10 ">
      <p className=" text-[45px] font-semibold text-center hidden lg:block">
        Our Clients are Our Best Advocates. Hear their Tales.
      </p>
      <div className="mx-auto w-fit lg:hidden">
        <p className="text-[34px] font-bold">Our Clients are Our</p>
        <p className="text-[34px] pl-2 font-bold border border-l-black border-l-[6px] bg-[linear-gradient(92deg,_#FF7A00_0.7%,_rgba(255,_122,_0,_0.40)_99.23%)]">
          Best Advocates. .
        </p>
      </div>
      {domLoaded && (
        <div className="flex flex-col lg:flex-row justify-between relative my-10 lg:border border-[#FF7A00] rounded-[25px]  w-full">
          <div className="m-2 p-1 lg:p-0 lg:w-[65%] rounded-[20px] overflow-hidden relative">
            <ReactPlayer
              url={currentVideo.url}
              width="100%"
              height="100%"
              playing={play}
              muted={mute}
            />

            <div className="flex gap-1 bottom-0 left-8 absolute z-50 w-[100px] h-[70px] items-center">
              <div className="bg-[#FFEBD9] px-1 py-[4px] h-fit rounded-full flex gap-1">
                <Image
                  onClick={changePlay}
                  src={play ? pausebtn : playBtn}
                ></Image>
                <Image
                  onClick={changeMute}
                  src={mute ? unmutebtn : muteBtn}
                ></Image>
              </div>
            </div>
          </div>
          <div className="m-2 lg:m-0 lg:p-0 lg:w-[35%] rounded-tr-[20px] overflow-hidden">
            <div className="h-[50px] lg:h-[65px] bg-[#FF7A00] rounded-l-[60px]  text-white flex items-center pl-6">
              Playlist
            </div>
            <div
              id="playlist"
              className=" overflow-y-scroll h-[325px] lg:h-[300px] xl:h-[450px]"
            >
              {playlist.map((video) => (
                <>
                  <div
                    onClick={() => handleVideoChange(video)}
                    className={
                      video.id === currentVideo.id
                        ? " bg-gradient-to-l from-[rgba(255,122,0,0.30)_-0.1%] to-[rgba(255,122,0,0.00)_100%)] flex cursor-pointer w-full h-[80px] lg:px-[35px] py-2"
                        : "flex cursor-pointer w-full h-[80px] lg:px-[35px] py-2"
                    }
                  >
                    <Image src={video.img} />
                    <p className="flex items-center ml-[16px] text-sm xl:text-base font-semibold">
                      {video.title}
                    </p>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  )
}