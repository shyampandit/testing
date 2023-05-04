import React from "react";
import useDownloader from "react-use-downloader";
  
export default function Aboutus() {
  const { size, elapsed, percentage, download,
        cancel, error, isInProgress } =
    useDownloader();
  
  const fileUrl = "https://rr1---sn-ab5sznzr.googlevideo.com/videoplayback?expire=1683201590&ei=1klTZPjiMrWX_9EP_tOWgAQ&ip=91.229.104.93&id=o-AEhB9tlgW4uJEDju_t-QMc1hUJfVNPAJqSt0ACrEZH_e&itag=18&source=youtube&requiressl=yes&spc=qEK7B0RG4AQfreBVOHo0tbjJtv-viak&vprv=1&svpuc=1&mime=video%2Fmp4&gir=yes&clen=478664970&ratebypass=yes&dur=19068.551&lmt=1682139593405776&fexp=24007246&c=ANDROID&txp=5438434&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Cgir%2Cclen%2Cratebypass%2Cdur%2Clmt&sig=AOq0QJ8wRgIhAO-cBFGc7AA6vbutkUSA9uSwDcAQBUTRUfFuvUDzwkwiAiEA8u2LQfup-DTdtgpnw859Y007JeLh9h-KaO1AwO6QSFs%3D&title=ChatGPT+Course+%E2%80%93+Use+The+OpenAI+API+to+Code+5+Projects&redirect_counter=1&rm=sn-gjo-w43s7l&req_id=c1986709e846a3ee&cms_redirect=yes&cmsv=e&ipbypass=yes&mh=6G&mm=29&mn=sn-ab5sznzr&ms=rdu&mt=1683200712&mv=m&mvi=1&pl=23&lsparams=ipbypass,mh,mm,mn,ms,mv,mvi,pl&lsig=AG3C_xAwRgIhAPrWCKN6kR6q5GTDUh_kHlevgvUgy40sQOJp2ZonpSPgAiEAg9vil-uJSuM9b48QTvBGIsk6BK183zE1hFzu-QZZUqk%3D";
  const filename = "File.pdf";
  
  return (
    <div className="App">
      <h3>GeeksforGeeks - File Downloader</h3>
      <p>Download is in {isInProgress ? 
        "in progress" : "stopped"}</p>
  
      <button onClick={() => download(fileUrl, filename)}>
        Click to download the file
      </button>
      <button onClick={() => cancel()}>
        Cancel the download
      </button>
      <p>Download size in bytes {size}</p>
  
      <label>Downloading progress:</label>
      <progress id="file" value={percentage} max="100" />
      <p>Elapsed time in seconds {elapsed}</p>
      {error && <p>possible error {JSON.stringify(error)}</p>}
    </div>
  );
}

