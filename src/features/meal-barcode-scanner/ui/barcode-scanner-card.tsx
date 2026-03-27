import "./barcode-scanner-card.css";

import { ScanBarcode } from "lucide-react";

interface Props {
  onClick: () => void;
}

export const BarcodeScannerCard = (props: Props) => {
  return (
    <div className="barcode-scanner-card">
      <button className="barcode-scanner-card__button" onClick={props.onClick}>
        <div className="barcode-scanner-card__placeholder">
          <ScanBarcode size={80} strokeWidth={1}/>
          <p>Натисніть, щоб сканувати</p>
        </div>
      </button>
    </div>
  );
};
