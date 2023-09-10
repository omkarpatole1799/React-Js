import { Link } from "react-router-dom";

function OrderPlaced(props) {
  const date = new Date();
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return (
    <div className="bg-[#F8FAFC] rounded-3xl mt-4 ms-5 me-5 flex h-40 pe-4 drop-shadow-xl">
      <div className="w-full p-1 flex flex-col items-center justify-center">
		<h3 className="font-bold text-2xl">Thank You</h3>
        <p className="font-semibold text-lg">
          Order Placed on {`${day} / ${month} / ${year}`}
        </p>
        <p>
          You will recive your order on {`${day + 2} / ${month + 1} / ${year}`}
        </p>
        <Link to="/">
          <button
            onClick={props.onClick}
            className="mt-3 bg-[#111827] text-[#D1D7DC] ps-3 pe-3 pt-2 pb-2 rounded-3xl"
          >
            Go Shopping
          </button>
        </Link>
      </div>
    </div>
  );
}

export default OrderPlaced;
