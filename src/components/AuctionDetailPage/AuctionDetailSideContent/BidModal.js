const BidModal = ({onBidSubmitted,onBidChanged}) => {
    return (
      <div id="modal-bid" className="zoom-anim-dialog mfp-hide modal modal--form">
        <button className="modal__close" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M13.41,12l4.3-4.29a1,1,0,1,0-1.42-1.42L12,10.59,7.71,6.29A1,1,0,0,0,6.29,7.71L10.59,12l-4.3,4.29a1,1,0,0,0,0,1.42,1,1,0,0,0,1.42,0L12,13.41l4.29,4.3a1,1,0,0,0,1.42,0,1,1,0,0,0,0-1.42Z"/></svg></button>
  
        <h4 className="sign__title">Place a bid</h4>
  
        <div className="sign__group sign__group--row">
          <label className="sign__label" for="placebid">Your bid</label>
          <input 
            onChange={(e) => onBidChanged(e.target.value)}
            id="placebid" 
            type="text" 
            name="placebid" 
            className="sign__input"/>
  
          <span className="sign__text sign__text--small">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour.</span>
        </div>
  
        <button 
          onClick={onBidSubmitted} 
          className="sign__btn" type="button">
          Take a bid
          </button>
        </div>
    );
}

export default BidModal;