import { useNavigate } from "react-router-dom";
import "./PaymentFail.css";

const PaymentFail = () => {
  const navigate = useNavigate();
  return (
    <div className="pay">
      <div className="payment-fail-page">
        <div className="payment-fail-message">
          <div className="payment-fail-checkmark-container">
            <img
              src="https://drive.google.com/thumbnail?id=1zbHAKyLaa5pKLbLNWAJeajTvGuC-VPeX&sz=w1000"
              alt="checkmark"
              className="payment-fail-checkmark-img"
            />
          </div>
          <h1 className="payment-fail-heading">Thanh toán thất bại</h1>
          <p className="payment-fail-text">
            Quý khách không thể hoàn tất thanh toán
          </p>

          <p className="payment-fail-text">
            Mời quý khách vui lòng đặt hàng thử lại, xin cảm ơn.
          </p>
          <button
            className="payment-fail-continue-shopping-btn"
            onClick={() => navigate("/")}
          >
            Quay lại trang chủ
          </button>
        </div>
      </div>
    </div>
  );
};

export default PaymentFail;
