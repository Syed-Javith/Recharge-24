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
    console.log(profile);
    
    return (
        <div className='profile-personal-detail'>
            <div className="container">
                <div className="logo"></div>
                <div className="description">
                    <div>
                        <h1> {profile.first_name + " " + profile.last_name} </h1>
                        <h3> {profile.college + " | " + profile.department} </h3>
                        <p className="bio">
                            {"Email : " + profile.email + " | Mobile : " + profile.mobile_number}<br />
                            {"Year Of Study : " + formatYear(profile.year) + " year | Proshows : " + profile.proshow_registrations.length + " | Events : " + profile.event_registrations.length}
                        </p>
                    </div>
                    <img src="https://external-preview.redd.it/cg8k976AV52mDvDb5jDVJABPrSZ3tpi1aXhPjgcDTbw.png?auto=webp&s=1c205ba303c1fa0370b813ea83b9e1bddb7215eb" alt="QR code"/>
                </div>
            </div>
        </div>
        // <div className="layout">
        //     <div className="profile md:w-[90vw] p-[20px] w-screen max-[500px]:p-[10px] max-[500px]:m-[5px]">

        //         <div className="profile__picture bg-[#0f1323]">
        //             <div className='text-center text-3xl font-bold m-auto'>
        //                 {profile.first_name[0] + profile.last_name[0]}
        //             </div>
        //         </div>

        //         <div className="profile__header items-start">
        //             <div className="profile__account">
        //                 <h4 className="profile__username">{profile.first_name + " " + profile.last_name}</h4>
        //             </div>

        //             <div className="profile__edit">
                        
        //                     <EditProfileForm profile={profile} setProfile={setProfile} />
                       
        //             </div>
        //         </div>

        //         <div className='flex md:flex-row flex-col gap-4'>
        //             <div className='flex flex-col gap-4'>
        //                  <div className='flex gap-2'>
        //                     <MailIcon />  {profile.email}
        //                  </div>
        //                  <div className='flex gap-2'>
        //                     <PhoneCall/> {profile.mobile_number}
        //                  </div>
        //             </div>
        //             <div className='flex flex-col md:ml-auto ml-0 gap-4'>
        //                 <div className='flex gap-2'>
        //                     <SchoolIcon /> {profile.college}
        //                 </div>
        //                 <div className='flex gap-2'>
        //                    <GraduationCapIcon /> {formatYear(profile.year)} year
        //                 </div>
        //             </div>
        //         </div>

        //     </div>
        // </div>
    )
}

export default DesktopProfile
