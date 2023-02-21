import React from "react";
import { Navbar,Bottonnavbar } from "../../components";
import "./index.css";
const Gallery = () => {
  return (
    <div>
      <Navbar />
      <img
        src="https://firebasestorage.googleapis.com/v0/b/admission-portal-11282.appspot.com/o/gallery-01-d30995af17bba58f064ed7249d00685f.jpg?alt=media&token=c6773f68-8987-4266-95b6-9c4ded5eca72"
        className="weblogo"
      />
      <div className="imagesdivmain">
        <div className="maindiv1">
          <div className="divimages1">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/galleryImages%2FIMG_5832.jpg?alt=media&token=e06bd1ab-9066-47fd-b4b1-adfc3e747632"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/galleryImages%2FIMG_5853%20(1).jpg?alt=media&token=48668b84-5535-46c8-b74d-1557462b69a2"
              alt=""
            />
            <img
              src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/galleryImages%2FIMG_5854.jpg?alt=media&token=1ca62af0-0b15-42ca-99b9-5c7e2c1fe8cc"
              alt=""
            />
          </div>
          <div className="divimages2">
            <img src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/galleryImages%2FIMG_5831%20(2).jpg?alt=media&token=6b2729c9-3bc4-42ef-9b37-38af035fb020" />
            <img src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/galleryImages%2FIMG_8835.JPG?alt=media&token=7defbbeb-9d05-4cab-a153-a398a8e6bced" />
            <img src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/galleryImages%2FIMG_8827.JPG?alt=media&token=d13c3394-dbaf-4699-aec8-b9d0c871e9dd" />
            <img src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/galleryImages%2FIMG_8842.JPG?alt=media&token=73221696-9485-44bf-927f-79cd3e45cee6" />
          </div>

          <div className="divimages1">
            <img src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/galleryImages%2F147498080_1730901517114534_6713739801458456446_n.jpg?alt=media&token=a22c7f54-3a48-42db-85bd-1da8880f05b4" />
            <img src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/galleryImages%2F147818465_1730901443781208_3137885788014591418_n.jpg?alt=media&token=3df58197-e219-4b30-ad73-71d3abe77a2a" />
            <img src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/galleryImages%2F148617233_1730406887163997_7994401144409602368_n.jpg?alt=media&token=6fad01f7-c09b-4bed-8fba-6dcadaee9768" />
          </div>

          <div className="divimages1">
            <img src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/galleryImages%2F148289522_1730402090497810_7111831905918331453_n.jpg?alt=media&token=143c764f-d97b-4902-ac3e-f4466bf91a92" />
            <img src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/galleryImages%2F148620814_1730901737114512_4751585123930087712_n.jpg?alt=media&token=4eebbe77-d3ab-4f92-bccb-4cab8362cc45" />
            <img src="https://firebasestorage.googleapis.com/v0/b/iskillers-portal.appspot.com/o/galleryImages%2F137281773_2571247606500827_2805958354999435439_n.jpg?alt=media&token=7d4174a0-adcb-4aaf-905a-fd1fac79b128" />
          </div>
        </div>
      </div>

      <Bottonnavbar />
    </div>
  );
};

export default Gallery;
