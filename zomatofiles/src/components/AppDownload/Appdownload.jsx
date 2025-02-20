import React from 'react'
import './appdownload.css'
import { assets } from '../../assets/frontend_assets/assets'
const Appdownload = () => {
  return (
    <div className='appDownload' id='appDownload'>
      <div className="appDownloadText">
        <p>
          better exp
          <br />
          tomat
        </p>
        <div className="appDownloadPlatform">
          <img src={assets.play_store} alt="Play Store" />
          <img src={assets.app_store} alt="App Store" />
        </div>
      </div>
    </div>
  );
}

export default Appdownload