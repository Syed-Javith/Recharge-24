import { UserProfileSchema } from '@/types/models'
import React, { Dispatch, SetStateAction } from 'react'
import EditProfileForm from '../forms/EditProfileForm';
import Style from "./profile.module.css"
import localFont from 'next/font/local'

const SketchFont = localFont({ src: '../../../public/fonts/chakra.ttf' });

const DesktopProfile = ({ profile , setProfile } : { profile : UserProfileSchema , setProfile : Dispatch<SetStateAction<UserProfileSchema | undefined>> }) => {

    const formatYear = (year : number | null | undefined) => {
        if(year==1){
            return "1st "
        }
        if(year==2){
            return "2nd"
        }
        if(year == 3){
            return "3rd"
        }
        if(year == 4 || year == 5){
            return `${year}th`
        }
        return `${year}th standard`
    }
    
    return (
        <div className={`${Style.profilePersonalDetail}`}>
            <div className={`${Style.container}`}>
                {/* <div className={`${Style.logo}`}></div> */}
                <div className={`${Style.description}`}>
                    <div>
                        <div className={`${Style.edit} flex flex-row align-top`}>
                            <div className={`${Style.eChild} mr-auto`}>
                                <h1 className={`${SketchFont.className}`}> {profile.first_name + " " + profile.last_name} </h1>
                            </div>
                            <div className={`${Style.eChild} mr-8`}>
                                <EditProfileForm profile={profile} setProfile={setProfile}/>
                            </div>
                        </div>
                                <h3> {profile.college } </h3>
                        <p className={`${Style.bio} flex md:flex-row sm:flex-col flex-wrap gap-4`}>
                            <div className='w-fit whitespace-nowrap'><span className='font-bold'>Email :</span> { profile.email }</div>
                            <div className='w-fit whitespace-nowrap'> <span className='font-bold'>Mobile : </span>{profile.mobile_number}</div>
                            <div className='w-fit whitespace-nowrap'><span className='font-bold'>Year Of Study : </span>{ formatYear(profile.year) + " year "}</div>
                            <div className='w-fit whitespace-nowrap'> <span className='font-bold'>Proshows : </span> {profile.proshow_registrations.length }</div>
                            <div className='w-fit whitespace-nowrap'><span className='font-bold'>Events : </span>{ profile.event_registrations.length}</div>
                        </p>
                    </div>
                    <img src="https://user-images.githubusercontent.com/9884985/60099529-1fec3200-9758-11e9-99f1-2a1e72c9a3bc.png" alt="QR code"/>
                </div>
            </div>
        </div>
    )
}

export default DesktopProfile
