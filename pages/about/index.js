import React from "react";
import useDownloader from "react-use-downloader";
  
export default function Aboutus() {
  const { size, elapsed, percentage, download,
        cancel, error, isInProgress } =
    useDownloader();
  
  const fileUrl = "https://rr2---sn-gjo-w43s.googlevideo.com/videoplayback?expire=1683201590&amp;ei=1klTZPjiMrWX_9EP_tOWgAQ&amp;ip=91.229.104.93&amp;id=o-AEhB9tlgW4uJEDju_t-QMc1hUJfVNPAJqSt0ACrEZH_e&amp;itag=22&amp;source=youtube&amp;requiressl=yes&amp;mh=6G&amp;mm=31%2C29&amp;mn=sn-gjo-w43s%2Csn-ab5l6nrd&amp;ms=au%2Crdu&amp;mv=m&amp;mvi=2&amp;pcm2cms=yes&amp;pl=23&amp;initcwndbps=302500&amp;spc=qEK7B0RG4AQfreBVOHo0tbjJtv-viak&amp;vprv=1&amp;svpuc=1&amp;mime=video%2Fmp4&amp;cnr=14&amp;ratebypass=yes&amp;dur=19068.551&amp;lmt=1682139388374395&amp;mt=1683179580&amp;fvip=3&amp;fexp=24007246&amp;c=ANDROID&amp;txp=5432434&amp;sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cspc%2Cvprv%2Csvpuc%2Cmime%2Ccnr%2Cratebypass%2Cdur%2Clmt&amp;sig=AOq0QJ8wRQIgbHBcI5gRKbq9yhaA_waKPLSPekPKPGfv_FnR-Wh8qQQCIQD7S2rqWXTvXJ3c4GCwOAY3zPzo8D-WQXazxYbaM3S2aw%3D%3D&amp;lsparams=mh%2Cmm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpcm2cms%2Cpl%2Cinitcwndbps&amp;lsig=AG3C_xAwRQIhAPMi3QSgHgusCiLqeh7BV_-bs4i_fkjAbatt518QsyPkAiBBmOdSOQJ-UBKsaqcsLyvhMW1mUDQ14NXa3rUnfdLt5A%3D%3D&amp;title=ChatGPT+Course+–+Use+The+OpenAI+API+to+Code+5+Projects";
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

