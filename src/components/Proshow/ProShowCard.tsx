"use client"
import { ProShow } from "@/types/models"
import BuyProShowButton from "./BuyProShowButton"
import { useState } from "react"

const ProShowCard = ({ proshow , is_rec } : { proshow : ProShow , is_rec : boolean | undefined }) => {
  const [active, setActive] = useState(false)

    return (
        <div 
            onMouseOver={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
             className={`card card--purple  ${active && "active"}`}>
              <div className="card__outer text-black">
                <div className="card__inner">
                  <div className="rounded-md border-2 shadow-black h-full" key={proshow.id}>
                    <img
                      className="w-full rounded-t-md object-cover min-h-[240px] max-h-[240px]"
                      src={proshow.image}
                      alt="Event Image"
                    />
                    <div className="px-6 py-4">
                      <div className="font-bold text-xl mb-2">{proshow.name}</div>
                      <div className="flex my-4">
                        <div className="space-y-[5px]">
                          {/* 
                      ===========BUY PREMIUM BUTTON===========
                      Applies for both REC and Non-REC
                    */}
                          {proshow.premium && !proshow.combo && (
                            <BuyProShowButton
                              disabled={proshow.is_registered}
                              label="premium"
                              proshowid={proshow.id}
                            />
                          )}
                          {/* 
                      ===========BUY STANDARD BUTTON===========
                      Applies for only Non-REC
                    */}
                          {!is_rec && !proshow.premium && !proshow.combo && (
                            <BuyProShowButton
                              disabled={proshow.is_registered}
                              label="standard"
                              proshowid={proshow.id}
                            />
                          )}
                          {/* 
                      ===========BUY STANDARD COMBO BUTTON===========
                      Applies for both REC and Non-REC
                    */}
                          {!proshow.premium && proshow.combo && (
                            <BuyProShowButton
                              disabled={proshow.is_registered}
                              label="standard combo"
                              proshowid={proshow.id}
                            />
                          )}

                          {/* 
                      ===========BUY PREMIUM COMBO BUTTON===========
                      Applies for only Non-REC
                    */}
                          {!is_rec && proshow.premium && proshow.combo && (
                            <BuyProShowButton
                              disabled={proshow.is_registered}
                              label="premium combo"
                              proshowid={proshow.id}
                            />
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
    )
}
export default ProShowCard