"use client"
import { useState } from "react"
import { useEffect } from "react"
import Image from "next/image"
import line from "@/public/images/line.svg"
import ReactPlayer from "react-player"
import playBtn from "@/public/images/play.svg"
import unmutebtn from "@/public/images/unmute.svg"
import pausebtn from "@/public/images/pause.svg"
import muteBtn from "@/public/images/mute.svg"
import headCircle from '@/public/images/heading_circle.svg'


export default function AboutVideo(props) {
  const [domLoaded, setDomLoaded] = useState(false)
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
  return (
    <div className="lg:mt-0 lg:pl-[30px] lg:pr-[60px] lg:shadow-none bg-white mt-[40px] p-[20px] rounded-lg overflow-hidden shadow-[3.24px_3.24px_8.09px_0px_rgba(0,0,0,0.10)]">
      <div className="relative mb-3">
          <div  className='relative right-[10px] bottom-[1px] z-0'><Image src={headCircle}></Image></div>
          <p className='text-[20px] absolute top-0 z-10 font-semibold'><span className='text-[#FF7A00] '>Who</span> is Mikka Mae U.?</p>
      </div>
        <div className='h-[2px] bg-[linear-gradient(90deg,_rgba(255,255,255,1)_0%,_rgba(136,136,136,0.3)_50%,_rgba(255,255,255,1)_100%)]'></div>
      <p className="text-[20px] font-semibold mt-5">
        Get to Know Mikka in Just 2 min
      </p>
      <p className="text-[12.5px] font-normal text-justify leading-4 mt-[20px]">
        {props.user?.videoPlaylist.description}
      </p>
      {domLoaded && (
        <div className="lg:px-[80px] mt-[20px] relative border-[3px] rounded-[20px] p-2 border-[#FF7A00]">
          <ReactPlayer
            url={props.user?.videoPlaylist.youtubeLink}
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
      )}
    </div>
  )
}