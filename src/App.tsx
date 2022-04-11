import React, { useEffect, useRef, useState } from 'react'
import logo from './logo.svg'
import { exerciseData } from 'data/exercises.js'
import Header from 'layout/Header'
import Footer from 'layout/Footer'

import { Routes, Route, Link } from 'react-router-dom'
import ExercisePage from 'pages/ExercisePage'
import HomePage from 'pages/HomePage'
import produce from 'immer'
import './App.css'
import { isAndroid, isIOS } from 'react-device-detect'

function App() {
  useEffect(() => {
    console.log('🚀 ~ useEffect ~ isAndroid', isAndroid)
    if (isAndroid) {
      // const url = 'intent://instagram.com/#Intent;scheme=https;package=com.instagram.android;end'
      const url =
        'intent://vcru.page.link/?link=https://vc.ru/finance/388706-strana-benzokolonka-i-drugie-rasprostranennye-predubezhdeniya-o-rossiyskoy-ekonomike&apn=ru.artrobot.siliconrus&amv=480&isi=920638420&ibi=com.siliconrus.app.Siliconrus&efr=1#Intent;package=com.google.android.gms;action=com.google.firebase.dynamiclinks.VIEW_DYNAMIC_LINK;scheme=https;S.browser_fallback_url=https://play.google.com/store/apps/details%3Fid%3Dru.artrobot.siliconrus&pcampaignid%3Dfdl_long&url%3Dhttps://vc.ru/finance/388706-strana-benzokolonka-i-drugie-rasprostranennye-predubezhdeniya-o-rossiyskoy-ekonomike&min_version%3D480;end'

      window.location.replace(url)
    } else if (isIOS) {
      window.location.replace('instagram://')

      setTimeout(() => {
        window.location.replace('https://apps.apple.com/us/app/instagram/id389801252')
      }, 10000)
    } else {
      window.location.replace('https://instagram.com')
    }
  }, [])
  return (
    <div className='page-wrapper'>
      {/* <Header /> */}
      <div>
        <div>If you have not been automatically redirected, click on the following link:</div>
        {isAndroid ? (
          <>
            {/*  <a href='intent://vcru.page.link/?link=https://vc.ru/finance/388706-strana-benzokolonka-i-drugie-rasprostranennye-predubezhdeniya-o-rossiyskoy-ekonomike&apn=ru.artrobot.siliconrus&amv=480&isi=920638420&ibi=com.siliconrus.app.Siliconrus&efr=1#Intent;package=com.google.android.gms;action=com.google.firebase.dynamiclinks.VIEW_DYNAMIC_LINK;scheme=https;S.browser_fallback_url=https://play.google.com/store/apps/details%3Fid%3Dru.artrobot.siliconrus&pcampaignid%3Dfdl_long&url%3Dhttps://vc.ru/finance/388706-strana-benzokolonka-i-drugie-rasprostranennye-predubezhdeniya-o-rossiyskoy-ekonomike&min_version%3D480;end'>
          </a> */}
            <a href='intent://www.instagram.com/profile/#Intent;package=com.instagram.android;scheme=https;end'>
              lalala
            </a>
          </>
        ) : isIOS ? (
          <a href='https://apps.apple.com/us/app/instagram/id389801252'>Open iOS app</a>
        ) : (
          <a href='https://instagram.com'>Open Web app</a>
        )}
      </div>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='exercise' element={<ExercisePage />}>
          <Route path=':exerciseId' element={<ExercisePage />} />
        </Route>
      </Routes>

      <Footer />
    </div>
  )
}

export default App
