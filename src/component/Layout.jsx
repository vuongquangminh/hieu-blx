import { Tabs } from "antd";
import React from "react";
import TrangCaNhan from "./Profile/TrangCaNhan";
import Feedback from "./Profile/Feedback";
import LienHe from "./Profile/LienHe";

const ProfileCard = () => {
  const items = [
    {
      key: "1",
      label: <p className="font-bold">Trang cá nhân</p>,
      children: <TrangCaNhan />,
    },
    {
      key: "2",
      label: <p className="font-bold">Feedback</p>,
      children: <Feedback />,
    },
    {
      key: "3",
      label: <p className="font-bold">Liên hệ</p>,
      children: <LienHe />,
    },
  ];
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="max-w-sm content">
      <div class="flex flex-col items-center">
        <div className="w-60 ">
          {/* <img className="w-full rounded-3xl drop-shadow-md" src="https://photo.znews.vn/w960/Uploaded/sotnbn/2024_05_02/Thiet_ke_chua_co_ten_20.jpg" alt="" /> */}
          <img
            style={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, " +
                "rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, " +
                "rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
            className="w-full rounded-3xl"
            src="https://photo.znews.vn/w960/Uploaded/sotnbn/2024_05_02/Thiet_ke_chua_co_ten_20.jpg"
            alt=""
          />
        </div>
        <div className="font-bold text-3xl py-3">Thế Hiếu</div>
        <p>Nhận hồ sơ thi bằng lái xe loại A1,A2,B1,B2</p>
      </div>
      <div className="text-white">
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
      </div>
    </div>
  );
};

export default ProfileCard;
