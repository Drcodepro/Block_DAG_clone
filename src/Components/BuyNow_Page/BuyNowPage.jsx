import BuyCoin from "./BuyCoin_Section/BuyCoin"
import "./BuyNowPage.css"
import ReferralBonus from "./Referal_Bonus_Section/Referal_Bonus"
export default function BuyNowPage(){
    
    return(<div className="BuyNowPage_container">
      <BuyCoin/>
      <ReferralBonus/>
    </div>)
}