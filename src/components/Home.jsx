import React from 'react'
import HeaderComponent from './HeaderComponent/HeaderComponent'
import HeaderContent from './HeaderComponent/HeaderContent'
import FeatureSection from './PageBody/FeatureSection'
import Newsletter from './PageBody/Newsletter'
import Testimonials from './PageBody/Testimonials'
import TeamSections from './FooterComponents/TeamSections'
import LogoClouds from './FooterComponents/LogoClouds'
import DownloadComponent from './FooterComponents/DownloadComponent'


export default function Home() {
  return (
    <div>
        <HeaderComponent/>
        <HeaderContent/>
        <FeatureSection/>
        <Newsletter/>
        <Testimonials/>
        <TeamSections/>
        <LogoClouds/>
        <DownloadComponent/>
    </div>
  )
}
