import React from "react";
import ('../blocks/loader/loader.css')

export function Loader({isLoader}){

  return(
      <div className={`loader ${isLoader && 'loader__show'}`}>
        <div className="loader__wrapper">
          <div className="loader__animated">
            <img src="https://pictures.s3.yandex.net/animation_topic/star_1.svg" alt="svg star"
                 className="star star_size_s" />
              <img src="https://pictures.s3.yandex.net/animation_topic/star_2.svg" alt="svg star"
                   className="star star_size_m" />
                <img src="https://pictures.s3.yandex.net/animation_topic/star_3.svg" alt="svg star"
                     className="star star_size_l" />
                  <img src="https://pictures.s3.yandex.net/animation_topic/dots_1.svg" alt="svg dots"
                       className="dots dots_size_s" />
                    <img src="https://pictures.s3.yandex.net/animation_topic/dots_2.svg" alt="svg dots"
                         className="dots dots_size_m" />
                      <img src="https://pictures.s3.yandex.net/animation_topic/dots_3.svg" alt="svg dots"
                           className="dots dots_size_l" />
          </div>
        </div>
        <p className="loader__text">Loading...</p>
      </div>
  )
}
