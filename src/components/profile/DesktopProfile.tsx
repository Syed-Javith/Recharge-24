import { UserProfileSchema } from '@/types/models'
// import { GraduationCapIcon, MailIcon, PhoneCall, SchoolIcon } from 'lucide-react';
import React, { Dispatch, SetStateAction } from 'react'
import EditProfileForm from '../forms/EditProfileForm';

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
    // console.log(profile);
    
    return (
        <div className='profile-personal-detail'>
            <div className="container">
                <div className="logo"></div>
                <div className="description">
                    <div>
                        <div className='edit flex flex-row align-top'>
                            <div className='e-child mr-auto'>
                                <h1> {profile.first_name + " " + profile.last_name} </h1>
                                <h3> {profile.college} </h3>
                            </div>
                            <div className='e-child mr-auto'>
                                <EditProfileForm profile={profile} setProfile={setProfile}/>
                            </div>
                        </div>
                        <p className="bio flex md:flex-row sm:flex-col flex-wrap gap-4">
                            <div className='w-fit whitespace-nowrap'>{"Email : " + profile.email }</div>
                            <div className='w-fit whitespace-nowrap'>{" Mobile : " + profile.mobile_number}</div>
                            <div className='w-fit whitespace-nowrap'>{"Year Of Study : " + formatYear(profile.year) + " year "}</div>
                            <div className='w-fit whitespace-nowrap'>{"Proshows : " + profile.proshow_registrations.length }</div>
                            <div className='w-fit whitespace-nowrap'>{ "Events : " + profile.event_registrations.length}</div>
                        </p>
                    </div>
                    <img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code"/>
                </div>
            </div>
        </div>
    )
}

export default DesktopProfile
