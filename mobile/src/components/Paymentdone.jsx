import { useNavigate } from "react-router-dom";

export const Paymentdone = () => {
   
  const navigate = useNavigate()
    return(
        <div className="paySuccess">
            <img src="http://www.shikharclasses.in/wp-content/uploads/2020/04/PAYMENT-SUCCESS.png" alt="" height="100%" width="100%" />
        
        </div>
    )
}