import { Card, Carousel } from "antd";
import Meta from "antd/es/card/Meta";

const TrangCaNhan = () => {
  return (
    <div className="">
      <div className="text-start text-slate-50">
        <h3 className="text-xl font-semibold py-3">GIỚI THIỆU</h3>
        <Card
        className="my-4"
        hoverable
        cover={
            <Carousel autoplay arrows autoplaySpeed={5000}>
            <div>
              <img
                src="https://photo.znews.vn/w960/Uploaded/sotnbn/2024_05_02/Thiet_ke_chua_co_ten_20.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://photo.znews.vn/w660/Uploaded/anqyy/2024_06_07/437167134_447381061018412_7856638869850372003_n.jpeg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://cattour.vn/images/upload/images/du-lich-nhat-ban/4-dia-diem-view-nui-phu-si-dep-nhat/view-nui-phu-si-tu-chua-Chureito.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                src="https://photo.znews.vn/w660/Uploaded/sotnbn/2024_05_07/Thiet_ke_chua_co_ten_13.jpg"
                alt=""
              />
            </div>
          </Carousel>
        }
      >
        <Meta
          title={"TÂM AN"}
          description={
            <>
              <p className="text-start py-2">
                {" "}
                Là lựa chọn hàng đầu trong việc đào tạo bằng lái xe. 
              </p>
              <p>Chúng tôi đã có hơn 10 năm kinh nghiệm đào tạo học viên</p>
              
            </>
          }
        />
      </Card>
      </div>

      <div className="text-start text-slate-50">
        <h3 className="text-xl font-semibold py-3">CÁC GÓI DỊCH VỤ</h3>
      </div>
      <Card
        className="my-4"
        hoverable
        cover={
          <img
            alt="example"
            src="https://hoclaixehcm.vn/wp-content/uploads/2018/11/kinh-nghiem-thi-bang-lai-xe-a1-1.jpg"
          />
        }
      >
        <Meta
          className="border-b border-solid border-inherit"
          title={<p className="text-center">Gói thi xe máy A1</p>}
          description={
            <>
              <p className="text-start py-2">
                {" "}
                <span className="text-red-500 font-medium">Gói Vip1:</span>{" "}
                <span className="font-bold">400k</span> (Hỗ trợ đào tạo LÝ
                THUYẾT hoặc THỰC HÀNH)
              </p>
              <p className="text-start py-2">
                {" "}
                <span className="text-red-500 font-medium">Gói Vip2:</span>{" "}
                <span className="font-bold">450k</span> (Hỗ trợ đào tạo cả LÝ
                THUYẾT và THỰC HÀNH)
              </p>
            </>
          }
        />
        <Meta
          title={
            <p className="text-center pt-3">Gói hỗ trợ nâng bằng xe máy A2</p>
          }
          description={
            <>
              <p className="text-start">
                {" "}
                Gói hỗ trợ lên hồ sơ : <span className="font-bold">1250k</span>
              </p>
            </>
          }
        />
      </Card>
      <Card
        className="my-4"
        hoverable
        cover={
          <img
            alt="example"
            src="https://suckhoedoisong.qltns.mediacdn.vn/324455921873985536/2023/7/10/bang-lai-xe-b2-thi-sa-hinh-16887517269371740986333-1688971656310-16889716565581645765969.jpeg"
          />
        }
      >
        <Meta
          title={<p className="text-center">Gói thi xe ô tô B1, B2</p>}
          description={
            <>
              <p className="text-start py-2">
                {" "}
                <span className="text-red-500 font-medium">Gói B1:</span>{" "}
                <span className="font-bold">17tr</span> (Hỗ trợ đào tạo LÝ
                THUYẾT hoặc THỰC HÀNH)
              </p>
              <p className="text-start py-2">
                {" "}
                <span className="text-red-500 font-medium">Gói B2:</span>{" "}
                <span className="font-bold">18tr</span>
              </p>
              <div className="pl-3 text-start">
                <p>- Phí hồ sơ</p>
                <p>- Phí khám sức khỏe</p>
                <p>- Phí học cabin</p>
                <p>- Phí thi chứng chỉ</p>
                <p>- Phí phic học thực hành 22h</p>
                <p>- Làm quen xe</p>
                <p>- Chạy DAT B1(710km), B2(810km)</p>
                <p>- Học sa hình</p>
                <p>- Công thầy xăng xe</p>
              </div>
            </>
          }
        />
      </Card>
    </div>
  );
};
export default TrangCaNhan;
